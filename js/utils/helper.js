export const generateMoveMarkup = (move) => `<p style="
font-size: 7.5rem;
text-align: center;
">${move}</p>`;

/**
 *
 * @param {number} moveCounter
 */
export const getMove = (moveCounter) => (moveCounter % 2 == 0 ? "O" : "X");

/**
 *
 * @param {Object} data
 * @param {any} searchElement
 */
export const searchData = (data, searchElement) => {
    let isPresent = false;
    Object.values(data).forEach((val) => {
        if (val && val.includes(+searchElement)) {
            isPresent = true;
        }
    });
    return isPresent;
};
