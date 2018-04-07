import * as types from './type';

export function appInitialized() {
    return async function(dispatch, getState) {
        dispatch(changeAppRoot('login'));
    };
}
export function changeAppRoot(root) {
    return {type: types.ROOT_CHANGED, root: root};
}
export function action(type, payload){
    return {
        type: type,
        payload: payload
    }
}