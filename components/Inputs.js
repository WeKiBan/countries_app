import {
  InputContainer,
  SearchInputWrapper,
  SearchInput,
  SearchIcon,
  SelectInput,
} from '../styles/InputsStyled';
import { BsSearch } from 'react-icons/bs';

function Inputs() {
  return (
    <InputContainer>
      <SearchInputWrapper>
        <SearchIcon />
        <SearchInput placeholder="Search for a country..." />
      </SearchInputWrapper>
      <SelectInput>
        <option value="">Filter by Region</option>
        <option value="africa">Africa</option>
        <option value="america">America</option>
        <option value="asia">Asia</option>
        <option value="europe">Europe</option>
        <option value="oceania">Oceania</option>
      </SelectInput>
    </InputContainer>
  );
}

export default Inputs;
