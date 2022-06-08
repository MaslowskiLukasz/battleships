import gameboardFactory from "../gameboard";

describe('gameboard factory testing', () => {
  test('gameboard factory returns something', () => {
    expect(gameboardFactory()).toBeDefined();
  });

  test('create ship at coordinates', () => {
    const gameboard = gameboardFactory();
    gameboard.addShip(1, 2, 3);
    expect(gameboard.getShips())
    .toEqual(expect.arrayContaining([
      expect.objectContaining({
        x: 1,
        y: 2,
      })
    ]));
  });

  test('receiveAttack - adds miss to missed attacks - no ships on board (1)', () => {
    const  gameboard = gameboardFactory();
    gameboard.receiveAttack(0, 0);
    expect(gameboard.getMisses())
    .toEqual(expect.arrayContaining([
      expect.objectContaining({
        x: 0,
        y: 0,
      })
    ]));
  });

  test('receiveAttack - adds miss to missed attacks - ships on board (2)', () => {
    const  gameboard = gameboardFactory();
    gameboard.addShip(0, 1, 3);
    gameboard.addShip(5, 5, 2);
    gameboard.receiveAttack(2, 3);
    expect(gameboard.getMisses())
    .toEqual(expect.arrayContaining([
      expect.objectContaining({
        x: 2,
        y: 3,
      })
    ]));
  });

  test('receiveAttack - hit horizontal', () => {
    const gameboard = gameboardFactory();
    gameboard.addShip(0, 0, 3);
    gameboard.receiveAttack(1, 0);    
    expect(gameboard.getHits())
    .toEqual(expect.arrayContaining([
      expect.objectContaining({
        x: 1,
        y: 0,
      })
    ]));
  });

  test('receiveAttack - hit vertical', () => {
    const gameboard = gameboardFactory();
    gameboard.addShip(0, 0, 3, true);
    gameboard.receiveAttack(0, 1);
    expect(gameboard.getHits())
    .toEqual(expect.arrayContaining([
      expect.objectContaining({
        x: 0,
        y: 1,
      })
    ]));
  });

});