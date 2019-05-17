import React, { createContext, useState, useEffect } from 'react'
import {PageEnums} from '../../types/PageEnums'
import { YearEnum } from '../../types/YearEnums'

export const GlobalContext = createContext({})

const baseUrl = 'http://128.206.117.225:3000/'


/*
    All functions between here and the Context Component are
    used for asyc calls to our API
*/

const fetchMarjijuanaData = async () => {
    const response = await fetch(baseUrl + 'LegalMaryJane');
    const json = await response.json();
    return json
}

const fetchMarjijuanaDataOdByStateLEGAL = async () => {
    const response = await fetch(baseUrl + 'OverDoseByStateByYearMaryLegal');
    const json = await response.json();
    return json
}

const fetchMarjijuanaDataOdByStateILLEGAL = async () => {
    const response = await fetch(baseUrl + 'OverDoseByStateByYearMaryIllegal');
    const json = await response.json();
    return json
}

const fetchMannysPerscriptionNumbers = async () => {
    const response = await fetch(baseUrl + 'getPerscriberInfo');
    const json = await response.json();
    return json
}

const fetchMannysPrescriptionRatesByState = async () => {
    const response = await fetch(baseUrl + 'getPerscriberinfoByState');
    const json = await response.json();
    return json
}

const fetchMannysPrescriptionRatesBySpecialty = async () => {
    const response = await fetch(baseUrl + 'getPerscriberInfoByProfession');
    const json = await response.json();
    return json
}

const fetchTravisHepCPositiveData = async () => {
    const response = await fetch(baseUrl + 'getHepCMidwestDataPositive');
    const json = await response.json();
    return json
}

const fetchTravisCauseOfDeath = async () => {
    const response = await fetch(baseUrl + 'getMechOfDeath');
    const json = await response.json();
    return json
}

/*
    This is global context provider that is used to maintain the state of our application
*/


export const GlobalContextProvider = (props) => {
    const { children } = props

    /*
        Use state is reacts way of giving functional components state.  

        [StateVariable, Setter]

        The pair goes as denoted above, there is a piece of state, and there is a setter for that piece of state.

        Those two values are bundled up into the STATE object, and the STATE MODIFIER Object.

        Both of those objects are then added to the CONTEXT object as shown:

        Context = {
            State,
            StateModifiers
        }

        That context object is referenced all throughout the application for data.
    */
    const [ activePage, setActivePage ] = useState(PageEnums.OPIOD_DEATH_INCREASE)
    const [ year, setYear ] = useState(YearEnum.TWENTYTHIRTEEN) 
    const [ sidebarOpen, setSidebarOpen] = useState(false)
    const [ legalMarjiuanaStates, setLegalMarjiuanaStates] = useState([])
    const [ legalMarjiuanaStatesOdInfo, setLegalMarjiuanaStatesOdInfo] = useState([])
    const [ illegalMarjiuanaStatesOdInfo, setIllegalMarjiuanaStatesOdInfo] = useState([])
    const [ MannysPerscriptionNumbers, setMannysPerscriptionNumbers ] = useState([])
    const [ MannysPrescriptionRatesByState, setMannysPrescriptionRatesByState ] = useState([])
    const [ MannysPrescriptionRatesBySpecialty, setMannysPrescriptionRatesBySpecialty ] = useState([])
    const [ TravisHepCPositiveData, setTravisHepCPositiveData ] = useState([])
    const [ TravisCauseOfDeath, setTravisCauseOfDeath ] = useState([])



    useEffect( async ()=> {
        setLegalMarjiuanaStates(await fetchMarjijuanaData())
        setLegalMarjiuanaStatesOdInfo(await fetchMarjijuanaDataOdByStateLEGAL())
        setIllegalMarjiuanaStatesOdInfo(await fetchMarjijuanaDataOdByStateILLEGAL())
        setMannysPerscriptionNumbers(await fetchMannysPerscriptionNumbers())
        setMannysPrescriptionRatesByState(await fetchMannysPrescriptionRatesByState())
        setMannysPrescriptionRatesBySpecialty(await fetchMannysPrescriptionRatesBySpecialty())
        setTravisHepCPositiveData(await fetchTravisHepCPositiveData())
        setTravisCauseOfDeath(await fetchTravisCauseOfDeath())
    }, [])

    const state = {
        activePage,
        year,
        sidebarOpen,
        legalMarjiuanaStates,
        legalMarjiuanaStatesOdInfo,
        illegalMarjiuanaStatesOdInfo,
        MannysPerscriptionNumbers,
        MannysPrescriptionRatesByState,
        MannysPrescriptionRatesBySpecialty,
        TravisHepCPositiveData,
        TravisCauseOfDeath,
    }

    const stateModifiers = {
        setActivePage,
        setYear,
        setSidebarOpen,
        setLegalMarjiuanaStates,
        setLegalMarjiuanaStatesOdInfo,
        setIllegalMarjiuanaStatesOdInfo,
        setMannysPerscriptionNumbers,
        setMannysPrescriptionRatesByState,
        setMannysPrescriptionRatesBySpecialty,
        setTravisHepCPositiveData,
        setTravisCauseOfDeath,
    }

    const context = {
        state,
        stateModifiers,
    }

    return (
        <GlobalContext.Provider value={context}>
            {children}
        </ GlobalContext.Provider>
    )
}