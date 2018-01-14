const createStore = require('../src/createStore');
const {testReducer} = require('./testdata');
describe('测试createStore', () => {
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
        expect(store.getState()).toEqual({sum: 1});

        //加一
        store.dispatch({type: 'ADD'});
        expect(store.getState()).toEqual({sum: 1});
        //减一
        store.dispatch({type: 'DEC'});
        expect(store.getState()).toEqual({sum: 0});
    })
})