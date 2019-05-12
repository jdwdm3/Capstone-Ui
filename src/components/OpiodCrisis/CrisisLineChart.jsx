import React from 'react';
import '../../../node_modules/react-vis/dist/style.css'
import Chart from 'react-google-charts'
import { PulseLoader } from 'react-spinners'
import styled, { keyframes } from 'styled-components'
import { fadeIn } from 'react-animations'
 
const bounceAnimation = keyframes`${fadeIn}`
 
const BouncyChart = styled(Chart)`
  animation: 5s ${bounceAnimation};
`

export const AnyOpiod = [
    {
        x: "2000",
        y: 3.00
    },
    {
        x: "2001",
        y: 3.30
    },
    {
        x: "2002",
        y: 4.10
    },
    {
        x: "2003",
        y: 4.50
    },
    {
        x: "2004",
        y: 4.70
    },
    {
        x: "2005",
        y: 5.10
    },
    {
        x: "2006",
        y: 5.90
    },
    {
        x: "2007",
        y: 6.10
    },
    {
        x: "2008",
        y: 6.40
    },
    {
        x: "2009",
        y: 6.60
    },
    {
        x: "2010",
        y: 6.80
    },
    {
        x: "2011",
        y: 7.30
    },
    {
        x: "2012",
        y: 7.40
    },
    {
        x: "2013",
        y: 7.9
    },
    {
        x: "2014",
        y: 9.00
    },
    {
        x: "2015",
        y: 10.40
    },
    {
        x: "2016",
        y: 13.30
    },
    {
        x: "2017",
        y: 14.9
    },
]
export const Sythetic = [
    {
        x: "2000",
        y: 0.3
        },
        
        {
        x: "2001",
        y: 0.3
        },
        
        {
        x: "2002",
        y: 0.4
        },
        
        {
        x: "2003",
        y: 0.5
        },
        
        {
        x: "2004",
        y: 0.6
        },
        
        {
        x: "2005",
        y: 0.6
        },
        
        {
        x: "2006",
        y: 0.9
        },
        
        {
        x: "2007",
        y: 0.7
        },
        
        {
        x: "2008",
        y: 0.8
        },
        
        {
        x: "2009",
        y: 1.0
        },
        
        {
        x: "2010",
        y: 1.0
        },
        
        {
        x: "2011",
        y: 0.8
        },
        
        {
        x: "2012",
        y: 0.8
        },
        
        {
        x: "2013",
        y: 1.0
        },
        
        {
        x: "2014",
        y: 1.8
        },
        
        {
        x: "2015",
        y: 3.1
        },
        
        {
        x: "2016",
        y: 6.2
        },
        
        {
        x: "2017",
        y: 9.0
        },
]
export const Prescription = [
    {
        x: "2000",
        y: 1.3
       },
       
       {
        x: "2001",
        y: 1.7
       },
       
       {
        x: "2002",
        y: 2.3
       },
       
       {
        x: "2003",
        y: 2.6
       },
       
       {
        x: "2004",
        y: 2.9
       },
       
       {
        x: "2005",
        y: 3.2
       },
       
       {
        x: "2006",
        y: 3.9
       },
       
       {
        x: "2007",
        y: 4.2
       },
       
       {
        x: "2008",
        y: 4.3
       },
       
       {
        x: "2009",
        y: 4.4
       },
       
       {
        x: "2010",
        y: 4.7
       },
       
       {
        x: "2011",
        y: 4.9
       },
       
       {
        x: "2012",
        y: 4.5
       },
       
       {
        x: "2013",
        y: 4.4
       },
       
       {
        x: "2014",
        y: 4.6
       },
       
       {
        x: "2015",
        y: 4.7
       },
       
       {
        x: "2016",
        y: 5.2
       },
       
       {
        x: "2017",
        y: 5.2
       },
]
export const Heroin = [
    {
        x: "2000",
        y: 0.7
       },
       
       {
        x: "2001",
        y: 0.6
       },
       
       {
        x: "2002",
        y: 0.7
       },
       
       {
        x: "2003",
        y: 0.7
       },
       
       {
        x: "2004",
        y: 0.6
       },
       
       {
        x: "2005",
        y: 0.7
       },
       
       {
        x: "2006",
        y: 0.7
       },
       
       {
        x: "2007",
        y: 0.8
       },
       
       {
        x: "2008",
        y: 1.0
       },
       
       {
        x: "2009",
        y: 1.1
       },
       
       {
        x: "2010",
        y: 1.0
       },
       
       {
        x: "2011",
        y: 1.4
       },
       
       {
        x: "2012",
        y: 1.9
       },
       
       {
        x: "2013",
        y: 2.7
       },
       
       {
        x: "2014",
        y: 3.4
       },
       
       {
        x: "2015",
        y: 4.1
       },
       
       {
        x: "2016",
        y: 4.9
       },
       
       {
        x: "2017",
        y: 4.9
       },
]

const GoogleChartData =[
  ['Year','Any Opiod', 'Synthetic Opioids', 'Perscription Opioids', 'Heroin'],
  ['2000', 3, 0.3, 1.3, 0.7],
  ['2001', 3.3, 0.3, 1.7, 0.6],
  ['2002', 4.1, 0.4, 2.3, 0.7],
  ['2003', 4.5, 0.5, 2.6, 0.7],
  ['2004', 4.7, 0.6, 2.9, 0.6],
  ['2005', 5.1, 0.6, 3.2, 0.7],
  ['2006', 5.9, 0.9, 3.9, 0.7],
  ['2007', 6.1, 0.7, 4.2, 0.8],
  ['2008', 6.4, 0.8, 4.3, 1],
  ['2009', 6.6, 1, 4.4, 1.1],
  ['2010', 6.8, 1, 4.7, 1],
  ['2011', 7.3, 0.8, 4.9, 1.4],
  ['2012', 7.4, 0.8, 4.5, 1.9],
  ['2013', 7.9, 1, 4.4, 2.7],
  ['2014', 9, 1.8, 4.6, 3.4],
  ['2015', 10.4, 3.1, 4.7, 4.1],
  ['2016', 13.3, 6.2, 5.2, 4.9],
  ['2017', 14.9, 9, 5.2, 4.9]
]

export const CrisisLineChart = () => {
  return (
    <BouncyChart
      width={'1800px'}
      height={'400px'}
      chartType="LineChart"
      loader={<div><PulseLoader /> </div>}
      data={GoogleChartData}
      options={{
        hAxis: {
          title: 'Year',
        },
        vAxis: {
          title: 'Deaths Per 100,000',
        },
        series: {
          1: { curveType: 'function' },
        },
      }}
      rootProps={{ 'data-testid': '2' }}
      chartPackages={['corechart', 'controls']}
    />
  )
}
