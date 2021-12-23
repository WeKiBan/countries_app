/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import Image from 'next/image';
import {
  CountryPageContainer,
  FlagContainer,
  GoBackButton,
  InfoContainer,
  CountryName,
  InfoSectionOne,
  InfoSectionTwo,
  BorderCountriesContainer,
} from '../../../styles/CountryStyled';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { numberWithCommas } from '../../../utilities/commaNumber';

const country = ({ country }) => {
  const {
    name,
    nativeName,
    currencies,
    capital,
    population,
    region,
    subregion,
    flags,
    borders,
    topLevelDomain,
    languages,
  } = country;

  return (
    <CountryPageContainer>
      <Link href="/" passHref>
        <GoBackButton>
          <AiOutlineArrowLeft /> Back
        </GoBackButton>
      </Link>
      <FlagContainer>
        <img src={flags.svg} alt="flag" />
      </FlagContainer>
      <InfoContainer>
        <CountryName>{name}</CountryName>
        <InfoSectionOne>
          <p>
            Native Name: <span>{nativeName}</span>
          </p>
          <p>
            Population: <span>{numberWithCommas(population)}</span>
          </p>
          <p>
            Region: <span>{region}</span>
          </p>
          <p>
            Sub Region: <span>{subregion}</span>
          </p>
          <p>
            Capital: <span>{capital}</span>
          </p>
        </InfoSectionOne>
        <InfoSectionTwo>
          <p>
            Top Level Domain: <span>{topLevelDomain}</span>
          </p>
          <p>
            Currencies:{' '}
            <span>
              {currencies?.map((currency) => currency.name).toString()}
            </span>
          </p>
          <p>
            Languages:{' '}
            <span>
              {languages?.map((language) => language.name).toString()}
            </span>
          </p>
        </InfoSectionTwo>
        <BorderCountriesContainer>
          <h3>Border Countries:</h3>

          {borders ? (
            <div>
              {borders?.map((country, index) => (
                <Link
                  href="/country/[code]"
                  as={`/country/${country}`}
                  key={index}
                  passHref
                >
                  <a>{country}</a>
                </Link>
              ))}
            </div>
          ) : (
            'N/A'
          )}
        </BorderCountriesContainer>
      </InfoContainer>
    </CountryPageContainer>
  );
};

export const getStaticProps = async (context) => {
  const res = await fetch(
    `https://restcountries.com/v2/alpha/${context.params.code}`
  );
  const country = await res.json();

  return {
    props: {
      country,
    },
  };
};

export const getStaticPaths = async () => {
  const res = await fetch('https://restcountries.com/v2/all');
  const countries = await res.json();
  const codes = countries?.map((country) => country.alpha3Code);
  const paths = codes?.map((code) => ({ params: { code: code } }));
  return {
    paths,
    fallback: false,
  };
};

export default country;
