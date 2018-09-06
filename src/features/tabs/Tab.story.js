import React from 'react'
import { storiesOf } from '@storybook/react'
import { Container, Menu } from  'semantic-ui-react'
import Tab from 'features/tabs/Tab'
import TabBar from 'features/tabs/TabBar'
import TabBarContainer from 'features/tabs/TabBarContainer'

import { Provider } from 'react-redux'
import configureStore from 'app/store/configureStore'

import UnitInfo from 'features/unit-info/UnitInfo'
import Pilots from 'features/pilots/index.js'
import Mechs from 'features/mechs/index'
import UnitOrganization from 'features/unit-organization/UnitOrganization'
import Tools from 'features/tools/index'

import 'semantic-ui-css/semantic.css'

storiesOf('Tab', module)
    .addDecorator(story => {
        const store = configureStore()
        return (<Provider store={store}>
            {story()}
        </Provider>)
    })
    .add('example of using Semantic UI Menu Component', () => {
        return (<Container>
            <Menu tabular size="massive">
              <Menu.Item name="unitInfo" active> Unit Info</Menu.Item>
              <Menu.Item name="pilots" active={false}>Pilots</Menu.Item>
              <Menu.Item name="mechs" active={false}>Mechs  </Menu.Item>
              <Menu.Item name="unitOrganization" active={false}>Unit Organization</Menu.Item>
              <Menu.Item name="tools" active={false}>Tools</Menu.Item>   
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
            },
            {
                name: "tools",
                label: "Tools",
                component: Tools
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
            },
            {
                name: "tools",
                label: "Tools",
                component: Tools
            }
        ];
        return (<TabBarContainer  tabs={tabs} />)
    })