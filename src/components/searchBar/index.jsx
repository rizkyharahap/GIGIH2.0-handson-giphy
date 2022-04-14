import './search.css';

const SearchBar = ({ onChange, onSubmit, styled, placeholder }) => {
  return (
    <form className="search" style={styled} onSubmit={onSubmit}>
      <input type="search" placeholder={placeholder} onChange={onChange} />
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchBar;
