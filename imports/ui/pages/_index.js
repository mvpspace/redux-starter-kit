import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { Flex, Box } from 'reflexbox'
import { Loading, NavBar } from '/imports/ui/_components'
import { HomePage } from '/imports/ui/_components'

export const Index = ({ currentUser, siteLoading }) => {
  return (
    <Flex column>
      { siteLoading ?
       <Loading />
                  :
      (
          <div>
            <Box>
              <NavBar />
            </Box>
            <Box py={3}>
              <h2>Redux Boilerplate</h2>
              <p>A starting point for Meteor Redux applications.</p>
              <HomePage currentUser={currentUser} />
            </Box>
          </div>
      ) }
    </Flex>
  )
}

Index.PropTypes = {
  currentUser: PropTypes.object,
  siteLoading: PropTypes.bool
}

export default connect(({
  globalData: {
    currentUser,
    siteLoading
  }
}) => ({ currentUser, siteLoading }))(Index)
