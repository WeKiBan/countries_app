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
        <SearchInput />
      </SearchInputWrapper>
      <SelectInput />
    </InputContainer>
  );
}

export default Inputs;
