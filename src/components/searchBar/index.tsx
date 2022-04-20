import type { ChangeEventHandler, FC, FormEventHandler } from 'react';
import './search.css';

const SearchBar: FC<{
  onChange: ChangeEventHandler<HTMLInputElement>;
  onSubmit: FormEventHandler<HTMLFormElement>;
  placeholder?: string;
}> = ({ onChange, onSubmit, placeholder }) => {
  return (
    <form className="search" onSubmit={onSubmit}>
      <input type="search" placeholder={placeholder} onChange={onChange} />
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchBar;
