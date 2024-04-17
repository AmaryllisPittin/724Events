import React from 'react';
import PropTypes from "prop-types";
import "./style.scss";

const EventCard = (props) => {
  const {
    imageSrc: propImageSrc,
    imageAlt,
    date: propDate,
    title: propTitle,
    label,
    small = false,
    events = [],
    ...rest
  } = props;

  let imageSrc = propImageSrc;
  let title = propTitle;
  let date = propDate ? new Date(propDate) : new Date();

  // Logique pour gérer small
  if (small && events.length > 0) {
    const latestEvent = events[events.length - 1];
    imageSrc = latestEvent.imageSrc;
    title = latestEvent.title;
    date = latestEvent.date ? new Date(latestEvent.date) : new Date();
  }
  

  return (
    <div data-testid="card-testid" className={`EventCard${small ? " EventCard--small" : ""}`} {...rest}>
      <div className="EventCard__imageContainer">
        {/* Utilisation de l'image source mise à jour */}
        {imageSrc && <img data-testid="card-image-testid" src={imageSrc} alt={imageAlt} />}
        <div className="EventCard__label">{label}</div>
      </div>
      <div className="EventCard__descriptionContainer">
        <div className="EventCard__title">{title}</div>
        <div className="EventCard__month">{date.toLocaleString('fr-FR', { month: 'long' })}</div>
      </div>
    </div>
  );
};

EventCard.propTypes = {
  imageSrc: PropTypes.string.isRequired,
  imageAlt: PropTypes.string,
  date: PropTypes.oneOfType([PropTypes.instanceOf(Date), PropTypes.string]),
  title: PropTypes.string,
  label: PropTypes.string.isRequired,
  small: PropTypes.bool,
  events: PropTypes.arrayOf(
    PropTypes.shape({
      imageSrc: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      date: PropTypes.oneOfType([PropTypes.instanceOf(Date), PropTypes.string]),
    })
  ),
};

EventCard.defaultProps = {
  imageAlt: "image",
  small: false,
  events: [],
  date: new Date(),
  title: '',
};

export default EventCard;
