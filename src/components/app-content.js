'use strict'

import React from 'react'
import PropTypes from 'prop-types'

import Search from './search'
import UserInfo from './user-info'
import Actions from './actions'
import Repos from './repos'

const AppContent = ({ userinfo, repos, starred, handleSearch }) => (
  <div className='app'>
    <Search handleSearch={handleSearch} />
    {!!userinfo && <UserInfo userinfo={userinfo} />}
    {!!userinfo && !!userinfo.login && <Actions login={userinfo.login} />}

    {!!repos.length &&
      <Repos
        title='Repositórios'
        className='repos'
        repos={repos} />
    }

    {!!starred.length &&
      <Repos
        title='Favoritos'
        className='starred'
        repos={starred} />
    }
  </div>
)

AppContent.propTypes = {
  userinfo: PropTypes.object,
  repos: PropTypes.array.isRequired,
  starred: PropTypes.array.isRequired
}

export default AppContent
