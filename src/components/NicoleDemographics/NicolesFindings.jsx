import React from 'react'
import { Card, CardContent } from '@material-ui/core';
import education_corr from './images/education_corr.png'
import income_corr from './images/income_corr.png'
import misc_corr from './images/misc_corr.png'
import mrates_illegal from './images/mrates_illegal.png'
import mrates_legal from './images/mrates_legal.png'
import prates_illegal from './images/prates_illegal.png'
import prates_legal from './images/prates_legal.png'


/*

    Nicoles component was built as an HTML wrapper to deliver visulizations surrounded marijuana data at the state level. 

    Below you will find this component grabbing data out of Context, and using a few helper functions above to clean the data in a manor that
    allows us to get some kind of idea about how marijuana has effected opioid deaths.

    Majority of the formatting was done of the API, but some basic caluclations were done above.

    The format goes as follows:

    <CARD FOR TITLES>

    <VISULIZAIONS> 

    NOTE: These visulizations are just images due to the lack of time we had to get together and create interactive visulizations..

    in most cases

*/

export const NicolesFindings = () => {

    return (
        <React.Fragment>
        <div style={{padding: '20px'}}>
          <Card
              raised
              style={{ width: '1850px', textAlign: 'center' }}                  
          >
          <CardContent>
              <h1>
                Census Data and Opioid Overdose Association
              </h1>
              <h4>
                Nicole Eversman
              </h4>
          </CardContent>
          </Card>
        </div>

        <div style={{ display: 'flex' }}>
            <div style={{ display: 'inline', paddingLeft: '225px', paddingTop: '20px', paddingBottom: '20px', textAlign: 'center' }}>
                <Card
                raised
                style={{ width: '600px', height: '700px' }}
                >
                <CardContent>
                    <img src={education_corr} alt="golf"/>
                </CardContent>
                </Card>
            </div>

            <div style={{ paddingLeft: '50px', display: 'inline', paddingTop: '20px', paddingBottom: '20px', textAlign: 'center'}}>
                <Card
                raised
                style={{ width: '600px', height: '700px' }}
                >
                <CardContent>
                    <img src={income_corr} alt="golf"/>
                </CardContent>
                </Card>
            </div>
        </div>

        <div style={{ display: 'flex' }}>
            <div style={{ display: 'inline', paddingLeft: '550px', paddingTop: '20px', paddingBottom: '20px', textAlign: 'center' }}>
                <Card
                raised
                style={{ width: '600px', height: '700px' }}
                >
                <CardContent>
                    <img src={misc_corr} alt="golf"/>
                </CardContent>
                </Card>
            </div>
        </div>

        <div style={{ display: 'flex' }}>
            <div style={{ display: 'inline', paddingLeft: '450px', paddingTop: '20px', paddingBottom: '20px', textAlign: 'center' }}>
                <Card
                raised
                style={{ width: '900px', height: '500px' }}
                >
                <CardContent>
                    <img src={mrates_illegal} alt="golf"/>
                </CardContent>
                </Card>
            </div>
        </div>

        <div style={{ display: 'flex' }}>
            <div style={{ display: 'inline', paddingLeft: '450px', paddingTop: '20px', paddingBottom: '20px', textAlign: 'center' }}>
                <Card
                raised
                style={{ width: '900px', height: '500px' }}
                >
                <CardContent>
                    <img src={mrates_legal} alt="golf"/>
                </CardContent>
                </Card>
            </div>
        </div>

        <div style={{ display: 'flex' }}>
            <div style={{ display: 'inline', paddingLeft: '450px', paddingTop: '20px', paddingBottom: '20px', textAlign: 'center' }}>
                <Card
                raised
                style={{ width: '900px', height: '500px' }}
                >
                <CardContent>
                    <img src={prates_illegal} alt="golf"/>
                </CardContent>
                </Card>
            </div>
        </div>

        <div style={{ display: 'flex' }}>
            <div style={{ display: 'inline', paddingLeft: '450px', paddingTop: '20px', paddingBottom: '20px', textAlign: 'center' }}>
                <Card
                raised
                style={{ width: '900px', height: '500px' }}
                >
                <CardContent>
                    <img src={prates_legal} alt="golf"/>
                </CardContent>
                </Card>
            </div>
        </div>

    </React.Fragment>
    )
}