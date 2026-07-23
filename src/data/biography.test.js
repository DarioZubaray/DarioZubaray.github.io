import { biography, linkedinUrl } from './biography';

describe('biography', () => {
  it('should be an array of strings', () => {
    expect(Array.isArray(biography)).toBe(true);
    biography.forEach(item => {
      expect(typeof item).toBe('string');
    });
  });

  it('should have 8 entries', () => {
    expect(biography).toHaveLength(8);
  });

  it('should contain AGE placeholder in first entry', () => {
    expect(biography[0]).toContain('AGE');
  });
});

describe('linkedinUrl', () => {
  it('should be a valid LinkedIn URL', () => {
    expect(typeof linkedinUrl).toBe('string');
    expect(linkedinUrl).toMatch(/^https:\/\/www\.linkedin\.com\/in\//);
  });
});
