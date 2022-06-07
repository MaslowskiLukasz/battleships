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

  return {
    hitMarks,
    hit,
    isSunk,
  }
}

export default shipFactory;