import React from "react";

const Testimonial = React.memo(
  ({ image, name, role, review, highlightColor }) => (
    <div className="card | flex">
      <div className="profile | flex">
        <img src={image} alt={`${name}'s profile`} />
        <div>
          <p className="font-poppins">{name}</p>
          <span className="font-quicksand">{role}</span>
        </div>
      </div>
      <div className="profile-review | font-quicksand">
        <span className="font-quicksand">
          {review.split("*").map((text, index) =>
            index % 2 === 0 ? (
              text
            ) : (
              <span key={index} style={{ color: highlightColor }}>
                {text}
              </span>
            )
          )}
        </span>
      </div>
    </div>
  )
);

const TestimonialSection = () => {
  const testimonials = [
    {
      image: "/src/assets/media/user1.webp",
      name: "Yvette Switzer",
      role: "4th Grade Teacher",
      review:
        "I use Quizizz to reinforce and check understanding after we've covered a concept pretty thoroughly. I use it in stations. I use it for tutoring. I also use it to review and prepare my students for benchmark and state tests. *They love it every time.*",
      highlightColor: "#d4546d",
    },
    {
      image: "/src/assets/media/user2.webp",
      name: "James Newman",
      role: "Sr. Manager of Academic Instructional Technology",
      review:
        "*Quizizz motivates [students]*, increases confidence, and can help to establish a culture of learning and growing from mistakes.",
      highlightColor: "#2d9da6",
    },
    {
      image: "/src/assets/media/user3.webp",
      name: "Shallamar Goodwin-Richards",
      role: "High School Math Teacher",
      review:
        "I have students with IEPs, *I am able to find lessons catering to their abilities and accommodation* while being able to assign the other students with more rigorous assessments.",
      highlightColor: "#efa929",
    },
  ];

  return (
    <section className="testimonial-section | flex">
      <div className="testimonial-group | flex">
        {testimonials.map((testimonial, index) => (
          <Testimonial key={index} {...testimonial} />
        ))}
      </div>
    </section>
  );
};

Testimonial.displayName = "Testimonial";
TestimonialSection.displayName = "TestimonialSection";

export default React.memo(TestimonialSection);
