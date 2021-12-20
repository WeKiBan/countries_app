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
  display: flex;
  margin-top: 20px;
  width: 100%;
  img {
    width: 100%;
  }
`;

export const InfoContainer = styled.div`
  display: grid;
  grid-gap: 15px;
  grid-template-areas:
    'countryName'
    'infoSectionOne'
    'infoSectionTwo';
`;

export const CountryName = styled.h2`
  margin: 0;
  font-size: 18px;
  grid-area: countryName;
`;

export const InfoSectionOne = styled.div`
  grid-area: infoSectionOne;
  font-weight: 600;
  font-size: 12px;
  span {
    font-weight: 300;
  }
`;

export const InfoSectionTwo = styled.div`
  grid-area: infoSectionTwo;
  font-weight: 600;
  font-size: 12px;
  span {
    font-weight: 300;
  }
`;
