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

import Icon from 'react-native-vector-icons/Ionicons';

var Favorites = require('./Favorites');
var Explore = require('./Explore');


class App extends Component {

  constructor(props) {
      super(props);
      this.state = {
          selectedTab: 'explore'
      };
  }


  render () {
    return (
      <TabBarIOS selectedTab={this.state.selectedTab}>
        <Icon.TabBarItemIOS
          selected={this.state.selectedTab === 'explore'}
          iconName="ios-beaker-outline"
          title="Explore"
          selectedIconName="ios-beaker"
          onPress={() => {
            this.setState({
              selectedTab: 'explore',
            });
          }}>
        {<Explore />}
        </Icon.TabBarItemIOS>

        <Icon.TabBarItemIOS
          selected={this.state.selectedTab === 'favorites'}
          iconName="ios-heart-outline"
          title="Favorites"
          selectedIconName="ios-heart"
          onPress={() => {
            this.setState({
              selectedTab: 'favorites'
            });
          }}>
        {<Favorites />}
        </Icon.TabBarItemIOS>
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

module.exports = App;
