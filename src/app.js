'use strict'

import React, { Component } from 'react'

import AppContent from './components/app-content'

class App extends Component {
  constructor () {
    super()
    this.state = {
      userinfo: {},
      repos: [{
        name: 'Repo',
        link: '#'
      }],
      starred: [{
        name: 'Repo',
        link: '#'
      }]
    }
  }

  search ($event) {
    const value = $event.target.value
    const keyCode = $event.which || $event.keyCode
    const ENTER = 13

    if (keyCode === ENTER) {
      fetch(`https://api.github.com/users/${value}`)
        .then(res => res.json())
        .then(res => {
          this.setState({
            userinfo: {
              username: res.name,
              photo: res.avatar_url,
              login: res.login,
              repos: res.public_repos,
              followers: res.followers,
              following: res.following
            }
          })
        })
    }
  }

  render () {
    return (
      <AppContent
        userinfo={this.state.userinfo}
        repos={this.state.repos}
        starred={this.state.starred}
        handleSearch={$event => this.search($event)}
      />
    )
  }
}

export default App
