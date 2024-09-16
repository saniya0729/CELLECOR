import React, { useState, useEffect } from "react";
import "./ImageSlider.css";
const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsToShow = 4;
  const autoSlideDuration = 4000;
  const totalItems = 8;
  const categories = [
    {
      id: 1,
      src: "/Images/Neckband.jpg",
      alt: "Neckbands",
      label: "Neckbands",
    },
    { id: 2, src: "/Images/speaker.jpg", alt: "Speakers", label: "Speakers" },
    {
      id: 3,
      src: "/Images/Smartwatch.jpg",
      alt: "Smartwatches",
      label: "Smartwatches",
    },
    { id: 4, src: "/Images/TWS.jpg", alt: "TWS", label: "TWS" },
    { id: 5, src: "/Images/Smarttv.jpg", alt: "SmartTv", label: "SmartTv" },
    {
      id: 6,
      src: "/Images/Neckband.jpg",
      alt: "Neckbands",
      label: "Neckbands",
    },
    {
      id: 7,
      src: "/Images/Smartwatch.jpg",
      alt: "Smartwatches",
      label: "Smartwatches",
    },
    { id: 8, src: "/Images/TWS.jpg", alt: "TWS", label: "TWS" },
  ];

  const updateSlider = () => {
    const slider = document.getElementById("slider");
    const slideWidth = slider.children[0].offsetWidth;
    slider.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
  };

  useEffect(() => {
    const autoSlide = setInterval(() => {
      setCurrentIndex(
        (prevIndex) => (prevIndex + 1) % Math.ceil(totalItems / itemsToShow)
      );
    }, autoSlideDuration);

    return () => clearInterval(autoSlide);
  }, [currentIndex]);

  useEffect(() => {
    updateSlider();
    window.addEventListener("resize", updateSlider);

    return () => {
      window.removeEventListener("resize", updateSlider);
    };
  }, [currentIndex]);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex < totalItems - itemsToShow ? prevIndex + 1 : 0
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : totalItems - itemsToShow
    );
  };

  return (
    <div className="relative w-full overflow-hidden py-8">
      <h1 className=" text-center mb-4 slider-heading">Shop By Category</h1>

      {/* Slider Container */}
      <div
        className="flex transition-transform duration-700 ease-in-out"
        id="slider"
      >
        {categories.map((category) => (
          <div key={category.id} className="min-w-[25%] category-Id ">
            <img
              src={category.src}
              className=" w-full object-cover slider-images relative overflow-hidden  transform transition duration-700 hover:scale-110"
              alt={category.alt}
            />
            <p className=" mt-6 category-names">{category.label}</p>
          </div>
        ))}
      </div>

      {/* Previous Button */}
      <button
        onClick={handlePrev}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray text-4xl text-white p-2 rounded-full z-10"
      >
        &#8249;
      </button>

      {/* Next Button */}
      <button
        onClick={handleNext}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray text-4xl text-white p-2 rounded-full z-10"
      >
        &#8250;
      </button>
    </div>
  );
};

export default ImageSlider;
