'use strict'

import React from 'react'
import PropTypes from 'prop-types'

const Search = ({ handleSearch, isDisabled }) => (
  <div className='search'>
    <input
      type='search'
      disabled={isDisabled}
      placeholder='Digite o nome do usuário no Github'
      onKeyUp={handleSearch} />
  </div>
)

Search.propTypes = {
  handleSearch: PropTypes.func.isRequired
}

export default Search
