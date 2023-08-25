export default class Team {
  constructor(size) {
    this.size = size;
  }

  static fill() {
    const names = ['Lisette', 'Morren', 'Fafnir', 'Constance', 'Eustacia'];
    const types = ['Bowman', 'Swordsman', 'Magician'];
    const health = 100;
    const level = 1;
    const attacks = [25, 10, 25, 40, 30];
    const defences = [25, 10, 25, 40, 30];

    const name = names[Math.floor(Math.random() * names.length)];
    const type = types[Math.floor(Math.random() * types.length)];
    const attack = attacks[Math.floor(Math.random() * attacks.length)];
    const defence = defences[Math.floor(Math.random() * defences.length)];
    const value = {
      name, type, health, level, attack, defence,
    };
    return value;
  }

  [Symbol.iterator]() {
    let index = 0;

    return {
      next: () => {
        if (index < this.size) {
          index += 1;
          return {
            value: Team.fill(),
            done: false,
          };
        }

        return {
          values: undefined,
          done: true,
        };
      },

    };
  }
}
