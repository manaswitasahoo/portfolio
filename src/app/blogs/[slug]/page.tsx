import BlogPostClient from './BlogPostClient';

export function generateStaticParams() {
  return [
    { slug: 'placeholder' },
    { slug: 'ondc-hype-or-not' },
  ];
}

export default function BlogPostPage() {
  return <BlogPostClient />;
}
