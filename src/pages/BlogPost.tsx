import Link from 'next/link';
import { useRouter } from 'next/router';
import { ArrowLeft, Calendar, Clock, User } from 'lucide-react';
import { blogPosts } from '@/data/blog-posts';
import { Button } from '@/components/ui/button';
import { FooterSection } from '@/components/blocks/footer-section';

const BlogPost = () => {
  const router = useRouter();
  const slug = typeof router.query.slug === 'string' ? router.query.slug : undefined;
  const post = blogPosts.find((p) => p.id === slug);

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center">
          <h1 className="text-4xl font-bold font-display text-foreground">Post Not Found</h1>
          <p className="mt-4 text-muted-foreground">The blog post you are looking for does not exist.</p>
          <Link href="/">
            <Button className="mt-6">Back to Home</Button>
          </Link>
        </div>
      </div>
    );
  }

  const paragraphs = post.content.split('\n\n');

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="hero-section">
        <div className="mx-auto max-w-4xl px-6 py-20">
          <Link
            href="/#blog"
            className="inline-flex items-center gap-2 text-sm text-hero-muted hover:text-hero-foreground transition-colors mb-8"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Blog
          </Link>
          <span className="inline-block rounded-full bg-primary/20 px-4 py-1 text-sm font-medium text-primary mb-4">
            {post.category}
          </span>
          <h1 className="text-3xl md:text-5xl font-bold font-display text-hero-foreground leading-tight">
            {post.title}
          </h1>
          <div className="mt-6 flex flex-wrap items-center gap-6 text-sm text-hero-muted">
            <span className="inline-flex items-center gap-2">
              <User className="h-4 w-4" />
              Vibe IT Solutions
            </span>
            <span className="inline-flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              {post.date}
            </span>
            <span className="inline-flex items-center gap-2">
              <Clock className="h-4 w-4" />
              {post.readTime}
            </span>
          </div>
        </div>
      </div>

      {/* Featured Image */}
      <div className="mx-auto max-w-4xl px-6 -mt-8">
        <div className="overflow-hidden rounded-2xl shadow-lg">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-64 md:h-96 object-cover"
          />
        </div>
      </div>

      {/* Content */}
      <article className="mx-auto max-w-3xl px-6 py-16">
        <div className="prose prose-lg max-w-none">
          {paragraphs.map((paragraph, index) => (
            <p key={index} className="text-foreground/85 leading-relaxed mb-6 text-base md:text-lg">
              {paragraph}
            </p>
          ))}
        </div>
      </article>

      {/* Related Posts */}
      <div className="mx-auto max-w-4xl px-6 pb-16">
        <h3 className="text-2xl font-bold font-display text-foreground mb-8">Related Articles</h3>
        <div className="grid gap-6 md:grid-cols-2">
          {blogPosts
            .filter((p) => p.id !== post.id)
            .slice(0, 2)
            .map((related) => (
              <Link
                key={related.id}
                href={`/blog/${related.id}`}
                className="group flex gap-4 rounded-xl bg-card border border-border p-4 card-glow transition-all hover:-translate-y-0.5"
              >
                <img
                  src={related.image}
                  alt={related.title}
                  className="h-20 w-28 rounded-lg object-cover flex-shrink-0"
                />
                <div>
                  <h4 className="font-bold font-display text-card-foreground group-hover:text-primary transition-colors line-clamp-2">
                    {related.title}
                  </h4>
                  <p className="mt-1 text-xs text-muted-foreground">{related.date}</p>
                </div>
              </Link>
            ))}
        </div>
      </div>

      <FooterSection />
    </div>
  );
};

export default BlogPost;
