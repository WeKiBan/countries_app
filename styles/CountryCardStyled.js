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
  img {
    width: 100%;
  }
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  justify-content: center;
  margin: 20px;
`;

export const CountryNameStyled = styled.h3`
  margin: 0;
  margin-bottom: 5px;
  font-size: 18px;
  font-weight: 600;
`;

export const ParagraphStyled = styled.p`
  margin: 5px 0;
  font-size: 14px;
`;

export const SpanStyled = styled.span`
  font-weight: 500;
`;
