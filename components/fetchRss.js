// import React from 'react';
// import {Text, View} from 'react-native';
// import {parseString} from 'react-native-xml2js';
// import Articles from './articles';

// export default class FetchRss extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       rss: {},
//     };
//   }

//   getData() {
//     return fetch('https://www.vesti.ru/vesti.rss')
//       .then(response => response.text())
//       .then(responseDataXml => {
//         // eslint-disable-next-line handle-callback-err
//         parseString(responseDataXml, (err, result) => {
//           //console.log('Channel information:', result.rss.channel);
//           //console.log('List all news:', result.rss.channel[0]);
//           this.setState({
//             rss: result.rss.channel[0],
//           });
//         });
//       })
//       .catch(error => {
//         console.error(error);
//       });
//   }

//   componentDidMount() {
//     this.getData();
//   }
//   render() {
//     return <Text>{this.state.rss.title}</Text>;
//   }
// }
