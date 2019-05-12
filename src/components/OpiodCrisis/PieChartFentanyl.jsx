import React from 'react'
import Chart from 'react-google-charts'
import { SideBar } from '../SideBar/SideBar'
import styled, { keyframes } from 'styled-components'
import { rollIn } from 'react-animations'
 
const rollAnimation = keyframes`${rollIn}`
 
const RollyChart = styled(Chart)`
  animation: 3s ${rollAnimation};
`

export const PieChartFentanyl = (props) => {
  const {pieChartData} = props
  return (
    <React.Fragment>
      <SideBar />
      <RollyChart
        width={'400px'}
        height={'250px'}
        chartType="PieChart"
        loader={<div>Loading Chart</div>}
        data={pieChartData}
        options={{
          title: 'Distribution of Overdose',
        }}
        rootProps={{ 'data-testid': '7' }}
      />
    </React.Fragment>
  )

}
