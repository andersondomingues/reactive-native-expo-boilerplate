import React from 'react';
import { Text, View, StyleSheet, Pressable } from 'react-native';
import istyle from './CustomButton.scss'

interface ButtonProps {
  title: string;
  onPress?: any;
  style?: any;
};

const CustomButton = (props: ButtonProps) => {
  const { onPress = () => {}, title, style = istyle } = props;
  console.log(style);
  return (
    <Pressable style={style.container} onPress={onPress}>
      <Text style={style.text}>{title}</Text>
    </Pressable>
  );
};

export default CustomButton;