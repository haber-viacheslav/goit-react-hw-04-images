import { Component } from 'react';
import Searchbar from './Searchbar';
import ImageGallery from './ImageGallery';
import Button from './Button';
import PropTypes from 'prop-types';
import Loader from './Loader';
import { AppWrp } from './App.styled';
import { fetchPhotoApi } from './Api/FetchApi';

export class App extends Component {
  static defaultProps = {
    images: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        webformatURL: PropTypes.string.isRequired,
        largeImageURL: PropTypes.string.isRequired,
        tags: PropTypes.string.isRequired,
        totalImages: PropTypes.number.isRequired,
      }).isRequired
    ),
    searchQuery: PropTypes.string.isRequired,
    page: PropTypes.number.isRequired,
  };

  state = {
    images: [],
    searchQuery: '',
    page: 1,
    isLoading: false,
    totalImages: 0,
  };

  handleOnSearch = searchQuery => {
    if (!searchQuery || searchQuery === this.state.searchQuery) {
      return;
    }
    this.setState({
      isLoading: true,
      searchQuery,
      page: 1,
      images: [],
      totalImages: 0,
    });
  };

  handleOnLoad = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
      isLoading: true,
    }));
  };

  fetchImages = async (searchQuery, page) => {
    try {
      const data = await fetchPhotoApi(searchQuery, page);

      const minifyData = data.hits.map(
        ({ id, webformatURL, largeImageURL, tags }) => {
          return { id, webformatURL, largeImageURL, tags };
        }
      );
      this.setState(prevState => ({
        images:
          page === 1 ? [...minifyData] : [...prevState.images, ...minifyData],
        totalImages: data.totalHits / 12,
      }));

      return data.hits;
    } catch (error) {
      this.setState({ image: [] });
      console.log(error);
    } finally {
      this.setState({
        isLoading: false,
      });
    }
  };

  componentDidUpdate(_, prevState) {
    if (
      prevState.page !== this.state.page ||
      prevState.searchQuery !== this.state.searchQuery
    ) {
      this.fetchImages(this.state.searchQuery, this.state.page);
    }
  }

  render() {
    const { images, isLoading, page, totalImages } = this.state;

    return (
      <AppWrp>
        <Searchbar onSubmit={this.handleOnSearch} />
        <ImageGallery images={images} />
        {!!images.length && page <= totalImages && (
          <Button onClick={this.handleOnLoad} />
        )}
        {isLoading && <Loader />}
      </AppWrp>
    );
  }
}
