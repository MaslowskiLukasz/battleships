const createGameScreen = () => {
  const wrapper = document.createElement('div');
  const verticalBtn = createToggleVerticalButton();
  wrapper.appendChild(createPlayerScreen('AI', true));
  wrapper.appendChild(createPlayerScreen('Player', false));
  wrapper.appendChild(verticalBtn);
  wrapper.id = 'boards-wrapper';
  wrapper.classList.add('hidden');
  
  return wrapper;
}

const initUI = () => {
  const body = document.body;
  const startScreen = document.createElement('div');
  const header = document.createElement('h1');
  const startButton = document.createElement('button');
  const boards = createGameScreen();

  header.textContent = 'Welcome to Battleships';
  startButton.textContent = 'Start';
  startButton.addEventListener('click', showGameScreen);
  startScreen.id = 'start-screen';

  startScreen.appendChild(header);
  startScreen.appendChild(startButton);  
  body.appendChild(startScreen);
  body.appendChild(boards);
}

const showGameScreen = () => {
  const boards = document.getElementById('boards-wrapper');
  const startScreen = document.getElementById('start-screen');
  startScreen.classList.add('hidden');
  boards.classList.remove('hidden');
}

const showEndScreen = () => {
  const body = document.body;
  const gameScreen = document.getElementById('boards-wrapper');
  const wrapper = document.createElement('div');
  const header = document.createElement('h1');
  const resetBtn = document.createElement('button');
  
  header.textContent = 'Game over';
  resetBtn.textContent = 'Restart';
  resetBtn.id = 'reset-btn';
  wrapper.appendChild(header);
  wrapper.appendChild(resetBtn);
  
  gameScreen.classList.add('hidden');
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
        area.classList.add('ship');
      }
    }
  });
}

const getCoords = (area) => {
  const x = parseInt(area.getAttribute('x'));
  const y = parseInt(area.getAttribute('y'));

  return { x: x, y: y }
}

const renderBoards = (playerGameboard, AIGameboard) => {
  renderMisses(playerGameboard, false);
  renderHits(playerGameboard, false);
  renderMisses(AIGameboard, true);
  renderHits(AIGameboard, true);
}

const renderMisses = (board, isAI) => {
  const misses = board.getMisses();

  let gameboard;
  if (isAI) {
    gameboard = document.getElementById('ai-board');
  } else {
    gameboard = document.getElementById('player-board');
  }

  misses.map((miss) => {
    const area = gameboard.querySelector(`[x="${miss.x}"][y="${miss.y}"]`);
    area.classList.add('miss');
  });
}

const renderHits = (board, isAI) => {
  const hits = board.getHits();
  
  let gameboard;
  if (isAI) {
    gameboard = document.getElementById('ai-board');
  } else {
    gameboard = document.getElementById('player-board');
  }

  hits.map((hit) => {
    const area = gameboard.querySelector(`[x="${hit.x}"][y="${hit.y}"]`);
    area.classList.add('hit');
  });
}

const createToggleVerticalButton = () => {
  const button = document.createElement('button');
  
  button.id = 'toggle-vertical-btn';
  button.textContent = 'Change orientation';
  button.setAttribute('isVertical', "false");
  button.addEventListener('click', changeOrientation);

  return button;
}

const getVerticalStatus = () => {
  const button = document.getElementById('toggle-vertical-btn');
  
  return button.getAttribute('isVertical') === 'true' ? true : false;
}

const changeOrientation = (event) => {
  const button = event.target;
  button.setAttribute('isVertical', !getVerticalStatus());
}

const setUpReset = (callback) => {
  const resetBtn = document.getElementById('reset-btn');

  resetBtn.addEventListener('click', callback);
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
  renderBoards,
  showEndScreen,
  getVerticalStatus,
  setUpReset,
};