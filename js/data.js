console.log(`reading data`);

const accommodations = [
  {
    id: 0,
    title: "EcoScapes",
    location: "",
    gallery: [
      "https://ecoscapes.nz/wp-content/uploads/2022/06/rsz_1ecoscapes-212-1030x733.jpg",
      "https://ecoscapes.nz/wp-content/uploads/2017/02/IMG_3715-1030x663.jpg",
      "https://ecoscapes.nz/wp-content/uploads/2018/05/McLennan_KinlochLodge_042-1030x687.jpg",
    ],
    rating: "4.7",
    guest_range: "1-2",
    min_guests: "1",
    max_guests: "2",
    amenities: "1 - 2 Beds, Bathroom, Projector, Verandah",
    amenities_bed_icon: "/media/icons8-two-beds-100.png",
    blurb: `Our two guest units, Mohua and Kea, provide stunning environmentally friendly and luxurious lakeside accommodation and are designed to showcase the spectacular view of the top of Lake Whakatipu.
  
      Relax and unwind while you appreciate the ever-changing view, serenity, and wilderness of Kinloch.
      
      Our Ecoscapes are designed to an R7 architectural level meaning you have ultimate temperature control and comfort.  Ceramic air control for heating, cooling and air circulation means the best possible internal environment.`,
    meals: "Breakfast",
    price: "157",
    min_days: "1",
    max_days: "5",
  },
  {
    id: 1,
    title: "Greenstone Homestead",
    location: "",
    gallery: [
      "https://static.wixstatic.com/media/49b47f_f2891648040446de9aaa7dfc2ea2523f~mv2.jpg/v1/fit/w_851,h_683,q_90/49b47f_f2891648040446de9aaa7dfc2ea2523f~mv2.webp",
      "https://static.wixstatic.com/media/49b47f_1181b820a5f24666b59e74779632d53e~mv2.jpg/v1/fit/w_851,h_683,q_90/49b47f_1181b820a5f24666b59e74779632d53e~mv2.webp",
      "https://static.wixstatic.com/media/49b47f_e4c9b975b6bb47f58ff8041d6a7e0feb~mv2.jpg/v1/fit/w_851,h_683,q_90/49b47f_e4c9b975b6bb47f58ff8041d6a7e0feb~mv2.webp",
    ],
    rating: "3",
    guest_range: "1",
    min_guests: "0",
    max_guests: "1",
    amenities:
      "Shared Bathrooms, Kitchen and Laundry. Bikes, fishing and recreational equipment available for your use",
    amenities_bed_icon: "media/icons8-empty-bed-100.png",
    amenities_extra_icon: "media/icons8-electric-stovetop-100.png",
    blurb: `The Greenstone Station Homestead was originally built in 1910 and has recently been renovated to bring it into the modern age while retaining it's rustic charm.
  
      Located in a picturesque setting on the edge of Lake Wakatipu at the outlet of the Greenstone river, the Homestead offers the experience of being part of a working farm, a private retreat away from the hustle and bustle of Queenstown and on the doorstep of a range of outdoor activities.`,
    meals: "Breakfast and Dinner",
    price: "30",
    min_days: "1",
    max_days: "10",
  },
  {
    id: 2,
    title: "Mount Earnslaw Motels",
    location: "",
    gallery: [
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/06/d0/bc/86/mt-earnslaw-motel.jpg?w=1200&h=-1&s=1",
      "https://allhotels.co.nz/wp-content/uploads/2016/07/Mount-Earnslaw-Motels-2-1024x679.jpg",
      "https://allhotels.co.nz/wp-content/uploads/2016/07/Mount-Earnslaw-Motels-1.jpg",
    ],
    rating: "3",
    guest_range: "2-4",
    min_guests: "2",
    max_guests: "4",
    amenities: "2 - 3 Beds, Bathroom, Projector, Verandah",
    amenities_bed_icon: "media/icons8-four-beds-100.png",
    amenities_extra_icon: "",
    blurb: `Our suites offer you the choice of super king-size, queen or single beds to ensure a great night's sleep. The fully equipped kitchen also have complimentary tea and coffee. Each suite has an ensuite bathroom, free-to-air satellite TV, La-Z-Boy chairs and heat pump air-conditioning for your comfort. Another feature our visitors appreciate, are double-glazed windows and thick concrete slab walls to ensure there is minimal noise transference between suites.
  
      Free unlimited WiFi is provided. Laundry facilities are also available. Suites are all serviced daily as required. Please book your sauna ahead of time on check-in for a nominal fee. Spa facilities are in progress – please inquire on availability.`,
    meals: "no meals",
    price: "90",
    min_days: "3",
    max_days: "10",
  },
  {
    id: 3,
    title: "Lodge Lorien",
    location: "",
    gallery: [
      "https://a0.muscache.com/im/pictures/miso/Hosting-759567286634359940/original/30977d92-5f90-493e-9ba3-8524133fe95b.jpeg?im_w=1200",
      "https://a0.muscache.com/im/pictures/miso/Hosting-759567286634359940/original/6c2bf466-e86c-4321-a4f9-0756454fe102.jpeg?im_w=1200",
      "https://a0.muscache.com/im/pictures/miso/Hosting-759567286634359940/original/66acf1d1-49d4-49f9-97ef-a42c6a7030b9.jpeg?im_w=1200",
    ],
    rating: "5",
    guest_range: "1-4",
    min_guests: "1",
    max_guests: "4",
    amenities:
      "4 bedrooms, 4 bathrooms, a kitchen, a hot tub, a dedicated workspace and lake access",
    amenities_bed_icon: "media/icons8-four-beds-100.png",
    amenities_extra_icon: "media/icons8-electric-stovetop-100.png",
    blurb: `Tranquility and privacy are assured at this magnificent luxury villa on the South Island, New Zealand. Lodge Lorien is a stunning, contemporary, executive residence overlooking Lake Whakatipu and the breathtaking Humboldt Mountains. Situated a short drive from the town of Glenorchy and only a 45 minute drive from Queenstown International Airport, the area is a natural wonderland offering the ultimate in adventure & relaxation. Visit Lodge Lorien and experience the real heart of New Zealand.`,
    meals: "Breakfast, Lunch and Dinner",
    price: "240",
    min_days: "2",
    max_days: "15",
  },
];

console.log(`reading data complete`);
