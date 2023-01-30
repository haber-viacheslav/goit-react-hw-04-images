import Searchbar from './Searchbar';
import ImageGallery from './ImageGallery';
import Button from './Button';
import PropTypes from 'prop-types';
import Loader from './Loader';
import { AppWrp } from './App.styled';
import { fetchPhotoApi } from './Api/FetchApi';
import { useState, useEffect } from 'react';

export const App = () => {
  const [images, setImages] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [totalImages, setTotalImages] = useState(0);

  const handleOnSearch = newSearchQuery => {
    if (newSearchQuery === '' || newSearchQuery === searchQuery) {
      return;
    }
    setImages([]);
    setTotalImages(0);
    setSearchQuery(newSearchQuery);
    setPage(1);
  };

  const handleOnLoad = () => {
    setPage(prevPage => prevPage + 1);
  };

  useEffect(() => {
    async function fetchImages(searchQuery, page) {
      try {
        setIsLoading(true);
        const data = await fetchPhotoApi(searchQuery, page);
        const minifyData = data.hits.map(
          ({ id, webformatURL, largeImageURL, tags }) => {
            return { id, webformatURL, largeImageURL, tags };
          }
        );
        setImages(prevImages => {
          return page === 1 ? [...minifyData] : [...prevImages, ...minifyData];
        });
        setTotalImages(data.totalHits / 12);
        return data.hits;
      } catch (error) {
        setImages([]);
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    }
    if (!searchQuery) {
      return;
    }
    fetchImages(searchQuery, page);
  }, [page, searchQuery]);

  return (
    <AppWrp>
      <Searchbar onSubmit={handleOnSearch} />
      <ImageGallery images={images} />
      {!!images.length && page <= totalImages && (
        <Button onClick={handleOnLoad} />
      )}
      {isLoading && <Loader />}
    </AppWrp>
  );
};

App.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      webformatURL: PropTypes.string.isRequired,
      largeImageURL: PropTypes.string.isRequired,
      tags: PropTypes.string.isRequired,
      totalImages: PropTypes.number.isRequired,
    }).isRequired
  ),
  searchQuery: PropTypes.string,
  page: PropTypes.number,
};

// componentDidUpdate(_, prevState) {
//     if (
//       prevState.page !== this.state.page ||
//       prevState.searchQuery !== this.state.searchQuery
//     ) {
//       this.fetchImages(this.state.searchQuery, this.state.page);
//     }
