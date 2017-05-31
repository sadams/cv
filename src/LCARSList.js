import React, { Component } from 'react'
import LCARSListItem from './LCARSListItem'

class LCARSList extends Component {
  render() {
    return (
      <lcars-list>
        {this.props.items.map(item => <LCARSListItem>{item}</LCARSListItem>)}
      </lcars-list>
    )
  }
}

export default LCARSList
