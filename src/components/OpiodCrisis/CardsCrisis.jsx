import React from 'react'
import PieChartOpioidType from './PieChartOpioidType/PieChartOpioidType'

export const CardsCrisis = () => {
    return (
    <div style={{display: 'flex', paddingLeft: '175px'}}>
        <div style={{display: 'inline', padding: '15px'}}>
            <PieChartOpioidType date={'2006'} />
        </div>
        <div style={{display: 'inline', padding: '15px'}}>
            <PieChartOpioidType date={'2015'}/>
        </div>
        <div style={{display: 'inline', padding: '15px'}}>
            <PieChartOpioidType date={'2017'}/>
        </div>
      </div> 
    )
}