import axios from 'axios';
import * as cheerio from 'cheerio';

export const fetchMetadata = async (url) => {
  try {
    const { data } = await axios.get(url);

    const $ = cheerio.load(data);

    const title =
      $('meta[property="og:title"]').attr('content') ||
      $('title').text();

    const description =
      $('meta[property="og:description"]').attr('content') ||
      '';

    const image =
      $('meta[property="og:image"]').attr('content') ||
      '';

    return { title, description, image };

  } catch (error) {
    console.error('Metadata fetch error:', error.message);
    return {
      title: url,
      description: '',
      image: ''
    };
  }
};