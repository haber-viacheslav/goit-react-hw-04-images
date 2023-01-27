import PropTypes from 'prop-types';
import Modal from 'components/Modal';
import {
  ImageGalleryItemWrp,
  ImageGalleryItemImage,
} from './ImageGalleryItem.styled';
import { Component } from 'react';
class ImageGalleryItem extends Component {
  static defaultProps = {
    image: PropTypes.shape({
      webformatURL: PropTypes.string.isRequired,
      largeImageURL: PropTypes.string.isRequired,
      tags: PropTypes.string.isRequired,
    }).isRequired,
  };
  state = {
    showModal: false,
  };
  handleToggleModal = () => {
    this.setState(prevState => ({
      showModal: !prevState.showModal,
    }));
  };
  render() {
    const { showModal } = this.state;
    const { tags, webformatURL, largeImageURL } = this.props.image;
    return (
      <>
        <ImageGalleryItemWrp>
          <ImageGalleryItemImage
            onClick={this.handleToggleModal}
            src={webformatURL}
            alt={tags}
          />
        </ImageGalleryItemWrp>
        {showModal && (
          <Modal
            onClose={this.handleToggleModal}
            largeImageURL={largeImageURL}
          />
        )}
      </>
    );
  }
}

export default ImageGalleryItem;
