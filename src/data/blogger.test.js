import { posts } from './blogger';

describe('posts', () => {
  it('should have blogger API shape', () => {
    expect(posts.kind).toBe('blogger#postList');
    expect(typeof posts.nextPageToken).toBe('string');
    expect(typeof posts.etag).toBe('string');
    expect(Array.isArray(posts.items)).toBe(true);
  });

  it('should have 6 blog posts', () => {
    expect(posts.items).toHaveLength(6);
  });

  it('each post should have required fields', () => {
    posts.items.forEach(post => {
      expect(post.kind).toBe('blogger#post');
      expect(typeof post.id).toBe('string');
      expect(typeof post.published).toBe('string');
      expect(typeof post.url).toBe('string');
      expect(typeof post.title).toBe('string');
      expect(Array.isArray(post.images)).toBe(true);
      expect(post.images.length).toBeGreaterThan(0);
      expect(typeof post.author.displayName).toBe('string');
    });
  });

  it('all posts should have valid image URLs', () => {
    posts.items.forEach(post => {
      expect(post.images[0].url).toMatch(/^https?:\/\//);
    });
  });
});
