'use strict';


import React, {
  PropTypes
} from 'react';

import {
  Text,
  View,
  Image,
  ListView,
  TouchableHighlight,
} from 'react-native';

import EStyleSheet from 'react-native-extended-stylesheet';

var Recipes = require("../../containers/Recipes");
var Featured = require("./BrewMethodFeatured");

const styles = EStyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  thumbnail: {
    resizeMode: 'contain',
    width: 80,
    height: 80,
    marginRight: 10,
  },
  rightContainer: {
    flex: 1
  },
  title: {
    fontSize: 30
  },
  separator: {
    height: 1,
    backgroundColor: '#dddddd'
  }
});

var BREW_METHOD_DATA = require('../../data/BrewMethods.json');


const BrewMethodList = (props) => {

  return (

    <View style={styles.container}>
      <Text style={styles.title}>First Screen</Text>
    </View>
  )
};

BrewMethodList.propTypes = {

};


class BrewMethodList extends Component {
  constructor(props) {
    super(props);


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

  renderHeader() {
    return (
      <Featured />
    );
  }

  renderBrewMethod(brewMethod) {
    var methodInfo = brewMethod.methodInfo;
    var {title, name} = methodInfo;
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
