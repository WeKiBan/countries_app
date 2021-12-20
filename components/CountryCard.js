import Link from 'next/link';
import {
  CardStyled,
  FlagContainerStyled,
  CountryNameStyled,
  ParagraphStyled,
  SpanStyled,
} from '../styles/CountryCardStyled';
import { numberWithCommas } from '../utilities/commaNumber';

function CountryCard({ country }) {
  return (
    <Link href="/country/[name]" as={`/country/${country.name}`} passHref>
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
    </Link>
  );
}

export default CountryCard;
