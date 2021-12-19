import { useState } from 'react';
import { MainContainer } from '../styles/StyledHome';
import CountryCard from '../components/CountryCard';
import Link from 'next/link';

export default function Home({ countries }) {
  const [filter, setFilter] = useState('');
  return (
    <MainContainer>
      {countries.map((country) => (
        <CountryCard key={country.name} country={country} />
      ))}
    </MainContainer>
  );
}

export const getStaticProps = async () => {
  const res = await fetch('https://restcountries.com/v2/all');
  const countries = await res.json();

  return {
    props: {
      countries,
    },
  };
};
