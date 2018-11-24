import React,{Component} from 'react';
import {createStackNavigator,StackNavigator} from 'react-navigation';
import Intro from '../Screen/Intro';
import HomeScreen from '../Screen/Home';
import QuotesScreen from '../Screen/Quotes';
import AttitudesScreen from '../Screen/Attitude';
import ProvidersScreen from '../Screen/Provider';
import FasilitatorsScreen from '../Screen/Fasilitator';
import ContactsScreen from '../Screen/Contact';


export default logStack = StackNavigator({

    Intro : {
        
        screen : Intro
    },
    Home : {
        screen : HomeScreen
    },
    Quotes : {
        screen : QuotesScreen
    },
    Attitudes : {
        screen : AttitudesScreen
    },
    Providers : {
        screen : ProvidersScreen
    },
    Fasilitators : {
        screen : FasilitatorsScreen
    },
    Contacts : {
        screen : ContactsScreen
    }


},{
    initialRouteName : 'Intro',
    navigationOptions : {
        header : null
    }
})

