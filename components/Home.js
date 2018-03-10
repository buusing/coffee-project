import React from 'react';
import { Text, Button, View, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-navigation';
import firebase from 'react-native-firebase';

export default class Home extends React.Component {

  static navigationOptions = { title: "Home", header: null};

  createAppointment(){
    console.log("hej");
  };

  nextDay(){
    const currentTime = new Date();
    return "8:15 - " + parseInt(currentTime.getDate() + 1) + "/" + parseInt(currentTime.getMonth() + 1) + "/" + currentTime.getFullYear();
  }

  render() {
    
    let eventName = "Kaffe aftale",
        eventTime = this.nextDay(),
        eventLocation = "Andersen & Maillard";

    const styles = StyleSheet.create({
      container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f7f7f7',
        height: '100%',
      },
      text: {
        fontWeight: 'bold',
      },
    });

    return (
      <SafeAreaView>
        <View style={styles.container}>
          <Text>{eventName}</Text>
          <Text>{eventLocation}</Text>
          <Text>{eventTime}</Text>
          <Button  title="Lav aftale" onPress={this.createAppointment}></Button>
        </View>
      </SafeAreaView>
    );
  };

}