import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { Menu } from 'semantic-ui-react'
import Tab from './Tab'

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
    
  render() {
      const { tabs, currentTab, onTabClick, ...otherProps } = this.props
    return (<div>
         <Menu tabular attached="top" {...otherProps}>
            {this.renderTabItems()}
        </Menu>
    </div>)
    // return (<pre>{JSON.stringify(this.props, null, 2)}</pre>)
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
