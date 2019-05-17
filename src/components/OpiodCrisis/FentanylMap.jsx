import React, { useContext } from 'react'
import Chart from 'react-google-charts'
import { GlobalContext } from '../Context/GlobalContext'
import { YearEnum } from '../../types/YearEnums'
const apiKey = 'AIzaSyBqNG9kYP2yxI3D0h9roxhM7rtUwyU373s'

/*

    Jeremy's component was built to show the increase in opioid deaths over time.

    NOTE: The data in this component is hard coded because I was having issues with the API for a week+ 

    I was able to resolve those issues to finish the other views, but with limited time I went ahead
    and began working on my views by computing the list of lists below in python scripts.

*/

export const FentanylMap = () => {
    const { state: {year}} = useContext(GlobalContext)

    const data = {
        TwentyThirteen: 
        [
            ['US-State','Cops Report Encountering Fentanyl'],
            ['US-AL',50],
            ['US-AK',50],
            ['US-AZ',50],
            ['US-AR',50],
            ['US-CA',50],
            ['US-CO',50],
            ['US-CT',50],
            ['US-DC',50],
            ['US-FL',50],
            ['US-GA',50],
            ['US-ID',50],
            ['US-IL',50],
            ['US-IN',50],
            ['US-IA',50],
            ['US-KS',50],
            ['US-KY',50],
            ['US-LA',50],
            ['US-ME',50],
            ['US-MD',99],
            ['US-MA',50],
            ['US-MI',50],
            ['US-MN',50],
            ['US-MS',50],
            ['US-MO',50],
            ['US-MT',50],
            ['US-NE',50],
            ['US-NV',50],
            ['US-NH',50],
            ['US-NJ',50],
            ['US-NY',50],
            ['US-NC',50],
            ['US-ND',50],
            ['US-OH',249],
            ['US-OK',50],
            ['US-OR',50],
            ['US-PA',99],
            ['US-SC',50],
            ['US-SD',50],
            ['US-TN',50],
            ['US-TX',50],
            ['US-UT',50],
            ['US-VT',50],
            ['US-VA',249],
            ['US-WA',50],
            ['US-WV',50],
            ['US-WI',50],
            ['US-WY',50],
        ],
        TwentyFourtteen: 
        [
            ['US-State','Cops Report Encountering Fentanyl'],
            ['US-AL',50],
            ['US-AK',50],
            ['US-AZ',50],
            ['US-AR',50],
            ['US-CA',99],
            ['US-CO',50],
            ['US-CT',50],
            ['US-DE',50],
            ['US-DC',50],
            ['US-FL',249],
            ['US-GA',99],
            ['US-ID',50],
            ['US-IL',50],
            ['US-IN',249],
            ['US-IA',50],
            ['US-KS',50],
            ['US-KY',249],
            ['US-LA',50],
            ['US-ME',50],
            ['US-MD',499],
            ['US-MA',500],
            ['US-MI',99],
            ['US-MN',50],
            ['US-MS',50],
            ['US-MO',99],
            ['US-MT',50],
            ['US-NE',50],
            ['US-NV',50],
            ['US-NH',249],
            ['US-NJ',499],
            ['US-NM',50],
            ['US-NY',249],
            ['US-NC',50],
            ['US-ND',50],
            ['US-OH',500],
            ['US-OK',50],
            ['US-OR',50],
            ['US-PA',499],
            ['US-RI',50],
            ['US-SC',50],
            ['US-SD',50],
            ['US-TN',50],
            ['US-TX',50],
            ['US-UT',50],
            ['US-VT',50],
            ['US-VA',249],
            ['US-WA',50],
            ['US-WV',99],
            ['US-WI',50],
            ['US-WY',50]
        ],
        TwentyFifteen: 
        [
            ['US-State','Cops Report Encountering Fentanyl'],
            ['US-State',2015],
            ['US-AL',99],
            ['US-AK',50],
            ['US-AZ',50],
            ['US-AR',99],
            ['US-CA',99],
            ['US-CO',50],
            ['US-CT',50],
            ['US-DC',50],
            ['US-FL',500],
            ['US-GA',99],
            ['US-HI',50],
            ['US-ID',50],
            ['US-IL',50],
            ['US-IN',249],
            ['US-IA',50],
            ['US-KS',50],
            ['US-KY',500],
            ['US-LA',50],
            ['US-ME',99],
            ['US-MD',499],
            ['US-MA',500],
            ['US-MI',249],
            ['US-MN',50],
            ['US-MS',50],
            ['US-MO',500],
            ['US-MT',50],
            ['US-NE',50],
            ['US-NV',50],
            ['US-NH',500],
            ['US-NJ',500],
            ['US-NM',50],
            ['US-NY',500],
            ['US-NC',50],
            ['US-ND',50],
            ['US-OH',500],
            ['US-OK',50],
            ['US-OR',50],
            ['US-PA',500],
            ['US-RI',50],
            ['US-SC',249],
            ['US-TN',249],
            ['US-TX',50],
            ['US-UT',50],
            ['US-VT',50],
            ['US-VA',500],
            ['US-WA',50],
            ['US-WV',99],
            ['US-WI',99],
            ['US-WY',50]
        ],
    }

    const determineData = () => {
        switch(year){
            case YearEnum.TWENTYTHIRTEEN:
              return data.TwentyThirteen
            case YearEnum.TWENTYFOURTEEN:
                return data.TwentyFourtteen
            case YearEnum.TWENTYFIFTEEN:
                return data.TwentyFifteen
            default:
                return data.TwentyThirteen
        }
    }

    const options = {
        region: 'US',
        displayMode: 'regions',
        resolution: 'provinces',
        colorAxis: {minValue: 0, maxValue: 500, colors: ['#f4d142', '#ff0000']}
    }

    return (
        <Chart
            width={'2000px'}
            height={'600px'}
            chartType="GeoChart"
            options={options}
            data={determineData()}
            mapsApiKey={apiKey}
        />
    )
}