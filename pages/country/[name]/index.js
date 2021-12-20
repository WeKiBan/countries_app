import Link from 'next/link';
import Image from 'next/image';
import {
  CountryPageContainer,
  FlagContainer,
  GoBackButton,
} from '../../../styles/CountryStyled';
import { AiOutlineArrowLeft } from 'react-icons/ai';

const country = ({ country }) => {
  console.log(country);
  return (
    <CountryPageContainer>
      <Link href="/">
        <GoBackButton>
          <AiOutlineArrowLeft /> Back
        </GoBackButton>
      </Link>
      <FlagContainer>
        <Image layout="fill" src={country.flag} alt="flag" />
      </FlagContainer>
      <h4>{country.name}</h4>
    </CountryPageContainer>
  );
};

export const getStaticProps = async (context) => {
  const res = await fetch('https://restcountries.com/v2/all');
  const data = await res.json();
  const country = data.find((item) => item.name === context.params.name);

  return {
    props: {
      country: country,
    },
  };
};

export const getStaticPaths = async () => {
  const res = await fetch('https://restcountries.com/v2/all');
  const countries = await res.json();
  const names = countries.map((country) => country.name);
  const paths = names.map((name) => ({ params: { name: name } }));
  return {
    paths,
    fallback: false,
  };
};

export default country;
