import { useState } from "react";

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const testimonials = [
    {
      quote:
        "This product completely changed the way I work. Highly recommended!",
      author: "Jane Doe",
    },
    {
      quote:
        "Outstanding experience — the team was responsive and professional.",
      author: "John Smith",
    },
    {
      quote: "A seamless, intuitive platform that exceeded my expectations.",
      author: "Aisha Khan",
    },
    {
      quote: "I never knew software could be this user-friendly. Five stars!",
      author: "Carlos Mendez",
    },
    {
      quote: "Incredible support and regular updates — it's been a pleasure.",
      author: "Emily Zhang",
    },
    {
      quote: "We've doubled our efficiency thanks to this amazing tool.",
      author: "Robert Lee",
    },
    {
      quote: "From onboarding to execution, everything was smooth and easy.",
      author: "Sofia Ivanova",
    },
    {
      quote: "Worth every penny. Reliable, fast, and well-designed.",
      author: "Michael Brown",
    },
    {
      quote: "A true game-changer in our industry. Love it!",
      author: "Fatima Noor",
    },
    {
      quote: "The UI is clean and modern, and the UX is top-notch.",
      author: "Liam O’Connor",
    },
  ];

  const handlePrevClick = () => {
    setCurrentIndex(
      (currentIndex + testimonials.length - 1) % testimonials.length
    );
  };

  const handleNextClick = () => {
    setCurrentIndex((currentIndex + 1) % testimonials.length);
  };

  return (
    <div className="testimonials">
      <div className="testimonials-quote">
        {testimonials[currentIndex].quote}
      </div>

      <div className="testimonials-author">
        {testimonials[currentIndex].author}
      </div>

      <div className="testimonials-nav">
        <button onClick={handlePrevClick}>Prev</button>
        <button onClick={handleNextClick}>Next</button>
      </div>
    </div>
  );
};

export default Testimonials;
