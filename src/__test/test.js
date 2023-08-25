import Team from '../iterator';

test('team creation', () => {
  const team1 = new Team(5);
  const result = team1.size;
  expect(result).toBe(5);
});

const dataList = [
  [['Lisette', 'Morren', 'Fafnir', 'Constance', 'Eustacia'], 'name'],
  [['Bowman', 'Swordsman', 'Magician'], 'type'],
  [[25, 10, 25, 40, 30], 'attack'],
  [[25, 10, 25, 40, 30], 'defence'],
];

const handler = test.each(dataList);

handler('testing changing values', (arr, value) => {
  const team1 = new Team(2);
  const members = Array.from(team1);
  members.forEach((element) => {
    expect(arr).toContain(element[value]);
  });
});

const dataList1 = [
  [1, 'level'],
  [100, 'health'],
];

const handler1 = test.each(dataList1);

handler1('testing constant values', (num, value) => {
  const team1 = new Team(2);
  const members = Array.from(team1);
  members.forEach((element) => {
    expect(element[value]).toBe(num);
  });
});
