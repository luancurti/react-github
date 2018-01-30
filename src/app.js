'use strict'

import React, { Component } from 'react'

import AppContent from './components/app-content'

class App extends Component {
  constructor () {
    super()
    this.state = {
      userinfo: null,
      repos: [],
      starred: []
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

  getRepositories () {
    fetch(`https://api.github.com/users/${this.state.userinfo.login}/repos`)
      .then(res => res.json())
      .then(res => this.setState({ repos: res }))
  }

  getStarred () {
    fetch(`https://api.github.com/users/${this.state.userinfo.login}/starred`)
      .then(res => res.json())
      .then(res => this.setState({ starred: res }))
  }

  render () {
    return (
      <AppContent
        userinfo={this.state.userinfo}
        repos={this.state.repos}
        starred={this.state.starred}
        handleSearch={$event => this.search($event)}
        getRepos={() => this.getRepositories()}
        getStarred={() => this.getStarred()}
      />
    )
  }
}

export default App
