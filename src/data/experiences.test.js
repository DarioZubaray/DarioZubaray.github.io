import { experiences } from './experiences';

describe('experiences', () => {
  it('should be an array of 5 experiences', () => {
    expect(Array.isArray(experiences)).toBe(true);
    expect(experiences).toHaveLength(5);
  });

  it('each experience should have required fields', () => {
    experiences.forEach(exp => {
      expect(typeof exp.companyKey).toBe('string');
      expect(typeof exp.titleKey).toBe('string');
      expect(Array.isArray(exp.summaryKeys)).toBe(true);
      expect(Array.isArray(exp.responsibilityKeys)).toBe(true);
      expect(typeof exp.techStackKey).toBe('string');
      expect(typeof exp.languageKey).toBe('string');
      expect(typeof exp.contractKey).toBe('string');
      expect(typeof exp.locationKey).toBe('string');
    });
  });

  it('each experience should have valid from/to dates', () => {
    experiences.forEach(exp => {
      expect(typeof exp.from.month).toBe('number');
      expect(exp.from.month).toBeGreaterThanOrEqual(1);
      expect(exp.from.month).toBeLessThanOrEqual(12);
      expect(typeof exp.from.monthNameKey).toBe('string');
      expect(typeof exp.from.year).toBe('number');

      expect(typeof exp.to.month).toBe('number');
      expect(exp.to.month).toBeGreaterThanOrEqual(1);
      expect(exp.to.month).toBeLessThanOrEqual(12);
      expect(typeof exp.to.monthNameKey).toBe('string');
      expect(typeof exp.to.year).toBe('number');
    });
  });

  it('should start with most recent experience', () => {
    expect(experiences[0].companyKey).toBe('experience.companies.botmaker');
  });

  it('should end with earliest experience', () => {
    expect(experiences[4].companyKey).toBe('experience.companies.imagosur');
  });
});
