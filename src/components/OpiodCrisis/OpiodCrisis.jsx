import React, { useContext } from 'react'
import { CrisisLineChart } from './CrisisLineChart'
import { CardsCrisis } from './CardsCrisis'
import { Card, CardContent, Button } from '@material-ui/core'
import { TotalDeathsAreaChart } from './TotalDeathsAreaChart'
import { FentanylMap } from './FentanylMap'
import { GlobalContext } from '../Context/GlobalContext'
import { YearEnum } from '../../types/YearEnums'
import { SideBar}  from '../SideBar/SideBar'
import { RaceDeaths } from './RaceDeaths';



export const OpioidDeathByType = () => {
  const { state: {year}, stateModifiers: {setYear}} = useContext(GlobalContext)
  
  const DisplayYear = () => {
    switch(year){
      case YearEnum.TWENTYTHIRTEEN:
        return '2013'
      case YearEnum.TWENTYFOURTEEN:
        return '2014'
      case YearEnum.TWENTYFIFTEEN:
        return '2015'
      default:
        return '2013'
    }
  }

  const UpdateYear = () => {
    switch(year){
      case YearEnum.TWENTYTHIRTEEN:
        setYear(YearEnum.TWENTYFOURTEEN)
        break
      case YearEnum.TWENTYFOURTEEN:
        setYear(YearEnum.TWENTYFIFTEEN)
        break
      case YearEnum.TWENTYFIFTEEN:
        setYear(YearEnum.TWENTYTHIRTEEN)
        break
      default:
        setYear(YearEnum.TWENTYTHIRTEEN)
    }
  }

  return (
    <div display="flex">
        <SideBar />

        <div style={{padding: '20px'}}>
          <Card
              raised
              style={{ width: '1850px', textAlign: 'center' }}                  
          >
          <CardContent>
              <h1>
                Getting Started: The Opioid Epidemic
              </h1>
              <h4>
                Jeremy Warden
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
                Opioid Overdose Deaths Totals USA
              </h3>
            </CardContent>
          </Card>
        </div>

        <div style={{ paddingTop: '20px', textAlign: 'center', marginRight: 'auto',  marginLeft: 'auto' }}>
          <Card
            raised
            style={{ width: '1850px' }}
          >
            <CardContent>
              <h3>
                72% Increase :: Doubling Every 5 Years (Roughly)
              </h3>
              <TotalDeathsAreaChart />
            </CardContent>
          </Card>
        </div>


        <div style={{ paddingLeft: '725px', paddingTop: '20px', paddingBottom: '20px' ,textAlign: 'center', marginRight: 'auto',  marginLeft: 'auto' }}>
          <Card
            raised
            style={{ width: '400px' }}
          >
            <CardContent>
              <h3>
                Overdose Deaths by Type per 100,000 
              </h3>
            </CardContent>
          </Card>
        </div>

        <Card
          raised
          style={{ height: '600px', textAlign: 'center'}}
        >
          <CardContent>
            <CrisisLineChart />
          </CardContent>
        </Card>

        <div style={{ paddingLeft: '725px', paddingTop: '20px', textAlign: 'center', marginRight: 'auto',  marginLeft: 'auto' }}>
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

        <CardsCrisis />

        <div style={{ paddingLeft: '550px', paddingTop: '20px', textAlign: 'center', marginRight: 'auto',  marginLeft: 'auto' }}>
          <Card
            raised
            style={{ width: '725px' }}
          >
            <CardContent>
              <h3>
                Location of Fentanyl Overdose Increases
              </h3>
            </CardContent>
          </Card>
        </div>

        <div style={{ paddingTop: '20px', alignContent:'center', textAlign: 'center', marginRight: 'auto',  marginLeft: 'auto' }}>
          <Card
            raised
            style={{ width: '1850px' }}
          >
            <CardContent>
            <h3>
                Reported encounters with Fentanyl by Police in:  
            </h3>
            <Button variant="contained" color="primary" onClick={() => UpdateYear()}>
              {DisplayYear()}<i className="material-icons">arrow_right_alt</i>
            </Button>
              <FentanylMap />
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
                Death by Race
              </h3>
            </CardContent>
          </Card>
        </div>
        
        <div style={{ paddingTop: '20px', alignContent:'center', textAlign: 'center', marginRight: 'auto',  marginLeft: 'auto' }}>
          <Card
            raised
            style={{ width: '1850px' }}
          >
            <CardContent>              
              <h3>
                On Average, 80% of Each Year Reported Values are Caucasian
              </h3>
              <RaceDeaths />
            </CardContent>
          </Card>
        </div>
    </div>
  )
}