'use strict';


import React, {
  Component,
  PropTypes
} from 'react';

import {
  Text,
  View,
  Image,
  ListView,
  TouchableHighlight,
} from 'react-native';

import * as actions from '../../actions';

import {bindActionCreators} from 'redux';


import {connect} from 'react-redux';

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


export default class BrewMethodList extends Component {
  constructor(props) {
    super(props);
  }
  
  componentWillMount() {
    this.props.actions.loadBrewMethods();
  }

  render() {
    if (this.props.brewMethodsState.brewMethodsLoaded) {
      return this._renderList();
    } else {
      return this._renderLoading();
    }
  }

  _renderLoading() {
    return (<Text style={{paddingTop: 70}}>Brew methods are still loading</Text>);
  }

  _renderList() {
    return (
      <ListView
        dataSource={this.props.dataSource}
        renderRow={(rowData) => this.renderBrewMethod(rowData)}
        style={styles.listView}
        // renderHeader={this.renderHeader.bind(this)}
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
    // this.props.navigator.push({
    //   component: Recipes,
    //   title: title,
    //   passProps: {method: method}
    // });
  }
}

const dataSource = new ListView.DataSource({
  rowHasChanged: (r1, r2) => r1 !== r2,
});


function mapStateToProps(state) {
  return {
    dataSource: dataSource.cloneWithRows(state.brewMethodsState.brewMethodData),
    brewMethodsState: state.brewMethodsState
  };
}


const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(actions, dispatch),
  }
};

const conn = connect(
  (state) => (mapStateToProps),
  (dispatch) => (mapDispatchToProps)
)(BrewMethodList);

// const conn = connect(mapStateToProps)(BrewMethodList);
module.exports = conn;
