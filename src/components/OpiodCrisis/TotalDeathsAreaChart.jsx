import React from 'react';
import Chart from 'react-google-charts';

/*

    Jeremy's component was built to show TOTAL deaths

    NOTE: The data in this component is hard coded because I was having issues with the API for a week+ 

    I was able to resolve those issues to finish the other views, but with limited time I went ahead
    and began working on my views by computing the list of lists below in python scripts.

*/

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