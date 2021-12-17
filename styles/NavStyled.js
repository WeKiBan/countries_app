import styled from 'styled-components';
import Link from 'next/link';

export const NavStyled = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  border-bottom: 2px grey solid;
`;

export const ButtonStyled = styled.button`
  border: none;
  background: none;
  display: flex;
  align-items: center;
`;

export const LinkStyled = styled.a`
  font-weight: 600;
`;
