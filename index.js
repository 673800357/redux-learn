const createStore = require('./createStore');
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
const store = createStore(testReducer);
console.log('begin', store.getState());
store.subscribe(() => console.log('触发了action', store.getState()));
store.dispatch({type: 'ADD'});
console.log('end', store.getState());