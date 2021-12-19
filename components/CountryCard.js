import {
  CardStyled,
  FlagContainerStyled,
  CountryNameStyled,
  ParagraphStyled,
  SpanStyled,
} from '../styles/CountryCardStyled';
import { numberWithCommas } from '../utilities/commaNumber';

function CountryCard({ country }) {
  console.log(country);
  return (
    <CardStyled>
      <FlagContainerStyled bg={country.flag}></FlagContainerStyled>
      <CountryNameStyled>{country.name}</CountryNameStyled>
      <ParagraphStyled>
        <SpanStyled>Population: </SpanStyled>
        {numberWithCommas(country.population)}
      </ParagraphStyled>
      <ParagraphStyled>
        <SpanStyled>Region: </SpanStyled>
        {country.region}
      </ParagraphStyled>
      <ParagraphStyled>
        <SpanStyled>Capital: </SpanStyled>
        {country.capital}
      </ParagraphStyled>
    </CardStyled>
  );
}

export default CountryCard;
