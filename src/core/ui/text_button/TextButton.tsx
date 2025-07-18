import {Text, Pressable} from 'react-native';
import React from 'react';
import {useStyles} from './useStyles';

type Props = {
  title: string;
  onPress: () => void;
};

export const TextButton = ({title, onPress}: Props) => {
  const styles = useStyles();
  return (
    <Pressable
      onPress={onPress}
      style={({pressed}) => {
        if (pressed) {
          return {
            transform: [{scale: 0.95}],
          };
        } else {
          return {};
        }
      }}>
      <Text style={styles.button}>{title}</Text>
    </Pressable>
  );
};
