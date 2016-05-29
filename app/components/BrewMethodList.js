'use strict'

var BREW_METHOD_DATA = [
  {
    methodInfo: {
      title: 'AeroPress',
      icon: 'aeropress.png',
      categories: ['pressure', 'filter']
    }
  },
  {
    methodInfo: {
      title: 'Inverted AeroPress',
      icon: 'aeropress_inverted.png',
      categories: ['pressure', 'filter']
    }
  },
  {
    methodInfo: {
      title: 'Hario V60',
      icon: 'hario_v60.png',
      categories: ['pourover', 'filter']
    }
  },
  {
    methodInfo: {
      title: 'Kalita Wave',
      icon: 'kalita_wave.png',
      categories: ['pourover', 'filter']
    }
  },
  {
    methodInfo: {
      title: 'French Press',
      icon: 'french_press.png',
      categories: ['immersion']
    }
  },
  {
    methodInfo: {
      title: 'Full Immersion',
      icon: 'full_immersion.png',
      categories: ['immersion']
    }
  },
  {
    methodInfo: {
      title: 'Drip',
      icon: 'drip.png',
      categories: ['filter', 'drip']
    }
  },
  {
    methodInfo: {
      title: 'Bee House',
      icon: 'beehouse.png',
      categories: ['filter', 'pourover']
    }
  },
  {
    methodInfo: {
      title: 'Chemex',
      icon: 'chemex.png',
      categories: ['filter', 'pourover']
    }
  },
    {
      methodInfo: {
        title: 'Vacuum Pot',
        icon: 'vacuumpot.png',
        categories: ['pressure']
      }
    },
    {
      methodInfo: {
        title: 'Siphon',
        icon: 'siphon.png',
        categories: ['pressure']
      }
    },
    {
      methodInfo: {
        title: 'Turkish',
        icon: 'turkish.png',
        categories: ['immersion']
      }
    },
    {
      methodInfo: {
        title: 'Clever',
        icon: 'clever.png',
        categories: ['filter', 'pourover', 'immersion']
      }
    },
];

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
    return (
      <TouchableHighlight>
        <View>
            <View style={styles.container}>
                <Image
                    source={{uri: icon}}
                    style={styles.thumbnail} />
                <View style={styles.rightContainer}>
                    <Text style={styles.title}>{title}</Text>
                </View>
            </View>
            <View style={styles.separator} />
        </View>
      </TouchableHighlight>
    );
  }
}

module.exports = BrewMethodList;
