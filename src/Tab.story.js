import React from 'react'
import { storiesOf } from '@storybook/react'
import { Container, Menu } from  'semantic-ui-react'
import Tab from './Tab'
import TabBar from './TabBar'
import TabBarContainer from './TabBarContainer'

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
            {name : "unitInfo", label : "Unit Info"},
            {name : "pilots", label : "Pilots"},
            {name : "mechs", label : "Mechs"},
            {name : "unitOrganization", label : "Unit Organization"}
        ];

        return (<TabBar 
            tabs = {tabs}
            size="massive"
            current="Crow"
            onClick={() => {}}
        />)
    })
    .add('inside a tab bar container', () => {
        const tabs = [
            {name : "unitInfo", label : "Unit Info"},
            {name : "pilots", label : "Pilots"},
            {name : "mechs", label : "Mechs"},
            {name : "unitOrganization", label : "Unit Organization"}
        ];
        return (<TabBarContainer  tabs = {tabs} />)
    })



