import React, {useCallback, useEffect, useState} from 'react';
import {TouchableOpacity, Text, StyleSheet, View} from 'react-native';
import {TapGestureHandler} from 'react-native-gesture-handler';
import borderRadius from '../utils/borderRadius';

const GameButton = ({onPress, title, style, children}) => {
  return (
    <TapGestureHandler
      maxDurationMs={36000000}
      onBegan={() => {
        onPress(title, true);
      }}
      onEnded={() => {
        onPress(title, false);
      }}>
      <View
        style={[
          style === 'big' ? styles.big_button : styles.button,
          false && styles.pressed,
        ]}>
        {children || <Text style={styles.text}>{title}</Text>}
      </View>
    </TapGestureHandler>
  );
};

export default GameButton;

const styles = StyleSheet.create({
  text: {
    fontSize: 22,
    color: 'white',
  },
  big_button: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#dda629',
    width: '25%',
    marginRight: 6,
    aspectRatio: 1,
    ...borderRadius([100]),
  },
  button: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#181818',
    width: '17%',
    marginTop: 'auto',
    marginLeft: 5,
    marginRight: 5,
    aspectRatio: 1,
    ...borderRadius([50]),
  },
  pressed: {
    backgroundColor: '#dda62999',
  },
});
