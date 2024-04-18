import React, { useEffect, useState } from "react";
import { useData } from "../../contexts/DataContext";

import "./style.scss";

const Slider = () => {
  const { data } = useData();
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!data || data.focus.length === 0) return;

    const intervalId = setInterval(() => {
      setCurrentIndex(prevIndex =>
        prevIndex < data.focus.length - 1 ? prevIndex + 1 : 0
      );
    }, 5000);
  
    const cleanup = () => clearInterval(intervalId);
    // eslint-disable-next-line consistent-return
    return cleanup;
  }, [data]);
  

  if (!data || data.focus.length === 0) return null;

  return (
    <div className="SlideCardList">
      {data.focus.slice().reverse().map((event, index) => (
        <div
          key={event.id}
          className={`SlideCard SlideCard--${index === currentIndex ? "display" : "hide"}`}
        >
          <img src={event.cover} alt="forum" />
          <div className="SlideCard__descriptionContainer">
            <div className="SlideCard__description">
              <h3>{event.title}</h3>
              <p>{event.description}</p>
              <div>{new Date(event.date).toLocaleString("fr-FR", { month: "long" })}</div>
            </div>
          </div>
          <div className="SlideCard__paginationContainer">
            <div className="SlideCard__pagination">
              {data.focus.map((focusEvent, focusIndex) => (
                <input
                  key={`${(() => (focusIndex)) ()}`}
                  type="radio"
                  name={`radio-button-${index}`}
                  checked={focusIndex === currentIndex}
                  onChange={() => {}}
                />
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Slider;
