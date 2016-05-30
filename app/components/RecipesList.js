'use strict';

import React, {
  Component,
} from 'react';

import {
  Text,
  View,
  StyleSheet,
  ListView,
  TouchableHighlight,
  Image,
  NavigatorIOS,
} from 'react-native';

class RecipesList extends Component {

  recipes = [];

  constructor(props) {
    super(props);

    this.state = {
      dataSource: new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2
      })
    };
  }

  componentDidMount() {
    var name = this.props.method.name;
    var recipesSrc = require('../data/Recipes.json');
    this.recipes = this._getRecipesByMethod(name, recipesSrc);

    this.setState({
      dataSource: this.state.dataSource.cloneWithRows(this.recipes)
    });
  }

  renderEmpty(method) {
    return (
      <View style={styles.noRecipes}><Text>Sorry, we don't have any recipes for {method} yet.</Text></View>
    );
  }

  render() {
    var {title, name, icon, categories} = this.props.method;

    var numRecipes = this.recipes.length;
    if (numRecipes > 0) {
      return (
        <ListView
          dataSource={this.state.dataSource}
          renderRow={this.renderRecipe.bind(this)}
          style={styles.listView}
        />
      );
    } else {
      return this.renderEmpty(title);
    }
  }


  renderRecipe(recipe) {
    var meta = recipe.meta;
    var author = "Unknown";
    if (meta.authors.length > 0) {
      author = meta.authors[0];
    }
    var name = meta.name;
    return (
      <TouchableHighlight>
        <View>
          <View style={styles.container}>
            <View style={styles.rightContainer}>
              <Text style={styles.title}>{name}</Text>
              <Text style={styles.author}>{author}</Text>
            </View>
          </View>
          <View style={styles.separator}/>
        </View>
      </TouchableHighlight>
    );
  }


  _getRecipesByMethod(method, recipes) {
    return recipes.filter(function (r) {
      return r.meta.brewMethod === method;
    });
  }
}

var styles = StyleSheet.create({
  noRecipes: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    padding: 10
  },
  container: {
    backgroundColor: '#F5FCFF',
    padding: 10,
    paddingLeft: 5,
    paddingRight: 5
  },
  title: {
    fontSize: 15,
    marginBottom: 8
  },
  separator: {
    height: 1,
    backgroundColor: '#dddddd'
  },
  author: {
    color: '#656565'
  }
});

module.exports = RecipesList;
