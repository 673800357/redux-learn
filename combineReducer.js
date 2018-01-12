/**
 * 几个需要合并的reducer
 * @param {obj}{reducer1,reducer2} reducers 
 */
function combineReducer(reducers){
    let reducerkey = Object.keys(reducers);
    return function(prestate, action){
        const newState = {}
        //这里的preState是当前整个的根state
        reducerkey.forEach((key) => {
            newState[key] = reducers[key](prestate[key],action);//每一个reducer都执行一遍，把对应的reducer的那个state传进去，返回每一个子的reducer对应的那个state
        });
        return newState;
    }
}