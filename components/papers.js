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
import Spinner from 'react-native-loading-spinner-overlay';

export default class Papers extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rss: [],
      error: false,
      spinner: true,
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
    setInterval(() => {
      this.setState({
        spinner: false,
      });
    }, 3000);

    try {
      this.getData();
    } catch (error) {
      console.log(error);
    }
  }

  getPapersTitle = () => {
    const papersList = this.state.rss;
    const navigation = this.props.navigation;

    // eslint-disable-next-line curly
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
      } catch (error) {}
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
        <Spinner
          visible={this.state.spinner}
          textContent={'Loading...'}
          textStyle={styles.spinnerTextStyle}
        />
        <NetError error={this.state.error} resetError={this._resetError} />
        <ScrollView>
          <View style={styles.container}>{this.getPapersTitle()}</View>
        </ScrollView>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  spinnerTextStyle: {
    color: '#FFF',
  },
  container: {
    marginTop: 90,
    paddingHorizontal: 24,
    backgroundColor: '#6f6f6d',
  },
  linkContainer: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 8,
    backgroundColor: '#6f6f6d',
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
    backgroundColor: '#6f6f6d',
  },
  separator: {
    backgroundColor: '#F9FBE7',
    height: 1,
  },
});
