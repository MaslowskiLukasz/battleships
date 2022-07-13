import gameboardFactory from "./gameboard";

const initUI = () => {
  const body = document.body;
  const wrapper = document.createElement('div');
  wrapper.appendChild(createPlayerScreen('AI', true));
  wrapper.appendChild(createPlayerScreen('Player', [], false));

  body.appendChild(wrapper);
}

const createPlayerScreen = (name, isAI) => {
  const wrapper = document.createElement('div');
  const playerName = document.createElement('h2');
  const board = createBoard(isAI);
  
  playerName.textContent = name;

  wrapper.appendChild(playerName);
  wrapper.append(board);

  return wrapper;
}

/*
TODO:
add id playerBoard to players board
*/
const createBoard = (isInteractive) => {
  const wrapper = document.createElement('div');

  wrapper.className = 'board';

  for (let y = 0; y < 10; y++) {
    for (let x = 0; x < 10; x++) {
      const area = document.createElement('button');
      area.disabled = !isInteractive;
      area.className = 'area';
      area.setAttribute('x', x);
      area.setAttribute('y', y);
      area.addEventListener('click', getCoordinates);

      wrapper.appendChild(area);
    }
  }

  return wrapper;
}

const renderShips = (shipPlacement) => {
  console.log(shipPlacement);
  const playerBoard = document.getElementById('playerBoard');
  shipPlacement.map((currShip) => {
    const startX = currShip.x;
    const startY = currShip.y;

    if (currShip.isVertical) {
      for (let y = startY; y < startY + currShip.ship.getLength(); y++) {
        const area = playerBoard.querySelector(`[x="${startX}"][y="${y}"]`);
        area.textContent = 'X';
        console.log(area);
      }
    } else {
      for (let x = startX; x < startX + currShip.ship.getLength(); x++) {
        const area = playerBoard.querySelector(`[x="${x}"][y="${startY}"]`);
        area.textContent = '0';
        console.log(area);
      }
    }
  });
}

/*TODO:
event listener to place ship
return x, y
*/
const getCoordinates = (event) => {
  const x = event.target.getAttribute('x');
  const y = event.target.getAttribute('y');
  return { x: x, y: y }
}

export default initUI;