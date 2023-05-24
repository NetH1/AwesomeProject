import React from 'react';
import { Alert, Image, Text, TouchableOpacity, View } from 'react-native';

const Galery = () => {
    const [images, setImages] = React.useState([
        {id:1, image: 'https://images.unsplash.com/photo-1509043759401-136742328bb3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8fA%3D%3D&w=1000&q=80'},
        {id:2, image: 'https://images.unsplash.com/photo-1509043759401-136742328bb3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8fA%3D%3D&w=1000&q=80'},
        {id:3, image: 'https://images.unsplash.com/photo-1509043759401-136742328bb3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8fA%3D%3D&w=1000&q=80'}
    ]);
    const onPress = (id) => {
        setTimeout(() => {
            Alert.alert('Вы удалили картину')
        }, 1000)
        setTimeout(() => {
            const newImages = [...images].filter(x => x.id !== id)
            setImages(newImages)
        }, 1500);
        
    }
    const refresh = () =>{
        setImages([...images])
    }
    return (
        <View style ={{paddingVertical:50}}>
            {images && images.map((x) => 
            <View style={{display:'flex', flexDirection:'column', alignItems:'center', paddingVertical:10}} key={x.id}>
            <TouchableOpacity onPressIn={() => onPress(x.id)}>
            <Image source={{uri: x.image}} style={{width:200, height:200}} />
            </TouchableOpacity>
            </View>
            )}
            <TouchableOpacity onPress={() =>refresh() }><Text>Refresh</Text></TouchableOpacity>
        </View>
    );
};


export default Galery;