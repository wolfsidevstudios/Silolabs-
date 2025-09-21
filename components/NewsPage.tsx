import React from 'react';

const NewsArticle: React.FC<{ title: string; date: string; children: React.ReactNode }> = ({ title, date, children }) => (
  <article className="bg-zinc-900/50 border border-zinc-800 rounded-2xl p-6 mb-8 transform transition-all duration-300 hover:border-purple-500/50 hover:shadow-2xl hover:shadow-purple-900/20">
    <p className="text-sm text-gray-400 mb-2">{date}</p>
    <h3 className="text-2xl font-bold text-gray-100 mb-3">{title}</h3>
    <div className="text-gray-300 space-y-4">
      {children}
    </div>
  </article>
);

const NewsPage: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
          News & Updates
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-400">
          The latest announcements from the Silo AI Labs team.
        </p>
      </div>

      <NewsArticle title="Announcing Our Next Wave of AI Innovations" date="SEPTEMBER 2025">
        <p>
          We are thrilled to pull back the curtain on several new projects currently in development. Our team is hard at work on groundbreaking tools for creatives, developers, and communicators.
        </p>
        <p>
          Coming soon are <strong>Silo Labs Canvas</strong>, <strong>Silo Labs Chat</strong>, <strong>Silo Connect</strong>, and <strong>Silo Studio</strong>. Each of these projects represents our commitment to pushing the boundaries of what's possible with artificial intelligence. You can see them listed on our Labs page now!
        </p>
      </NewsArticle>

      <NewsArticle title="The Vision for Silo AI Labs" date="AUGUST 2025">
        <p>
          Silo AI Labs was founded with a simple mission: to explore, innovate, and build the future of AI interaction. We believe in creating tools that are not only powerful but also intuitive and accessible.
        </p>
        <p>
          Our existing projects, Build and Search, are just the beginning. We are building an ecosystem of interconnected AI services that will empower users to achieve more than ever before. Stay tuned for more updates as we continue on this exciting journey.
        </p>
      </NewsArticle>
    </div>
  );
};

export default NewsPage;