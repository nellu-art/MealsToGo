import React from 'react';
import {SvgXml} from 'react-native-svg';

import star from '../../../../../assets/star';
import open from '../../../../../assets/open';
import {Spacer} from '../../../../components/spacer/spacerUpgrade.component';
import {Text} from '../../../../components/typography/text.component';
import {Favourite} from '../favourite-btn/favourite';
import {
  Icon,
  Section,
  SectionEnd,
  Rating,
  Info,
  RestaurantCard,
  RestaurantCardCover,
  Address,
} from './styles';

const RestaurantInfoCard = ({restaurant}) => {
  const {name, icon, photos, address, isOpenNow, rating, isClosedTemporarily, placeId} = restaurant;

  const ratingArray = Array.from(new Array(Math.floor(rating)));
  return (
    <RestaurantCard elevation={5}>
      <Favourite restaurant={restaurant} />
      <RestaurantCardCover key={name} source={{uri: photos[0]}} />
      <Info>
        <Text variant="label">{name}</Text>

        <Section>
          <Rating>
            {ratingArray.map((el, indx) => (
              <SvgXml
                // eslint-disable-next-line react/no-array-index-key
                key={`star-${placeId}-${indx}`}
                xml={star}
                width={20}
                height={20}
              />
            ))}
          </Rating>

          <SectionEnd>
            {isClosedTemporarily && <Text variant="error">CLOSED TEMPORARILY</Text>}

            <Spacer position="left" size="large" />

            {isOpenNow && <SvgXml xml={open} width={20} height={20} />}

            <Spacer position="left" size="large" />

            <Icon source={{uri: icon}} />
          </SectionEnd>
        </Section>

        <Address>{address}</Address>
      </Info>
    </RestaurantCard>
  );
};

RestaurantInfoCard.defaultProps = {
  restaurant: {
    name: 'Some Restautant',
    icon: 'https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png',
    photos: ['https://media-cdn.tripadvisor.com/media/photo-s/14/3e/86/54/caption.jpg'],
    address: '100 some random street',
    isOpenNow: true,
    rating: 4,
    isClosedTemporarily: true,
  },
};

export default RestaurantInfoCard;
