import React from 'react';
import Chart from 'react-google-charts';

export const TotalDeathsAreaChart = () => {
  return (
    <Chart
    width={'1500px'}
    height={'600px'}
    chartType="AreaChart"
    loader={<div>Loading Chart</div>}
    data={[
        ['Year', 'Opioid Overdose Deaths'],
        ['2015', 43472],
        ['2016', 55529],
        ['2017', 62172],
        ['2018', 74621]
    ]}
    options={{
        isStacked: true,
        height: 600,
        width: 2000,
        legend: { position: 'top', maxLines: 3 },
        vAxis: { minValue: 0 },
        ineWidth: 25
    }}
    />
  )

}