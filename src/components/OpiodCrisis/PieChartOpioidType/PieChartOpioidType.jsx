import React from 'react'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import { CardHeader } from '@material-ui/core'
import { Sythetic } from '../CrisisLineChart'
import { Prescription } from '../CrisisLineChart'
import { Heroin } from '../CrisisLineChart'
import { PieChartFentanyl } from '../PieChartFentanyl'

const grabDataByYear = (date) => {

  const sythetic = Sythetic.filter( item => {
    return item.x === date
  })
  const prescription = Prescription.filter( item => {
    return item.x === date
  })
  const heroin = Heroin.filter( item => {
    return item.x === date
  })

  const sythetic_ = [ 'Sythetic', sythetic[0].y]
  const prescription_ = [ 'Prescription', prescription[0].y]
  const heroin_ = [ 'Heroin', heroin[0].y]

  return([['Type Of Opioid','Deaths Per 100,000'],sythetic_,prescription_,heroin_])

}

export const PieChartOpioidType = (props) => {
    const {date} = props
    const pieChartData = grabDataByYear(date)
    return (
      <div style={{padding: '20px'}}>
        <Card
          raised
        >
        <CardHeader
          style={{ textAlign: 'center' }}
          title={date}
        />
          <CardContent>
            <PieChartFentanyl pieChartData={pieChartData}/>
          </CardContent>
        </Card>

      </div>
    )
  }

export default PieChartOpioidType