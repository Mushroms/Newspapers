/* eslint-disable handle-callback-err */
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {parseString} from 'react-native-xml2js';
import NetError from './netError';
import PropTypes from 'prop-types';
import {getActionFromState} from '@react-navigation/native';

export default class Papers extends React.Component {
  static propTypes = {
    //rss: PropTypes.object,
  };
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
      'https://feeds.a.dj.com/rss/RSSWorldNews.xml',
      'https://feeds.a.dj.com/rss/WSJcomUSBusiness.xml',
      'https://www.handelsblatt.com/contentexport/feed/wirtschaft',
      'https://www.handelsblatt.com/contentexport/feed/sport',
      'https://www.dailytelegraph.com.au/news/world/rss',
    ];
    const parsedPapers = [];
    Promise.all(urls.map(url => fetch(url).then(response => response.text())))

      .then(PapersXMLs => {
        try {
          PapersXMLs.forEach(paperXML =>
            this.parseSourceFile(paperXML, parsedPapers),
          );

          this.setState({
            rss: parsedPapers,
          });
        } catch (error) {
          console.log(error);
        }
      })
      .catch(error => {
        this.setState({error: true});
      });
  }

  parseSourceFile(paperXML, parsedPapers) {
    parseString(paperXML.replace(/&amp;quot;/g, '"'), (err, result) => {
      parsedPapers.push(result);
    });
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
    const papers = papersList.map(parsPaper => {
      return (
        <>
          <View style={styles.separator} />
          <TouchableOpacity
            accessibilityRole={'button'}
            onPress={() =>
              navigation.navigate('Articles', {
                articlesList: this.getArticlesList(parsPaper),
              })
            }
            style={styles.linkContainer}>
            <Text style={styles.link}>{parsPaper.rss.channel[0].title[0]}</Text>
          </TouchableOpacity>
        </>
      );
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
      <View style={{backgroundColor: '#6f7d98', flex: 1}}>
        <NetError error={this.state.error} resetError={this._resetError} />
        <View style={styles.container}>{this.getPapersTitle()}</View>
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
    marginTop: 20,
    fontSize: 18,
    fontWeight: '400',
    color: '#F9FBE7',
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
//<View style={{backgroundColor: '#6f7d98', flex: 1}}>
//<View>
// {
//   titlesPapers.map((titles, id) => {
//     return (
//       <View key={id}>
//         <Text>{titles}</Text>
//       </View>
//     );
//   })
// }
//             </View >
