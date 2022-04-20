import { fireEvent, render, screen } from '@testing-library/react';

import SearchBar from './index';

describe('SearchBar', () => {
  test('Should be rendered correctly', () => {
    render(<SearchBar placeholder="Search Mantap" onChange={() => {}} onSubmit={() => {}} />);

    const inputSearch = screen.getByPlaceholderText(/search mantap/i);
    const buttonSearch = screen.getByRole('button', {
      name: /search/i,
    });

    expect(inputSearch).toBeInTheDocument();
    expect(buttonSearch).toBeInTheDocument();
  });

  test('should call onChange', () => {
    const onInputChange = jest.fn();

    render(<SearchBar placeholder="Search Mantap" onChange={onInputChange} onSubmit={() => {}} />);

    const inputSearch = screen.getByPlaceholderText(/search mantap/i);

    fireEvent.change(inputSearch, { target: { value: 'mantap' } });

    expect(onInputChange).toHaveBeenCalled();
    expect(inputSearch).toHaveValue('mantap');
  });

  test('should call on submit', () => {
    const onSubmit = jest.fn();

    render(<SearchBar placeholder="Search Mantap" onChange={() => {}} onSubmit={onSubmit} />);

    const inputSearch = screen.getByPlaceholderText(/search mantap/i);
    const buttonSearch = screen.getByRole('button', {
      name: /search/i,
    });

    fireEvent.change(inputSearch, { target: { value: 'mantap' } });
    fireEvent.click(buttonSearch);

    expect(onSubmit).toHaveBeenCalled();
  });
});
