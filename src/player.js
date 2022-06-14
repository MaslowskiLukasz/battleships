function player() {
  let attacks = [];

  const attack = (x, y, board) => {
    if (attacks.some((item) => item.x === x && item.y === y)) {
      throw('can\'t attack in previously attacked space');
    }
    
    board.receiveAttack(x, y);
    attacks.push({ x: x, y: y })
  }

  const getAttacks = () => [...attacks];

  return {
    attack,
    getAttacks,
  }
}

export default player;