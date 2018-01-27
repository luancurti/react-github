'use strict'

import React from 'react'

const Search = () => (
  <div className='search'>
    <input
      type='search'
      placeholder='Digite o nome do usuário no Github'
      onKeyUp={$event => {
        const value = $event.target.value
        const keyCode = $event.which || $event.keyCode
        const ENTER = 13

        if (keyCode === ENTER) {
          fetch(`https://api.github.com/users/${value}`)
            .then(res => res.json())
            .then(res => {
              console.log(res)
            })
        }
      }} />
  </div>
)

export default Search
