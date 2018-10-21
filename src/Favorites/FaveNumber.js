import React from 'react';
import PropTypes from 'prop-types';
import './Favorites.css';

const FaveNumber = ({ favorites }) => {
  return (
    <section className="fave-box">
      <p className="fave-number">
        {favorites.length} saved
      </p>
    </section>

  );
};

export default FaveNumber;

FaveNumber.propTypes = {
  favorites: PropTypes.array,
};