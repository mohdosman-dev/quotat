import React, {useState} from 'react';
import {View} from 'react-native';
import {useQuery} from '@apollo/client';
import {GET_QUOTES} from './graphql';
import QuoteDetail from './QuoteDetail';

const QuoteList = () => {
  const [quotes, setQuotes] = useState([]);
  const [fetched, setFetched] = useState(false);
  const {data = {}, loading, error} = useQuery(GET_QUOTES);
  if (!loading && !error && !fetched) {
    setQuotes(data.quotes);
    setFetched(true);
  }
  if (error) {
    console.log(error);
  }

  console.log(quotes);

  return <View />;
};

export default QuoteList;

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

// quotes = [
//   {
//     id: 'SomeIds1',
//     quote: "Dont't cry because it's over, smile because it happend! ☺",
//     category: 'Motiviation',
//     author: ObjectId('5dbc2b0a74e720630074535b'),
//     created_at: Date.now(),
//     updated_at: Date.now(),
//   },
//   {
//     id: 'SomeIds2',
//     quote:
//       "Two things are infinite: the universe and human stupidity: and I'm not sure about the universe.",
//     category: 'Motiviation',
//     author: {
//       name: 'Mohammed Osman',
//       profile_image: require('../assets/imgs/author.png'),
//     },
//     created_at: Date.now(),
//     updated_at: Date.now(),
//   },
//   {
//     id: 'SomeIds3',
//     quote: 'A friend is someone who knows all about you and still loves you.',
//     category: 'Motiviation',
//     author: {
//       name: 'Mohammed Osman',
//       profile_image: require('../assets/imgs/author.png'),
//     },
//     created_at: Date.now(),
//     updated_at: Date.now(),
//   },
//   {
//     id: 'SomeIds4',
//     quote: 'Everything you can imagine is real.',
//     category: 'Motiviation',
//     author: {
//       name: 'Mohammed Osman',
//       profile_image: require('../assets/imgs/author.png'),
//     },
//     created_at: Date.now(),
//     updated_at: Date.now(),
//   },
// ];
