import React, { Component } from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import Spinner from '../spinner';
import ErrorIndicator from '../error-indicator';
import { fetchNews } from '../../actions';
import './news-preview.css';

class NewsPreview extends Component {
  componentDidMount() {
    const { token, fetchNews } = this.props;
    fetchNews(token);
  }

  render() {
    const {
      news: { items },
      loading,
      error,
    } = this.props;

    if (loading) {
      return <Spinner />;
    }

    if (error) {
      return <ErrorIndicator error={error} />;
    }
    return (
      <div className="news-preview">
        <h3 className="title">{items.length ? items[0].title : null}</h3>
        <p className="content">{items.length ? items[0].content : null}</p>
      </div>
    );
  }
}

NewsPreview.defaultProps = {
  items: [],
  error: null,
};

NewsPreview.propTypes = {
  token: propTypes.string.isRequired,
  news: propTypes.oneOfType([propTypes.array, propTypes.object]).isRequired,
  items: propTypes.arrayOf(propTypes.object),
  fetchNews: propTypes.func.isRequired,
  loading: propTypes.bool.isRequired,
  error: propTypes.objectOf(propTypes.any),
};

const mapStateToProps = (state) => {
  const { news, loading, error } = state.newsReducer;
  const { token } = state.userReducer;
  return {
    token,
    news,
    loading,
    error,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchNews: (token) => dispatch(fetchNews(token)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NewsPreview);
