/* eslint-disable handle-callback-err */
import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {parseString} from 'react-native-xml2js';
import NetError from './netError';
import PropTypes from 'prop-types';

export default class Papers extends React.Component {
  static propTypes = {
    //rss: PropTypes.object,
  };
  constructor(props) {
    super(props);

    this.state = {
      rss: [],
      // rssYandexWorld: [],
      // rssYandexHealth: [],
      // rssYandexSport: [],
      // rssWS_World: [],
      // rssWS_Business: [],
      // rssGermanWorld: [],
      // rssGermanSport: [],
      // rssAU_world: [],
      error: false,
    };
  }

  getData() {
    const urls = [
      'http://news.yandex.ru/world.rss',
      'https://news.yandex.ru/health.rss',
      'https://news.yandex.ru/sport.rss',
      'https://feeds.a.dj.com/rss/RSSWorldNews.xml',
      'https://feeds.a.dj.com/rss/WSJcomUSBusiness.xml',
      'https://www.handelsblatt.com/contentexport/feed/wirtschaft',
      'https://www.handelsblatt.com/contentexport/feed/sport',
      'https://www.dailytelegraph.com.au/news/world/rss',
    ];
    return Promise.all(
      urls.map(url => fetch(url).then(response => response.text())),
    )

      .then(dataSource => {
        try {
          dataSource.forEach(all_papers => this.parseSourceFile(all_papers));
        } catch (error) {
          console.log(error);
        }
      })
      .catch(error => {
        this.setState({error: true});
      });
  }

  parseSourceFile(dataSource) {
    const rss = this.state.rss;

    parseString(dataSource.replace(/&amp;quot;/g, '"'), (err, result) => {
      rss.push(result.rss.channel[0]);
      this.setState({rss});
      console.log(result.rss.channel);
    });
  }

  componentDidMount() {
    try {
      this.getData();
    } catch (error) {
      console.log(error);
    }
  }

  getArticlesList = () => {
    const articlesList = this.state.rss.item;
    //console.log(this.state.rss.item);
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
    //fontFamily: 'Courier-Bold',
  },
  description: {
    flex: 3,
    paddingVertical: 16,
    fontWeight: '400',
    fontSize: 18,
    backgroundColor: '#6f7d98',
    //fontFamily: 'Courier-Bold',
  },
  separator: {
    backgroundColor: '#F9FBE7',
    height: 1,
  },
});

//this.state.rss.title
