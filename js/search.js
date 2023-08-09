const statusMessage = document.getElementById("status-message");

function validateData(userdata) {
  if (userdata.guests === "" || userdata.totalDays === "") {
    statusMessage.innerHTML = "Please enter both fields.";
    return false;
  } else {
    statusMessage.innerHTML = "";
    return true;
  }
}

function displayEvents(place) {
  accommodationsContainer.innerHTML = "";
  if (0 < events.length) {
    for (let i = 0; i < place.length; i++) {
      let event = events[i];
      showSearchResults.innerHTML += `
        <div class="search-item-tile">
            <h2>${event.title}</h2>
            <div class="swiper-container">
                <div class="swiper-wrapper">
                ${event.gallery
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
                <h4>${event.location}</h4>
                <p>${event.guest_range} Guests</p>
                <span><img src="${event.amenities_bed_icon}"/></span>
                <span><img src="${event.amenities_extra_icon}"/></span>
                <p class="rating">${event.rating}</p>
                <p>${event.meals} available</p>                
                <div class="more-info-button" id="info-button" >
                <h3 class="total-cost">$${event.price * event.price}</h3>
                <h2 class="tile-price" value="test">$${event.price} a night</h3>
                </div>
            </div>
        </div>
        `;
    }
  } else {
    statusMessage.innerHTML = `Sorry, there's nothing avaliable`;
  }
}

function findEvents(userdata) {
  accommodationsContainer.innerHTML = "";
  let eventsToShow = [];
  for (let i = 0; i < accommodations.length; i++) {
    let accommodation = accommodations[i];
    let totalCost = userdata.guests * accommodation.price;

    if (
      guests >= accommodation.min_guests &&
      guests <= accommodation.max_guests &&
      totalDays >= accommodation.min_days &&
      totalDays <= accommodation.max_days
    ) {
      eventsToShow.push(accommodation);
    }
  }
  displayEvents(eventsToShow, userdata.totalDays);
}

searchButton.addEventListener("click", function () {
  event.preventDefault();
  let userdata = {
    guests: parseInt(guestsInput.value),
    dates: rangepicker.getDates(),
    difference: dates[1].getTime() - dates[0].getTime(),
    totalDays: Math.ceil(difference / (1000 * 3600 * 24)),
  };
  console.log(`${guests}, ${totalDays}`);
  let validated = validateData(userdata);
  if (validated) {
    findEvents(userdata);
  }
});
