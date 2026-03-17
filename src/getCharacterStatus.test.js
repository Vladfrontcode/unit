import { getCharacterStatus } from './getCharacterStatus';

describe('getCharacterStatus', () => {
  test('should return "healthy" when health > 50', () => {
    const character = { name: 'Воин', health: 90 };
    expect(getCharacterStatus(character)).toBe('healthy');
  });

  test('should return "healthy" when health is exactly 51', () => {
    const character = { name: 'Воин', health: 51 };
    expect(getCharacterStatus(character)).toBe('healthy');
  });

  test('should return "wounded" when health is between 15 and 50 inclusive', () => {
    const character = { name: 'Воин', health: 50 };
    expect(getCharacterStatus(character)).toBe('wounded');
  });

  test('should return "wounded" when health is 30', () => {
    const character = { name: 'Воин', health: 30 };
    expect(getCharacterStatus(character)).toBe('wounded');
  });

  test('should return "wounded" when health is exactly 15', () => {
    const character = { name: 'Воин', health: 15 };
    expect(getCharacterStatus(character)).toBe('wounded');
  });

  test('should return "critical" when health < 15', () => {
    const character = { name: 'Воин', health: 14 };
    expect(getCharacterStatus(character)).toBe('critical');
  });

  test('should return "critical" when health is 0', () => {
    const character = { name: 'Воин', health: 0 };
    expect(getCharacterStatus(character)).toBe('critical');
  });

  test('should return "critical" when health is 1', () => {
    const character = { name: 'Воин', health: 1 };
    expect(getCharacterStatus(character)).toBe('critical');
  });
});
