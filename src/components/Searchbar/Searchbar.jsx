import {
  SearchbarWrp,
  SearchForm,
  SearchFormBtn,
  SearchFormBtnLabel,
  SearchFormInput,
} from './Searchbar.styled';

import { FcSearch } from 'react-icons/fc';

const Searchbar = ({ onSubmit }) => {
  const handleSubmit = e => {
    e.preventDefault();
    onSubmit(e.target.search.value.trim());
    e.currentTarget.reset();
  };
  return (
    <SearchbarWrp>
      <SearchForm onSubmit={handleSubmit}>
        <SearchFormBtn type="submit">
          <FcSearch width={40} height={40} />
          <SearchFormBtnLabel>Search</SearchFormBtnLabel>
        </SearchFormBtn>
        <SearchFormInput
          name="search"
          type="text"
          autoComplete="off"
          placeholder="Search images and photos"
        />
      </SearchForm>
    </SearchbarWrp>
  );
};

export default Searchbar;
