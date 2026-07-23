import { experiences } from './experiences';

describe('experiences', () => {
  it('should be an array of 5 experiences', () => {
    expect(Array.isArray(experiences)).toBe(true);
    expect(experiences).toHaveLength(5);
  });

  it('each experience should have required fields', () => {
    experiences.forEach(exp => {
      expect(typeof exp.company).toBe('string');
      expect(typeof exp.title).toBe('string');
      expect(Array.isArray(exp.summary)).toBe(true);
      expect(Array.isArray(exp.responsibilities)).toBe(true);
      expect(typeof exp.techStack).toBe('string');
      expect(typeof exp.language).toBe('string');
      expect(typeof exp.contract).toBe('string');
      expect(typeof exp.location).toBe('string');
    });
  });

  it('each experience should have valid from/to dates', () => {
    experiences.forEach(exp => {
      expect(typeof exp.from.month).toBe('number');
      expect(exp.from.month).toBeGreaterThanOrEqual(1);
      expect(exp.from.month).toBeLessThanOrEqual(12);
      expect(typeof exp.from.monthName).toBe('string');
      expect(typeof exp.from.year).toBe('number');

      expect(typeof exp.to.month).toBe('number');
      expect(exp.to.month).toBeGreaterThanOrEqual(1);
      expect(exp.to.month).toBeLessThanOrEqual(12);
      expect(typeof exp.to.monthName).toBe('string');
      expect(typeof exp.to.year).toBe('number');
    });
  });

  it('should start with most recent experience', () => {
    expect(experiences[0].company).toBe('Botmaker');
  });

  it('should end with earliest experience', () => {
    expect(experiences[4].company).toBe('Imagosur SA');
  });
});
