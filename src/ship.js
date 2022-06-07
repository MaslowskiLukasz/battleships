function shipFactory(shipLength) {
  let hitMarks = [];
  const length = shipLength;

  const hit = (n) => {
    if(n < 0 || n >= length) {
      throw('hit point out of range');
    }

    hitMarks.push(n);
  }

  const isSunk = () => {
    return hitMarks.length === length;
  }

  const getHitMarks = () => {
    return [...hitMarks];
  }

  return {
    hit,
    getHitMarks,
    isSunk,
  }
}

export default shipFactory;