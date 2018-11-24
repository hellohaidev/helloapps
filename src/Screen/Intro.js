
import React, {Component} from 'react';
import { StyleSheet,View,Text} from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';

const styles = StyleSheet.create({
  text : {
    color: '#fff',
    fontSize:20
  },
  title: {
   
  },
  
    mainContent: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'space-around',
    }
    
  
})

const slides = [
  
  {
    key: 'somethun',
    title: 'Agoes Susilo JP',
    text: 'Jadilah orang yang pandai, sepandai  pandainya dan jadilah orang baik, sebaik baiknya',
    textStyle : styles.text,
    backgroundColor: '#004b87',
    image:require('../assets/img/slide.png')
  },
  {
    key: 'somethun1',
    title: ' Fred Devito',
    image:require('../assets/img/slide.png'),
    text: 'If it doesn’t challenge you, it doesn’t change you',
    textStyle : styles.text,
    backgroundColor: '#004b87'
  },
  
]

export default class Intro extends Component {

    static navigationOptions = {
        header : null
    }

  _navigateScreen = () => {
    this.props.navigation.navigate('Home')
  }

  state = {
    showRealApp: false
  }
  _onDone = () => {
    // User finished the introduction. Show real app through
    // navigation or simply by controlling state
    this.setState({ showRealApp: true });
  }
  
  render() {
    
    return(
      
      <View style={styles.mainContent}>  
        <AppIntroSlider 
        slides={slides} 
        
        onDone={this._navigateScreen}
        doneLabel="Finish"
        showPrevButton="true"
        
        />
      </View>
        
      
    )  
    
    
      // if (this.state.showRealApp) {
      //   return <Intro />;
      // } else {
      //   return <AppIntroSlider slides={slides} onDone={this._navigateScreen}/>;
      // }
     
       
      
    
  }
}

