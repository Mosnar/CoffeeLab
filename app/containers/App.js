'use strict'

import React, {
  Component,
} from 'react';

import {
  Text,
  View,
  StyleSheet,
  TabBarIOS,
} from 'react-native';

var Favorites = require('./Favorites');
var Explore = require('./Explore');


export default class App extends Component {

  constructor (props) {
    super(props);
    this.state = {
      selectedTab: 'explore'
    };
  }


  render () {
    return (
      <TabBarIOS selectedTab={this.state.selectedTab}>
        <TabBarIOS.Item
          selected={this.state.selectedTab === 'explore'}
          systemIcon='top-rated'
          onPress={() => {
            this.setState({
              selectedTab: 'explore'
            });
          }}>
        <Explore />
        </TabBarIOS.Item>

        <TabBarIOS.Item
          selected={this.state.selectedTab === 'Favorites'}
          systemIcon='featured'
          onPress={() => {
            this.setState({
              selectedTab: 'favorites'
            });
          }}>
        <Favorites />
        </TabBarIOS.Item>
      </TabBarIOS>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1
  }
});
