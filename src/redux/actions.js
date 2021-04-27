export const ADD_NEWS = "ADD_NEWS";

export function addNews(payload) {
    return {
        type: ADD_NEWS,
        payload: payload,
    }
}

