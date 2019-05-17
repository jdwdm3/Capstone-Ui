import React, { useContext } from 'react'
import { SideBar } from '../SideBar/SideBar';
import { GlobalContext } from '../Context/GlobalContext';
import { Card, CardContent } from '@material-ui/core';
import Chart from 'react-google-charts'
import image from './image.png'
import image1 from './image1.png'
import image2 from './image2.png'
import image3 from './image3.png'
import image4 from './image4.png'
import image5 from './image5.png'
import image6 from './image6.png'
import image7 from './image7.png'
import image8 from './image8.png'

/*

    Travis's component was built to show the impace of opioids on Organ Donation

    NOTE: There are mainly static images due to lack of time to create all of the visulizations that Travis already did himself.

    With limited time, we didnt want to reinvent the wheel and decided screenshots were sufficient for a few of his charts.

*/

const formatTravisData = data => {

  for(let i=1; i<data.length; i++){
    data[i][0] = Number(data[i][0])
  }
  return data
}

export const OrganDoner = () => {
    const { state: { TravisHepCPositiveData, TravisCauseOfDeath }} = useContext(GlobalContext)
  
    let testData = formatTravisData(TravisHepCPositiveData)
    return(
        <React.Fragment>
        <SideBar />
        <div style={{padding: '20px'}}>
          <Card
              raised
              style={{ width: '1850px', textAlign: 'center' }}                  
          >
          <CardContent>
              <h1>
                Opioids Effect on Organ Donation (Hepatitis C)
              </h1>
              <h4>
                Travis Laughlin
              </h4>
          </CardContent>
          </Card>
        </div>


        <div style={{ paddingLeft: '725px', paddingTop: '20px', paddingBottom: '20px', textAlign: 'center', marginRight: 'auto',  marginLeft: 'auto' }}>
          <Card
            raised
            style={{ width: '400px' }}
          >
            <CardContent>
              <h3>
                Midwest Organs Donated Infected with Hepatitis C 
              </h3>
            </CardContent>
          </Card>
        </div>

        <Card
          raised
          style={{ height: '800px', textAlign: 'center'}}
        >
          <CardContent>
              <Chart
                width={'1800px'}
                height={'600px'}
                chartType="LineChart"
                loader={<div>Loading Chart</div>}
                data={testData}
                options={{
                    axes: {
                    y: {
                        'Organs With HepC': { label: 'Organs With HepC' },
                    },
                    x: {
                      'Year': { label: 'Year' },
                    },
                    },
                }}
                legendToggle
                controls={[
                  {
                    controlType: 'ChartRangeFilter',
                    options: {
                      filterColumnIndex: 0,
                      ui: {
                        chartType: 'LineChart',
                        chartOptions: {
                          chartArea: { width: '90%', height: '50%' },
                          hAxis: { baselineColor: 'none' },
                        },
                      },
                    },
                    controlPosition: 'bottom',
                    controlWrapperParams: {
                      state: {
                        range: { start: 1994, end: 2019 },
                      },
                    },
                  },
                ]}
                />
          </CardContent>
        </Card>


        <div style={{display:'flex'}}>
          <div style={{ display: 'inline', paddingLeft: '350px', paddingTop: '20px', paddingBottom: '20px', textAlign: 'center' }}>
            <Card
              raised
              style={{ width: '400px' }}
            >
              <CardContent>
                <h3>
                    Distribution of Hep C Positive Organs by Year
                </h3>
              </CardContent>
            </Card>
          </div>
          <div style={{  paddingLeft: '200px', display: 'inline', paddingTop: '20px', paddingBottom: '20px', textAlign: 'center' }}>
            <Card
              raised
              style={{ width: '400px' }}
            >
              <CardContent>
                <h3>
                  Distribution of Hep C Positive Organs by State
                </h3>
              </CardContent>
            </Card>
          </div>
        </div>


        <div style={{display:'flex'}}>
          <div style={{ display: 'inline', paddingLeft: '225px', paddingTop: '20px', paddingBottom: '20px', textAlign: 'center' }}>
            <Card
              raised
              style={{ width: '600px', height: '500px' }}
            >
              <CardContent>
                <img src={image} alt="golf"/>
              </CardContent>
            </Card>
          </div>

          <div style={{ paddingLeft: '50px', display: 'inline', paddingTop: '20px', paddingBottom: '20px', textAlign: 'center'}}>
            <Card
              raised
              style={{ width: '600px', height: '500px' }}
            >
              <CardContent>
                <img src={image1} alt="golf"/>
              </CardContent>
            </Card>
          </div>
        </div>


        <div style={{ paddingLeft: '725px', paddingTop: '20px', paddingBottom: '20px', textAlign: 'center', marginRight: 'auto',  marginLeft: 'auto' }}>
          <Card
            raised
            style={{ width: '400px' }}
          >
            <CardContent>
              <h3>
                  Distribution of Overdose Type by Year
              </h3>
            </CardContent>
          </Card>
        </div>

        <div style={{ paddingTop: '20px'}}>
          <Card
            raised
            style={{ height: '600px', textAlign: 'center'}}
          >
            <CardContent>
                <Chart
                  width={'1800px'}
                  height={'500px'}
                  chartType="Line"
                  loader={<div>Loading Chart</div>}
                  data={TravisCauseOfDeath}
                  options={{
                      axes: {
                      y: {
                          'Deaths': { label: 'Deaths' },
                      },
                      x: {
                        'Year': { label: 'Year' },
                      },
                      },
                  }}
                  legendToggle
                  />
            </CardContent>
          </Card>
        </div>
        
        <div style={{display:'flex'}}>
          <div style={{ display: 'inline', paddingLeft: '350px', paddingTop: '20px', paddingBottom: '20px', textAlign: 'center' }}>
            <Card
              raised
              style={{ width: '400px' }}
            >
              <CardContent>
                <h3>
                    Distribution of Mechinisms By Year
                </h3>
              </CardContent>
            </Card>
          </div>
          <div style={{  paddingLeft: '200px', display: 'inline', paddingTop: '20px', paddingBottom: '20px', textAlign: 'center' }}>
            <Card
              raised
              style={{ width: '400px' }}
            >
              <CardContent>
                <h3>
                  Distribution of Top Four Mechanisms (2016-2018)
                </h3>
              </CardContent>
            </Card>
          </div>
        </div>


        <div style={{display:'flex'}}>
          <div style={{ display: 'inline', paddingLeft: '225px', paddingTop: '20px', paddingBottom: '20px', textAlign: 'center' }}>
            <Card
              raised
              style={{ width: '600px', height: '500px' }}
            >
              <CardContent>
                <img src={image2} alt="golf"/>
              </CardContent>
            </Card>
          </div>

          <div style={{ paddingLeft: '50px', display: 'inline', paddingTop: '20px', paddingBottom: '20px', textAlign: 'center'}}>
            <Card
              raised
              style={{ width: '600px', height: '500px' }}
            >
              <CardContent>
                <img src={image3} alt="golf"/>
              </CardContent>
            </Card>
          </div>
        </div>




        <div style={{display:'flex'}}>
          <div style={{ display: 'inline', paddingLeft: '350px', paddingTop: '20px', paddingBottom: '20px', textAlign: 'center' }}>
            <Card
              raised
              style={{ width: '400px' }}
            >
              <CardContent>
                <h3>
                  Confusion Matrix
                </h3>
              </CardContent>
            </Card>
          </div>
          <div style={{  paddingLeft: '350px', display: 'inline', paddingTop: '20px', paddingBottom: '20px', textAlign: 'center' }}>
            <Card
              raised
              style={{ width: '400px' }}
            >
              <CardContent>
                <h3>
                  SNS Regplot
                </h3>
              </CardContent>
            </Card>
          </div>
        </div>

        <div style={{display:'flex'}}>
          <div style={{ display: 'inline', paddingLeft: '225px', paddingTop: '20px', paddingBottom: '20px', textAlign: 'center' }}>
            <Card
              raised
              style={{ width: '700px', height: '700px' }}
            >
              <CardContent>
                <img src={image4} alt="golf"/>
              </CardContent>
            </Card>
          </div>
          <div style={{ paddingLeft: '50px', display: 'inline', paddingTop: '20px', paddingBottom: '20px', textAlign: 'center'}}>
            <Card
              raised
              style={{ width: '700px', height: '700px' }}
            >
              <CardContent>
                <img src={image5} alt="golf"/>
              </CardContent>
            </Card>
          </div>
        </div>



        <div style={{ paddingLeft: '700px', paddingTop: '20px', paddingBottom: '20px', textAlign: 'center' }}>
          <Card
            raised
            style={{ width: '300px' }}
          >
            <CardContent>
              <h3>
                SNS Regplot
              </h3>
            </CardContent>
          </Card>
        </div>
        <div style={{ paddingLeft: '525px', paddingTop: '20px', paddingBottom: '20px', textAlign: 'center' }}>
            <Card
              raised
              style={{ width: '650px', height: '400px' }}
            >
              <CardContent>
                <img src={image6} alt="golf"/>
              </CardContent>
            </Card>
          </div>



          <div style={{display:'flex'}}>
          <div style={{ display: 'inline', paddingLeft: '350px', paddingTop: '20px', paddingBottom: '20px', textAlign: 'center' }}>
            <Card
              raised
              style={{ width: '400px' }}
            >
              <CardContent>
                <h3>
                    ROC
                </h3>
              </CardContent>
            </Card>
          </div>
          <div style={{  paddingLeft: '200px', display: 'inline', paddingTop: '20px', paddingBottom: '20px', textAlign: 'center' }}>
            <Card
              raised
              style={{ width: '400px' }}
            >
              <CardContent>
                <h3>
                  AUC
                </h3>
              </CardContent>
            </Card>
          </div>
        </div>

        <div style={{display:'flex'}}>
          <div style={{ display: 'inline', paddingLeft: '225px', paddingTop: '20px', paddingBottom: '20px', textAlign: 'center' }}>
            <Card
              raised
              style={{ width: '600px', height: '400px' }}
            >
              <CardContent>
                <img src={image7} alt="golf"/>
              </CardContent>
            </Card>
          </div>

          <div style={{ paddingLeft: '50px', display: 'inline', paddingTop: '20px', paddingBottom: '20px', textAlign: 'center'}}>
            <Card
              raised
              style={{ width: '600px', height: '400px' }}
            >
              <CardContent>
                <img src={image8} alt="golf"/>
              </CardContent>
            </Card>
          </div>
        </div>

        </React.Fragment>
    )
}