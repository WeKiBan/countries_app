import styled from 'styled-components';

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  background: ${({ theme }) => theme.background};
  align-items: center;
  max-width: 1200px;
  padding: 40px;
  padding-top: 100px;
  margin: 0 auto;
`;

export const CardContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;
  margin-top: 20px;
`;
