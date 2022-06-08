function shipFactory(shipLength) {
  let hitMarks = [];
  const length = shipLength;

  const hit = (n) => {
    if(n < 0 || n >= length) {
      throw('hit point out of range');
    }
    hitMarks.push(n);
  }

  const isSunk = () => hitMarks.length === length;
  const getHitMarks = () => [...hitMarks];
  const getLength = () => length;
  

  return {
    hit,
    getHitMarks,
    isSunk,
    getLength,
  }
}

export default shipFactory;