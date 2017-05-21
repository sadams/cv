import React, { Component } from 'react';

class LCARSList extends Component {
  render() {
    return (
      <lcars-list-item>
        <lcars-list-left></lcars-list-left>
        <lcars-list-num>{this.props.num}</lcars-list-num>
        <lcars-list-item-content>{this.props.children}</lcars-list-item-content>
        <lcars-selected></lcars-selected>
      </lcars-list-item>
    );
  }
}

export default LCARSList;
