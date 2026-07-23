import { types } from './type-matchup';

describe('types', () => {
  it('should be an array of 18 types', () => {
    expect(Array.isArray(types)).toBe(true);
    expect(types).toHaveLength(18);
  });

  it('IDs should be sequential from 1 to 18', () => {
    types.forEach((type, index) => {
      expect(type.id).toBe(index + 1);
    });
  });

  it('all type names should be unique', () => {
    const names = types.map(t => t.name);
    const uniqueNames = new Set(names);
    expect(uniqueNames.size).toBe(18);
  });

  it('each type should have all required fields', () => {
    types.forEach(type => {
      expect(typeof type.name).toBe('string');
      expect(typeof type.icon).toBe('string');
      expect(typeof type.color).toBe('string');
      expect(Array.isArray(type.effectiveTo)).toBe(true);
      expect(Array.isArray(type.resistedBy)).toBe(true);
      expect(Array.isArray(type.immunedBy)).toBe(true);
      expect(Array.isArray(type.weakTo)).toBe(true);
      expect(Array.isArray(type.resistTo)).toBe(true);
      expect(Array.isArray(type.immuneTo)).toBe(true);
    });
  });

  it('all referenced type names should be valid', () => {
    const validNames = types.map(t => t.name);
    types.forEach(type => {
      type.effectiveTo.forEach(name => expect(validNames).toContain(name));
      type.resistedBy.forEach(name => expect(validNames).toContain(name));
      type.immunedBy.forEach(name => expect(validNames).toContain(name));
      type.weakTo.forEach(name => expect(validNames).toContain(name));
      type.resistTo.forEach(name => expect(validNames).toContain(name));
      type.immuneTo.forEach(name => expect(validNames).toContain(name));
    });
  });
});
