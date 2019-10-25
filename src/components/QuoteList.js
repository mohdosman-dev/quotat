import React, {Component} from 'react';
import {View, Text, Image} from 'react-native';

import QuoteDetail from './QuoteDetail'

class QuoteList extends Component {
  //   constructor(props) {
  //     this.state = {
  //       quotes: [
  //         {
  //           id: 'SomeIds1',
  //           quote: "Dont't cry because it's over, smile because it happend! ☺",
  //           category: 'Motiviation',
  //           author: {
  //             name: 'Mohammed Osman',
  //             profile_image: require('../assets/imgs/author.png'),
  //           },
  //           created_at: Date.now(),
  //           updated_at: Date.now(),
  //         },
  //         {
  //           id: 'SomeIds2',
  //           quote:
  //             "Two things are infinite: the universe and human stupidity: and I'm not sure about the universe.",
  //           category: 'Motiviation',
  //           author: {
  //             name: 'Mohammed Osman',
  //             profile_image: require('../assets/imgs/author.png'),
  //           },
  //           created_at: Date.now(),
  //           updated_at: Date.now(),
  //         },
  //         {
  //           id: 'SomeIds3',
  //           quote:
  //             'A friend is someone who knows all about you and still loves you.',
  //           category: 'Motiviation',
  //           author: {
  //             name: 'Mohammed Osman',
  //             profile_image: require('../assets/imgs/author.png'),
  //           },
  //           created_at: Date.now(),
  //           updated_at: Date.now(),
  //         },
  //         {
  //           id: 'SomeIds4',
  //           quote: 'Everything you can imagine is real.',
  //           category: 'Motiviation',
  //           author: {
  //             name: 'Mohammed Osman',
  //             profile_image: require('../assets/imgs/author.png'),
  //           },
  //           created_at: Date.now(),
  //           updated_at: Date.now(),
  //         },
  //       ]
  //     };
  //   }

  quotes = [
    {
      id: 'SomeIds1',
      quote: "Dont't cry because it's over, smile because it happend! ☺",
      category: 'Motiviation',
      author: {
        name: 'Mohammed Osman',
        profile_image: require('../assets/imgs/author.png'),
      },
      created_at: Date.now(),
      updated_at: Date.now(),
    },
    {
      id: 'SomeIds2',
      quote:
        "Two things are infinite: the universe and human stupidity: and I'm not sure about the universe.",
      category: 'Motiviation',
      author: {
        name: 'Mohammed Osman',
        profile_image: require('../assets/imgs/author.png'),
      },
      created_at: Date.now(),
      updated_at: Date.now(),
    },
    {
      id: 'SomeIds3',
      quote: 'A friend is someone who knows all about you and still loves you.',
      category: 'Motiviation',
      author: {
        name: 'Mohammed Osman',
        profile_image: require('../assets/imgs/author.png'),
      },
      created_at: Date.now(),
      updated_at: Date.now(),
    },
    {
      id: 'SomeIds4',
      quote: 'Everything you can imagine is real.',
      category: 'Motiviation',
      author: {
        name: 'Mohammed Osman',
        profile_image: require('../assets/imgs/author.png'),
      },
      created_at: Date.now(),
      updated_at: Date.now(),
    },
  ];

  renderQuotes() {
    return this.quotes.map(quote => 
        <QuoteDetail key={quote.id} quote={quote} />
    );
  }

  render() {
    return (
      <View>
        {this.renderQuotes()}
      </View>
    );
  }
}

export default QuoteList;
