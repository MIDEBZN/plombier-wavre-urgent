import a01 from './article-01.json';
import a02 from './article-02.json';
import a03 from './article-03.json';
import a04 from './article-04.json';
import a05 from './article-05.json';
import a06 from './article-06.json';
import a07 from './article-07.json';
import a08 from './article-08.json';
import a09 from './article-09.json';
import a10 from './article-10.json';
import a11 from './article-11.json';
import a12 from './article-12.json';
import a13 from './article-13.json';
import a14 from './article-14.json';
import a15 from './article-15.json';
import a16 from './article-16.json';
import a17 from './article-17.json';
import a18 from './article-18.json';
import a19 from './article-19.json';
import a20 from './article-20.json';
import a21 from './article-21.json';
import a22 from './article-22.json';
import a23 from './article-23.json';
import a24 from './article-24.json';
import a25 from './article-25.json';
import a26 from './article-26.json';
import a27 from './article-27.json';
import a28 from './article-28.json';
import a29 from './article-29.json';
import a30 from './article-30.json';

export interface FAQItem {
  q: string;
  a: string;
}

export interface InternalLinkItem {
  anchor: string;
  url: string;
}

export interface BlogArticle {
  id: number;
  slug: string;
  topic: string;
  primaryKeyword: string;
  secondaryKeywords: string[];
  title: string;
  metaDescription: string;
  h1: string;
  category: string;
  datePublished: string;
  readingTime: string;
  aiSnippet: string;
  intro: string;
  contentMarkdown: string;
  faqs: FAQItem[];
  internalLinks: InternalLinkItem[];
}

export const articles: BlogArticle[] = [
  a01, a02, a03, a04, a05,
  a06, a07, a08, a09, a10,
  a11, a12, a13, a14, a15,
  a16, a17, a18, a19, a20,
  a21, a22, a23, a24, a25,
  a26, a27, a28, a29, a30
];

export function getArticleBySlug(slug: string): BlogArticle | undefined {
  return articles.find((a) => a.slug === slug);
}

export function getAllSlugs(): string[] {
  return articles.map((a) => a.slug);
}

export function getRelatedArticles(currentSlug: string, count: number = 3): BlogArticle[] {
  const current = getArticleBySlug(currentSlug);
  if (!current) return articles.slice(0, count);
  return articles
    .filter((a) => a.slug !== currentSlug)
    .filter((a) => a.category === current.category)
    .concat(articles.filter((a) => a.slug !== currentSlug && a.category !== current.category))
    .slice(0, count);
}
