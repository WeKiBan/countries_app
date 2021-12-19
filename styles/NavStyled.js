import styled from 'styled-components';
import Link from 'next/link';

export const NavStyled = styled.nav`
  display: flex;
  justify-content: space-between;
  position: fixed;
  width: 100%;
  align-items: center;
  padding: 20px 30px;
  border-bottom: 2px grey solid;
  background-color: ${({ theme }) => theme.input};
  z-index: 2;
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
