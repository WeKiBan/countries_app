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
  margin: 20px 0;
  background: ${({ theme }) => theme.input};
  border: none;
  border-radius: 2px;
  box-shadow: ${({ theme }) => theme.shadow};
  font-weight: 300;
  font-size: 12px;
`;

export const FlagContainer = styled.div`
  display: flex;
  margin-bottom: 20px;
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
    'infoSectionTwo'
    'borderCountries';
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

export const BorderCountriesContainer = styled.div`
  grid-area: borderCountries;
  margin-bottom: 30px;
  h3 {
    margin: 0;
    margin-bottom: 10px;
    font-size: 14px;
    font-weight: 400;
  }
  div {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    justify-content: flex-start;
    gap: 10px;
  }
  a {
    min-width: 75px;
    height: 25px;
    background-color: ${({ theme }) => theme.input};
    border: none;
    border-radius: 2px;
    box-shadow: ${({ theme }) => theme.shadow};
    font-weight: 300;
    font-size: 12px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;
    transition: transform 0.3s ease-in-out;
    &:hover {
      transform: scale(0.95);
    }
  }
`;
