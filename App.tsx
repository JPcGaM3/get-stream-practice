import React, {useState} from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {HomeScreen} from './src/HomeScreen';
import {CallScreen} from './src/CallScreen';
import {
  StreamVideo,
  StreamVideoClient,
} from '@stream-io/video-react-native-sdk';

const apiKey = 'mmhfdzb5evj2'; // the API key can be found in the "Credentials" section
const token =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiU2F0ZWxlX1NoYW4iLCJpc3MiOiJodHRwczovL3Byb250by5nZXRzdHJlYW0uaW8iLCJzdWIiOiJ1c2VyL1NhdGVsZV9TaGFuIiwiaWF0IjoxNzE1MTQzMTgxLCJleHAiOjE3MTU3NDc5ODZ9.PCZb6hjYy102W65HXmcKM7AYBC7BLQ0y6ikxp7BFvvA'; // the token can be found in the "Credentials" section
const userId = 'Satele_Shan'; // the user id can be found in the "Credentials" section
const callId = '2L8Lcv9yauBR'; // the call id can be found in the "Credentials" section
const user = {
  id: userId,
  name: 'John Malkovich',
  image: `https://getstream.io/random_png/?id=${userId}&name=John+Malkovich`,
};

const client = new StreamVideoClient({apiKey, user, token});

export default function App() {
  const [activeScreen, setActiveScreen] = useState('home');
  const goToCallScreen = () => setActiveScreen('call-screen');
  const goToHomeScreen = () => setActiveScreen('home');

  return (
    <StreamVideo client={client}>
      <SafeAreaView style={styles.container}>
        {activeScreen === 'call-screen' ? (
          <CallScreen goToHomeScreen={goToHomeScreen} callId={callId} />
        ) : (
          <HomeScreen goToCallScreen={goToCallScreen} />
        )}
      </SafeAreaView>
    </StreamVideo>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    textAlign: 'center',
  },
});
