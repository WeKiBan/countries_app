import styled from 'styled-components';
import Image from 'next/image';

export const CardStyled = styled.a`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  width: 225px;
  border-radius: 5px;
  height: 300px;
  box-shadow: ${({ theme }) => theme.shadow}
  overflow: hidden;
  margin: 20px;
  cursor: pointer;
  background-color: ${({ theme }) => theme.elements};
  transition: transform 0.3s ease-in-out;
  &:hover {
    transform: scale(0.98);
  }
`;

export const FlagContainerStyled = styled.div`
  display: flex;
  height: 150px;
  background: url(${({ bg }) => bg});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
`;

export const CountryNameStyled = styled.h3`
  margin: 15px 20px;
  font-size: 18px;
  font-weight: 600;
`;

export const ParagraphStyled = styled.p`
  margin: 5px 20px;
  font-size: 14px;
`;

export const SpanStyled = styled.span`
  font-weight: 500;
`;
