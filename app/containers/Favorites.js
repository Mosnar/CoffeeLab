'use strict';

import React, {
    Component,
} from 'react';

import {
    Text,
    View,
    StyleSheet,
    NavigatorIOS,
} from 'react-native';


class Favorites extends Component {


    render() {
        return (
            <View style={styles.container}>
                <Text>Favorite Recipes</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    description: {
        fontSize: 20,
        backgroundColor: 'white'
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});


module.exports = Favorites;
