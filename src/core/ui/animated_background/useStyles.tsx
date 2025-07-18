import {StyleSheet, useWindowDimensions} from 'react-native';

export const useStyles = () => {
  const dimensions = useWindowDimensions();
  return StyleSheet.create({
    gradient: {
      position: 'absolute',
      width: dimensions.width,
      height: dimensions.height,
      left: 0,
      right: 0,
    },
  });
};
