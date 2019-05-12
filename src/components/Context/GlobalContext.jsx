import React, { createContext, useState, useEffect } from 'react'
import {PageEnums} from '../../types/PageEnums'
import { YearEnum } from '../../types/YearEnums'

export const GlobalContext = createContext({})

const baseUrl = 'http://128.206.117.225:3000/'

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

export const GlobalContextProvider = (props) => {
    const { children } = props
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