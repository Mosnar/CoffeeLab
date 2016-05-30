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

var Recipes = require("../../containers/Recipes");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10
  },
  thumbnail: {
    width: 80,
    height: 80,
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
  },

  // TODO: Move this to another component
  featuredContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#033159'
  },

  featuredSeparator: {
    height: 2,
    backgroundColor: '#F25260'
  },

  featuredTitle: {
    fontSize: 20,
    color: '#fff',
    textAlign: 'center'
  },
  featuredAuthor: {
    fontSize: 15,
    color: '#fff',
    textAlign: 'center',
    fontStyle: 'italic'
  },
  featuredAnnoncement: {
    fontSize: 10,
    color: '#fff',
    textAlign: 'center'
  }
});

var BREW_METHOD_DATA = require('../../data/BrewMethods.json');

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
        renderHeader={this.renderHeader.bind(this)}
      />
    );
  }

  // TODO: Move to another component
  renderHeader() {
    var recipeId = 0;
    return (
      <View>
      <TouchableHighlight style={styles.featuredContainer} onPress={() => this._jumpToRecipe(recipeId)}
                          underlayColor='#03318C'>
        <View>
            <Text style={styles.featuredAnnoncement}>Featured Recipe</Text>
            <Text style={styles.featuredTitle}>1st Place Aeropress</Text>
            <Text style={styles.featuredAuthor}>Matt Perger</Text>
        </View>
      </TouchableHighlight>

      <View style={styles.featuredSeparator}/>
    </View>
    );
  }

  // TODO: Implement
  _jumpToRecipe() {
    console.log("Implement jump to recipe in BrewMethodList.js");
  }

  renderBrewMethod(brewMethod) {
    var methodInfo = brewMethod.methodInfo;
    var {title, categories, name} = methodInfo;
    return (
      <TouchableHighlight onPress={() => this._showRecipes(methodInfo)} underlayColor='#dddddd'>
        <View>
          <View style={styles.container}>
            <Image
              source={{uri: name}}
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

  _showRecipes(method) {
    var title = method.title + " Recipes";
    this.props.navigator.push({
      component: Recipes,
      title: title,
      passProps: {method: method}
    });
  }
}

module.exports = BrewMethodList;
