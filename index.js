"use strict";

const get = require('lodash.get');
const set = require('lodash.set');
const has = require('lodash.has');

const store = {};

module.exports = {
    has: (key) => has(store, key),
    get: (key) => {
        if(!key) return store;
        return get(store, key);
    },
    set: (key, value, force) => {
        if(force || !has(store, key)){
            set(store, key, value);
        }else{
            throw new Error(`Error: key "${key}" already exists in context`);
        }
    }
};