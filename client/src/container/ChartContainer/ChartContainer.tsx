import styled from 'styled-components';
import SimpleLineChart from '../../components/lineCharts/SimpleLineChart';

export default function ChartContainer() {
  return (
    <StyledChartContainer>
      <SimpleLineChart />
    </StyledChartContainer>
  );
}

export const StyledChartContainer = styled.div`
  display: flex;
  margin-top: 3rem;
  justify-content: center;
`;
