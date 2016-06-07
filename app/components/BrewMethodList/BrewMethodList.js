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

import { connect } from 'react-redux';

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

    this.props.loadBrewMethods();
  }

  componentDidMount() {
  }

  render() {
    if (this.props.brewMethodsLoaded === true) {
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
    // this.props.navigator.push({
    //   component: Recipes,
    //   title: title,
    //   passProps: {method: method}
    // });
  }
}
//  
//   this.ds = new ListView.DataSource({rowHasChanged: (row1, row2) => row1 !== row2});
//   var dataSource = this.ds.cloneWithRows(this.props.brewMethodData);
//
//   return (
//     <ListView
//       dataSource={this.state.dataSource}
//       renderRow={this.renderBrewMethod.bind(this)}
//       style={styles.listView}
//       renderHeader={this.renderHeader.bind(this)}
//     />
//   )
// };
//
// BrewMethodList.propTypes = {
//
// };
//
//   renderHeader() {
//     return (
//       <Featured />
//     );
//   }
//
//   renderBrewMethod(brewMethod) {
//     var methodInfo = brewMethod.methodInfo;
//     var {title, name} = methodInfo;
//     return (
//       <TouchableHighlight onPress={() => this._showRecipes(methodInfo)} underlayColor='#dddddd'>
//         <View>
//           <View style={styles.container}>
//             <Image
//               source={{uri: name}}
//               style={styles.thumbnail}/>
//             <View style={styles.rightContainer}>
//               <Text style={styles.title}>{title}</Text>
//             </View>
//           </View>
//           <View style={styles.separator}/>
//         </View>
//       </TouchableHighlight>
//     );
//   }
//
//   _showRecipes(method) {
//     var title = method.title + " Recipes";
//     this.props.navigator.push({
//       component: Recipes,
//       title: title,
//       passProps: {method: method}
//     });
//   }
// }


BrewMethodList.propTypes = {
  dataSource: PropTypes.object,
};

const dataSource = new ListView.DataSource({
  rowHasChanged: (r1, r2) => r1 !== r2,
});


function mapStateToProps(state) {
  return {
    dataSource: dataSource.cloneWithRows(state.brewMethodsState.brewMethodData),
  };
}

const conn = connect(mapStateToProps)(BrewMethodList);
module.exports = conn;
