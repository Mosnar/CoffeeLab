'use strict'

import React, {
  Component,
} from 'react';

import {
  Text,
  View,
  StyleSheet,
  TouchableHighlight,
} from 'react-native';

var RecipeDetails = require('./RecipeDetails');

import Icon from 'react-native-vector-icons/FontAwesome';

const styles = StyleSheet.create({
  navButton: {
    flex: 1
  },

  titleBar: {
    backgroundColor: '#2A5E91',
    paddingBottom: 10,
    flexDirection: 'row'
  },

  authorBar: {
    backgroundColor: '#2A5E91',
    paddingBottom: 10,
    flexDirection: 'row'
  },

  authorText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 10,
    fontWeight: 'bold',
    flex: 1
  },

  toolbarTitle: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    flex: 1
  },

  toolBarAuthor: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    flex: 1
  },

  stepContainer: {
    flexDirection: 'row',
    backgroundColor: '#185568',
    padding: 10
  },

  stepText: {
    color: '#fff',
    textAlign: 'center',
    flex: 1
  },
  backBar: {
    paddingTop: 10,
    backgroundColor: '#2A5E91',
    flexDirection: 'row',
    alignItems: 'flex-start',
  }
});

class Recipe extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentStep: 0
    }
  }

  goToStep(step) {
    var currentStep = this.state.currentStep;
    if (step === null) {
      currentStep = currentStep + 1;
      this.setState({
        currentStep: currentStep
      });
    } else {
      this.setState({
        currentStep: step
      });
    }
  }

  _goBack() {
    this.props.navigator.pop();
  }

  componentDidMount() {
    this.goToStep(0);
  }

  render() {
    var recipe = this.props.recipe;
    var meta = recipe.meta;
    var details = recipe.details;
    var steps = recipe.steps;
    var numSteps = steps.length;

    var currentStepData = this.props.recipe.steps[this.state.currentStep];

    var CurrentStepLayout = {};

    // var stepsView = steps.map((r, i) => {
    //     return (
    //       <View key={i}>
    //         <Text>{r.text}</Text>
    //       </View>
    //     );
    // });

    const backButton = (
      <Icon.Button name="angle-left" backgroundColor="transparent" onPress={()=>{this._goBack()}}>
        <Text style={{fontSize: 15, color: '#fff'}}>Back</Text>
      </Icon.Button>
    );


    var main = (
      <View style={{flex: 1}}>
        <View style={styles.backBar}>
          <View style={styles.navButton}>
            {backButton}
          </View>
        </View>
        <View style={styles.titleBar}>
          <Text style={styles.toolbarTitle}>{meta.name}</Text>
        </View>
        <View style={styles.authorBar}>
          <Text style={styles.authorText}>By {meta.authors[0]}</Text>
        </View>
        <RecipeDetails details={details}/>
        {this.renderButtons()}
      </View>
    );
    return main;
  }

  renderButtons() {
    var btnStyles = StyleSheet.create({
      container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center'
      },
      btnBig: {
        backgroundColor: '#F2F0F2',
        flex: 1
      },
      btnHeightWrapper: {
        flex: 1,
        flexDirection: 'column'
      },
      btnText: {
        color: '#000',
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 20,
      },
      btnHeightFiller: {
        flex: 1,
        justifyContent: 'center',
      },
      btnIcon: {
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20
      },
      viewStepsText: {
        textAlign: 'center',
        color: '#fff',
        fontWeight: 'bold'
      },
      viewStepsButton: {
        padding: 10,
        backgroundColor: '#2A5E91'
      }
    });
    return (
      <View style={btnStyles.container}>
        <TouchableHighlight style={btnStyles.btnBig}>
          <View style={btnStyles.btnHeightWrapper}>
            <View style={btnStyles.btnHeightFiller}>
              <View style={btnStyles.btnIcon}><Icon name="play-circle-o" size={100} color="#000" /></View>
              <Text style={btnStyles.btnText}>Start Guide</Text>
            </View>
          </View>
        </TouchableHighlight>
        <TouchableHighlight style={btnStyles.viewStepsButton}><Text style={btnStyles.viewStepsText}>View Steps</Text></TouchableHighlight>
      </View>
    )
  }

}

module.exports = Recipe;
