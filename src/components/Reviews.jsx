import React from "react";

const Reviews = () => {
  return (
    <review className="review p-5 mt-40 flex items-center justify-around">
      <div className="left-image mx-w-[700px]">
        <img className="" src="https://qualtspire.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fbusiness-img.7375ac9a.png&w=750&q=75" />
      </div>

      <div className="right-text w-[40vw] text-left">
        <div className="heading text-center font-bold text-4xl mb-10">
          Our Customers Are Our Strength <div>See What They Say About Us</div>
        </div>
        <div className="description font-semibold text-left">
          At Norm, our students are at the heart of everything we do. Their success stories inspire us, and their feedback drives us to keep innovating. Here’s what they have
          to say about their learning journey with us
        </div>
      </div>
    </review>
  );
};

export default Reviews;
