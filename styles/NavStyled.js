import styled from 'styled-components';
import Link from 'next/link';

export const NavStyled = styled.nav`
  display: flex;
  justify-content: space-between;
  position: fixed;
  top: 0;
  width: 100%;
  align-items: center;
  padding: 0 20px;
  height: 65px;
  background-color: ${({ theme }) => theme.input};
  z-index: 2;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 5px 0px,
    rgba(0, 0, 0, 0.1) 0px 0px 1px 0px;
`;

export const ButtonStyled = styled.button`
  border: none;
  background: none;
  display: flex;
  align-items: center;
  cursor: pointer;
  transition: transform 0.3s ease-in-out;
  &:hover {
    transform: scale(0.98);
  }
`;

export const LinkStyled = styled.a`
  font-weight: 600;
  cursor: pointer;
`;
