import PropTypes from 'prop-types';
import Modal from 'components/Modal';
import {
  ImageGalleryItemWrp,
  ImageGalleryItemImage,
} from './ImageGalleryItem.styled';
import { useState } from 'react';

const ImageGalleryItem = ({ image }) => {
  const [showModal, setShowModal] = useState(false);
  const { webformatURL, tags, largeImageURL } = image;

  const handleToggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <>
      <ImageGalleryItemWrp>
        <ImageGalleryItemImage
          onClick={handleToggleModal}
          src={webformatURL}
          alt={tags}
        />
      </ImageGalleryItemWrp>
      {showModal && (
        <Modal onClick={handleToggleModal} largeImageURL={largeImageURL} />
      )}
    </>
  );
};

ImageGalleryItem.propTypes = {
  image: PropTypes.shape({
    webformatURL: PropTypes.string.isRequired,
    largeImageURL: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired,
  }).isRequired,
};

export default ImageGalleryItem;
