// Declarations

// -------- Landing Modal --------

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

// -------- others --------

const accommodationsContainer = document.getElementById(
  "accommodations-container"
);
const moreInfoModal = document.getElementById("more-info-modal");
const moreInfoModalContent = document.getElementById("more-info-modal-content");
const backButton = document.getElementById("back-button");
const statusMessage = document.getElementById("status-message");

// -------- Search Button -------
const searchButton = document.getElementById("search-button");

// -------- Data --------

// const accommodations = [
//   {
//     id: 0,
//     title: "EcoScapes",
//     location: "",
//     gallery: [
//       "https://ecoscapes.nz/wp-content/uploads/2017/02/IMG_3715-1030x663.jpg",
//       "https://ecoscapes.nz/wp-content/uploads/2022/06/rsz_1ecoscapes-212-1030x733.jpg",
//       "https://ecoscapes.nz/wp-content/uploads/2018/05/McLennan_KinlochLodge_042-1030x687.jpg",
//     ],
//     rating: "4.7",
//     guest_range: "1-2",
//     min_guests: "1",
//     max_guests: "2",
//     amenities: "1 - 2 Beds, Bathroom, Projector, Verandah",
//     ameneties_bed_icon:
//       "/Users/yousifsaeed/Desktop/yasser yoobee/term 2/Summative 2/yasser saeed summative 2/media/icons8-two-beds-100.png",
//     blurb: `Our two guest units, Mohua and Kea, provide stunning environmentally friendly and luxurious lakeside accommodation and are designed to showcase the spectacular view of the top of Lake Whakatipu.

//       Relax and unwind while you appreciate the ever-changing view, serenity, and wilderness of Kinloch.

//       Our Ecoscapes are designed to an R7 architectural level meaning you have ultimate temperature control and comfort.  Ceramic air control for heating, cooling and air circulation means the best possible internal environment.`,
//     meals: "Breakfast",
//     price: "157",
//     min_days: "1",
//     max_days: "5",
//   },
//   {
//     id: 1,
//     title: "Mount Earnslaw Motels",
//     location: "",
//     gallery: [
//       "https://i0.wp.com/jacekproniewicz.com/wp-content/uploads/2017/04/new-zelland-7.jpg?ssl=1",
//       "https://allhotels.co.nz/wp-content/uploads/2016/07/Mount-Earnslaw-Motels-2-1024x679.jpg",
//       "https://allhotels.co.nz/wp-content/uploads/2016/07/Mount-Earnslaw-Motels-1.jpg",
//     ],
//     rating: "3",
//     guest_range: "2-4",
//     min_guests: "2",
//     max_guests: "4",
//     amenities: "2 - 3 Beds, Bathroom, Projector, Verandah",
//     amenities_bed_icon:
//       "/Users/yousifsaeed/Desktop/yasser yoobee/term 2/Summative 2/yasser saeed summative 2/media/icons8-four-beds-100.png",
//     amenities_extra_icon: "",
//     blurb: `Our suites offer you the choice of super king-size, queen or single beds to ensure a great night's sleep. The fully equipped kitchen also have complimentary tea and coffee. Each suite has an ensuite bathroom, free-to-air satellite TV, La-Z-Boy chairs and heat pump air-conditioning for your comfort. Another feature our visitors appreciate, are double-glazed windows and thick concrete slab walls to ensure there is minimal noise transference between suites.

//       Free unlimited WiFi is provided. Laundry facilities are also available. Suites are all serviced daily as required. Please book your sauna ahead of time on check-in for a nominal fee. Spa facilities are in progress – please inquire on availability.`,
//     meals: "no meals",
//     price: "90",
//     min_days: "1",
//     max_days: "10",
//   },
//   {
//     id: 2,
//     title: "Greenstone Homestead",
//     location: "",
//     gallery: [
//       "https://static.wixstatic.com/media/49b47f_f2891648040446de9aaa7dfc2ea2523f~mv2.jpg/v1/fit/w_851,h_683,q_90/49b47f_f2891648040446de9aaa7dfc2ea2523f~mv2.webp",
//       "https://static.wixstatic.com/media/49b47f_1181b820a5f24666b59e74779632d53e~mv2.jpg/v1/fit/w_851,h_683,q_90/49b47f_1181b820a5f24666b59e74779632d53e~mv2.webp",
//       "https://static.wixstatic.com/media/49b47f_e4c9b975b6bb47f58ff8041d6a7e0feb~mv2.jpg/v1/fit/w_851,h_683,q_90/49b47f_e4c9b975b6bb47f58ff8041d6a7e0feb~mv2.webp",
//     ],
//     rating: "3",
//     guest_range: "1",
//     min_guests: "1",
//     max_guests: "1",
//     amenities:
//       "Shared Bathrooms, Kitchen and Laundry. Bikes, fishing and recreational equipment available for your use",
//     ameneties_bed_icon:
//       "/Users/yousifsaeed/Desktop/yasser yoobee/term 2/Summative 2/yasser saeed summative 2/media/icons8-empty-bed-100.png",
//     amenities_extra_icon:
//       "../yasser saeed summative 2/media/icons8-electric-stovetop-100.png",
//     blurb: `The Greenstone Station Homestead was originally built in 1910 and has recently been renovated to bring it into the modern age while retaining it's rustic charm.

//       Located in a picturesque setting on the edge of Lake Wakatipu at the outlet of the Greenstone river, the Homestead offers the experience of being part of a working farm, a private retreat away from the hustle and bustle of Queenstown and on the doorstep of a range of outdoor activities.`,
//     meals: "Breakfast and Dinner",
//     price: "30",
//     min_days: "3",
//     max_days: "10",
//   },
//   {
//     id: 3,
//     title: "Lodge Lorien",
//     location: "",
//     gallery: [
//       "https://a0.muscache.com/im/pictures/miso/Hosting-759567286634359940/original/30977d92-5f90-493e-9ba3-8524133fe95b.jpeg?im_w=1200",
//       "https://a0.muscache.com/im/pictures/miso/Hosting-759567286634359940/original/6c2bf466-e86c-4321-a4f9-0756454fe102.jpeg?im_w=1200",
//       "https://a0.muscache.com/im/pictures/miso/Hosting-759567286634359940/original/66acf1d1-49d4-49f9-97ef-a42c6a7030b9.jpeg?im_w=1200",
//     ],
//     rating: "5",
//     guest_range: "1-4",
//     min_guests: "1",
//     max_guests: "4",
//     amenities:
//       "4 bedrooms, 4 bathrooms, a kitchen, a hot tub, a dedicated workspace and lake access",
//     ameneties_bed_icon:
//       "/Users/yousifsaeed/Desktop/yasser yoobee/term 2/Summative 2/yasser saeed summative 2/media/icons8-four-beds-100.png",
//     amenities_extra_icon:
//       "/Users/yousifsaeed/Desktop/yasser yoobee/term 2/Summative 2/yasser saeed summative 2/media/icons8-electric-stovetop-100.png",
//     blurb: `Tranquility and privacy are assured at this magnificent luxury villa on the South Island, New Zealand. Lodge Lorien is a stunning, contemporary, executive residence overlooking Lake Whakatipu and the breathtaking Humboldt Mountains. Situated a short drive from the town of Glenorchy and only a 45 minute drive from Queenstown International Airport, the area is a natural wonderland offering the ultimate in adventure & relaxation. Visit Lodge Lorien and experience the real heart of New Zealand.`,
//     meals: "Breakfast, Lunch and Dinner",
//     price: "240",
//     min_days: "2",
//     max_days: "15",
//   },
// ];

// End Declarations

// -------- Landing Modal --------

// Function to open the modal
function openModal() {
  landingModal.style.display = "flex";
  content.style.display = "none";
}

// Function to close the modal
function closeModal() {
  landingModal.style.display = "none";
  content.style.display = "flex";
}

// Event listener for the close button
closeButton.addEventListener("click", closeModal);

// Open the modal when the page is loaded
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

// initialise datepicker
const datepickerContainer = document.getElementById("custom-datepicker");

const rangepicker = new DateRangePicker(datepickerContainer, {
  // config
  format: "dd/mm/yyyy",
});

function handleDateChange() {
  // get dates from date picker
  let dates = rangepicker.getDates();
  // calculate difference between the dates
  let difference = dates[1].getTime() - dates[0].getTime();
  // convert to number of days
  let totalDays = Math.ceil(difference / (1000 * 3600 * 24));
  // display date diff
  if (totalDays > 0) {
    console.log(totalDays);
    dateStatus.classList.add("active");
    dateStatus.innerHTML = `Length of stay: ${totalDays}`;
  }
  if (totalDays > 15) {
    stayValidation.innerHTML = `We're sorry but that stay is too long!`;
  }
}

// check if a date has been changed
startDate.addEventListener("changeDate", handleDateChange);
endDate.addEventListener("changeDate", handleDateChange);

// -------- Fixed it like the Party Planner lesson --------

// function validateData(userdata) {
//   if (userdata.guests === "" || userdata.totalDays === "") {
//     statusMessage.innerHTML = "Please enter both fields.";
//     return false;
//   } else {
//     statusMessage.innerHTML = "";
//     return true;
//   }
// }

function validateData(guests, totalDays) {
  if (guests === "" || totalDays === "") {
    statusMessage.innerHTML = "Please enter both fields.";
    return false;
  } else {
    statusMessage.innerHTML = "";
    return true;
  }
}

function displayAccommodations(place) {
  accommodationsContainer.innerHTML = "";
  if (0 < accommodations.length) {
    for (let i = 0; i < place.length; i++) {
      let accommodation = accommodations[i];
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
                    <div class="swiper-pagination"></div>
                    <div class="swiper-button-next"></div>
                    <div class="swiper-button-prev"></div>
                </div>
            </div>                    
            <div class="info-summary">
                <h4>${accommodation.location}</h4>
                <p>${accommodation.guest_range} Guests</p>
                <span><img src="${accommodation.amenities_bed_icon}"/></span>
                <span><img src="${accommodation.amenities_extra_icon}"/></span>
                <p class="rating">${accommodation.rating}</p>
                <p>${accommodation.meals} available</p>                
                <div class="more-info-button" id="info-button" >
                <h3 class="total-cost">$${
                  accommodation.price * accommodation.price
                }</h3>
                <h2 class="tile-price" value="test">$${
                  accommodation.price
                } a night</h3>
                </div>
            </div>
        </div>
        `;
    }
  } else {
    statusMessage.innerHTML = `Sorry, there's nothing avaliable`;
  }
}

function findAccommodations(guests, totalDays) {
  accommodationsContainer.innerHTML = "";
  let accommodationsToShow = [];
  for (let i = 0; i < accommodations.length; i++) {
    let accommodation = accommodations[i];
    // let totalCost = guests * accommodation.price;

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

searchButton.addEventListener("click", function () {
  event.preventDefault();
  // let userdata = {
  //   guests: parseInt(guestsInput.value)
  // };
  let guests = parseInt(guestsInput.value);
  let totalDays = parseInt(dateStatus.innerText.split(":")[1].trim());
  console.log(`22222 ${guests},${totalDays}`);
  // console.log(`11111 ${guests}, ${totalDays}`);
  // let validated = validateData(userdata);
  let validated = validateData(guests, totalDays);
  if (validated) {
    // findAccommodations(userdata);
    findAccommodations(guests, totalDays);
  }
});

// -------- Swiper & AOS --------

// start our animation library (AOS)
// AOS.init();

// function showInfoModal(
//   title,
//   image,
//   location,
//   guest_range,
//   amenities,
//   blurb,
//   meals,
//   rating,
//   price
// ) {
//   moreInfoModalContent.innerHTML = `
//         <div id="more-info">
//           <h2>${title}</h2>
//           <div class="swiper-container">
//             <div class="swiper-wrapper">
//               $
//               {accommodation.gallery
//                 .map(
//                   (image) =>
//                     <div class="swiper-slide">
//                       <img src="${image}" alt=""/>
//                     </div>
//                 )
//                 .join("")}
//             </div>
//             <div class="swiper-pagination"></div>
//             <div class="swiper-button-next"></div>
//             <div class="swiper-button-prev"></div>
//           </div>
//           <div class="more-info">
//             <h4>${location}</h4>
//             <p>
//               ${guest_range} Guests ${amenities}
//             </p>
//             <div>
//               <p>${blurb}</p>
//               <p>${meals} available</p>
//             </div>
//           </div>
//           <div class="rating">${rating}</div>
//           <div id="back-button">back</div>
//           <h3 class="more-info-price">$${price} a night</h3>
//         </div>
//         `;
//   moreInfoModal.classList.toggle("active");
//   // Add click event listener to the back button
//   backButton.addEventListener("click", function () {
//     moreInfoModal.style.display = "none";
//   });
// }
