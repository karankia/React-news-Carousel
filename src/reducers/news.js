import { GET_NEWS, NEWS_FAIL } from "../actions/types";

const initialState = {
    news: [],
    loading: true,
    error: {}
};

export default function ( state = initialState, action) {
    const { type, payload } = action;
    switch (type) {
        case GET_NEWS:
            return {
                ...state,
                news: payload,
                loading: false
            };

        case NEWS_FAIL:
            return {
                ...state,
                error: payload,
                loading: false
            };

        default:
            return state;
    }
}