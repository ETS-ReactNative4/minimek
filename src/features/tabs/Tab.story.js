import React from 'react'
import { storiesOf } from '@storybook/react'
import { Container, Menu } from  'semantic-ui-react'
import Tab from './Tab'
import TabBar from './TabBar'
import TabBarContainer from './TabBarContainer'

import UnitInfo from '../unit-info/UnitInfo'
import Pilots from '../pilots/Pilots'
import Mechs from '../mechs/Mechs'
import UnitOrganization from '../unit-organization/UnitOrganization'

import 'semantic-ui-css/semantic.css'

storiesOf('Tab', module)
    .add('example of using Semantic UI Menu Component', () => {
        return (<Container>
            <Menu tabular size="massive">
              <Menu.Item name="unitInfo" active> Unit Info</Menu.Item>
              <Menu.Item name="pilots" active={false}>Pilots</Menu.Item>
              <Menu.Item name="mechs" active={false}>Mechs  </Menu.Item>
              <Menu.Item name="unitOrganization" active={false}>Unit Organization</Menu.Item>
            </Menu>
          </Container>)
    })
    .add('an active tab', () => <Tab name="palace" label="Palace    " active onClick={(name) => { console.log(name) }}/>)
    .add('inside a tab bar', () => {
        const tabs = [
            {
                name : "unitInfo", 
                label : "Unit Info",
                component: UnitInfo
            },
            {
                name : "pilots", 
                label : "Pilots",
                component: Pilots
            },
            {
                name : "mechs", 
                label : "Mechs",
                component: Mechs
            },
            {
                name : "unitOrganization", 
                label : "Unit Organization",
                component: UnitOrganization
            }
        ];

        return (<TabBar 
            tabs = {tabs}
            size="massive"
            currentTab="mechs"
            onTabClick={() => {}}
        />)
    })
    .add('inside a tab bar container', () => {
        const tabs = [
            {
                name : "unitInfo", 
                label : "Unit Info",
                component: UnitInfo
            },
            {
                name : "pilots", 
                label : "Pilots",
                component: Pilots
            },
            {
                name : "mechs", 
                label : "Mechs",
                component: Mechs
            },
            {
                name : "unitOrganization", 
                label : "Unit Organization",
                component: UnitOrganization
            }
        ];
        return (<TabBarContainer  tabs = {tabs} />)
    })



