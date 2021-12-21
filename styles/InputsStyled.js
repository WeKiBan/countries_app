import styled from 'styled-components';
import { BsSearch } from 'react-icons/bs';

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 1000px;
  @media (min-width: 650px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const SearchInputWrapper = styled.div`
  position: relative;
  width: 250px;
  height: 45px;
  margin-bottom: 20px;
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
  height: 45px;
  border: none;
  border-radius: 5px;
  padding-left: 40px;
  background-color: ${({ theme }) => theme.input};
  cursor: pointer;
  ::placeholder {
    color: ${({ theme }) => theme.textColor};
  }

  :-ms-input-placeholder {
    color: ${({ theme }) => theme.textColor};
  }

  ::-ms-input-placeholder {
    color: ${({ theme }) => theme.textColor};
  }
`;

export const SelectInput = styled.select`
  width: 205px;
  height: 45px;
  padding: 0 10px;
  border: none;
  box-shadow: ${({ theme }) => theme.shadow};
  background-color: ${({ theme }) => theme.input};
  border-radius: 5px;
  cursor: pointer;
  ::placeholder {
    color: ${({ theme }) => theme.textColor};
  }

  :-ms-input-placeholder {
    color: ${({ theme }) => theme.textColor};
  }

  ::-ms-input-placeholder {
    color: ${({ theme }) => theme.textColor};
  }
`;
