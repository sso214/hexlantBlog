import board from '../../api/board.json';

const state = {
    boardList: board.list
};

export default {
    namespace: true,
    state
};
