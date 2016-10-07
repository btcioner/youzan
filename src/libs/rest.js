/**
 * Created by ralap on 16-9-19.
 */
'use strict';
import CONFIG from './config';
import _ from 'underscore';

export default class rest {
    constructor() {
        this.API_BASE_URL = CONFIG.API.url;
    }


    /**
     * 用途：获取「看知乎」首页文章列表，每次取10篇。
     参数：时间戳（可选，留空时取最新10篇，有值时则取此时间戳之前的10篇）
     * @returns {T}
     */
    async getposts() {
        return await this._fetch(
            {
                method: 'GET',
                url: '/getposts'
            }
        ).then((res) => {
            if (res.status === 200 || res.status === 201) {
                return res.json
            } else {
                throw res.json
            }
        }).catch(
            (error) => {
                throw error;
            }
        );
    }


    async getOldPosts(timeTamp) {
        return await this._fetch(
            {
                method: 'GET',
                url: '/getposts/'+ timeTamp
            }
        ).then(
            (res) => {
                if (res.status === 200 || res.status === 201) {
                    return res.json
                } else {
                    throw res.json
                }
            }
        ).catch((error) => {throw (error)});
    }

    /**
     * 用途：检查「看知乎」首页在指定时间之后有没有更新
     * @param timeStamp
     * @returns {T}
     */
    async checknew(timeStamp) {
        return await this._fetch(
            {
                method: 'GET',
                url: '/checknew/' + timeStamp
            }
        ).then((res) => {
            if (res.status === 200 || res.status === 201) {
                return res.json
            } else {
                throw (res.json)
            }
        }).catch((error) => {throw (error)});
    }

    /**
     * 用途：获取单篇文章的答案列表
     * @param timeStamp
     * @param type
     * @returns {T}
     */
    async getpostanswers(timeStamp, type) {
        return await this._fetch(
            {
                method: 'GET',
                url: '/getpostanswers/' + timeStamp + '/' + type
            }
        ).then((res) => {
            if (res.status === 200 || res.status === 201) {
                return res.json
            } else {
                throw (res.json)
            }
        }).catch((error) => {throw (error)});
    }

    /**
     * ### _fetch
     * A generic function that prepares the request to Parse.com or Hapi
     *
     * @returns object:
     *  {code: response.code,
   *   status: response.status,
   *   json: response.json()
   */
    async _fetch (opts) {
        opts = _.extend({
            method: 'GET',
            url: null,
            body: null,
            callback: null
        }, opts);

        var reqOpts = {
            method: opts.method,
            headers: {
            }
        };

        if (this._sessionToken) {
            reqOpts.headers['Authorization'] = 'Bearer ' + this._sessionToken
        }

        if (opts.method === 'POST' || opts.method === 'PUT') {
            reqOpts.headers['Accept'] = 'application/json';
            reqOpts.headers['Content-Type'] = 'application/json'
        }

        if (opts.body) {
            reqOpts.body = JSON.stringify(opts.body)
        }

        let url = this.API_BASE_URL + opts.url;
        let res = {};

        let response = await fetch(url, reqOpts);
        res.status = response.status;
        res.code = response.code;

        return response.json()
            .then((json) => {
                res.json = json;
                return res
            })
    }
}
