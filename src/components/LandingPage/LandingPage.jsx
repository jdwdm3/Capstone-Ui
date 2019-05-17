import React, {useContext} from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { withStyles } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import { styles } from './styles'
import { GlobalContext } from '../Context/GlobalContext'
import { PageEnums } from '../../types/PageEnums'
import { OpioidDeathByType } from '../OpiodCrisis/OpiodCrisis'
import { MannyExample } from '../MannyExample/MannyExample'
import { KaiMarijuana } from '../KaiMarijuana/KaiMarijuana'
import Icon from '@material-ui/core/Icon'
import MenuIcon from '@material-ui/icons/Menu'
import { OrganDoner } from '../OrganDoner/OrganDoner'
import { NicolesFindings } from '../NicoleDemographics/NicolesFindings'

/*

  This page allows us to use the sidebar, and on a click decides what value to set in state that will determine which of our major
  components is rendered.

  determinePage is the method that accomplishes this.
  
*/

const LandingPage = ({classes}) => {
  const { state: {activePage}} = useContext(GlobalContext)
  const open = true

  const determinePage = () => {
    switch(activePage) {
      case PageEnums.OPIOD_DEATH_INCREASE:
        return (<OpioidDeathByType />)
      case PageEnums.ORGAN_DONER:
        return (<OrganDoner />)
      case PageEnums.NICOLE:
        return (<NicolesFindings />)
      case PageEnums.MANNY:
        return (<MannyExample />)
      case PageEnums.KAI:
        return (<KaiMarijuana />)
      default:
        console.log('Error, state is wrong. Wrong page is returned. DEFAULT')
    }
  }

  const { stateModifiers: {setSidebarOpen}} = useContext(GlobalContext)

  return (
      <div className={classes.root}>
        <CssBaseline />
        <AppBar
          position="fixed"
        >
          <Toolbar disableGutters={!open}>
            <Icon className={classes.menuButton} color="inherit" aria-label="Menu" onClick={() => setSidebarOpen(true)}>
              <MenuIcon />
            </Icon>
            <Typography variant="h6" color="inherit" noWrap>
              Capstone Opioid Crisis
            </Typography>
          </Toolbar>
        </AppBar>
        <main
          className={classNames(classes.content, {
            [classes.contentShift]: open,
          })}
        >
          <div className={classes.drawerHeader} />
            {determinePage()}
        </main>
      </div>
  )
}

LandingPage.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(LandingPage);
