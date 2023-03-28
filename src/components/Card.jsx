import React from 'react'

const Card = ({image, name, job, username, email, phone}) => {
  return (
    <div className="flip-card">
      <div className="flip-card__inner">
        <div className="flip-card__front">
          <div className="card__img">
            <img src={image} alt={`${name}'s Image`} />
          </div>
          <div className="card__content">
            <h3>{name}</h3>
            <small>{job}</small>
          </div>
        </div>
        <div className="flip-card__back">
          <h4>{username}</h4>
          <p><b>email: </b>{email}</p>
          <p><b>phone: </b> {phone}</p>
        </div>
      </div>
    </div>
  );
}

export default Card