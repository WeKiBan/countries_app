import { useState } from 'react';
import {
  InputContainer,
  SearchInputWrapper,
  SearchInput,
  SearchIcon,
  SelectInput,
} from '../styles/InputsStyled';
import { BsSearch } from 'react-icons/bs';

function Inputs({
  handleSetFilteredCountries,
  setQuery,
  query,
  region,
  handleSetRegion,
}) {
  const handleSetQuery = (currentQuery) => {
    setQuery(currentQuery);
  };

  return (
    <InputContainer>
      <SearchInputWrapper>
        <SearchIcon />
        <SearchInput
          value={query}
          onChange={(e) => handleSetQuery(e.target.value)}
          placeholder="Search for a country..."
        />
      </SearchInputWrapper>
      <SelectInput
        value={region}
        onChange={(e) => handleSetRegion(e.target.value)}
      >
        <option value="">Filter by Region</option>
        <option value="africa">Africa</option>
        <option value="americas">America</option>
        <option value="asia">Asia</option>
        <option value="europe">Europe</option>
        <option value="oceania">Oceania</option>
      </SelectInput>
    </InputContainer>
  );
}

export default Inputs;
