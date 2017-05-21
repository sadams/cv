import React, { Component } from 'react';

export default class Comp extends Component {
  render() {
    return (
      <lcars-header-end>
        <lcars-header-spacer>
          <lcars-header-bar>
            <lcars-header>{this.props.children}</lcars-header>
          </lcars-header-bar>
        </lcars-header-spacer>
      </lcars-header-end>
    );
  }
}
