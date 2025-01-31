import React from 'react'
import { getPostBySlug } from '@/lib/posts'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ThemeToggle } from '@/components/ThemeToggle'

export default async function Post({
  params,
}: {
  params: { slug: string }
}) {
  const post = await getPostBySlug(params.slug)

  if (!post) {
    notFound()
  }

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
        <article className="prose dark:prose-invert">
          <header className="mb-8 not-prose">
            <Link
              href="/"
              className="inline-flex items-center text-sm text-secondary hover:text-primary mb-8 group"
            >
              <svg
                className="w-4 h-4 mr-1 group-hover:-translate-x-1 transition-transform"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
              Ana Sayfa'ya Dön
            </Link>
            <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
            <time className="text-secondary">
              {new Date(post.date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </time>
          </header>
          <div 
            className="prose-lg prose-slate dark:prose-invert"
            dangerouslySetInnerHTML={{ __html: post.content }} 
          />
        </article>
      </main>

      <footer className="border-t border-border">
        <div className="max-w-4xl mx-auto px-4 py-8 text-center text-secondary">
<<<<<<< HEAD
          <p>Built with best dev.(me) and little bit of cursor</p>
=======
          <p>Built with best dev. and little bit of cursor</p>
>>>>>>> 161cc558dd750a152a7e02cea81af7481ad5742d
        </div>
      </footer>
    </div>
  )
} 