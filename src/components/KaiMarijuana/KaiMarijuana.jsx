import React, { useContext } from 'react'
import Chart from 'react-google-charts'
import { CardContent, Card } from '@material-ui/core'
import { SideBar } from '../SideBar/SideBar'
import { GlobalContext } from '../Context/GlobalContext';
import { convertAbbreviationtoState } from './convertAbberviationToState';
const apiKey = 'AIzaSyBqNG9kYP2yxI3D0h9roxhM7rtUwyU373s'


//Converts JSON data to List of list: [{}] ==> [[]] 
const reformatLegalMarjiuanaStatesJsonToLists = (legalMarjiuanaStates,legal) => {
    let finalList = []
    let miniList = []

    finalList.push(['US-State','Medically OR Recreationally Legal'])

    for(let i = 0; i < legalMarjiuanaStates.length ; i++){
        miniList.push('US-'+legalMarjiuanaStates[i].state)
        miniList.push(legal)

        finalList.push(miniList)
        miniList = []
    }

    return finalList
}

//Converts JSON data to List of list: [{}] ==> [[]] 
const reformatLegalMarjiuanaStatesOdInfoJsonToLists = data => {
    let finalList = []
    let miniList = []

    finalList.push(['US-State','2015 Overdoses', '2018 Overdoses'])

    for(let i = 0; i < data.length; i++){
        miniList.push(convertAbbreviationtoState(data[i].state))
        miniList.push(parseInt(data[i].TwentyFifteen))
        miniList.push(parseInt(data[i].TwentyEighteen))


        finalList.push(miniList)
        miniList = []
    }

    return finalList
}

//Used to calculate the percentage change from our given data of overdoses over the three year span
const clalculatePercentageChange = data => {

    let percentageData = [['US-States', 'Percentage Change in Number of Overdoses']] 

    for(let i = 0; i < data.length ; i++){
        if(i !== 0){
            // Find the difference in 2018 - 2015
            const difference = data[i][2] - data[i][1]
            
            // Find the percentage change based on 2015
            const percentageChange = Math.round((difference/data[i][1])*100)

            percentageData[i]=[]
            percentageData[i].push(data[i][0])
            percentageData[i].push(percentageChange)
        }
    }

    return percentageData
}

// This function AVERAGES out the state level changes to give us insight on the overall picture
const calculateAveragePercentageChange = data => {

    let total18 = 0
    let total15 = 0

    for(let i = 0; i < data.length ; i++){
        if(i !== 0){
            total15 += data[i][1]
            total18 += data[i][2]
        }
    }

    const difference = total18 - total15
    const percentageDifference = Math.round((difference/total15)*100)

    return percentageDifference
}


/*

    Kai's component was built as an HTML wrapper to deliver visulizations surrounded marijuana data at the state level. 

    Below you will find this component grabbing data out of Context, and using a few helper functions above to clean the data in a manor that
    allows us to get some kind of idea about how marijuana has effected opioid deaths.

    Majority of the formatting was done of the API, but some basic caluclations were done above.

    The format goes as follows:

    <CARD FOR TITLES>

    <VISULIZAIONS> 

    in most cases

*/

export const KaiMarijuana = () => {
    //Pulling values out of global state, Data read from API (CentOS)
    const {state: {legalMarjiuanaStates, legalMarjiuanaStatesOdInfo, illegalMarjiuanaStatesOdInfo}} = useContext(GlobalContext)

    //--------------------------------------------------------------------------------------------------//
                                            // LEGAL Section //

    //Used for first map on screen (Viz1)
    const finalLegalizedMapData = reformatLegalMarjiuanaStatesJsonToLists(legalMarjiuanaStates,1)
    
    //Used for double bar chart (Viz2)
    const finalLegalMarjiuanaStatesOdInfo = reformatLegalMarjiuanaStatesOdInfoJsonToLists(legalMarjiuanaStatesOdInfo)
    
    // Used for viz3
    const percentageDifference = clalculatePercentageChange(finalLegalMarjiuanaStatesOdInfo)

    // Used for informative purposes (output on web app)
    const averagePercentageChangeForStatesWithLegalWeed = calculateAveragePercentageChange(finalLegalMarjiuanaStatesOdInfo)

    //--------------------------------------------------------------------------------------------------//
                                            // ILLEGAL Section //
    const finalILegaldMapData = reformatLegalMarjiuanaStatesJsonToLists(illegalMarjiuanaStatesOdInfo,0)

    const finalIllegalMarjiuanaStatesOdInfo = reformatLegalMarjiuanaStatesOdInfoJsonToLists(illegalMarjiuanaStatesOdInfo)

    const percentageDifferenceIllegal = clalculatePercentageChange(finalIllegalMarjiuanaStatesOdInfo)

    const averagePercentageChangeForStatesWithIllegalWeed = calculateAveragePercentageChange(finalIllegalMarjiuanaStatesOdInfo)



    return (
        <div>
            <SideBar />

            <div style={{padding: '20px'}}>
                <Card
                    raised
                    style={{ width: '1850px', textAlign: 'center' }}                  
                >
                <CardContent>
                    <h1>
                        The Effect of Legalizing Marijuana and Opioid Overdoses
                    </h1>
                    <h4>
                        Kai Wilson
                    </h4>
                </CardContent>
                </Card>
            </div>

            <div style={{ paddingLeft: '725px', paddingTop: '20px', textAlign: 'center', marginRight: 'auto',  marginLeft: 'auto' }}>
                <Card
                    raised
                    style={{ width: '400px' }}
                >
                    <CardContent>
                    <h3>
                        States with Legalized Marijuana <b>(2015)</b>
                    </h3>
                    </CardContent>
                </Card>
            </div>

            <div style={{padding: '20px'}}>
                <Card
                    raised
                    style={{ width: '1850px', textAlign: 'center' }}                  
                >
                <CardContent>
                    <h2>
                        All states in green represent states that have some form (Medical/Recreational) laws permitting Marijuna.
                    </h2>
                    <h4 style={{fontWeight:'lighter'}}>
                        We will examine the states not colored momentarily
                    </h4>
                    <Chart
                        width={'2000px'}
                        height={'600px'}
                        chartType="GeoChart"
                        options={{
                            region: 'US',
                            displayMode: 'regions',
                            resolution: 'provinces',
                            colorAxis: {minValue: 0, maxValue: 1, colors: ['white', 'green']}
                        }}
                        data={finalLegalizedMapData}
                        mapsApiKey={apiKey}
                    />
                </CardContent>
                </Card>
            </div>

            <div style={{ paddingLeft: '525px', paddingTop: '20px', textAlign: 'center', marginRight: 'auto',  marginLeft: 'auto' }}>
                <Card
                    raised
                    style={{ width: '800px' }}
                >
                    <CardContent>
                    <h3>
                        Examining Growth of Overdose Rates in States with Marjiunana Legallized <b>(2015-2018)</b>
                    </h3>
                    </CardContent>
                </Card>
            </div>

            <div style={{padding: '20px'}}>
                <Card
                    raised
                    style={{ width: '1800px' }}
                >
                <CardContent>
                <Chart
                    width={1800}
                    height={600}
                    chartType="ColumnChart"
                    loader={<div>Loading Chart</div>}
                    data={finalLegalMarjiuanaStatesOdInfo}
                    options={{
                        title: 'Overdoses by State 2015/2018',
                        
                        hAxis: {
                        title: 'State',
                        },
                        vAxis: {
                        title: 'Overdoses',
                        },
                    }}
                    legendToggle
                    />
                </CardContent>
                </Card>
            </div>

            <div style={{ paddingLeft: '525px', paddingTop: '20px', textAlign: 'center', marginRight: 'auto',  marginLeft: 'auto' }}>
                <Card
                    raised
                    style={{ width: '800px' }}
                >
                    <CardContent>
                    <h3>
                        Taking a Glance at Percentage Change in Overdoses by State (2015 --> 2018)
                    </h3>
                    </CardContent>
                </Card>
            </div>

            <div style={{padding: '20px', paddingLeft: '300px'}}>
                <Card
                    raised
                    style={{ width: '1400px', textAlign: 'center' }}
                >
                <CardContent>
                    <h1>
                        Average Percentage Change: {averagePercentageChangeForStatesWithLegalWeed}%
                    </h1>
                    <h4 style={{fontWeight: 'lighter'}}>
                        *This was calculated by adding the TOTAL number of overdoses for 2015, and 2018, finding the difference, and calculating percentage change for 2015 total*
                    </h4>
                <Chart
                    width={'1400px'}
                    height={'800px'}
                    chartType="BarChart"
                    loader={<div>Loading Chart</div>}
                    data={percentageDifference}
                    options={{
                        legend: { position: 'top' },
                    }}
                    />
                </CardContent>
                </Card>
            </div>
            
            <div style={{ paddingLeft: '725px', paddingTop: '20px', textAlign: 'center', marginRight: 'auto',  marginLeft: 'auto' }}>
                <Card
                    raised
                    style={{ width: '400px' }}
                >
                    <CardContent>
                    <h3>
                        States with NO form of Legalized Marijuana <b>(2015)</b>
                    </h3>
                    </CardContent>
                </Card>
            </div>

            <div style={{padding: '20px'}}>
                <Card
                raised
                style={{ width: '1850px', textAlign: 'center' }}
                >
                <CardContent>
                    <h2>
                        All states in red represent states that have NO form (Medical/Recreational) laws permitting Marijuna.
                    </h2>
                    <h4 style={{fontWeight:'lighter'}}>
                        We have 26 states with some form of legallity (Including Washington D.C.), and 25 states without.
                    </h4>
                    <Chart
                        width={'2000px'}
                        height={'600px'}
                        chartType="GeoChart"
                        options={{
                            region: 'US',
                            displayMode: 'regions',
                            resolution: 'provinces',
                            colorAxis: {minValue: 0, maxValue: 1, colors: ['red', 'green']}
                        }}
                        data={finalLegalizedMapData.concat(finalILegaldMapData)}
                        mapsApiKey={apiKey}
                    />
                </CardContent>
                </Card>
            </div>
 
            <div style={{ paddingLeft: '525px', paddingTop: '20px', textAlign: 'center', marginRight: 'auto',  marginLeft: 'auto' }}>
                <Card
                    raised
                    style={{ width: '800px' }}
                >
                    <CardContent>
                    <h3>
                        Examining Growth of Overdose Rates in States with Marjiunana Outlawed (2015-2018)
                    </h3>
                    </CardContent>
                </Card>
            </div>

            <div style={{padding: '20px'}}>
                <Card
                    raised
                    style={{ width: '1800px' }}
                >
                <CardContent>
                <Chart
                    width={1800}
                    height={600}
                    chartType="ColumnChart"
                    loader={<div>Loading Chart</div>}
                    data={finalIllegalMarjiuanaStatesOdInfo}
                    options={{
                        title: 'Overdoses by State 2015/2018',
                        
                        hAxis: {
                        title: 'State',
                        },
                        vAxis: {
                        title: 'Overdoses',
                        },
                    }}
                    legendToggle
                    />
                </CardContent>
                </Card>
            </div>
            
            <div style={{ paddingLeft: '525px', paddingTop: '20px', textAlign: 'center', marginRight: 'auto',  marginLeft: 'auto' }}>
                <Card
                    raised
                    style={{ width: '800px' }}
                >
                    <CardContent>
                    <h3>
                        Taking a Glance at Percentage Change in Overdoses by State (2015 --> 2018)
                    </h3>
                    </CardContent>
                </Card>
            </div>

            <div style={{padding: '20px', paddingLeft: '300px'}}>
                <Card
                    raised
                    style={{ width: '1400px', textAlign: 'center' }}
                >
                <CardContent>
                    <h1>
                        Average Percentage Change: {averagePercentageChangeForStatesWithIllegalWeed}%
                    </h1>
                    <h4 style={{fontWeight: 'lighter'}}>
                        *This was calculated by adding the TOTAL number of overdoses for 2015, and 2018, finding the difference, and calculating percentage change for 2015 total*
                    </h4>
                <Chart
                    width={'1400px'}
                    height={'800px'}
                    chartType="BarChart"
                    loader={<div>Loading Chart</div>}
                    data={percentageDifferenceIllegal}
                    options={{
                        legend: { position: 'top' },
                    }}
                    />
                </CardContent>
                </Card>
            </div>
    </div>
    )
}