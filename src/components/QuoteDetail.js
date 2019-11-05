import React from 'react';
import {Text, Image} from 'react-native';

import {Card, CardSection, Seprator} from './common';

import Styles from './styles';

const QuoteDetail = props => {
  const {quote} = props;

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
