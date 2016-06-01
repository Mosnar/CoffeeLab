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


const styles = StyleSheet.create({
  featuredContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    paddingTop: 50,
    paddingBottom: 50,
    backgroundColor: '#033159',
    opacity: .8
  },

  backgroundImageWrapper: {
    position: 'absolute',
    top: 0, bottom: 0, left: 0, right: 0
  },

  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
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
  featuredAnnouncement: {
    fontSize: 10,
    color: '#fff',
    textAlign: 'center'
  }
});

class BrewMethodFeatured extends Component {
  render() {
    return this.renderHeader();
  }

  // TODO: Move to another component
  renderHeader() {
    var recipeId = 0;
    return (
      <View>
        <Image source={{uri: 'https://i.ytimg.com/vi/MMMcfnQR5Js/maxresdefault.jpg'}} height="40" style={styles.backgroundImage}>
          <TouchableHighlight style={styles.featuredContainer} onPress={() => this._jumpToRecipe(recipeId)}
                              underlayColor='#65808A'>
            <View>
              <Text style={styles.featuredAnnouncement}>Featured Recipe</Text>
              <Text style={styles.featuredTitle}>1st Place Aeropress</Text>
              <Text style={styles.featuredAuthor}>Matt Perger</Text>
            </View>
          </TouchableHighlight>
        </Image>

        <View style={styles.featuredSeparator}/>
      </View>
    );
  }

  // TODO: Implement
  _jumpToRecipe() {
    console.warn("Implement jump to recipe in BrewMethodList.js");
  }
}

module.exports = BrewMethodFeatured;
