'use strict'

import React from 'react'

const UserInfo = ({ userinfo }) => (
  <div className='user-info'>
    <img src='https://avatars2.githubusercontent.com/u/7242605?v=4' />
    <h1 className='username'>
      <a href={`https://github.com/${userinfo.username}`}>{userinfo.username}</a>
    </h1>

    <ul className='repos-info'>
      <li>Repositórios: {userinfo.repos}</li>
      <li>Seguidores: {userinfo.followers}</li>
      <li>Seguindo: {userinfo.following}</li>
    </ul>
  </div>
)

export default UserInfo
