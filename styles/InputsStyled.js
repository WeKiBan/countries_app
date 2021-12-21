import styled from 'styled-components';
import { BsSearch } from 'react-icons/bs';

export const InputContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 40px;
  width: 100%;
  max-width: 1000px;
`;

export const SearchInputWrapper = styled.div`
  position: relative;
  width: 250px;
  height: 100%;
  border-radius: 5px;
  overflow: hidden;
  box-shadow: ${({ theme }) => theme.shadow};
`;

export const SearchIcon = styled(BsSearch)`
  position: absolute;
  left: 10px;
  top: 12px;
  color: lightgrey;
`;

export const SearchInput = styled.input`
  width: 250px;
  height: 100%;
  border: none;
  border-radius: 5px;
  padding-left: 40px;
  background-color: ${({ theme }) => theme.input};
`;

export const SelectInput = styled.select`
  width: 125px;
  height: 100%;
  border: none;
  box-shadow: ${({ theme }) => theme.shadow};
  background-color: ${({ theme }) => theme.input};
  border-radius: 5px;
  padding: 0 10px;
`;
