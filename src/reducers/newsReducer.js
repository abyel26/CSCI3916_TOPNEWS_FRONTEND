import constants from '../constants/actionTypes'

var initialState = {
    news: [],
    selectedNews: null
}

export default (state = initialState, action) => {
    var updated = Object.assign({}, state);

    switch(action.type) {
        case constants.FETCH_NEWS:
            updated['news'] = action.news;
            updated['selectedNews'] = action.news[0];
            return updated;
        case constants.SET_NEWS:
            updated['selectedNews'] = action.selectedNews;
            return updated;
        case constants.FETCH_ANEWS:
            updated['selectedNews'] = action.selectedNews;
            return updated;
        default:
            return state;
    }
}