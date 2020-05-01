/* eslint-disable handle-callback-err */
import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {parseString} from 'react-native-xml2js';
import NetError from './netError';
import PropTypes from 'prop-types';

export default class Papers extends React.Component {
  static propTypes = {
    rss: PropTypes.object,
  };
  constructor(props) {
    super(props);

    this.state = {
      rss: {},
      error: '',
    };
  }

  getData() {
    return fetch('http://news.yandex.ru/world.rss')
      .then(response => response.text())
      .then(responseDataXml => {
        try {
          // eslint-disable-next-line handle-callback-err
          parseString(
            responseDataXml.replace(/&quot;/g, '"'),
            (err, result) => {
              this.setState({
                rss: result.rss.channel[0],
              });
            },
          );
        } catch (error) {
          console.warn(error);
        }
      })
      .catch(error => {
        this.setState({error: 'Resource is temporarily unavailable'});
      });
  }

  componentDidMount() {
    try {
      this.getData();
    } catch (error) {
      console.warn(error);
    }
  }

  getArticlesList = () => {
    const articlesList = this.state.rss.item;
    if (!articlesList) return;
    const titlesList = articlesList.map((article, id) => {
      return {
        title: article.title,
        description: article.description,
        id,
      };
    });
    return titlesList;
  };

  render() {
    const navigation = this.props.navigation;
    const articles = {
      articles: this.getArticlesList(),
    };

    return (
      <View style={{backgroundColor: '#6f7d98', flex: 1}}>
        <NetError error={this.state.error} resetError={this._resetError} />
        <View style={styles.container}>
          <View style={styles.separator} />
          <TouchableOpacity
            accessibilityRole={'button'}
            onPress={() => navigation.navigate('Articles', {item: articles})}
            style={styles.linkContainer}>
            <Text style={styles.link}>{this.state.rss.title}</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    marginTop: 90,
    paddingHorizontal: 24,
    backgroundColor: '#6f7d98',
  },
  linkContainer: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 8,
    backgroundColor: '#6f7d98',
  },
  link: {
    flex: 2,
    justifyContent: 'center',
    marginTop: 20,
    fontSize: 20,
    fontWeight: '400',
    color: '#F9FBE7',
    backgroundColor: '#6f7d98',
    fontFamily: 'Courier-Bold',
  },
  description: {
    flex: 3,
    paddingVertical: 16,
    fontWeight: '400',
    fontSize: 18,
    backgroundColor: '#6f7d98',
    fontFamily: 'Courier-Bold',
  },
  separator: {
    backgroundColor: '#F9FBE7',
    height: 1,
  },
});

// export default Papers;

//<Text style={styles.link}>Example Paper</Text>;
