import styled from 'styled-components';
import { theme } from '../../../styles';

export default function DefaultHeader() {
  return (
    <HeaderContiner>
      <HeaderTitle>Insight Shopper</HeaderTitle>
    </HeaderContiner>
  );
}

const HeaderContiner = styled.div`
  height: 70px;
  display: flex;
  align-items: center;
  background-color: ${theme.BLUE};
`;

const HeaderTitle = styled.span`
  margin-left: 20px;
  color: #fff;
  font-size: 25px;
`;
