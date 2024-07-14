import React from "react";
import award1 from "../assets/media/award-1.webp";
import award2 from "../assets/media/award-2.webp";
import award3 from "../assets/media/award-3.webp";
import award4 from "../assets/media/award-4.webp";
import award5 from "../assets/media/award-5.webp";
import award6 from "../assets/media/award-6.webp";

const awards = [
  { src: award1, alt: "Award 1" },
  { src: award2, alt: "Award 2" },
  { src: award3, alt: "Award 3" },
  {
    src: award4,
    alt: "Common Sense Award",
    id: "common-sense-logo",
  },
  { src: award5, alt: "Award 5" },
  { src: award6, alt: "Award 6" },
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
