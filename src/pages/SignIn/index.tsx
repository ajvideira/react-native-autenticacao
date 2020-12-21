import React, { useContext } from 'react';
import {Button, StyleSheet, View} from 'react-native';
import { useAuth } from '../../contexts/auth';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  }
});

const SignIn: React.FC = () => {

  const {signed, user, signIn} = useAuth();

  console.log(signed);
  console.log(user);

  function handleButtonSignIn() {
    signIn();
  }

  return (
    <View style={styles.container}>
      <Button title="Sign In" onPress={handleButtonSignIn} />
    </View>
  );
};

export default SignIn;