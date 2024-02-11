import React from 'react';
import {useTailwind} from 'tailwind-rn';
import * as Animatable from 'react-native-animatable';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

interface AnimatedIconProps {
  name: string;
  size: number;
  color: string;
  currentTab: string;
}

export const AnimatedTabIcon: React.FC<AnimatedIconProps> = ({
  name,
  size,
  color,
  currentTab,
}) => {
  const tailwind = useTailwind();
  const fadeIn = {
    from: {
      translateY: 0,
    },
    to: {
      translateY: -30,
    },
  };
  return (
    <>
      {currentTab === name ? (
        <Animatable.View
          animation={fadeIn}
          useNativeDriver={true}
          easing="ease-out"
          style={tailwind(
            'border-2 border-black-200 bg-black rounded-full h-12 w-12 justify-center items-center',
          )}>
          <Icon name={name} size={size} color={color} />
        </Animatable.View>
      ) : (
        <Icon name={name} size={size} color={color} />
      )}
    </>
  );
};
