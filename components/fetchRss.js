import React from 'react';
import {Text, View} from 'react-native';

export default class FetchRss extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rss: [],
    };
  }

  getData() {
    return fetch('https://www.vesti.ru/vesti.rss')
      .then(response => response.text())
      .then(responseData => {
        console.log(responseData);
        this.setState({rss: responseData});
      })
      .catch(error => {
        console.error(error);
      });
  }

  componentDidMount() {
    this.getData();
  }
  render() {
    return <Text>{this.state.rss}</Text>;
  }
}
