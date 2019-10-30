import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableNativeFeedback,
  TouchableOpacity,
} from 'react-native';

import Ripple from 'react-native-material-ripple';

import Card from './common/Card';
import CardSection from './common/CardSection';
import Seprator from './common/Seprator';

import Styles from './styles';
import Colors from './common/Colors';

const QuoteDetail = props => {
  const {quote, navigation} = props;

  return (
    <Card onPress={() => console.log(quote.item.id)}>
      <CardSection>
        <Text style={Styles.quoteTextStyle}>"{quote.item.quote}"</Text>
      </CardSection>
      <Seprator />

      <CardSection>
        <Image
          source={quote.item.author.profile_image}
          style={Styles.authorImage}
        />
        <Text style={Styles.authorName}>{quote.item.author.name}</Text>
      </CardSection>
    </Card>
  );
};

export default QuoteDetail;
