const initUI = (resetCallback) => {
  const startButton = document.getElementById('start-btn');

  startButton.addEventListener('click', showGameScreen);
  showStartScreen();
  createGameScreen();
  setUpReset(resetCallback);
}

const showStartScreen = () => {
  const screen = document.getElementById('start-screen');
  showElement(screen);
  showPlacementInstructions();
}

const showElement = (element) => {
  element.classList.remove('hidden');
}

const hideElement = (element) => {
  element.classList.add('hidden');
}

const createGameScreen = () => {
  createToggleVerticalButton();
  createBoard();
}

const createToggleVerticalButton = () => {
  const button = document.getElementById('toggle-vertical-btn');
  
  button.setAttribute('isVertical', "false");
  button.addEventListener('click', changeOrientation);
}

const createBoard = () => {
  const boards = document.querySelectorAll('.board');

  boards.forEach((board) => {
    for (let y = 0; y < 10; y++) {
      for (let x = 0; x < 10; x++) {
        const area = document.createElement('button');
        area.className = 'area';
        area.setAttribute('x', x);
        area.setAttribute('y', y);
  
        board.appendChild(area);
      }
    }
  });
}

const showGameScreen = () => {
  const boards = document.getElementById('game-screen');
  const startScreen = document.getElementById('start-screen');
  const gameHeader = document.getElementById('game-header');

  hideElement(startScreen);
  showElement(gameHeader);
  showElement(boards);
  addAreaHoverEffect('ai-board');
  addAreaHoverEffect('player-board');
}

const showEndScreen = (playerWon) => {
  const gameHeader = document.getElementById('game-header');
  const endScreen = document.getElementById('end-screen');
  const winner = document.getElementById('winner');

  winner.textContent = playerWon ? 'Player won' : 'AI won';
  hideElement(gameHeader);
  showElement(endScreen);
}

const addAreaEventListeners = (id, callback, placementCallback) => {
  const playerBoard = document.getElementById(id);
  const areas = playerBoard.querySelectorAll('.area');

  areas.forEach((area) => {
    area.addEventListener('click', callback);
    if (id === 'player-board') {
      area.addEventListener('mouseover', placementCallback);
    }
  });
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
        area.classList.add('ship');
      }
    } else {
      for (let x = startX; x < startX + currShip.ship.getLength(); x++) {
        const area = playerBoard.querySelector(`[x="${x}"][y="${startY}"]`);
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
  removeAreaHoverEffect('ai-board');
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

const resetUI = () => {
  const areas = document.querySelectorAll('.area');
  const endScreen = document.getElementById('end-screen');
  const gameScreen = document.getElementById('game-screen');
  const gameHeader = document.getElementById('game-header');

  areas.forEach((area) => {
    area.classList.remove('hit');
    area.classList.remove('miss');
    area.classList.remove('ship');
    area.textContent = '';
    removeEventListeners(area);
  });

  showPlacementInstructions();
  hideElement(endScreen);
  showElement(gameHeader);
  showElement(gameScreen);
  addAreaHoverEffect('ai-board');
  addAreaHoverEffect('player-board');
}

const removeEventListeners = (element) => {
  const newElement = element.cloneNode(true);
  element.parentNode.replaceChild(newElement, element);
}

const showAttackInstructions = () => {
  const shipPlacementHelp = document.getElementById('ship-placement-help');
  const attackHelp = document.getElementById('attack-help');

  hideElement(shipPlacementHelp);
  showElement(attackHelp);
}

const showPlacementInstructions = () => {
  const shipPlacementHelp = document.getElementById('ship-placement-help');
  const attackHelp = document.getElementById('attack-help');

  hideElement(attackHelp);
  showElement(shipPlacementHelp);
}

const addAreaHoverEffect = (boardName) => {
  const board = document.getElementById(boardName);
  const areas = board.querySelectorAll('.area');

  areas.forEach((area) => area.classList.add('area-hover'));
}

const removeAreaHoverEffect = (boardName) => {
  const board = document.getElementById(boardName);
  const areas = board.querySelectorAll('.area');
  
  areas.forEach((area) => {
    if (area.classList.contains('hit') || area.classList.contains('miss')) {
      area.classList.remove('area-hover');
    }
  })
}

const renderCurrentShip = (target, length) => {
  const playerBoard = document.getElementById('player-board');
  const areas = playerBoard.querySelectorAll('.area');
  const { x, y } = getCoords(target);
  const isVertical = getVerticalStatus();

  areas.forEach((area) => area.classList.remove('ship-placement-hover'));
  
  if (isVertical) {
    for (let i = y; i < y + length; i++) {
      if (x < 10 && i < 10) {
        const area = playerBoard.querySelector(`[x="${x}"][y="${i}"]`);
        area.classList.add('ship-placement-hover');
      }
    }
  } else {
    for (let i = x; i < x + length; i++) {
      if (i < 10 && y < 10) {
        const area = playerBoard.querySelector(`[x="${i}"][y="${y}"]`);
        area.classList.add('ship-placement-hover');
      }
    }
  }
}

const removeShipPlacementIndication = () => {
  const playerBoard = document.getElementById('player-board');
  const areas = playerBoard.querySelectorAll('.area');

  areas.forEach((area) => {
    area.classList.remove('ship-placement-hover');
    removeEventListeners(area);
  });
}

export {
  initUI, 
  renderShips,
  getCoords,
  renderBoards,
  showEndScreen,
  getVerticalStatus,
  resetUI,
  addAreaEventListeners,
  showAttackInstructions,
  renderCurrentShip,
  removeShipPlacementIndication,
};