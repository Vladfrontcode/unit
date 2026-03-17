import { sortCharactersByHealth } from './sortCharactersByHealth';

describe('sortCharactersByHealth', () => {
  test('should sort characters by health in descending order', () => {
    const characters = [
      { name: 'мечник', health: 10 },
      { name: 'маг', health: 100 },
      { name: 'лучник', health: 80 },
    ];

    const sorted = sortCharactersByHealth(characters);

    expect(sorted).toEqual([
      { name: 'маг', health: 100 },
      { name: 'лучник', health: 80 },
      { name: 'мечник', health: 10 },
    ]);
  });

  test('should return a new array without modifying the original', () => {
    const characters = [
      { name: 'маг', health: 100 },
      { name: 'мечник', health: 10 },
    ];

    const sorted = sortCharactersByHealth(characters);

    expect(sorted).not.toBe(characters);
    expect(characters).toEqual([
      { name: 'маг', health: 100 },
      { name: 'мечник', health: 10 },
    ]);
  });

  test('should handle array with one character', () => {
    const characters = [{ name: 'воин', health: 50 }];

    const sorted = sortCharactersByHealth(characters);

    expect(sorted).toEqual([{ name: 'воин', health: 50 }]);
  });

  test('should handle empty array', () => {
    const characters = [];

    const sorted = sortCharactersByHealth(characters);

    expect(sorted).toEqual([]);
  });

  test('should handle characters with equal health', () => {
    const characters = [
      { name: 'персонаж1', health: 50 },
      { name: 'персонаж2', health: 50 },
      { name: 'персонаж3', health: 50 },
    ];

    const sorted = sortCharactersByHealth(characters);

    expect(sorted).toHaveLength(3);
    expect(sorted.every(char => char.health === 50)).toBe(true);
  });

  test('should use toEqual matcher for deep equality', () => {
    const characters = [
      { name: 'маг', health: 100 },
      { name: 'лучник', health: 80 },
    ];

    const expected = [
      { name: 'маг', health: 100 },
      { name: 'лучник', health: 80 },
    ];

    const sorted = sortCharactersByHealth(characters);
    expect(sorted).toEqual(expected);
  });

  test('should correctly sort array with characters having different health values', () => {
    const characters = [
      { name: 'герой1', health: 45 },
      { name: 'герой2', health: 90 },
      { name: 'герой3', health: 30 },
      { name: 'герой4', health: 85 },
      { name: 'герой5', health: 100 },
    ];

    const sorted = sortCharactersByHealth(characters);

    expect(sorted[0].name).toBe('герой5');
    expect(sorted[1].name).toBe('герой2');
    expect(sorted[2].name).toBe('герой4');
    expect(sorted[3].name).toBe('герой1');
    expect(sorted[4].name).toBe('герой3');
  });
});
