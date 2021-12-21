import styled from 'styled-components';

export const CountryPageContainer = styled.div`
  display: grid;
  align-items: flex-start;
  grid-template-areas:
    'button button'
    'flag info';
  grid-template-columns: 1fr 1fr;
  grid-gap: 50px;
  width: 100%;
  margin-top: 65px;
  padding: 0 20px;
  @media (max-width: 750px) {
    grid-template-areas:
      'button'
      'flag'
      'info';
    grid-template-columns: 1fr;
    grid-gap: 20px;
  }
`;

export const GoBackButton = styled.button`
  grid-area: button
  display: flex;
  align-items: center;
  width: 75px;
  height: 30px;
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
  cursor: pointer;
  transition: transform 0.3s ease-in-out;
  &:hover {
    transform: scale(0.95);
  }
`;

export const FlagContainer = styled.div`
  grid-area: flag;
  display: flex;
  margin-bottom: 20px;
  width: 100%;
  img {
    max-width: 100%;
    min-height: 100%;
    min-width: 100%;
    max-width: 100%;
    object-fit: cover;
  }
`;

export const InfoContainer = styled.div`
  grid-area: info;
  display: grid;
  grid-gap: 15px;
  grid-template-areas:
    'countryName'
    'infoSectionOne'
    'infoSectionTwo'
    'borderCountries';
  @media (min-width: 750px) {
    grid-template-areas:
      'countryName CountryName'
      'infoSectionOne infoSectionTwo'
      'borderCountries borderCountries';
    grid-gap: 30px;
  }
`;

export const CountryName = styled.h2`
  grid-area: countryName;
  margin: 0;
  font-size: 18px;
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
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin-bottom: 30px;
  h3 {
    margin: 0;
    margin-bottom: 10px;
    font-size: 14px;
    font-weight: 400;
    white-space: nowrap;
    margin-right: 20px;
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
  @media (min-width: 750px) {
    flex-direction: row;
    margin-bottom: 0;
  }
`;
