import { StatusBar } from "expo-status-bar";
import { useEffect, useRef, useState } from "react";
import { Animated, Easing, StyleSheet, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import styled from "styled-components/native";

const Container = styled.View({
  flex: 1,
});

const ProgressBarTrack = styled.View({
  height: 6,
  backgroundColor: "#e0e0e0",
  borderRadius: 3,
  //   marginHorizontal: 24,
  //   marginTop: 16,
  overflow: "hidden",
  margin: 24,
});

const Content = styled.View({
  alignItems: "center",
  gap: 16,
  marginTop: "30%",
});

const ItemContainer = styled.View({
  borderRadius: 999,
  paddingVertical: 16,
  paddingHorizontal: 24,
});

export default function Home({ navigation }) {
  const insets = useSafeAreaInsets();
  const progress = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(progress, {
      toValue: 1,
      duration: 1500,
      easing: Easing.inOut(Easing.ease),
      useNativeDriver: true,
    }).start(() => {
      navigation.navigate("MentorMatch");
    });
  }, [progress]);

  const translateX = progress.interpolate({
    inputRange: [0, 1],
    outputRange: ["0%", "100%"],
  });

  return (
    <Container paddingTop={insets.top}>
      <StatusBar style="auto" />
      <ProgressBarTrack>
        <Animated.View
          style={[styles.progressFill, { transform: [{ translateX }] }]}
        />
      </ProgressBarTrack>
      <Text style={styles.title}>
        Just a moment while we find your match...
      </Text>
      <Content>
        <View>
          <Text>loves music & art</Text>
        </View>
        <ItemContainer>
          <Text>Values alone time</Text>
        </ItemContainer>
        <ItemContainer>
          <Text>dealing with family stuff</Text>
        </ItemContainer>
        <ItemContainer>
          <Text>a night owl</Text>
        </ItemContainer>
        <ItemContainer>
          <Text>enjoys deep friendships</Text>
        </ItemContainer>
        <ItemContainer>
          <Text>likes to be silly</Text>
        </ItemContainer>
      </Content>
    </Container>
  );
}

const styles = StyleSheet.create({
  progressFill: {
    height: "100%",
    backgroundColor: "#2F2B26",
    borderRadius: 3,
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    padding: 24,
  },
});
