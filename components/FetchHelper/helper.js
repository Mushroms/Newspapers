const HelperArticleList = {
  getArticlesList(parsPaper) {
    if (!parsPaper) return;
    const articlesList = parsPaper.rss.channel[0].item.map(article => {
      return {
        title: article.title[0],
        description: article.description[0],
        link: article.link[0],
      };
    });
    return articlesList;
  },
};
export default HelperArticleList;
