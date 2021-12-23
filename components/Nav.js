import Link from 'next/link';
import { NavStyled, ButtonStyled, LinkStyled } from '../styles/NavStyled';
import { FaMoon, FaRegMoon } from 'react-icons/fa';

function Nav({ toggleTheme, dark }) {
  return (
    <NavStyled>
      <Link href="/" passHref>
        <LinkStyled>Where in the world?</LinkStyled>
      </Link>
      <ButtonStyled onClick={toggleTheme}>
        {dark ? (
          <FaMoon style={{ margin: '5px' }} />
        ) : (
          <FaRegMoon style={{ margin: '5px' }} />
        )}
        {dark ? 'Light Mode' : 'Dark Mode'}
      </ButtonStyled>
    </NavStyled>
  );
}

export default Nav;
