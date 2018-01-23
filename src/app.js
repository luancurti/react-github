'use strict'

import React from 'react'

import Search from './components/search'
import UserInfo from './components/user-info'
import Actions from './components/actions'
import Repos from './components/repos'

const App = () => (
  <div className='app'>
    <Search />
    <UserInfo />
    <Actions />
    <Repos
      title='Repositórios'
      className='repos'
      repos={[{ link: '#', name: 'Nome do repositório' }]} />

    <Repos
      title='Favoritos'
      className='starred'
      repos={[{ link: '#', name: 'Nome do repositório' }]} />
  </div>
)

export default App
