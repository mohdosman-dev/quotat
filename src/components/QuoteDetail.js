import React from 'react';
import {View, Text, Image} from 'react-native';

import Card from './common/Card';
import CardSection from './common/CardSection';
import Seprator from './common/Seprator';

import Styles from './styles'

const QuoteDetail = props => {
  const {quote} = props;
  return (
    <Card>
      <CardSection>
        <Text style={Styles.quoteStyle}>"{quote.quote}"</Text>
      </CardSection>
      <Seprator />

      <CardSection>
          <Image source={quote.author.profile_image} style={Styles.authorImage} />
          <Text>{quote.author.name}</Text>
      </CardSection>
    </Card>
  );
};

export default QuoteDetail;
