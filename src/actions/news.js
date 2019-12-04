import axios from 'axios';
import { GET_NEWS, NEWS_FAIL } from "./types";
import Parser from "rss-parser";

export const getNews = () => async dispatch => {
    try{
        const res = await axios.get('https://radiant-garden-03828.herokuapp.com/https://www.cbc.ca/cmlink/rss-topstories');
        let parser = new Parser();
        parser.parseString(res.data, function(err, feed){
            if (!err) {
                dispatch({
                    type: GET_NEWS,
                    payload: feed
                })
            } else {
                dispatch({
                    type: NEWS_FAIL,
                    payload: { msg: err}
                })
            }

        });

    } catch(err) {
        dispatch({
            type: NEWS_FAIL,
            payload: { msg: err}
        })
    }
};