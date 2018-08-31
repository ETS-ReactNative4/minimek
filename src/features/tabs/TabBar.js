import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { Menu } from 'semantic-ui-react'
import Tab from './Tab'

import ToggleDisplay from './ToggleDisplay'

export default class TabBar extends Component {
  renderTabItems = () => {
      return this.props.tabs.map(tab => {
          return (<Tab
            key={tab.name}
            name={tab.name}
            label={tab.label}
            active={this.props.currentTab === tab.name}
            onClick={this.props.onTabClick}
         />)
    })
  }
  
  renderTabPanels = () => {
      return this.props.tabs.map(tab => {
          const { name, component: TabComponent } = tab
          return (<ToggleDisplay show={this.props.currentTab === name}>
            <TabComponent />
          </ToggleDisplay>)
      })
  }
  render() {
      const { tabs, currentTab, onTabClick, ...otherProps } = this.props
    return (<div>
         <Menu tabular attached="top" {...otherProps}>
            {this.renderTabItems()}
        </Menu>
        {this.renderTabPanels()}
    </div>)
  }
}
TabBar.propTypes = {
    tabs: PropTypes.arrayOf({
        name: PropTypes.string,
        label: PropTypes.string
    }),
    currentTab: PropTypes.string,
    onTabClick: PropTypes.func
}
