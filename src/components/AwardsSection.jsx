import React from "react";

const awards = [
  { src: "/src/assets/media/award-1.webp", alt: "Award 1" },
  { src: "/src/assets/media/award-2.webp", alt: "Award 2" },
  { src: "/src/assets/media/award-3.webp", alt: "Award 3" },
  {
    src: "/src/assets/media/award-4.webp",
    alt: "Common Sense Award",
    id: "common-sense-logo",
  },
  { src: "/src/assets/media/award-5.webp", alt: "Award 5" },
  { src: "/src/assets/media/award-6.webp", alt: "Award 6" },
];

const AwardsSection = () => (
  <section className="awards-section flex">
    <div className="awards-container flex">
      {awards.map(({ src, alt, id }, index) => (
        <div key={index} className="award">
          <img src={src} alt={alt} id={id} loading="lazy" />
        </div>
      ))}
    </div>
  </section>
);

export default React.memo(AwardsSection);
