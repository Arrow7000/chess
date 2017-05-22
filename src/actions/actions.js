import { NEW_GAME, MOVE } from './constants';

export function newGame() {
    return { type: NEW_GAME };
}

export function move(from, to) {
    return {
        type: MOVE,
        from,
        to
    };
}
