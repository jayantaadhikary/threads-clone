import {
  StyleSheet,
  ScrollView,
  SafeAreaView,
  Platform,
  RefreshControl,
} from "react-native";

import EditScreenInfo from "../../components/EditScreenInfo";
import { Text, View } from "../../components/Themed";
import Lottie from "lottie-react-native";
import { useContext, useRef } from "react";
import { createRandomUser } from "../../utils/generate-dummy-data";
import { ThreadContext } from "../../context/thread-context";
import ThreadsItem from "../../components/ThreadsItem";

export default function TabOneScreen() {
  const animationRef = useRef<Lottie>(null);
  const threads = useContext(ThreadContext);

  return (
    <SafeAreaView>
      <ScrollView
        contentContainerStyle={{
          paddingHorizontal: 10,
          paddingTop: Platform.select({ android: 30 }),
        }}
        refreshControl={
          <RefreshControl
            onRefresh={() => {
              animationRef.current?.play();
            }}
            refreshing={false}
            tintColor={"transparent"}
          />
        }
      >
        <Lottie
          ref={animationRef}
          source={require("../../lottie-animations/threads.json")}
          loop={false}
          autoPlay
          style={{ width: 90, height: 90, alignSelf: "center" }}
          // onAnimationFinish={() => {}}
        />
        {threads.map((thread) => (
          <ThreadsItem key={thread.id} {...thread} />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}
