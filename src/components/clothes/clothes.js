/* eslint-disable react/no-array-index-key */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import { PieChart, Pie, Cell, Tooltip } from 'recharts';
import clothesApiService from '../../services/clotesApiService';
import Spinner from '../spinner';
import ErrorIndicator from '../error-indicator';
import './clothes.css';
import { COLORS } from '../../utils/constants';

class Clothes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chartData: [],
      isLoading: true,
      error: null,
    };
  }

  componentDidMount() {
    const { user } = this.props;

    clothesApiService
      .getClothes(user.name)
      .then((data) => this.sortClothes(data))
      .catch((error) => {
        this.setState({ isLoading: false, error });
      });
  }

  sortClothes = (clothes) => {
    const holder = {};

    clothes.payload.flat().forEach(({ clothe }) => {
      if (holder[clothe]) {
        holder[clothe] += 1;
      } else {
        holder[clothe] = 1;
      }
    });

    const chartData = Object.keys(holder).map((key) => ({
      name: key,
      value: holder[key],
    }));

    this.setState({
      isLoading: false,
      chartData,
    });
  };

  render() {
    const { chartData, isLoading, error } = this.state;

    if (isLoading) {
      return <Spinner />;
    }

    if (error) {
      return <ErrorIndicator error={error} />;
    }

    return (
      <PieChart width={390} height={215}>
        <Pie
          dataKey="value"
          data={chartData}
          cx={195}
          cy={100}
          outerRadius={80}
          fill="#8884d8"
        >
          {chartData.map((entry, index) => (
            <Cell fill={COLORS[index % COLORS.length]} key={index} />
          ))}
        </Pie>
        <Tooltip />
      </PieChart>
    );
  }
}

Clothes.propTypes = {
  user: propTypes.oneOfType([propTypes.object]).isRequired,
};

const mapStateToProps = (state) => {
  const { user } = state.userReducer;
  return {
    user,
  };
};

export default connect(mapStateToProps)(Clothes);
