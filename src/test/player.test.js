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

  test('AI generates legal move', () => {
    const player1 = player();
    const { x, y } = player1.generateNextMove();
    
    expect(x).toBeDefined();
    expect(x).toBeGreaterThanOrEqual(0);
    expect(x).toBeLessThan(10);

    expect(y).toBeDefined();
    expect(y).toBeGreaterThanOrEqual(0);
    expect(y).toBeLessThan(10);
  });

  test('AI doesn\'t generate the same move two times', () => {
    const player1 = player();
    const board2 = gameboardFactory();
    let generatedMoves = [];

    for (let i = 0; i < 100; i++) {
      generatedMoves.push(player1.generateNextMove());
      player1.attack(generatedMoves[i].x, generatedMoves[i].y, board2);
    }

    const combinedCoordinates = generatedMoves.map((item) => {
      return `${item.x}, ${item.y}`;
    });

    const uniqueValues = new Set(combinedCoordinates);

    expect(uniqueValues.size).toBe(generatedMoves.length);
  });

  test('reset attack list', () => {
    const player1 = player();
    const board = gameboardFactory();
    
    board.addShip(0, 0, 5);
    player1.attack(0, 0, board);
    player1.attack(2, 0, board);

    player1.resetAttacks();
    expect(player1.getAttacks().length).toBe(0);
  });

});