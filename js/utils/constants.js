export const defaultState = {
    moveCounter: null,
    moves: {
        playerA: null,
        playerB: null,
    },
};

export const ATTRIBUTE_CELL_INDEX = "data-cell-index";

export const winingPositions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];

export const PLAYERS = ["playerA", "playerB"];
