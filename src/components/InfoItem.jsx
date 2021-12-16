import React from "react";

const InfoItem = (props) => {
  const { title, icon, value, unit, variant } = props;
  return (
    <>
      <article className={`info${variant ? ` info--${variant}` : ""}`}>
        <p className="info__title">{title}</p>
        <div className="info__wrapper">
          <span className="info__icon">{icon}</span>
          <span className="info__value">{value}</span>
          <span className="info__unit">{unit}</span>
        </div>
      </article>
    </>
  );
};

export default InfoItem;
