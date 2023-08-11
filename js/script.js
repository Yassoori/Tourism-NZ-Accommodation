// Declarations

// -------- Landing --------

const landingModal = document.getElementById("landing-modal");
const closeButton = document.querySelector(".close-button");
const content = document.getElementById("content");

// -------- Datepicker --------

const startDate = document.getElementById("start-date");
const endDate = document.getElementById("end-date");
const dateStatus = document.getElementById("date-status");
const stayValidation = document.getElementById("stay-validation");

// -------- Guests --------

const decrementBtn = document.getElementById("decrement-button");
const incrementBtn = document.getElementById("increment-button");
const guestsInput = document.getElementById("guests");

// -------- Search -------
const searchButton = document.getElementById("search-button");
const searchbar = document.getElementsByClassName("centered-content");

// -------- Others --------

const accommodationsContainer = document.getElementById(
  "accommodations-container"
);
const moreInfoModal = document.getElementById("more-info-modal");
const backButton = document.getElementById("back-button");
const statusMessage = document.getElementById("status-message");

let activeAccommodationIndex;

// End Declarations

// -------- Landing --------

function openModal() {
  landingModal.style.display = "flex";
  content.style.display = "none";
}

function closeModal() {
  landingModal.style.display = "none";
  content.style.display = "flex";
}

closeButton.addEventListener("click", closeModal);

window.addEventListener("DOMContentLoaded", openModal);

// -------- Guests --------

decrementBtn.addEventListener("click", () => {
  let value = parseInt(guestsInput.value);
  if (value > 1) {
    value--;
    guestsInput.value = value;
  }
});

incrementBtn.addEventListener("click", () => {
  let value = parseInt(guestsInput.value);
  value++;
  guestsInput.value = value;
});

// -------- Datepicker --------

const datepickerContainer = document.getElementById("custom-datepicker");

const rangepicker = new DateRangePicker(datepickerContainer, {
  format: "dd/mm/yyyy",
});

function handleDateChange() {
  let dates = rangepicker.getDates();
  let difference = dates[1].getTime() - dates[0].getTime();
  let totalDays = Math.ceil(difference / (1000 * 3600 * 24));
  if (totalDays > 0) {
    dateStatus.classList.add("active");
    dateStatus.innerHTML = `Length of stay: ${totalDays}`;
  }
  if (totalDays > 15) {
    stayValidation.innerHTML = `We're sorry but that stay is too long!`;
  }
}

startDate.addEventListener("changeDate", handleDateChange);
endDate.addEventListener("changeDate", handleDateChange);

// -------- Filter --------

function validateData(guests, totalDays) {
  if (guests === "" || totalDays === "") {
    statusMessage.innerHTML = "Please enter both fields.";
    return false;
  } else {
    statusMessage.innerHTML = "";
    return true;
  }
}

function addInfoButton() {
  console.log("addInfoButton Function");
}

function displayAccommodations(place, totalDays) {
  accommodationsContainer.innerHTML = "";
  if (place.length > 0) {
    for (let i = 0; i < place.length; i++) {
      let accommodation = place[i];
      const totalCost = guests * accommodation.price;

      accommodationsContainer.innerHTML += `
        <div class="search-item-tile">
            <h2>${accommodation.title}</h2>
            <div class="swiper-container">
                <div class="swiper-wrapper">
                ${accommodation.gallery
                  .map(
                    (image) =>
                      `<div class="swiper-slide">
                        <img src="${image}" alt=""/>
                    </div>`
                  )
                  .join("")}
                </div>
                <div class="swiper-button-next swiper-button-next-${i}"></div>
                <div class="swiper-button-prev swiper-button-prev-${i}"></div>
            </div>                    
            <div class="info-summary">
                <div class="tile-left">
                  <p class="tile-guests">${accommodation.guest_range} Guests</p>
                  <img src="${accommodation.amenities_bed_icon}" alt=""/>
                  <img src="${accommodation.amenities_extra_icon}" alt=""/>
                </div> 
                <div class="tile-right">
                  <div class="tile-rating-star">
                    <p class="tile-rating">${accommodation.rating}</p>
                    <img src="/media/star.png" alt="" class="star" />
                  </div>
                  <p class="nightly-price" value="test">$${
                    accommodation.price
                  } a night</p>
                </div>               
            </div>
            <div class="info-button" id="info-button" >
              <h2 class="tile-price">$${
                accommodation.price * totalDays
              } total</h2> 
            </div>
        </div>
        `;
    }

    const swiperContainers =
      accommodationsContainer.querySelectorAll(".swiper-container");

    swiperContainers.forEach((swiperContainer, index) => {
      const swiper = new Swiper(swiperContainer, {
        slidesPerView: 1,
        spaceBetween: 0,
        navigation: {
          nextEl: `.swiper-button-next-${index}`,
          prevEl: `.swiper-button-prev-${index}`,
        },
        loop: true,
      });
    });

    const infoButtons =
      accommodationsContainer.querySelectorAll(".info-button");
    infoButtons.forEach((infoButton, index) => {
      infoButton.addEventListener("click", () => {
        const accommodation = place[index];
        activeAccommodationIndex = index;
        moreInfoModal.innerHTML = `
          <div id="more-info-content">
            <div class="info-left">
              <div class="mapbox-container">PRETEND THIS IS MAPBOX STUFF</div>
              <form id="contact-form" class="contact_form">          
                <input type="text" name="sendername" class="contactform-input" id="sender" placeholder="Your name" value="" required>                                
                <input type="text" name="mail" class="contactform-input" id="email" placeholder="Your Email" value="" required>                                
                <textarea rows="6" name="query" cols="40" class="contactform-input  textarea" id="query" placeholder="Your query" value="" required>
                </textarea>                
                <button id="send" >Send</button>                
              </form>
              <p id="sent"></p>
            </div>
            <div class="info-right">
              <div class="swiper-container" id="modal-swiper-${index}"> 
                <div class="swiper-wrapper">
                  ${accommodation.gallery
                    .map(
                      (image) => `
                          <div class="swiper-slide">
                            <img src="${image}" alt="" class="info-img"/>
                          </div>
                        `
                    )
                    .join("")}
                </div>
                <div class="swiper-button-next swiper-button-next-${index}"></div>
                <div class="swiper-button-prev swiper-button-prev-${index}"></div>
              </div>
              <div>
              <div class="title-rating">
                <h2>${accommodation.title}</h2>
                <div class="rating-star">
                  <p class="rating">${accommodation.rating}</p>
                  <img src="/media/star.png" alt="" class="star" />
                </div>
              </div>
              <div class="more-info-details">
                <p>${accommodation.amenities}</p>
                <p>
                  ${accommodation.guest_range} Guests
                </p>
                <div>
                  <p>${accommodation.blurb}</p>
                </div>
                <div>
                  <p>$${accommodation.price} a night</p>
                  <div id="addon-container">
                  <label class="addon-label">+ ${accommodation.meals} for $${
          accommodation.meal_price
        }
                    <input type="checkbox" class="addon" id="meals" onchange="addMeals()">
                    <span ></span>
                  </label>
                  <label class="addon-label">+ Shuttle from Queenstown for $35
                    <input type="checkbox" class="addon" id="transport" onchange="addTransport()">
                    <span ></span>
                  </label>
                  </div>
                </div>
              </div>
              <h3 id="more-info-price">$${
                accommodation.price * totalDays
              } total</h3>
              </div>
            </div>
            <div id="back-button">X</div>

          </div>
        `;
        moreInfoModal.style.display = "block";
        content.style.display = "none";
        const backButton = document.getElementById("back-button");
        backButton.addEventListener("click", () => {
          moreInfoModal.style.display = "none";
          content.style.display = "flex";
        });

        const modalSwiper = new Swiper(`#modal-swiper-${index}`, {
          slidesPerView: 1,
          spaceBetween: 0,
          navigation: {
            nextEl: `.swiper-button-next-${index}`,
            prevEl: `.swiper-button-prev-${index}`,
          },
          loop: true,
        });

        // const addon = document.getElementById("addon");
        // const meals = document.getElementById("meals");
        // const transport = document.getElementById("transport");
        // const moreInfoPrice = document.getElementById("more-info-price");

        // function updateTotalPrice(accommodation, totalDays) {
        //   const mealsCheckbox = document.getElementById("meals");
        //   const transportCheckbox = document.getElementById("transport");
        //   const moreInfoPrice = document.getElementById("more-info-price");

        //   let totalPrice = accommodation.price * totalDays;

        //   if (mealsCheckbox.checked) {
        //     totalPrice += accommodation.meal_price * totalDays;
        //   }

        //   if (transportCheckbox.checked) {
        //     totalPrice += 35;
        //   }

        //   moreInfoPrice.textContent = `$${totalPrice} total`;
        // }

        // function addMeals() {
        //   const accommodation = accommodations[activeAccommodationIndex];
        //   const totalDays = parseInt(dateStatus.innerText.split(":")[1].trim());
        //   updateTotalPrice(accommodation, totalDays);
        // }

        // function addTransport() {
        //   const accommodation = accommodations[activeAccommodationIndex];
        //   const totalDays = parseInt(dateStatus.innerText.split(":")[1].trim());
        //   updateTotalPrice(accommodation, totalDays);
        // }

        const contactFormInput =
          document.querySelectorAll(".contactform-input");
        const email = document.getElementById("email");
        const sender = document.getElementById("sender");
        const query = document.getElementById("query");
        const send = document.getElementById("send");
        const sent = document.getElementById("sent");
        send.addEventListener("click", (e) => {
          e.preventDefault();
          if (email.value == "" || sender.value == "" || query.value == "") {
            sent.innerHTML = `Fill in all fields`;
          } else {
            console.log(email.value, sender.value, query.value);
            document.querySelectorAll(".contactform-input").value = "";
            sent.innerHTML = `Sent`;
          }
        });
      });
    });
  } else {
    statusMessage.innerHTML = `Sorry, there's nothing avaliable`;
  }
}

function findAccommodations(guests, totalDays) {
  accommodationsContainer.innerHTML = "";
  let accommodationsToShow = [];
  for (let i = 0; i < accommodations.length; i++) {
    let accommodation = accommodations[i];
    if (
      guests >= accommodation.min_guests &&
      guests <= accommodation.max_guests &&
      totalDays >= accommodation.min_days &&
      totalDays <= accommodation.max_days
    ) {
      accommodationsToShow.push(accommodation);
    }
  }
  displayAccommodations(accommodationsToShow, totalDays);
}

searchButton.addEventListener("click", function (event) {
  event.preventDefault();
  let guests = parseInt(guestsInput.value);
  let totalDays = parseInt(dateStatus.innerText.split(":")[1].trim());
  let validated = validateData(guests, totalDays);
  if (validated) {
    findAccommodations(guests, totalDays);
  }
});
