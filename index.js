"use strict"

import get from 'lodash.get';
import set from 'lodash.set';
import has from 'lodash.has';

const store = {};

export default {
    has: (key) => has(store, key),
    get: (key) => {
        if(!key) return store;
        return get(store, key);
    },
    set: (key, value, force) => {
        if(force || !has(store, key)){
            set(store, key, value);
        }else{
            throw new Error(`Error: key "${key}" already exists in store`);
        }
    }
}