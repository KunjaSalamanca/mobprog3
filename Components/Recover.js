
import React from 'react';
import { View, StyleSheet } from 'react-native';
import { TextInput, Button, Text } from 'react-native-paper';

const Recovery = ({ onSwitch }) => (
  <View style={styles.container}>
    <View style={styles.header}>
      <Text variant="headlineMedium" style={styles.recoveryText}>Can't access your account?      </Text>
    </View>
    <TextInput label="Username, or email" mode="outlined" style={styles.input} />
    <Button mode="contained" style={styles.button} onPress={() => {}}>
      Send Login Recovery Link
    </Button>
    <Button mode="text" onPress={onSwitch}>
      Back to Login
    </Button>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
  header: {
    alignItems: 'center',
    marginBottom: 20,
  },
  recoveryText: {
    fontWeight: 'bold',
    color: '#fff' 
  },
  input: {
    marginBottom: 16,
    width: 300, 
    alignSelf: 'center',
  },
  button: {
    marginBottom: 16,
    width: 250, 
    alignSelf: 'center', 
  },
});

export default Recovery;
