import React, { Component } from 'react';
import SportListItem from '../../components/sport-list-item';
import SportWinnerForm from '../../components/sport-winner-form';
import sportApiService from '../../services/sportApiService';
import Spinner from '../../components/spinner';
import ErrorIndicator from '../../components/error-indicator';
import './sport.css';

class Sport extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      error: null,
      teamName: '',
      losingTeams: [],
    };
  }

  handleInputChange = (e) => {
    this.setState({
      teamName: e.target.value,
    });
  };

  getLosingTeams = (event) => {
    event.preventDefault();
    const { teamName } = this.state;

    this.setState({
      loading: true,
    });

    sportApiService
      .getLosers(teamName)
      .then((losingTeams) => {
        if (!losingTeams.length) {
          losingTeams.push(`There is no team named "${teamName}"`);
        }
        this.setState({
          losingTeams,
          loading: false,
        });
      })
      .catch((error) =>
        this.setState({
          error,
          loading: false,
        })
      );
  };

  render() {
    const { losingTeams, loading, error } = this.state;
    return (
      <div className="sport-page">
        <h1 className="sport-header">Sport</h1>
        <SportWinnerForm
          getLosingTeams={this.getLosingTeams}
          handleInputChange={this.handleInputChange}
        />
        {loading ? (
          <div className="spinner-fixed-center">
            <Spinner />
          </div>
        ) : (
          <ul className="sport-list">
            {losingTeams.map((team) => (
              <SportListItem teamName={team} key={team} />
            ))}
          </ul>
        )}
        {error && <ErrorIndicator error={error} />}
      </div>
    );
  }
}

export default Sport;
