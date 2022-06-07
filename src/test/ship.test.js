import shipFactory from "../ship";

describe('ship factory testing', () => {
  test('ship marks correct hit position', () => {
    const ship = shipFactory(3);
    ship.hit(2);
    expect(ship.hitMarks).toContain(2);
  });

  test('check if ship is sunk when it should be', () => {
    const ship = shipFactory(2);
    ship.hit(0);
    ship.hit(1);
    expect(ship.isSunk()).toBeTruthy();
  });

  test('check if ship is not sunk when it shouldn\'t be', () => {
    const ship = shipFactory(2);
    ship.hit(0);
    expect(ship.isSunk()).toBeFalsy();
  });

  test('hit position out of range', () => {
    const ship = shipFactory(3);
    expect(() => ship.hit(5)).toThrow('hit point out of range');
  });

})