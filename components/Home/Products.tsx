import React from 'react';
import {View, Text} from 'react-native';
import {useTailwind} from 'tailwind-rn';

export const Products: React.FC<{}> = () => {
  const tailwind = useTailwind();
  return (
    <View style={tailwind('flex flex-col   ')}>
      <View>
        <Text style={tailwind('text-3xl text-black')}>{'Recommended'}</Text>
      </View>
      <View>
        <Text>{'HI'}</Text>
      </View>
    </View>
  );
};
