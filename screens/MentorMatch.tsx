import { StatusBar } from "expo-status-bar";
import { useEffect, useRef, useState } from "react";
import {
  Animated,
  Easing,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import styled from "styled-components/native";

import avatarImg from "../assets/user/avatar.png";
import moonIcon from "../assets/icons/moon.png";
import blueGraphic from "../assets/images/blue_graphic.png";

const Container = styled.ScrollView.attrs({
  contentContainerStyle: {
    alignItems: "center",
    paddingBottom: 32,
  },
})({});

export const Content = styled.View({
  width: "100%",
  padding: 24,
  gap: 24,
});

const Card = styled.View({
  backgroundColor: "rgba(255, 255, 255, 0.8)",
  padding: 24,
  borderRadius: 16,
  borderWidth: 1,
  borderColor: "#ECE8E1",
  width: "100%",
});

export const Row = styled.View({
  alignItems: "center",
  flexDirection: "row",
  gap: 12,
  marginTop: 16,
});

export default function MentorMatch({ navigation }) {
  const insets = useSafeAreaInsets();
  const anim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(anim, {
      toValue: 1,
      delay: 500,
      duration: 600,
      useNativeDriver: true,
    }).start();
  }, [anim]);

  return (
    <Container paddingTop={insets.top}>
      <StatusBar style="auto" />
      <View
        style={{
          flexDirection: "row",
          justifyContent: "flex-end",
          alignItems: "center",
          width: "100%",
          paddingHorizontal: 24,
          marginBottom: 32,
        }}
      >
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text>Close</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.title}>Meet Sam</Text>
      <Animated.Image
        source={avatarImg}
        style={{
          width: 200,
          height: 200,
          opacity: anim,
          transform: [
            {
              translateY: anim.interpolate({
                inputRange: [0, 1],
                outputRange: [6, 0],
              }),
            },
            {
              translateX: anim.interpolate({
                inputRange: [0, 1],
                outputRange: [6, 0],
              }),
            },
            {
              rotate: anim.interpolate({
                inputRange: [0, 1],
                outputRange: ["-16deg", "0deg"],
              }),
            },
          ],
        }}
      />
      <Content>
        <Image
          source={blueGraphic}
          style={{
            position: "absolute",
            width: 480,
            height: 480,
            top: "15%",
            left: -100,
          }}
        />
        <Card>
          <Text style={styles.cardTitle}>Why i became a mentor...</Text>
        </Card>
        <Card>
          <Text style={styles.cardTitle}>We both...</Text>
          <Row>
            <Image source={moonIcon} style={{ width: 20, height: 20 }} />
            <Text>Are night owls</Text>
          </Row>
          <Row>
            <Image source={moonIcon} style={{ width: 20, height: 20 }} />
            <Text>Value being in nature</Text>
          </Row>
          <Row>
            <Image source={moonIcon} style={{ width: 20, height: 20 }} />
            <Text>Find comfort in music</Text>
          </Row>
          <Row>
            <Image source={moonIcon} style={{ width: 20, height: 20 }} />
            <Text>Know what it feels like when family life is complicated</Text>
          </Row>
        </Card>
        <Card>
          <Text style={styles.cardTitle}>What i'm working on...</Text>
          <Text style={{ marginTop: 8, opacity: 0.5 }}>
            Figuring out who I am, managing anxiety, and learning how to ask for
            help when I need it.
          </Text>
        </Card>
        <Card>
          <Text style={styles.cardTitle}>Things we can talk about...</Text>
        </Card>
        <Card>
          <Text style={styles.cardTitle}>Advice to my younger self</Text>
        </Card>
        <Card>
          <Text style={styles.cardTitle}>What i'm listening to...</Text>
        </Card>
        <Card>
          <Text style={styles.cardTitle}>What i'm up to...</Text>
        </Card>
        <Card>
          <Text style={styles.cardTitle}>My weekends look like</Text>
        </Card>
      </Content>
    </Container>
  );
}

const styles = StyleSheet.create({
  cardTitle: {
    fontWeight: "bold",
  },
  title: {
    fontSize: 36,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 24,
  },
});
