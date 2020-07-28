import React, { Component } from 'react';
import User from './User'

class Users extends Component {
  render () {
    return (
      <div>
        <h2>{ this.props.title }</h2>
        <User></User>
        <User age="30">Joy</User>
        <User age="40">Jel</User>
      </div>
    )
  }
}

export default Users;

/**
 * This is Class Component
 */