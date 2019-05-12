import React, { useContext } from 'react'
import Drawer from '@material-ui/core/Drawer'
import List from '@material-ui/core/List'
import Divider from '@material-ui/core/Divider'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import { GlobalContext } from '../Context/GlobalContext'
import { PageEnums } from '../../types/PageEnums';


export const SideBar = () => {
    const { state: {sidebarOpen}} = useContext(GlobalContext)
    const { stateModifiers: {setSidebarOpen}} = useContext(GlobalContext)
    const { stateModifiers: {setActivePage}} = useContext(GlobalContext)

    const changePage = page => {
       setActivePage(page)
       setSidebarOpen(false)
    }

    const sideList = (
        <div>
        <Divider />
        <List>
            <ListItem button>
                <i className="material-icons">
                    public
                </i>
                <ListItemText primary={'Introduction to the Opioid Epidemic'} secondary={'Jeremy Warden'} onClick={() => changePage(PageEnums.OPIOD_DEATH_INCREASE)}/>
            </ListItem>
            <Divider />
            <ListItem button>
                <i className="material-icons">
                    accessibility
                </i>
                <ListItemText primary={'How Opioid Overdoses Have Negitively Impacted Organ Donation'} secondary={'Travis Laughlin'} onClick={() => changePage(PageEnums.ORGAN_DONER)}/>
            </ListItem>
            <Divider />
            <ListItem button>
                <i className="material-icons">
                    shuffle
                </i>
                <ListItemText primary={'Correlating Legalized Marijuana and Overdose Rate'} secondary={'Kai Wilson'} onClick={() => changePage(PageEnums.KAI)}/>
            </ListItem>
            <Divider />
            <ListItem button>
            <i className="material-icons">
                business
            </i>
                <ListItemText primary={'Diving into Perscriptions Statistics by Profession'} secondary={'Manuel Burke'} onClick={() => changePage(PageEnums.MANNY)}/>
            </ListItem>
            <Divider />
            <ListItem button>
                <i className="material-icons">
                    map
                </i>
                <ListItemText primary={'Exploring Demographics and Opioid Overdose'} secondary={'Nicole Eversman'} onClick={() => changePage(PageEnums.NICOLE)}/>
            </ListItem>
            <Divider />
        </List>
        </div>
    );

    return (
        <div>
        <Drawer open={sidebarOpen}>
            <div
                tabIndex={0}
                role="button"
            >
            {sideList}
            </div>
        </Drawer>
        </div>
    );
}
