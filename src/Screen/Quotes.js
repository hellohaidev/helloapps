import React,{Component} from 'react';
import {View} from 'react-native';
import { Container, Header, Content, Card, CardItem, Text,Body,Title } from 'native-base'
import axios from 'axios'
import FAB from 'react-native-fab';
import Snackbar from 'react-native-snackbar-component';
import {Icon} from 'react-native-elements'

export default class Quotes extends Component {
    constructor(){
        super()
        this.state = {
            data : [],
        }
    }
    
    loadData() {
        axios.get('https://hellohai.herokuapp.com/api/')
        .then(result => {
            const qoute = result.data 
            this.setState({data : qoute})
            alert('Sukses Refresh Data')
        })
    }

    componentDidMount(){
        this.loadData()
    }
    render(){

        return(
            
           <Container>
               <Header>
                    
                    <Body>
                        <Title>List Qoute</Title>
                    </Body>
                
            </Header>
               <Content>
               {this.state.data.map(item=>
                        <Card key={item.id}>
                        <CardItem>
                        <Body>
                            <Text style={{fontFamily: 'TeachersStudent-Regular',fontSize:22}}>
                            {item.description}
                            </Text>
                        </Body>
                        </CardItem>
                        
                    </Card>
                    )}
               </Content>

               <FAB 
               buttonColor="aqua" 
               iconTextColor="#fff" 
               onClickAction={() => {this.loadData()}} 
               visible={true} 
               iconTextComponent={<Icon name="autorenew"/>} 
               />
           </Container>
        )
    }
}
console.disableYellowBox = true