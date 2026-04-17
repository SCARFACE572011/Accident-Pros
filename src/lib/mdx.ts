import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const PRACTICE_AREAS_DIR = path.join(process.cwd(), 'src/content/practice-areas')
const BLOG_DIR = path.join(process.cwd(), 'src/content/blog')

export function getAllPracticeAreaSlugs(): string[] {
  if (!fs.existsSync(PRACTICE_AREAS_DIR)) return []
  return fs
    .readdirSync(PRACTICE_AREAS_DIR)
    .filter((f) => f.endsWith('.mdx'))
    .map((f) => f.replace('.mdx', ''))
}

export function getPracticeAreaContent(slug: string) {
  const filePath = path.join(PRACTICE_AREAS_DIR, `${slug}.mdx`)
  if (!fs.existsSync(filePath)) return null
  const raw = fs.readFileSync(filePath, 'utf-8')
  const { data, content } = matter(raw)
  return { frontmatter: data, content }
}

export function getAllBlogSlugs(): string[] {
  if (!fs.existsSync(BLOG_DIR)) return []
  return fs
    .readdirSync(BLOG_DIR)
    .filter((f) => f.endsWith('.mdx'))
    .map((f) => f.replace('.mdx', ''))
}

export function getBlogPost(slug: string) {
  const filePath = path.join(BLOG_DIR, `${slug}.mdx`)
  if (!fs.existsSync(filePath)) return null
  const raw = fs.readFileSync(filePath, 'utf-8')
  const { data, content } = matter(raw)
  return { frontmatter: data, content }
}

export function getAllBlogPosts() {
  return getAllBlogSlugs()
    .map((slug) => {
      const post = getBlogPost(slug)
      if (!post) return null
      return { slug, ...post.frontmatter }
    })
    .filter(Boolean)
    .sort((a: any, b: any) =>
      new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
    )
}
