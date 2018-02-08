'use strict'

import React from 'react'
import PropTypes from 'prop-types'

const UserInfo = ({ userinfo }) => (
  <div className='user-info'>
    <img src={userinfo.photo} />
    <h1 className='username'>
      <a href={`https://github.com/${userinfo.login}`}>{userinfo.username}</a>
    </h1>

    <ul className='repos-info'>
      <li>Repositórios: {userinfo.repos}</li>
      <li>Seguidores: {userinfo.followers}</li>
      <li>Seguindo: {userinfo.following}</li>
    </ul>
  </div>
)

UserInfo.propTypes = {
  userinfo: PropTypes.object.isRequired
}

export default UserInfo
