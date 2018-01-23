'use stric'

import React from 'react'

const UserInfo = () => (
  <div className='user-info'>
    <img src='https://avatars2.githubusercontent.com/u/7242605?v=4' />
    <h1 className='username'>
      <a href='https://github.com/luancurti'>Luan Curti</a>
    </h1>

    <ul className='repos-info'>
      <li>Repositórios: 14</li>
      <li>Seguidores: 20</li>
      <li>Seguindo: 20</li>
    </ul>
  </div>
)

export default UserInfo
