import player from "../player";
import gameboardFactory from "../gameboard";

describe('player testing', () => {
  test('player add hit to enemy board - miss', () => {
    const player1 = player();
    const board2 = gameboardFactory();

    player1.attack(0, 0, board2);

    expect(board2.getMisses())
    .toEqual(expect.arrayContaining(
      [
        expect.objectContaining(
          {
            x: 0,
            y: 0,
          }
        )
      ]
    ));
  });

  test('attack is added to already made attacks', () => {
    const player1 = player();
    const board2 = gameboardFactory();

    player1.attack(0, 0, board2);

    expect(player1.getAttacks())
    .toEqual(expect.arrayContaining(
      [
        expect.objectContaining(
          {
            x: 0,
            y: 0,
          }
        )
      ]
    ));
  });

  test('player can\'t make two attacks in the same place', () => {
    const player1 = player();
    const board2 = gameboardFactory();

    player1.attack(0, 0, board2);

    expect(() => player1.attack(0, 0, board2))
    .toThrow('can\'t attack in previously attacked space');
  });

});