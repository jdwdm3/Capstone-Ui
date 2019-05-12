import React, { useContext } from 'react'
import Chart from 'react-google-charts';
import { SideBar } from '../SideBar/SideBar';
import { Card, CardContent } from '@material-ui/core';
import { GlobalContext } from '../Context/GlobalContext';

const getPercentageData = data => {
  let percentageData = [["State", "Percentage of Opioids Prescribed"]]
  let miniList = []
  for(let i=1; i < data.length; i++){
    miniList.push(data[i][0])
    miniList.push((data[i][2]/data[i][1]))

    percentageData.push(miniList)
    miniList = []
  }
  return percentageData
}

export const MannyExample = () => {
    const { state: {MannysPerscriptionNumbers, MannysPrescriptionRatesByState, MannysPrescriptionRatesBySpecialty}} = useContext(GlobalContext)
    const percentageData = getPercentageData(MannysPrescriptionRatesByState)
    return(
    <div>
        <SideBar />
        <div style={{padding: '20px'}}>
          <Card
              raised
              style={{ width: '1850px', textAlign: 'center' }}                  
          >
          <CardContent>
              <h1>
                Prescritpion Rates by Profession
              </h1>
              <h4>
                Manuel Burke
              </h4>
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
                  Total Number of Prescriptions vs Opioid Prescriptions
              </h2>
              <h4 style={{fontWeight:'lighter'}}>
                  We observe an increase at a faster pace in Opioid prescriptions compared to Total Prescriptions
              </h4>
              <Chart
                width={'1600px'}
                height={'600px'}
                chartType="ScatterChart"
                loader={<div>Loading Chart</div>}
                data={MannysPerscriptionNumbers}
                options={{
                  title: 'Opioid Prescriptions vs Number of Total Prescriptions',
                  hAxis: { title: 'Number of Opioid Prescriptions', minValue: 0, maxValue: 15 },
                  vAxis: { title: 'Number Of Prescriptions', minValue: 0, maxValue: 15 },
                  legend: 'none',
                  trendlines: { 0: {} }
                }}
              />
          </CardContent>
          </Card>
      </div>

      <div style={{ padding: '20px'}}>
          <Card
              raised
              style={{ width: '1850px', textAlign: 'center' }}                  
          >
          <CardContent>
              <h2>
                  Prescription Rate by State 
              </h2>
              <h4 style={{fontWeight:'lighter'}}>
                  We observe an increase at a faster pace in Opioid prescriptions compared to Total Prescriptions
              </h4>
              <Chart
                width={'1850px'}
                height={'700px'}
                chartType="ColumnChart"
                loader={<div>Loading Chart</div>}
                data={MannysPrescriptionRatesByState}
                options={{
                  title: 'Population of Largest U.S. Cities',
                  xAxis: {
                    title: 'State',
                  },
                  yAxis: {
                    title: 'Number of Prescritions',
                  },
                  legend: { position: 'top' },
                }}
              />
          </CardContent>
          </Card>
      </div>

      <div style={{ padding: '20px'}}>
          <Card
              raised
              style={{ width: '1850px', textAlign: 'center' }}                  
          >
          <CardContent>
              <h2>
                  Prescription Rate by State 
              </h2>
              <Chart
                width={'1850px'}
                height={'700px'}
                chartType="ColumnChart"
                loader={<div>Loading Chart</div>}
                data={percentageData}
                options={{
                  title: 'Population of Largest U.S. Cities',
                  hAxis: {
                    title: 'Total Population',
                    minValue: 0,
                  },
                  vAxis: {
                    title: 'City',
                  },
                  legend: { position: 'top' },
                }}
              />
          </CardContent>
          </Card>
      </div>

      <div style={{}}>
          <Card
              raised
              style={{ width: '1850px', textAlign: 'center' }}                  
          >
          <CardContent>
              <h2>
                  Opioid Prescription Rate by Profession
              </h2>
              <h4 style={{fontWeight:'lighter'}}>
                  The Larger the tile, the higher the rate.  (Red is HIGH, Green is LOW)
              </h4>
              <Chart
                width={'1700px'}
                height={'600px'}
                chartType="TreeMap"
                loader={<div>Loading Chart</div>}
                data={MannysPrescriptionRatesBySpecialty}
                options={{
                  minColor: '#0d0',
                  midColor: '#ddd',
                  maxColor: '#f00',
                  headerHeight: 15,
                  fontColor: 'black',
                  showScale: true,
                }}
                rootProps={{ 'data-testid': '1' }}
              />
          </CardContent>
          </Card>
      </div>
            
    </div>
    )
}