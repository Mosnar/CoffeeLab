'use strict';


import React, {
  Component,
} from 'react';

import {
  Text,
  View,
  Image,
  StyleSheet,
  ListView,
  NavigatorIOS,
  TouchableHighlight
} from 'react-native';

var Recipes = require("../containers/Recipes");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    padding: 10
  },
  thumbnail: {
    width: 53,
    height: 81,
    marginRight: 10
  },
  rightContainer: {
    flex: 1
  },
  title: {
    fontSize: 20,
    marginBottom: 8
  },
  separator: {
    height: 1,
    backgroundColor: '#dddddd'
  }
});

var BREW_METHOD_DATA = require('../data/BrewMethods.json');

class BrewMethodList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dataSource: new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2
      })
    };
  }

  componentDidMount() {
    var brewMethods = BREW_METHOD_DATA;
    this.setState({
      dataSource: this.state.dataSource.cloneWithRows(brewMethods)
    });
  }

  render() {
    return (
      <ListView
        dataSource={this.state.dataSource}
        renderRow={this.renderBrewMethod.bind(this)}
        style={styles.listView}
      />
    );
  }

  renderBrewMethod(brewMethod) {
    var methodInfo = brewMethod.methodInfo;
    var {title, icon, categories} = methodInfo;
    icon = "./img/" + icon;
    return (
      <TouchableHighlight onPress={() => this.showRecipes(methodInfo)} underlayColor='#dddddd'>
        <View>
          <View style={styles.container}>
            <Image
              source={{uri: icon}}
              style={styles.thumbnail}/>
            <View style={styles.rightContainer}>
              <Text style={styles.title}>{title}</Text>
            </View>
          </View>
          <View style={styles.separator}/>
        </View>
      </TouchableHighlight>
    );
  }

  showRecipes(method) {
    var title = method.title + " Recipes";
    this.props.navigator.push({
      component: Recipes,
      title: title,
      passProps: {method}
    });
  }
}

module.exports = BrewMethodList;
