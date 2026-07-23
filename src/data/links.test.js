import { publicProfile } from './links';

describe('publicProfile', () => {
  it('should be an array', () => {
    expect(Array.isArray(publicProfile)).toBe(true);
  });

  it('should not be empty', () => {
    expect(publicProfile.length).toBeGreaterThan(0);
  });

  it('each entry should have url, emoji, and nombre', () => {
    publicProfile.forEach(item => {
      expect(typeof item.url).toBe('string');
      expect(typeof item.emoji).toBe('string');
      expect(typeof item.nombre).toBe('string');
    });
  });

  it('all urls should start with https', () => {
    publicProfile.forEach(item => {
      expect(item.url).toMatch(/^https?:\/\//);
    });
  });

  it('should include LinkedIn entry', () => {
    const names = publicProfile.map(p => p.nombre);
    expect(names).toContain('LinkedIn');
  });
});
