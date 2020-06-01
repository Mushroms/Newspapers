/* eslint-disable handle-callback-err */
import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {parseString} from 'react-native-xml2js';
import NetError from './netError';
import PropTypes from 'prop-types';
import Yandex_World from './yandex_world';
import Yandex_sport from './yandex_sport';
import German_economic from './german_economic';
import German_sport from './german_sport';
import AU_world from './au_world';
import Wall_Street from './wall_street';
import Wall_Street_Business from './wall_street_business';

export default class Papers extends React.Component {
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
    fetch('https://news.yandex.ru/health.rss')
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
      <View style={{backgroundColor: '#6f7d98', flex: 2}}>
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
        <Yandex_World navigation={this.props.navigation} />
        <Yandex_sport navigation={this.props.navigation} />
        <German_economic navigation={this.props.navigation} />
        <German_sport navigation={this.props.navigation} />
        <AU_world navigation={this.props.navigation} />
        <Wall_Street navigation={this.props.navigation} />
        <Wall_Street_Business navigation={this.props.navigation} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: '7%',
    width: '100%',
    marginTop: 100,
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
