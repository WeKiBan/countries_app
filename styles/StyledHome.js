import styled from 'styled-components';

export const MainContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 20px;
  background: ${({ theme }) => theme.background};
  padding-top: 80px;
  justify-content: center;
  align-items: center;
  max-width: 1000px;
  margin: 0 auto;
`;
