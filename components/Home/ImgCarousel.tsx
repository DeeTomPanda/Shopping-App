import React from 'react';
import {View, Text, Dimensions} from 'react-native';
import {useTailwind} from 'tailwind-rn';
import {Card} from 'react-native-paper';
import Carousel from 'react-native-reanimated-carousel';

export const ImgCarousel = () => {
  const width: number = Dimensions.get('window').width;
  const tailwind = useTailwind();
  const carouselImgs: string[] = [
    'https://fastly.picsum.photos/id/160/3200/2119.jpg?hmac=cz68HnnDt3XttIwIFu5ymcvkCp-YbkEBAM-Zgq-4DHE',
    'https://fastly.picsum.photos/id/23/3887/4899.jpg?hmac=2fo1Y0AgEkeL2juaEBqKPbnEKm_5Mp0M2nuaVERE6eE',
    'https://fastly.picsum.photos/id/26/4209/2769.jpg?hmac=vcInmowFvPCyKGtV7Vfh7zWcA_Z0kStrPDW3ppP0iGI',
    'https://fastly.picsum.photos/id/175/2896/1944.jpg?hmac=djMSfAvFgWLJ2J3cBulHUAb4yvsQk0d4m4xBJFKzZrs',
  ];
  return (
    <View style={tailwind('mt-6 self-center w-11/12 rounded-lg  h-1/4 mb-2')}>
      <Carousel
        width={width}
        height={width / 1.5}
        mode={'parallax'}
        data={[...carouselImgs]}
        scrollAnimationDuration={1000}
        renderItem={({item, index}) => (
          <View>
            <Card>
              <Card.Cover source={{uri: item}} />
            </Card>
          </View>
        )}
      />
    </View>
  );
};
