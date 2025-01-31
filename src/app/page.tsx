import React from 'react'
import Link from 'next/link'
import { getAllPosts } from '@/lib/posts'
import { ThemeToggle } from '@/components/ThemeToggle'

export default async function Home() {
  const posts = await getAllPosts()

  return (
    <div className="min-h-screen">
      <nav className="border-b border-border bg-card/50 backdrop-blur-sm fixed w-full z-10">
        <div className="max-w-4xl mx-auto px-4 h-16 flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            My Blog
          </Link>
          <ThemeToggle />
        </div>
      </nav>

      <main className="max-w-4xl mx-auto px-4 pt-24 pb-12">
        <header className="mb-12 text-center">
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Geçin içeri ayakta kalmayın..
          </h1>
          <p className="text-secondary text-lg max-w-2xl mx-auto">
            Yazılım fitness kariyer için en çokda kendim için yazıyorum.
          </p>
        </header>
        
        <div className="grid gap-8 md:grid-cols-2">
          {posts.map((post) => (
            <article key={post.slug} className="card group">
              <Link href={`/posts/${post.slug}`} className="block p-6">
                <div className="mb-4">
                  <time className="text-sm text-secondary">
                    {new Date(post.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </time>
                </div>
                <h2 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                  {post.title}
                </h2>
                <p className="text-secondary line-clamp-2 mb-4">
                  {post.description}
                </p>
                <div className="flex items-center text-primary">
                  <span className="group-hover:underline">Read More</span>
                  <svg 
                    className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M9 5l7 7-7 7" 
                    />
                  </svg>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </main>

      <footer className="border-t border-border">
        <div className="max-w-4xl mx-auto px-4 py-8 text-center text-secondary">
          <p>Built with best dev. and little bit cursor</p>
        </div>
      </footer>
    </div>
  )
} 