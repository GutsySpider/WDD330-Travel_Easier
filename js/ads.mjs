export const vacationAds = [
  {
    title: "Beach Escape",
    description: "Relax on sunny shores with crystal clear water.",
    location: "Bali, Indonesia",
    image: "/images/bali.webp", // <-- replace with your actual file
    pointsOfInterest: [
      "Waterbom Bali",
      "Sacred Monkey Forest Sanctuary",
      "Tegalalang Rice Terrace",
      "Tanah Lot Temple",
      "Kelingking Beach"
    ]
  },
  {
    title: "Mountain Adventure",
    description: "Hike breathtaking trails and enjoy fresh air.",
    location: "Swiss Alps",
    image: "/images/swiss-alps.webp", // <-- replace with your actual file
    pointsOfInterest: [
      "The Matterhorn",
      "Bernina Express",
      "Gornergrat",
      "Jungfraujoch – Top of Europe",
      "Aletsch Glacier"
    ]
  },
  {
    title: "City Lights",
    description: "Explore culture, food, and nightlife in a vibrant city.",
    location: "Tokyo, Japan",
    image: "/images/tokyo.webp", // <-- replace with your actual file
    pointsOfInterest: [
      "Senso-ji Temple",
      "Tokyo Tower",
      "Meiji Jingu Shrine",
      "Shibuya Crossing",
      "Ueno Park"
    ]
  }
];

export function renderVacationAds(ads, container) {
  container.innerHTML = "";

  ads.forEach((ad) => {
    const card = document.createElement("article");
    card.classList.add("ad-card");

    card.innerHTML = `
      <img src="${ad.image}" alt="${ad.title}" class="ad-image" />
      <h3>${ad.title}</h3>
      <p>${ad.description}</p>
      <p><strong>${ad.location}</strong></p>

      <h4>Popular Points of Interest:</h4>
      <ul>
        ${ad.pointsOfInterest.map((poi) => `<li>${poi}</li>`).join("")}
      </ul>
    `;

    container.appendChild(card);
  });
}