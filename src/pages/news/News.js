import React, { Component } from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import { fetchNews } from '../../actions';
import './news.css';
import Spinner from '../../components/spinner';
import ErrorIndicator from '../../components/error-indicator';
import NewsListItem from '../../components/news-list-item';

class News extends Component {
  componentDidMount() {
    const { token, news, fetchNews } = this.props;

    if (!news.items) {
      fetchNews(token);
    }
  }

  render() {
    const { news, loading, error } = this.props;

    const { items, image } = news;

    return (
      <div className="news-page">
        <h1 className="news-header">News</h1>
        {loading ? (
          <div className="spinner-fixed-center">
            <Spinner />
          </div>
        ) : (
          <>
            <div className="news-image-container">
              <img src={image.url} alt="rss" />
            </div>
            <ul className="news-list">
              {items.map(({ title, content, link }) => (
                <NewsListItem title={title} content={content} key={link} />
              ))}
            </ul>
          </>
        )}
        {error && <ErrorIndicator error={error} />}
      </div>
    );
  }
}

News.defaultProps = {
  error: null,
};

News.propTypes = {
  token: propTypes.string.isRequired,
  news: propTypes.oneOfType([propTypes.array, propTypes.object]).isRequired,
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

export default connect(mapStateToProps, mapDispatchToProps)(News);
