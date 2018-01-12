function createStore(reducer, initialState) {
    let currentState = initialState,
        listeners = [];
    dispatch('initial');
    function getState() {
        //返回当前的state
        return currentState;
    }
    function dispatch(action) {
        let prestate = currentState;
        //console.log(reducer(prestate, action))
        currentState = reducer(prestate, action);
        listeners.forEach((item) => item());
    }
    function subscribe(callback) {
        //返回值是取消订阅
        let hasUnsubscribe = false;
        listeners.push(callback);
        return function unsubscribe() {
            if (!hasUnsubscribe) {
                let index = listeners.indexOf(callback);
                listeners = listeners.splice(index, 1);
            }
        }
    }
    function replaceReducer(newReducer) {
        reducer = newReducer;
    }
    return {getState, dispatch, subscribe, replaceReducer}
}
module.exports = createStore;
