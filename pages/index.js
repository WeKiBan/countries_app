import { useState } from 'react';
import { MainContainer, CardContainer } from '../styles/StyledHome';
import CountryCard from '../components/CountryCard';
import Inputs from '../components/Inputs';

export default function Home({ countries }) {
  const [filter, setFilter] = useState('');
  return (
    <MainContainer>
      <Inputs />
      <CardContainer>
        {countries.map((country, index) => (
          <CountryCard key={index} country={country} />
        ))}
      </CardContainer>
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
