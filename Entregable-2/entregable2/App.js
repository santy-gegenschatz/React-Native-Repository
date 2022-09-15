import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, FlatList, TouchableOpacity, StyleSheet, Text, TextInput, View, Modal } from 'react-native';
import MainScreen from './components/MainScreen/MainScreen';

export default function App() { 
  return (
    // We will render the only component in the app, the main screen
    <MainScreen /> 
  );
}