import React, { Component } from 'react'
import { connect } from 'react-redux'

import TabBar from './TabBar'

import { selectCurrentTab } from './selectors'
import { selectTab } from './actions';

function mapStateToProps(state) {
    console.log(state)
    const currentTab = selectCurrentTab(state)
    return {currentTab}
}

const actions = {
    onTabClick: selectTab
}

/*
export default class TabBarContainer extends Component {
  constructor(props) {
      super(props)

      const {
          tabs = [
            { 
              name: null 
            }
          ]
        } = this.props
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
*/
export default connect(mapStateToProps, actions)(TabBar)