import React, { Component } from 'react'
import { connect } from 'react-redux'

import TabBar from 'features/tabs/TabBar'

import { selectCurrentTab } from 'features/tabs/selectors'
import { selectTab } from 'features/tabs/actions';

function mapStateToProps(state) {
    console.log(state)
    const currentTab = selectCurrentTab(state)
    return {currentTab}
}

const actions = {
    onTabClick: selectTab
}

export default connect(mapStateToProps, actions)(TabBar)