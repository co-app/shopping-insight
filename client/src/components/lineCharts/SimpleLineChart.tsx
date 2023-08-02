import React from 'react';
import { useSelector } from 'react-redux';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import { RootState } from '../../redux/reducers';
import { flex } from '../../styles';

const ColorParmas = {
  '10': 'blue',
  '20': 'red',
  '30': 'black',
  '40': 'gray',
  '50': 'green',
};

/////////////////////
// metrics
/////////////////////
const metris = [
  {
    group: 10,
    ratiox: 20,
    ratioy: 150,
    ratioz: 150,
    period: '2023-01-01',
  },
  {
    group: 20,
    ratio10: 20,
    ratio20: 150,
    ratio30: 150,
    period: '2023-01-01',
  },
  {
    group: 30,
    ratiox: 20,
    ratioy: 150,
    ratioz: 150,
    period: '2023-01-02',
  },
  {
    group: 40,
    ratiox: 20,
    ratioy: 150,
    ratioz: 150,
    period: '2023-01-05',
  },
];

/////////////////////
// groups
/////////////////////

const data = [
  {
    group: 10,
    ratio: 30,
    period: '2023-01-01',
  },
];

const data2 = [
  {
    group: 20,
    ratio: 11,
    period: '2023-03-01',
  },
];

const data3 = [
  {
    group: 30,
    ratio: 24,
    period: '2023-03-01',
  },
];

const data4 = [
  {
    group: 40,
    ratio: 61,
    period: '2023-03-01',
  },
];

const data5 = [
  {
    group: 50,
    ratio: 11,
    period: '2023-03-01',
  },
];

const SimpleLineChart: React.FC = () => {
  const responseData = useSelector((state: RootState) => {
    if (!state.shopping.responseData?.results) {
      return state.shopping.responseData?.results;
    }

    const m: Map<string, Array<{ period: string; ratio: number }>> = new Map();

    for (const { period, ratio, group } of state.shopping.responseData
      .results[0].data) {
      if (m.get(group)) {
        m.set(group, [...m.get(group), { period, ratio }]);
      } else {
        m.set(group, [{ period, ratio }]);
      }
    }

    console.log(m);

    return [];
  });
  // const combinedData = [...data, ...data2, ...data3, ...data4, ...data5];
  // const groupedData = combinedData.reduce((result, item) => {
  //   const { period, ...rest } = item;
  //   const existingItem = result.find(
  //     groupedItem => groupedItem.period === period,
  //   );

  //   if (existingItem) {
  //     existingItem.data.push(rest);
  //   } else {
  //     result.push({ period, data: [rest] });
  //   }

  //   return result;
  // }, []);
  // console.log(groupedData);

  return (
    //     <LineChart
    //       width={730}
    //       height={250}
    //       data={responseData}
    //       margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
    //     >
    //       <XAxis dataKey="startDate" />
    //       <YAxis dataKey="ratio" />
    //       <CartesianGrid strokeDasharray="3 3" />
    //       <Tooltip />
    //       <Legend verticalAlign="top" height={36} />
    //       <Line name="pv of pages" type="monotone" dataKey="pv" stroke="#8884d8" />
    //       <Line name="uv of pages" type="monotone" dataKey="uv" stroke="#82ca9d" />
    //     </LineChart>
    //   );
    // };

    // <ResponsiveContainer width="100%" height="100%">
    <LineChart
      width={1000}
      height={800}
      data={metris}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="period" />
      <YAxis dataKey="group" />
      <Tooltip />
      <Legend
        layout="horizontal"
        verticalAlign="top"
        align="center"
        height={40}
        iconType="rect"
        iconSize={20}
      />
      {[data, data2, data3, data4, data5].flat().map(it => (
        <Line
          name={`${it.group}대`} // legend 에 표시될 이름
          key={it.ratio}
          type="monotone" // 선 보간 유형
          dataKey={'ratioy'}
          stroke={ColorParmas[it.group]}
        />
      ))}
    </LineChart>
    // </ResponsiveContainer>
  );
};

export default SimpleLineChart;

{
  /* <CartesianGrid strokeDasharray="3 3" />
<XAxis dataKey={xAxisDataKey} />
<YAxis />
<Tooltip />
<Legend
  layout="horizontal"
  verticalAlign="top"
  align="center"
  height={40}
  iconType="rect"
  iconSize={20}
/>
{groups.map(group => (
  <Line
    name={`${group}${groupName}`} // legend 에 표시될 이름
    key={group}
    type="monotone" // 선 보간 유형
    dataKey={group}
    stroke={getLineColor(group)}
  />
))}
</LineChart> */
}
