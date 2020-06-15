/* eslint-disable handle-callback-err */
import React, {Fragment} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {parseString} from 'react-native-xml2js';
import NetError from './netError';

export default class Papers extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rss: [],
      error: false,
    };
  }

  getData() {
    const urls = [
      'http://news.yandex.ru/world.rss',
      'https://news.yandex.ru/health.rss',
      'https://news.yandex.ru/sport.rss',
      'https://lenta.ru/rss/articles/russia',
      'https://www.vesti.ru/vesti.rss',
      'https://www.radiosvoboda.org/api/zrqiteuuir',
      'https://www.svaboda.org/api/zvgrppeo_qpm',
      'https://rss.nytimes.com/services/xml/rss/nyt/Upshot.xml',
      'http://feeds.nbcnews.com/nbcnews/public/world',
      'https://feeds.a.dj.com/rss/RSSWorldNews.xml',
      'https://feeds.a.dj.com/rss/WSJcomUSBusiness.xml',
      'https://www.handelsblatt.com/contentexport/feed/wirtschaft',
      'https://www.handelsblatt.com/contentexport/feed/sport',
      'https://www.ilsole24ore.com/rss/italia--attualita.xml',
      'https://www.ilsole24ore.com/rss/sport24--calcio.xml',
      'https://www.ilsole24ore.com/rss/salute--sanita.xml',
      'https://www.ilsole24ore.com/rss/tecnologia--scienza.xml',
      'https://www.lefigaro.fr/rss/figaro_actualites.xml',
      'https://www.lefigaro.fr/rss/figaro_sante.xml',
      'https://sport24.lefigaro.fr/rssfeeds/sport24-accueil.xml',
      'https://sport24.lefigaro.fr/rssfeeds/sport24-football.xml',
      'https://www.theguardian.com/us-news/rss',
      'https://www.theguardian.com/society/health/rss',
      'https://www.dailymail.co.uk/news/index.rss',
      'https://www.dailytelegraph.com.au/news/world/rss',
    ];

    const parsedPapers = [];
    Promise.all(urls.map(url => fetch(url).then(response => response.text())))
      .then(PapersXMLs => {
        try {
          PapersXMLs.forEach(paperXML =>
            this.parseSourceFile(paperXML, parsedPapers),
          );
        } catch (error) {
          console.log(error);
        }
      })
      .catch(error => {
        this.setState({error: true});
      });
  }

  parseSourceFile(paperXML) {
    const currentState = this.state.rss;
    try {
      parseString(paperXML.replace(/&amp;quot;/g, '"'), (err, result) => {
        currentState.push(result);
        this.setState({
          rss: currentState,
        });
      });
    } catch (error) {
      this.setState({error: true});
    }
  }

  componentDidMount() {
    try {
      this.getData();
    } catch (error) {
      console.log(error);
    }
  }

  getPapersTitle = () => {
    const papersList = this.state.rss;
    const navigation = this.props.navigation;

    if (!papersList) return;
    const papers = papersList.map((parsPaper, index) => {
      try {
        return (
          <Fragment key={index}>
            <View style={styles.separator} />
            <TouchableOpacity
              accessibilityRole={'button'}
              onPress={() =>
                navigation.navigate('Articles', {
                  articlesList: this.getArticlesList(parsPaper),
                })
              }
              style={styles.linkContainer}>
              <Text style={styles.link}>
                {parsPaper.rss.channel[0].title[0]}
              </Text>
            </TouchableOpacity>
          </Fragment>
        );
      } catch (error) {
        //this.setState({error: true});
      }
    });
    return papers;
  };

  getArticlesList = parsPaper => {
    if (!parsPaper) return;
    const articlesList = parsPaper.rss.channel[0].item.map(article => {
      return {
        title: article.title[0],
        description: article.description[0],
      };
    });
    return articlesList;
  };

  render() {
    return (
      <View style={styles.description}>
        <NetError error={this.state.error} resetError={this._resetError} />
        <ScrollView>
          <View style={styles.container}>{this.getPapersTitle()}</View>
        </ScrollView>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    marginTop: 90,
    paddingHorizontal: 24,
    backgroundColor: '#5b5b5b',
  },
  linkContainer: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 8,
    backgroundColor: '#5b5b5b',
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
    flex: 1,
    backgroundColor: '#5b5b5b',
  },
  separator: {
    backgroundColor: '#F9FBE7',
    height: 1,
  },
});
