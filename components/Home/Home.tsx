import React from 'react';
import {View, Text} from 'react-native';
import {useTailwind} from 'tailwind-rn';
import {Hero} from './Hero';
import {ImgCarousel} from './ImgCarousel';

export const Home: React.FC<{}> = () => {
  const tailwind = useTailwind();
  return (
    <View style={tailwind('flex flex-col w-full h-full')}>
      <Hero />
      <ImgCarousel />
    </View>
  );
};
