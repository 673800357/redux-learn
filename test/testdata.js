function testReducer(state = {
    sum: 0
}, action) {
    switch (action.type) {
        case 'ADD':
            return Object.assign({}, {
                sum: state.sum + 1
            });
        case 'DEC':
            return Object.assign({}, {
                sum: state.sum - 1
            });
        default:
            return state;
    }
}

function ggReducer(state = {
    mul: 1
}, action) {
    switch (action.type) {
        case 'MULTIPLY':
            return Object.assign({}, {
                mul: state.mul * 2
            });
        case 'DEVIDE':
            return Object.assign({}, {
                mul: state.mul / 2
            });
        default:
            return state;
    }
}
module.exports = {
    testReducer,ggReducer
}