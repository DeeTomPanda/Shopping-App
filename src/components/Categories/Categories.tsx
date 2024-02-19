import React from 'react';
import {View, Text} from 'react-native';
import {useTailwind} from 'tailwind-rn';

export const Categories: React.FC<{}> = () => {
  const tailwind = useTailwind();
  return (
    <View>
      <Text style={tailwind('font-bold')}>{'ASsasaDSD'}</Text>
    </View>
  );
};
