import Nav from './Nav';

function Layout({ children, toggleTheme, dark }) {
  return (
    <>
      <Nav dark={dark} toggleTheme={toggleTheme} />
      {children}
    </>
  );
}

export default Layout;
