import {
    defaultState,
    ATTRIBUTE_CELL_INDEX,
    PLAYERS,
} from "./utils/constants.js";
import { generateMoveMarkup, getMove, searchData } from "./utils/helper.js";

class App {
    constructor() {
        this.state = defaultState;
        this.handleCellClick = this.handleCellClick.bind(this);
    }

    /**
     *
     * @param {MouseEvent} event
     * @param {HTMLElement}  context
     */
    handleCellClick(event, context) {
        // console.log(event);
        // console.log(context.getAttribute(ATTRIBUTE_CELL_INDEX));
        if (this.state.moveCounter !== null && this.state.moveCounter >= 9)
            return;
        let move = context.getAttribute(ATTRIBUTE_CELL_INDEX);
        this.updateMove(move, context);
    }

    /**
     *
     * @param {HTMLElement}  context
     */
    renderMove(context) {
        const move = getMove(this.state.moveCounter);
        context.innerHTML = generateMoveMarkup(move);
    }

    updateMove(move, context) {
        console.log("Move counter", this.state.moveCounter, move);
        if (this.state.moveCounter === null) this.setState({ moveCounter: 1 });
        else {
            if (this.isMovePresent(move)) return;
            this.setState((state) => ({
                moveCounter: state.moveCounter + 1,
            }));
        }
        this.setState((state) => {
            const player = PLAYERS[state.moveCounter % 2 == 0 ? 1 : 0];
            if (state.moves[player])
                return {
                    moves: {
                        ...state.moves,
                        [player]: [...state.moves[player], +move],
                    },
                };
            else
                return {
                    moves: {
                        ...state.moves,
                        [player]: [+move],
                    },
                };
        });
        this.renderMove(context);
        console.log(this.state);
    }

    isMovePresent(move) {
        return searchData(this.state.moves, move);
    }

    checkWiningPoistions() {}

    setState(updatedState) {
        if (typeof updatedState == "function")
            this.state = { ...this.state, ...updatedState(this.state) };

        this.state = { ...this.state, ...updatedState };
    }
}

export default App;
