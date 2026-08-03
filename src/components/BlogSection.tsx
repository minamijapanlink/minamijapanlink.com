import React, { useState } from 'react';
import { BLOG_POSTS } from '../data/blogs';
import { BlogPost } from '../types';
import { CostOfLivingCalculator } from './CostOfLivingCalculator';
import { Sparkles, Search, Clock, Calendar, ChevronRight, X, BookOpen, CheckCircle2 } from 'lucide-react';

export const BlogSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activePost, setActivePost] = useState<BlogPost | null>(null);

  const filteredPosts = BLOG_POSTS.filter((post) => {
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredPost = BLOG_POSTS.find((p) => p.featured) || BLOG_POSTS[0];

  return (
    <section id="blog" className="py-16 lg:py-24 bg-white border-b border-zinc-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-50 text-[#E5382B] text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-4 h-4" />
            Japan Visa Insights & Life Guides
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-zinc-900 tracking-tight">
            Latest Visa Tips & Study Guides
          </h2>
          <p className="text-base sm:text-lg text-zinc-600 leading-relaxed">
            Written by certified Gyoseishoshi lawyers, Japanese language instructors, and senior student counselors in Tokyo.
          </p>
        </div>

        {/* Search & Categories Bar */}
        <div className="mt-10 flex flex-col md:flex-row items-center justify-between gap-4">
          
          {/* Categories */}
          <div className="flex items-center gap-1.5 flex-wrap w-full md:w-auto">
            {['All', 'Visa Guide', 'JLPT Prep', 'Living in Japan', 'Student Work'].map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-[#E5382B] text-white shadow-xs'
                    : 'bg-[#FDFBF7] text-zinc-700 hover:bg-zinc-100 border border-zinc-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 absolute left-3.5 top-3 text-zinc-400" />
            <input
              type="text"
              placeholder="Search visa tips or JLPT..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-xl border border-zinc-200 text-xs font-medium focus:ring-2 focus:ring-red-400 bg-white"
            />
          </div>

        </div>

        {/* Featured Post Banner (if category is All and no search query) */}
        {selectedCategory === 'All' && !searchQuery && featuredPost && (
          <div className="mt-8 bg-[#FDFBF7] rounded-3xl p-6 sm:p-8 border border-red-200/80 shadow-md">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              <div className="lg:col-span-6 space-y-4">
                <span className="px-3 py-1 bg-red-100 text-[#E5382B] text-xs font-black uppercase rounded-full tracking-wider">
                  Featured Guide
                </span>
                <h3 className="text-2xl sm:text-3xl font-black text-zinc-900 leading-snug">
                  {featuredPost.title}
                </h3>
                <p className="text-sm text-zinc-600 leading-relaxed">
                  {featuredPost.excerpt}
                </p>

                <div className="flex items-center gap-4 text-xs text-zinc-500 pt-2">
                  <span className="flex items-center gap-1"><Calendar className="w-3.5 h-3.5" /> {featuredPost.date}</span>
                  <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> {featuredPost.readTime}</span>
                </div>

                <button
                  onClick={() => setActivePost(featuredPost)}
                  className="mt-2 inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#E5382B] hover:bg-[#C82A1D] text-white font-bold text-xs shadow-xs transition-all cursor-pointer"
                >
                  Read Full Article <ChevronRight className="w-4 h-4" />
                </button>
              </div>

              <div className="lg:col-span-6">
                <img
                  src={featuredPost.image}
                  alt={featuredPost.title}
                  className="rounded-2xl w-full h-64 sm:h-72 object-cover shadow-md"
                  referrerPolicy="no-referrer"
                />
              </div>

            </div>
          </div>
        )}

        {/* Blog Cards Grid */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post) => (
            <div
              key={post.id}
              className="bg-white rounded-2xl border border-zinc-200 shadow-2xs hover:border-red-300 hover:shadow-md transition-all flex flex-col justify-between overflow-hidden group cursor-pointer"
              onClick={() => setActivePost(post)}
            >
              <div>
                <div className="relative overflow-hidden h-48">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    referrerPolicy="no-referrer"
                  />
                  <span className="absolute top-3 left-3 bg-white/90 backdrop-blur-md text-zinc-900 text-[10px] font-extrabold uppercase px-2.5 py-1 rounded-md shadow-xs">
                    {post.category}
                  </span>
                </div>

                <div className="p-6 space-y-3">
                  <div className="flex items-center gap-3 text-[11px] text-zinc-400 font-medium">
                    <span>{post.date}</span>
                    <span>•</span>
                    <span>{post.readTime}</span>
                  </div>

                  <h3 className="text-lg font-bold text-zinc-900 group-hover:text-[#E5382B] transition-colors leading-snug">
                    {post.title}
                  </h3>

                  <p className="text-xs text-zinc-600 line-clamp-3 leading-relaxed">
                    {post.excerpt}
                  </p>
                </div>
              </div>

              <div className="p-6 pt-0 flex items-center justify-between border-t border-zinc-100 mt-4 text-xs font-bold text-[#E5382B]">
                <span>Read Full Guide</span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>

        {/* Embedded Interactive Cost of Living Calculator */}
        <div className="mt-20">
          <CostOfLivingCalculator />
        </div>

      </div>

      {/* --- FULL ARTICLE MODAL DIALOG --- */}
      {activePost && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          <div className="bg-white rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-zinc-200 p-6 sm:p-10 space-y-6 relative animate-fadeIn">
            
            {/* Close Button */}
            <button
              onClick={() => setActivePost(null)}
              className="absolute top-5 right-5 p-2 rounded-full bg-zinc-100 hover:bg-zinc-200 text-zinc-700 cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Post Header */}
            <div className="space-y-3">
              <span className="px-3 py-1 bg-red-50 text-[#E5382B] text-xs font-bold rounded-full uppercase">
                {activePost.category}
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-zinc-900">{activePost.title}</h2>
              
              <div className="flex items-center gap-3 pt-2 text-xs text-zinc-500">
                <img
                  src={activePost.author.avatar}
                  alt={activePost.author.name}
                  className="w-8 h-8 rounded-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <p className="font-bold text-zinc-800">{activePost.author.name}</p>
                  <p className="text-[10px] text-zinc-400">{activePost.author.role}</p>
                </div>
                <span className="ml-auto text-zinc-400">{activePost.date} ({activePost.readTime})</span>
              </div>
            </div>

            {/* Post Image */}
            <img
              src={activePost.image}
              alt={activePost.title}
              className="w-full h-64 object-cover rounded-2xl shadow-sm"
              referrerPolicy="no-referrer"
            />

            {/* Key Takeaways Box */}
            <div className="p-5 bg-red-50/80 border border-red-200/80 rounded-2xl space-y-2">
              <p className="text-xs font-bold text-[#E5382B] uppercase tracking-wider flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4" /> Key Article Takeaways:
              </p>
              <ul className="list-disc list-inside text-xs text-zinc-800 space-y-1">
                {activePost.keyTakeaways.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>

            {/* Article Content */}
            <div
              className="prose prose-sm max-w-none text-zinc-700 space-y-4 leading-relaxed border-t border-zinc-100 pt-4"
              dangerouslySetInnerHTML={{ __html: activePost.content }}
            />

            {/* Footer Action */}
            <div className="pt-6 border-t border-zinc-100 flex items-center justify-between">
              <span className="text-xs font-bold text-zinc-500">Minami Japan Link Visa Advisory</span>
              <button
                onClick={() => setActivePost(null)}
                className="px-6 py-2.5 rounded-xl bg-zinc-900 text-white text-xs font-bold hover:bg-zinc-800"
              >
                Close Article
              </button>
            </div>

          </div>
        </div>
      )}

    </section>
  );
};
