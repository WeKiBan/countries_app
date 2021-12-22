import Link from 'next/link';
import {
  CardStyled,
  FlagContainerStyled,
  CountryNameStyled,
  ParagraphStyled,
  SpanStyled,
  InfoContainer,
} from '../styles/CountryCardStyled';
import { numberWithCommas } from '../utilities/commaNumber';

function CountryCard({ country }) {
  return (
    <Link href="/country/[code]" as={`/country/${country.alpha3Code}`} passHref>
      <CardStyled>
        <FlagContainerStyled>
          <img src={country.flag} alt="flag" />
        </FlagContainerStyled>
        <InfoContainer>
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
        </InfoContainer>
      </CardStyled>
    </Link>
  );
}

export default CountryCard;
