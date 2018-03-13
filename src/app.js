'use strict'

import React, { Component } from 'react'

import AppContent from './components/app-content'

class App extends Component {
  constructor () {
    super()
    this.state = {
      userinfo: null,
      repos: [],
      starred: [],
      isFetching: false
    }

    this.getRepositories = () => this.getRepos('repos')
    this.getStarred = () => this.getRepos('starred')
  }

  getGitHubApiUrl (username, type) {
    const internalUser = username ? `/${username}` : ''
    const internalType = type ? `/${type}` : ''
    return `https://api.github.com/users${internalUser}${internalType}`
  }

  search ($event) {
    const value = $event.target.value
    const keyCode = $event.which || $event.keyCode
    const ENTER = 13

    if (keyCode === ENTER) {
      this.setState({ isFetching: true })

      fetch(this.getGitHubApiUrl(value))
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
            },
            repos: [],
            starred: []
          })
        })
        .then(() => this.setState({ isFetching: false }))
    }
  }

  getRepos (type) {
    const { login } = this.state.userinfo

    fetch(this.getGitHubApiUrl(login, type))
      .then(res => res.json())
      .then(res => {
        this.setState({
          [type]: res.map(repo => ({
            name: repo.name,
            link: repo.html_url
          }))
        })
      })
  }

  render () {
    return (
      <AppContent
        {...this.state}
        handleSearch={$event => this.search($event)}
        getRepos={this.getRepositories}
        getStarred={this.getStarred}
      />
    )
  }
}

export default App
