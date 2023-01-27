import { createPortal } from 'react-dom';
import { Rings } from 'react-loader-spinner';
import { LoadingWpr } from './Loader.styled';

const LoaderSpiner = document.querySelector('#loader');

const Loader = () => {
  return createPortal(
    <LoadingWpr>
      <Rings
        height="200"
        width="200"
        color="#0026fd"
        radius="6"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        ariaLabel="rings-loading"
      />
    </LoadingWpr>,
    LoaderSpiner
  );
};

export default Loader;
