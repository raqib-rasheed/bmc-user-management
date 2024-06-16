import React, { useEffect, useState, useRef } from "react";
import "./index.scss";

const UserCardSlider: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);
  const cards = [
    {
      id: 6964102,
      name: "Chidambaram Pandey",
      email: "pandey_chidambaram@mohr.example",
      gender: "female",
      status: "inactive",
    },
    {
      id: 6964101,
      name: "Anunay Deshpande",
      email: "anunay_deshpande@halvorson-nader.test",
      gender: "female",
      status: "inactive",
    },
    {
      id: 6964099,
      name: "Bishnu Adiga",
      email: "adiga_bishnu@pollich.test",
      gender: "male",
      status: "active",
    },
    {
      id: 6964098,
      name: "Ms. Arjun Singh",
      email: "arjun_ms_singh@leuschke-hand.test",
      gender: "male",
      status: "active",
    },
    {
      id: 6964097,
      name: "Brajesh Shukla",
      email: "shukla_brajesh@leffler-nader.example",
      gender: "female",
      status: "inactive",
    },
    {
      id: 6961069,
      name: "Udai Sinha",
      email: "sinha_udai@walter.example",
      gender: "male",
      status: "inactive",
    },
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length);
    }, 2000);

    return () => clearInterval(intervalId);
  }, [cards.length]);

  useEffect(() => {
    const slider = sliderRef.current;
    if (slider) {
      const cardWidth = slider.children[0].getBoundingClientRect().width;
      slider.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
    }
  }, [currentIndex]);

  function getUserStatus(status: string) {
    return status.charAt(0).toUpperCase() + status.slice(1);
  }

  return (
    <div className="slider-container">
      <div className="slider" ref={sliderRef}>
        {cards.map((card, index) => (
          <div className="card" key={index}>
            <img width={250} height={270} src={"/benefits-section-lady.svg"} />
            <div className="overlay-user-card">
              <div className="user-status">
                <div className={`status-${card.status}`}></div>
                {getUserStatus(card.status)}
              </div>
              <h2>{card.name}</h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserCardSlider;
