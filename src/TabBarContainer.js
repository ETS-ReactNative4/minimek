import React, { Component } from 'react'

import TabBar from './TabBar'

export default class TabBarContainer extends Component {
  constructor(props) {
      super(props)

      const {tabs = [{ name: null }]} = this.props
      const firstTab = tabs[0]
      this.state = {
          currentTab: firstTab.name
      }
  }

  onTabClick = (name) => {
      this.setState({
          currentTab: name
      })
  }

  render() {
      const { tabs, ...otherProps } = this.props
      return (<TabBar
        {...otherProps} 
        currentTab={this.state.currentTab}
        onTabClick={this.onTabClick}
        tabs={tabs}
      />)
  }
}