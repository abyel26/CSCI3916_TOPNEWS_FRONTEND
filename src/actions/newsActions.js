import actionTypes from '../constants/actionTypes';
import runtimeEnv from '@mars/heroku-js-runtime-env';

function newsFetched(news) {
    console.log(news.response.articles);
    console.log("dsd");

    return {
        type: actionTypes.FETCH_NEWS,
        news: news.response.articles
    }
}

// function anewsFetched(aNews) {
//     return {
//         type: actionTypes.FETCH_ANEWS,
//         selectedNews: aNews.response.
//     }
// }

function newsSet(news) {
    return {
        type: actionTypes.SET_NEWS,
        selectedNews: news
    }
}

export function setNews(news) {
    return dispatch => {
        dispatch(newsSet(news))
    }
}

export function fetchNews() {
    const env = runtimeEnv();
    return dispatch => {
        return fetch(`${env.REACT_APP_API_URL}/today`, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': localStorage.getItem('token')
            },
            mode: 'cors'})
            .then( (response) => {
                if (!response.ok) {
                    throw Error(response.statusText);
                }
                return response.json();
            })
            .then( (res) => {
                dispatch(newsFetched(res));
            })
            .catch( (e) => console.log(e) );
    }
}

// export function fetchANews(newsId){
//     const env = runtimeEnv();
//     return dispatch => {
//         return fetch(`${env.REACT_APP_API_URL}/movies/${newsId}?reviews=true`, {
//             method: 'GET',
//             headers: {
//                 'Accept': 'application/json',
//                 'Content-Type': 'application/json',
//                 'Authorization': localStorage.getItem('token')
//             },
//             mode: 'cors'})
//             .then( (response) => {
//                 if (!response.ok) {
//                     throw Error(response.statusText);
//                 }
//                 return response.json();
//             })
//             .then( (res) => {
//                 dispatch(anewsFetched(res));
//             })
//             .catch( (e) => console.log(e) );
//     }
// }