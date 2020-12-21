import React, { useContext } from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import { useAuth } from '../../contexts/auth';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    color: 'black'
  }
});

const Dashboard: React.FC = () => {
  const {signed, user, signOut} = useAuth();

  console.log(signed);
  console.log(user);

  function handleButtonSignOut() {
    console.log('chegou no handleButtonSignOut');
    
    signOut();
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{user?.name}</Text>
      <Button title="Sign Out" onPress={handleButtonSignOut} />
    </View>
  );
};

export default Dashboard;