import React, {useContext, useState} from 'react';
import styled from 'styled-components/native';
import {FlatList, StyleSheet, TouchableOpacity} from 'react-native';
import {ActivityIndicator} from 'react-native-paper';

import RestaurantInfoCard from '../components/restaurant-info/restaurant-card';
import {SafeArea} from '../../../components/safeArea/safe-area.component';
import Search from '../components/search/search';
import {RestaurantsContext} from '../../../services/restaurants/restaurants.context';
import {FavouritesContext} from '../../../services/favourites/favourites.context';

import {FavouritesBar} from '../components/favourites-bar/favourites-bar';

const LoaderWrapper = styled.View`
  position: absolute;
  top: 50%;
  left: 50%;
`;

const Loading = styled(ActivityIndicator)`
  margin-left: -25px;
`;
export const RestaurantsScreen = ({navigation}) => {
  const {isLoading, error, restaurants} = useContext(RestaurantsContext);
  const {favourites} = useContext(FavouritesContext);

  const [isToggled, setIsToggled] = useState(false);

  const handleToggleFav = () => {
    setIsToggled(!isToggled);
  };

  return (
    <SafeArea>
      {isLoading && (
        <LoaderWrapper>
          <Loading animating={true} color="#2182BD" size={50} />
        </LoaderWrapper>
      )}

      <Search onFavouritesToggle={handleToggleFav} isFavouritesToggled={isToggled} />

      {isToggled && <FavouritesBar favourites={favourites} onNavigate={navigation.navigate} />}

      <FlatList
        data={restaurants}
        renderItem={({item}) => (
          <TouchableOpacity
            onPress={() => navigation.navigate('RestaurantDetail', {restaurant: item})}>
            <RestaurantInfoCard restaurant={item} />
          </TouchableOpacity>
        )}
        keyExtractor={item => item.name}
        contentContainerStyle={styles.contentContainer}
      />
    </SafeArea>
  );
};

const styles = StyleSheet.create({
  contentContainer: {
    padding: 16,
  },
});
