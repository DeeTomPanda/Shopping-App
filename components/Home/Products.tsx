import React, {useEffect, useState} from 'react';
import {View, Text, FlatList} from 'react-native';
import {useTailwind} from 'tailwind-rn';
import getData from './../../services/getData';

interface productsType {
  id: number;
  description: string;
  price: number;
  title: string;
  category: string;
  thumbnail: string;
  images: string[];
}

export const Products: React.FC<{}> = () => {
  const tailwind = useTailwind();
  const [products, setProducts] = useState<productsType[]>([]);
  useEffect(() => {
    getData()
      .then(response => {
        setProducts(response.data.products);
        console.log(products.length);
      })
      .catch(err => console.log(err));
  }, []);
  return (
    <View style={tailwind('flex flex-col flex-1 mt-4')}>
      <View>
        <Text style={tailwind('text-3xl text-black')}>{'Recommended'}</Text>
      </View>
      <View style={tailwind(' flex flex-1')}>
        <FlatList
          columnWrapperStyle={{justifyContent: 'space-between'}}
          style={tailwind('flex flex-1')}
          data={products}
          extraData={products.length}
          renderItem={({item}) => (
            <View style={tailwind(' h-11/12  flex bg-blue-200')}>
              <Text>{item.price}</Text>
            </View>
          )}
          numColumns={2}></FlatList>
      </View>
    </View>
  );
};
