'use strict'

import React from 'react'
import PropTypes from 'prop-types'

const Actions = ({ login }) => (
  <div className='actions'>
    <a href={`https://github.com/${login}?tab=repositories`}>
      Ver repositórios
    </a>
    <a href={`https://github.com/${login}?tab=stars`}>
      Ver favoritos
    </a>
  </div>
)

Actions.propTypes = {
  login: PropTypes.string.isRequired
}

export default Actions
