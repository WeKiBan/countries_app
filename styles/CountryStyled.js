import styled from 'styled-components';

export const CountryPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 65px;
  padding: 0 20px;
`;

export const GoBackButton = styled.button`
  display: flex;
  align-items: center;
  width: 75px;
  justify-content: space-evenly;
  padding: 5px 0;
  margin: 0;
  margin-top: 20px;
  background: ${({ theme }) => theme.input};
  border: none;
  border-radius: 2px;
  box-shadow: ${({ theme }) => theme.shadow};
`;

export const FlagContainer = styled.div`
  position: relative;
  height: 200px;
  margin: 20px 0;
`;
