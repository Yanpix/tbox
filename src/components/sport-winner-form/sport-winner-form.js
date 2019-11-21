import React from 'react';
import propTypes from 'prop-types';
import './sport-winner-form.css';

const SportWinnerForm = ({ getLosingTeams, handleInputChange }) => (
  <div className="sport-winner-container">
    <form onSubmit={getLosingTeams}>
      <input
        type="text"
        placeholder="Input team name"
        onChange={handleInputChange}
      />
    </form>
  </div>
);

SportWinnerForm.propTypes = {
  getLosingTeams: propTypes.func.isRequired,
  handleInputChange: propTypes.func.isRequired,
};

export default SportWinnerForm;
