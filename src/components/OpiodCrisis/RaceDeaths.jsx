import React from 'react'
import Chart from 'react-google-charts'

export const RaceDeaths = () => {
    const RaceData = [
        ['Year', 'White', 'Black', 'Hispanic', 'Total'],
        ['2009', 17084, 1380, 1470, 20422],
        ['2010', 17927, 1339, 1373, 21089],
        ['2011', 19132, 1489, 1634, 22784],
        ['2012', 19239, 1619, 1718, 23157],
        ['2013', 20599, 1926, 1958, 25052],
        ['2014', 23574, 2298, 2107, 28647],
        ['2015', 27056, 2741, 2507, 33091],
        ['2016', 33450, 4374, 3440, 42249],
        ['2017', 37113, 5513, 3932, 47600],
    ]

    return (
        <Chart
            width={'1800px'}
            height={'600px'}
            chartType="Bar"
            loader={<div>Loading Chart</div>}
            data={RaceData}
            options={{
                chart: {
                title: 'Death by Race',
                subtitle: '2009-2017',
                },
            }}
        />
    )
}