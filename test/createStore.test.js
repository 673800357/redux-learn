const createStore = require('../src/createStore');
const combineReducer = require('../src/combineReducer');
const {testReducer, ggReducer} = require('./testdata');
describe('测试开始', () => {
    it('测试store实例的函数接口', () => {
        const store = createStore(testReducer);
        const methods = Object.keys(store)
        expect(methods.length).toBe(4)
        expect(methods).toContain('subscribe')
        expect(methods).toContain('dispatch')
        expect(methods).toContain('getState')
        expect(methods).toContain('replaceReducer')
    });
    it('测试state初始值', () => {
        const store = createStore(testReducer, {sum: 520});
        expect(store.getState()).toEqual({sum: 520})
    });
    it('测试dispatch', () => {
        const store = createStore(testReducer, {sum: 0});
        expect(store.getState()).toEqual({sum: 0});

        //加一
        store.dispatch({type: 'ADD'});
        expect(store.getState()).toEqual({sum: 1});
        //减一
        store.dispatch({type: 'DEC'});
        expect(store.getState()).toEqual({sum: 0});
    });

    it('测试combineReducer', () => {
        const root = combineReducer({test:testReducer, gg:ggReducer});
        const store = createStore(root);
        //const s1 = root({},{type:'ADD'});
        store.dispatch({type: 'ADD'});
        expect(store.getState()).toEqual({test:{sum:1},gg:{mul:1}});
        store.dispatch({type:'MULTIPLY'})
        expect(store.getState()).toEqual({test:{sum:1},gg:{mul:2}});
    });
});