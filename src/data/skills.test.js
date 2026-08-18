import { skills } from './skills';

describe('skills', () => {
  it('should be an array', () => {
    expect(Array.isArray(skills)).toBe(true);
  });

  it('should have 12 entries', () => {
    expect(skills).toHaveLength(12);
  });

  it('each skill should have a skillKey and percentage', () => {
    skills.forEach(item => {
      expect(typeof item.skillKey).toBe('string');
      expect(item.skillKey).toMatch(/^skills\./);
      expect(typeof item.percentage).toBe('number');
    });
  });

  it('all percentages should be between 0 and 100', () => {
    skills.forEach(item => {
      expect(item.percentage).toBeGreaterThanOrEqual(0);
      expect(item.percentage).toBeLessThanOrEqual(100);
    });
  });

  it('should include known skill keys', () => {
    const keys = skills.map(s => s.skillKey);
    expect(keys).toContain('skills.javascript');
    expect(keys).toContain('skills.reactJs');
    expect(keys).toContain('skills.copyPasting');
  });
});
