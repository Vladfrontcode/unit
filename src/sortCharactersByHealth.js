export function sortCharactersByHealth(characters) {
  return characters.slice().sort((a, b) => b.health - a.health);
}
