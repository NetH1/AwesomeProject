import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export const Item = ({name,username}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.textas}>{name}</Text>
            <Text>{username}</Text>
        </View>
    );
};


const styles = StyleSheet.create({
    container: {
      display:'flex',
      padding:10,
      flexDirection:'row'
    },
    textas:{
        marginRight:5
    }
  });