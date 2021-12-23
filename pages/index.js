import { useEffect, useState } from 'react';
import { MainContainer, CardContainer } from '../styles/StyledHome';
import CountryCard from '../components/CountryCard';
import Inputs from '../components/Inputs';

export default function Home({ countries }) {
  const [filteredCountries, setFilteredCountries] = useState(countries);
  const [regionCountries, setRegionCountries] = useState(countries);
  const [region, setRegion] = useState('');
  const [query, setQuery] = useState('');

  const handleSetFilteredCountries = (currentQuery) => {
    let newFilteredCountries;

    if (query) {
      newFilteredCountries = regionCountries.filter((country) =>
        country.name.toLowerCase().includes(currentQuery.toLowerCase())
      );
    } else {
      newFilteredCountries = regionCountries;
    }

    setFilteredCountries(newFilteredCountries);
  };

  const handleSetRegion = (currentRegion) => {
    let newRegionCountries;

    if (currentRegion) {
      newRegionCountries = countries.filter(
        (country) => country.region.toLowerCase() === currentRegion
      );
    } else {
      newRegionCountries = countries;
    }
    setRegion(currentRegion);

    setRegionCountries(newRegionCountries);
  };

  useEffect(() => {
    handleSetFilteredCountries(query);
  }, [query]);

  useEffect(() => {
    handleSetFilteredCountries(query);
  }, [regionCountries]);

  return (
    <MainContainer>
      <Inputs
        region={region}
        handleSetRegion={handleSetRegion}
        query={query}
        setQuery={setQuery}
        handleSetFilteredCountries={handleSetFilteredCountries}
      />
      <CardContainer>
        {filteredCountries?.map((country, index) => (
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
