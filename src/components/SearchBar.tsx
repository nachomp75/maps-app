import { ChangeEvent, useRef, useContext } from 'react';

import { SearchResults } from '.';
import { PlacesContext } from '../context';

export const SearchBar = () => {
  const debounceRef = useRef<NodeJS.Timeout>();
  const { searchPlacesByTerm } = useContext(PlacesContext);

  const onQueryChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (debounceRef.current) {
      clearTimeout(debounceRef.current);
    }

    debounceRef.current = setTimeout(() => {
      searchPlacesByTerm(e.target.value);
    }, 500);
  };

  return (
    <div className='search-container'>
      <input
        type='text'
        className='form-control'
        placeholder='Search a place...'
        onChange={onQueryChange}
      />
      <SearchResults />
    </div>
  );
};
