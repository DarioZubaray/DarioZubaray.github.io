import { biographyKeys, linkedinUrl } from './biography';

describe('biographyKeys', () => {
  it('should be an array of translation keys', () => {
    expect(Array.isArray(biographyKeys)).toBe(true);
    biographyKeys.forEach(item => {
      expect(typeof item).toBe('string');
      expect(item).toMatch(/^biography\./);
    });
  });

  it('should have 8 entries', () => {
    expect(biographyKeys).toHaveLength(8);
  });

  it('should contain age key as first entry', () => {
    expect(biographyKeys[0]).toBe('biography.age');
  });
});

describe('linkedinUrl', () => {
  it('should be a valid LinkedIn URL', () => {
    expect(typeof linkedinUrl).toBe('string');
    expect(linkedinUrl).toMatch(/^https:\/\/www\.linkedin\.com\/in\//);
  });
});
