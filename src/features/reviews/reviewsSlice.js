import { createSlice } from "@reduxjs/toolkit";

const reviews = createSlice({
  name: "reviews",
  initialState: {
    reviews: [
      {
        id: 1,
        name: "Emily Johnson",
        location: "New York, USA",
        rating: 9.5,
        comment:
          "I've been using this service for several weeks now, and I must say it's one of the most user-friendly platforms I've ever encountered. The layout is clean, everything loads quickly, and I’ve never had an issue finding what I need. Truly a job well done by the devs!",
      },
      {
        id: 2,
        name: "Liam Smith",
        location: "London, UK",
        rating: 7.8,
        comment:
          "The platform works well overall, but there are moments where the performance lags, especially during peak hours. That said, the features offered are really impressive and cover most of what I was looking for in a tool like this.",
      },
      {
        id: 3,
        name: "Sophia Brown",
        location: "Toronto, Canada",
        rating: 10,
        comment:
          "Absolutely flawless! From the onboarding experience to the detailed customization options, every part of this app has clearly been built with the user in mind. It has exceeded all my expectations.",
      },
      {
        id: 4,
        name: "Noah Davis",
        location: "Sydney, Australia",
        rating: 5.3,
        comment:
          "It does the job, but there are quite a few things that could be improved. Navigation isn’t always intuitive, and I found myself clicking around aimlessly trying to find certain features. Support was helpful, though, when I reached out.",
      },
      {
        id: 5,
        name: "Ava Wilson",
        location: "Auckland, New Zealand",
        rating: 8.1,
        comment:
          "There’s a lot to love here. The interface feels modern and responsive, and I especially appreciate the attention to accessibility. With a few tweaks to search functionality, this could easily be a perfect 10.",
      },
      {
        id: 6,
        name: "Ethan Miller",
        location: "Los Angeles, USA",
        rating: 3.7,
        comment:
          "Disappointed overall. While the concept is great, the execution feels incomplete. I’ve run into several bugs and the UI sometimes just freezes entirely. Hopefully future updates will address these issues.",
      },
      {
        id: 7,
        name: "Isabella Taylor",
        location: "Dublin, Ireland",
        rating: 9.2,
        comment:
          "Impressive! Everything from the registration to daily usage feels seamless. The dev team clearly put thought into user flows, and it shows. This has quickly become one of my go-to platforms.",
      },
      {
        id: 8,
        name: "James Anderson",
        location: "Manchester, UK",
        rating: 2.0,
        comment:
          "Honestly, I struggled from the very beginning. The login screen didn’t work properly, and once I got in, half the features were either broken or unavailable. Needs major stability improvements.",
      },
      {
        id: 9,
        name: "Mia Thomas",
        location: "Vancouver, Canada",
        rating: 6.5,
        comment:
          "Solid effort. I like the layout and the basic features, but it still lacks the polish and advanced functionality I was hoping for. For casual users, it’s probably good enough.",
      },
      {
        id: 10,
        name: "Benjamin Lee",
        location: "Chicago, USA",
        rating: 9.9,
        comment:
          "Wow. Blown away by how well this app performs. Pages load instantly, no glitches, and it works flawlessly across all my devices. Easily one of the best platforms I've used in years.",
      },
    ],
  },
  reducers: {
    addReviews: (state, { payload }) => {
      const { name, city, country, rating, comment } = payload;
      const lastId = state.reviews.length
        ? state.reviews[state.reviews.length - 1].id
        : 0;

      state.reviews.push({
        id: lastId + 1,
        name,
        location: `${city}, ${country}`,
        rating,
        comment,
      });
    },
  },
});

export const { addReviews } = reviews.actions;
export default reviews.reducer;
