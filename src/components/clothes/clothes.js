import React, { Component } from 'react';
import { PieChart, Pie, Cell, Tooltip } from 'recharts';
import clothesApiService from '../../services/clotesApiService';
import Spinner from '../spinner';
import ErrorIndicator from '../error-indicator';
import './clothes.css';

const COLORS = [
  '#0088FE',
  '#00C49F',
  '#FFBB28',
  '#ff8042',
  '#ff5ac5',
  '#008011',
];

class Clothes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chartData: [],
      isLoading: true,
      isError: false,
    };
  }

  componentDidMount() {
    clothesApiService
      .getClothes('one')
      .then((data) => this.sortClothes(data))
      .catch((err) => this.setState({ isError: true }));
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
    const { chartData, isLoading, isError } = this.state;

    if (isLoading) {
      return <Spinner />;
    }

    if (isError) {
      return <ErrorIndicator />;
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

export default Clothes;
