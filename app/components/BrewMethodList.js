'use strict'

var BREW_METHOD_DATA = [
  {
    methodInfo: {
      title: 'Aeropress',
      icon: 'aeropress.png',
      categories: ['pressure', 'filter']
    }
  },
  {
    methodInfo: {
      title: 'Inverted Aeropress',
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
];

import React, {
  Component,
} from 'react';

import {
  Text,
  View,
  Image,
  StyleSheet,
  NavigatorIOS,
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
});


class BrewMethodList extends Component {
  render() {
    var brewMethod = BREW_METHOD_DATA.pop();

    var methodInfo = brewMethod.methodInfo;
    var {title, icon, categories} = methodInfo;
    return (
      <View style={styles.container}>
                <Image source={{uri: icon}}
                            style={styles.thumbnail} />
                <View style={styles.rightContainer}>
                    <Text style={styles.title}>{title}</Text>
                </View>
      </View>
    );
  }
}

module.exports = BrewMethodList;
