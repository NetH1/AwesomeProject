import React, { useEffect, useState, useRef } from "react";
import {
  Animated,
  ActivityIndicator,
  Dimensions,
  FlatList,
  Text,
  View,
  SafeAreaView,
  StyleSheet
} from "react-native";
import ListItem from "../components/ListItem";

const d = new Date();
let hour = d.getHours();

const { width, height } = Dimensions.get("screen");

const App = () => {
  const scrollX = useRef(new Animated.Value(0)).current;

  const locations = [
    { key: 1, name: "Almaty", lat: 43.26, lon: 76.93 },
    { key: 2, name: "Astana", lat: 51.18, lon: 71.45 }
  ];

  const viewableItemsChanged = useRef(({ viewableItems }) => {
    //console.log(viewableItems);
    //setCurrentIndex(viewableItems[0].index);
  }).current;
  const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 60 }).current;

  return (
    <SafeAreaView style={styles.app}>
      <Animated.FlatList
        data={locations}
        renderItem={({ item, index }) => (
          <ListItem item={item} index={index} scrollX={scrollX} />
        )}
        horizontal={true}
        pagingEnabled={true}
        showsHorizontalScrollIndicator={false}
        //!!!только для web
        contentContainerStyle={{ width, height }}
        bounces={false}
        scrollEventThrottle={32}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          { useNativeDriver: false }
        )}
        onViewableItemsChanged={viewableItemsChanged}
        viewabilityConfig={viewConfig}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  app: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
    // backgroundColor: "#aaa"
  }
});

export default App;
