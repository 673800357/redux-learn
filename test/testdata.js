function testReducer(state = {
    sum: 0
}, action) {
    switch (action.type) {
        case 'ADD':
            // console.log('111')
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
module.exports = {
    testReducer
}