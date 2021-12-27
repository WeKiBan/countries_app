# Rest Countries API App

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- See all countries from the API on the homepage
- Search for a country using an `input` field
- Filter countries by region
- Click on a country to see more detailed information on a separate page
- Click through to the border countries on the detail page
- Toggle the color scheme between light and dark mode

### Screenshot

![](images/restCountries.gif)

### Links

- Solution URL: [https://github.com/WeKiBan/ip-address-tracker](https://github.com/WeKiBan/ip-address-tracker)
- Live Site URL: [https://restcountrysearch.netlify.app/](https://restcountrysearch.netlify.app/)

## My process

### Built with

- HTML/CSS
- Flexbox
- Grid
- [React](https://reactjs.org/) - JS library
- [Styled Components](https://styled-components.com/) - For Styling.
- [NextJS](https://nextjs.org/) - React Library which enables server-side rendering.
- [Rest Countries API](https://restcountries.com/) - API from where countries data is fetched.

### What I learned

To complete this project I had to first learn the basics and how to set up NextJS. The initial set up of NextJS is really similar to that of react but instead of using the create-react-app command we use create next-app. After using this we are given a boilerplate template that is all set up and ready to use to create our project.

The first hurdle to overcome with this new framework was how exactly to get the data from the Countries Rest API into our project. With NextJS we have 2 methods to achieve this, the first one is `getStaticProps` and the second method is `getServerSideProps`. The `getServerSideProps` method is best used for projects that need up to date information as it runs each time the page is refreshed, however for our project the information will not be changing frequently and so we are able to use the other method `getStaticProps`.

The `getStaticProps` method can be used to fetch data at build time and it wont be refreshed until another build has been run. This enables the page to be statically generated which will produce faster load times and the data is also rendered before it reaches the client which is great for SEO.

In order to use the `getStaticProps` method we must export an async function below our component.

```
export const getStaticProps = async () => {
  const res = await fetch('https://restcountries.com/v2/all');
  const countries = await res.json();

  return {
    props: {
      countries,
    },
  };
};
```

Here I fetched the data and then return an object named props containing the data. This data is then injected directly into the component and can be accessed through it's props.

Another great feature of NextJS is the ability to statically generate dynamic routes. This is achieved using the `getStaticPaths` method. NextJS has a file based routing system so when we add a file to the pages directory it's automatically available as a route. If wish to create a dynamic route we can simply use the bracket syntax in the file name. In my case I called the file `[code]` as I used the unique aplhacode from each country to create the route.

inside this file below the component much like the `getStaticProps` method we export another async function this time using the `getStaticPaths` method.

```
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
```

Inside this method we fetch the data and extract the information we wish to use for our paths. Finally returning the paths in an object.
In this way all of our paths are statically generated at build time making for a much faster user experience.

Overall I've really enjoyed using this framework as it handles a lot of the heavy lifting of creating static website and makes the whole process very simple and efficient. I still have a lot to learn about this framework and am looking forward to using it in future projects.



### Continued development

- Add a map feature using something like the Leaflet API to show where each country is.

### Useful resources

- [NextJS tutorial for beginners by Net Ninja](https://www.youtube.com/watch?v=A63UxsQsEbU&list=PL4cUxeGkcC9g9gP2onazU5-2M-AzA8eBw) - A Youtube course which I found very useful to learn the basics of NextJS
- [NextJS Crash Course by Brad Traversy](https://www.youtube.com/watch?v=mTz0GXj8NN0&t=3129s) - Another short course that helped me get a good understanding of how to use NextJS
