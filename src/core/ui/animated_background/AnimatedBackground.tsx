import {useWindowDimensions} from 'react-native';
import React, {useCallback, useEffect, useMemo} from 'react';
import {useStyles} from './useStyles';
import {
  Easing,
  useDerivedValue,
  useSharedValue,
  withRepeat,
  withTiming,
} from 'react-native-reanimated';
import {Canvas, Rect, vec, LinearGradient} from '@shopify/react-native-skia';

export const AnimatedBackground = () => {
  const avaliableColors = useMemo(() => ['#C5E1F0', '#D6E8E0', '#FFFBE3'], []);

  const styles = useStyles();
  const rotate = useSharedValue(0);
  const leftColor = useSharedValue('#C5E1F0');
  const centerColor = useSharedValue('#D6E8E0');
  const rightColor = useSharedValue('#FFFBE3');
  const dimensions = useWindowDimensions();

  const colors = useDerivedValue(() => {
    return [leftColor.value, centerColor.value, rightColor.value];
  }, []);

  const getRandomColor = useCallback(() => {
    const randomIndex = Math.floor(Math.random() * avaliableColors.length);
    return avaliableColors[randomIndex];
  }, [avaliableColors]);
  useEffect(() => {
    rotate.value = withRepeat(withTiming(10, {duration: 3000, easing: Easing.linear}), -1, true);
    leftColor.value = withRepeat(withTiming(getRandomColor(), {duration: 3000}), -1, true);
    centerColor.value = withRepeat(withTiming(getRandomColor(), {duration: 3000}), -1, true);
    rightColor.value = withRepeat(withTiming(getRandomColor(), {duration: 3000}), -1, true);
  }, [rotate, leftColor, rightColor, getRandomColor, centerColor]);
  return (
    <Canvas style={styles.gradient}>
      <Rect x={0} y={0} width={dimensions.width} height={dimensions.height}>
        <LinearGradient
          start={vec(0, 0)}
          transform={[{rotateY: rotate.value}]}
          end={vec(dimensions.width, dimensions.height)}
          colors={colors}
        />
      </Rect>
    </Canvas>
  );
};
