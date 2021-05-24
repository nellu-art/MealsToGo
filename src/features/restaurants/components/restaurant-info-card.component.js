import React from 'react';
import {SvgXml} from 'react-native-svg';

import star from '../../../../assets/star';
import open from '../../../../assets/open';
import {Spacer} from '../../../components/spacer/spacerUpgrade.component';
import {Text} from '../../../components/typography/text.component';
import {
  Icon,
  Section,
  SectionEnd,
  Rating,
  Info,
  RestautantCard,
  RestautantCardCover,
  Address,
} from './restaurant-info-card.styles';

export const RestaurantInfoCard = ({restautant = {}}) => {
  const {
    name = 'Some Restautant',
    icon = 'https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png',
    photos = [
      'https://media-cdn.tripadvisor.com/media/photo-s/14/3e/86/54/caption.jpg',
    ],
    address = '100 some random street',
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily = true,
  } = restautant;

  const ratingArray = Array.from(new Array(Math.floor(rating)));
  console.log(ratingArray);
  return (
    <RestautantCard elevation={5}>
      <RestautantCardCover key={name} source={{uri: photos[0]}} />
      <Info>
        <Text variant="label">{name}</Text>

        <Section>
          <Rating>
            {ratingArray.map((el, indx) => (
              // eslint-disable-next-line react/no-array-index-key
              <SvgXml key={indx} xml={star} width={20} height={20} />
            ))}
          </Rating>

          <SectionEnd>
            {isClosedTemporarily && (
              <Text variant="error">CLOSED TEMPORARILY</Text>
            )}

            <Spacer position="left" size="large" />

            {isOpenNow && <SvgXml xml={open} width={20} height={20} />}

            <Spacer position="left" size="large" />

            <Icon source={{uri: icon}} />
          </SectionEnd>
        </Section>

        <Address>{address}</Address>
      </Info>
    </RestautantCard>
  );
};
