import Parser from 'rss-parser';

const parser = new Parser();

export default async function handler(req, res) {
  try {
    const feed = await parser.parseURL('https://techcrunch.com/feed/');
    const articles = feed.items.slice(0, 5).map(item => ({
      title: item.title,
      link: item.link,
      date: item.pubDate,
    }));

    res.status(200).json(articles);
  } catch (error) {
    console.error('RSS fetch error:', error);
    res.status(500).json({ error: 'Failed to fetch updates' });
  }
}
