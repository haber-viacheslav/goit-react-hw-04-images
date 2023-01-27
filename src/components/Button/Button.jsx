import { LoadMoreBtn } from './Button.styled';

const Button = ({ onClick }) => {
  return (
    <LoadMoreBtn onClick={onClick} type="button">
      Show more
    </LoadMoreBtn>
  );
};

export default Button;
