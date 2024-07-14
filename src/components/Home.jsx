import React from "react";
import Navbar from "./Navbar";
import Section1 from "./Section1";
import AwardsSection from "./AwardsSection";
import ReachSection from "./ReachSection";
import ValuePropContainer from "./ValuePropContainer";
import HowSection from "./HowSection";
import UseCaseSection from "./UseCaseSection";
import TestimonialSection from "./TestimonialSection";
import CTASection from "./CTASection";
import Footer from "./Footer";

import mainLogo from "../assets/media/main-logo.svg";
import vid1 from "../assets/media/vid1.mp4";
import vid2 from "../assets/media/vid2.mp4";
import vid3 from "../assets/media/vid3.mp4";
import vid4 from "../assets/media/vid4.mp4";
import bg1 from "../assets/media/bg1.webp";

const valuePropData = [
  {
    title: "Fast",
    heading: "Teaching, minus the time with Quizizz AI",
    list: [
      "Generate activities in seconds from your favorite educational websites, PDFs, and docs with the Chrome Extension",
      "Increase efficiency and digitize content you already have, images and all with AI worksheets to activities",
      "Create the right reading material, right now with AI-generated comprehension passages",
    ],
    reverse: false,
    buttonText: ["Learn more"],
    hasBottom: [
      true,
      [
        "93%",
        "of teachers say they can easily and quickly personalize content on Quizizz.",
      ],
    ],
    mediaPath: vid1,
    colorClass: "media-c1",
  },
  {
    title: "ACCESSIBLE",
    heading: "Close gaps, open doors with accommodations",
    list: [
      "Ensure technology is compliant with 25+ accessibility features including Read Aloud, Audio Responses, translation, leveled text, and more",
      "Reduce specific barriers and provide unique accommodation supports to any student",
      "Increase flexibility in the way information is presented to students and align to UDL frameworks",
    ],
    reverse: true,
    buttonText: ["Learn more"],
    hasBottom: [false, []],
    mediaPath: vid2,
    colorClass: "media-c2",
  },
  {
    title: "FLEXIBLE",
    heading: "Teach flexibly, all in one place",
    list: [
      "Build instruction for any subject, grade level, lesson, assessment, or activity",
      "De-stress test prep with Focus Mode and Review & Submit",
      "Create consistency for students with the same tech across different classrooms, subjects, and grade levels",
    ],
    reverse: false,
    buttonText: ["Learn more"],
    hasBottom: [false, []],
    mediaPath: vid3,
    colorClass: "media-c3",
  },
  {
    title: "ENGAGING",
    heading: "Engage students without sacrificing rigor",
    list: [
      "Motivate learners with Power-Ups, Leaderboards, Team Mode, and more gamified-for-growth elements.",
      "Promote higher-level thinking with 15+ question types from state tests including Comprehension, Math Responses, Drawing, and more.",
      "Adapt instruction with student reporting and data",
    ],
    reverse: true,
    buttonText: ["Get a quote", "Learn more"],
    hasBottom: [
      true,
      [
        "94%",
        "of teachers say Quizizz adequately challenges students based on individual proficiency levels.",
      ],
    ],
    mediaPath: vid4,
    colorClass: "media-c4",
  },
];

const Home = () => {
  return (
    <>
      <Navbar
        hasNavList={true}
        hasFirstClassButtons={true}
        hasSecondClassButtons={[
          true,
          ["Login", "Sign up"],
          ["/login", "/signup"],
        ]}
        logoPath={mainLogo}
      />
      <Section1 />
      <AwardsSection />
      <ReachSection />
      {valuePropData.map((prop, index) => (
        <ValuePropContainer key={index} {...prop} />
      ))}
      <HowSection />
      <UseCaseSection />
      <TestimonialSection />
      <CTASection
        paraFirst={false}
        bgImage={[false]}
        headingText="A weekend all to yourself is possible. Why not make it this weekend?"
        paraText="Plan your next lesson and adapt it to the needs of every student in a matter of minutes."
        buttonText={["Sign up for free", "Learn more"]}
        bottomShadow={true}
      />
      <CTASection
        paraFirst={true}
        bgImage={[true, bg1]}
        headingText="Join startups, nonprofits, and Fortune 500 companies using Quizizz"
        paraText="Not a K-12 school or district?"
        buttonText={["Explore Quizizz for Business"]}
        bottomShadow={false}
      />
      <Footer />
    </>
  );
};

export default Home;
