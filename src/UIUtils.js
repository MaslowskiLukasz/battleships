const initUI = () => {
  const body = document.body;
  const wrapper = document.createElement('div');
  wrapper.appendChild(createPlayerScreen('AI', true));
  wrapper.appendChild(createPlayerScreen('Player', false));

  body.appendChild(wrapper);
}

const createPlayerScreen = (name, isAI) => {
  const wrapper = document.createElement('div');
  const playerName = document.createElement('h2');
  const board = createBoard(isAI);

  if (isAI) {
    board.id = 'ai-board';
  } else {
    board.id = 'player-board';
  }
  
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
      //area.disabled = !isInteractive;
      area.className = 'area';
      area.setAttribute('x', x);
      area.setAttribute('y', y);

      wrapper.appendChild(area);
    }
  }

  return wrapper;
}

const renderShips = (shipPlacement, isAI) => {
  let playerBoard;
  if (isAI) {
    playerBoard = document.getElementById('ai-board');
  } else {
    playerBoard = document.getElementById('player-board');
  }
  shipPlacement.map((currShip) => {
    const startX = currShip.x;
    const startY = currShip.y;

    if (currShip.isVertical) {
      for (let y = startY; y < startY + currShip.ship.getLength(); y++) {
        const area = playerBoard.querySelector(`[x="${startX}"][y="${y}"]`);
        area.textContent = 'X';
      }
    } else {
      for (let x = startX; x < startX + currShip.ship.getLength(); x++) {
        const area = playerBoard.querySelector(`[x="${x}"][y="${startY}"]`);
        area.textContent = '0';
      }
    }
  });
}

const getCoords = (area) => {
  const x = parseInt(area.getAttribute('x'));
  const y = parseInt(area.getAttribute('y'));

  return { x: x, y: y }
}



const logWinner = (playerGameboard, AIGameboard) => {
  if(playerGameboard.areAllShipsSunk()) {
    console.log('AI won');
    console.log(
      `Player hit: ${AIGameboard.getHits().length} times.
      AI hit: ${playerGameboard.getHits().length} times`
    );
  } else {
    console.log('Player won');
    console.log(
      `Player hit: ${AIGameboard.getHits().length} times.
      AI hit: ${playerGameboard.getHits().length} times`
    );
  }
}

const logStatus = (playerGameboard, AIGameboard) => {
  console.log(
    `Player hit: ${AIGameboard.getHits().length} times.
    Player missed: ${AIGameboard.getMisses().length} times`
  );

  console.log(
    `AI hit: ${playerGameboard.getHits().length} times.
    AI missed: ${playerGameboard.getMisses().length} times`
  );
}

export {
  initUI, 
  renderShips,
  getCoords,
  logStatus,
  logWinner,
};