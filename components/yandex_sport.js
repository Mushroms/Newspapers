import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {parseString} from 'react-native-xml2js';
import NetError from './netError';
import PropTypes from 'prop-types';

export default class Yandex_sport extends React.Component {
  static propTypes = {
    rss: PropTypes.object,
  };
  constructor(props) {
    super(props);

    this.state = {
      rss: {},
      error: false,
    };
  }

  getData() {
    //let url = 'https://news.yandex.ru/health.rss';
    //return Promise.all(
    //urls.map(url =>
    //fetch(url)
    fetch('https://news.yandex.ru/sport.rss')
      .then(response => response.text())
      .then(responseDataXml => {
        try {
          // eslint-disable-next-line handle-callback-err
          parseString(
            responseDataXml.replace(/&amp;quot;/g, '"'),
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
        this.setState({error: true});
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
    marginTop: 10,
    paddingHorizontal: 24,
  },
  linkContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    position: 'relative',
  },
  link: {
    flex: 2,
    marginTop: 20,
    fontSize: 18,
    fontWeight: '400',
    color: '#F9FBE7',
    //fontFamily: 'Courier-Bold',
  },
  description: {
    color: '#F9FBE7',
    paddingVertical: 10,
    fontWeight: '400',
    fontSize: 18,
    //fontFamily: 'Courier-Bold',
  },
  separator: {
    backgroundColor: '#F9FBE7',
    height: 1,
  },
});
