import { isEmpty } from 'lodash'
import { setHttpToken } from '../../../helpers'
import localforage from 'localforage'

export const register = ({ dispatch }, { payload, context }) => {
    return axios.post('/api/register', payload)
        .then(response => {
            dispatch('setToken', response.data.meta.token).then(() => dispatch('fetchUser'))
        })
        .catch(error => {
            context.errors = error.response.data.errors
        })
}

export const login = ({ dispatch }, { payload, context }) => {
    return axios.post('/api/login', payload)
        .then(response => {
            dispatch('setToken', response.data.meta.token).then(() => dispatch('fetchUser'))
        })
        .catch(error => {
            console.log(error)
            context.errors = error.response.data.errors
        })
}

export const fetchUser = ({ commit }) => {
    return axios.get('/api/me').then(response => {
        commit('SET_AUTHENTICATED', true)
        commit('SET_USER_DATA', response.data.data)
    })
}

export const setToken = ({ commit, dispatch }, token) => {
    if (isEmpty(token)) {
        return dispatch('checkTokenExists').then(token => setHttpToken(token))
    }
    commit('SET_TOKEN', token)
    setHttpToken(token)
}

export const checkTokenExists = ({ commit, dispatch }, token) => {
    return localforage.getItem('authtoken').then(token => {
        if (isEmpty(token)) {
            return Promise.reject('NO_STORAGE_TOKEN')
        }
        return Promise.resolve(token)
    })
}
export const clearAuth = ({ commit }, token) => {
    commit('SET_AUTHENTICATED', false)
    commit('SET_USER_DATA', null)
    commit('SET_TOKEN', null)
    setHttpToken(null)
}