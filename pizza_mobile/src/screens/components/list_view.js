import React, { Component } from 'react'
import { StyleSheet, SafeAreaView, Text, Image, Button, FlatList } from 'react-native'
import client from '../../api/client';


class ListView extends Component {
    constructor(props){
        super(props);
        this.state = {
            data: [],
        };
    }
    componentDidMount(){
        client.get("/").then((response) => {
            this.setState({ data: response.data});
        });
    }
    render(){
        const {data} = this.state;
        const mytext = "by SenayBerhe"
        return(
            <SafeAreaView style={styles.center}>
                <Image
                    style={styles.pizzaImage}
                    source={{
                        uri: "https://reactnative.dev/img/tiny_logo.png",
                    }}
                />
                <Text>results</Text>
                <Text style={styles.baseText}>Pizza vs. Pizza App </Text>
                <Text style={styles.newText}>{mytext}</Text>
                <FlatList
                    data={data}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={{{item}} =>(
                        <Text style={styles.itemText}>
                            {item.pizzeria_name}, {item.city}
                        </Text>
                        </SafeAreaView> }>

                </FlatList>
                <Button 
                    title="list Item, Click for Details" 
                    onPress={() => this.props.navigation.navigate("Detail")}/>
            </SafeAreaView>
        );
    }
}


const styles = StyleSheet.create({
    center: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
  },
   title: {
      fontSize: 36,
      marginBottom: 16,
    },
    baseText: {
        color: "navy",
        fontSize: 30,
        fontStyle: "italic"
    },
    newText: {
        color: "red",
    },
    pizzaImage: {
        width: 200,
        height: 200,
    },
});


export default ListView; 


