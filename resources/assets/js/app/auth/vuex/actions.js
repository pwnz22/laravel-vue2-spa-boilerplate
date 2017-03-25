import { setHttpToken } from '../../../helpers'

export const register = ({ dispatch }, { payload, context }) => {
    return axios.post('/api/register', payload)
        .then(response => {
            console.log(response)
        })
        .catch(error => {
            context.errors = error.response.data.errors
        })
}

export const login = ({ dispatch }, { payload, context }) => {
    return axios.post('/api/login', payload)
        .then(response => {
            dispatch('setToken', response.data.meta.token).then(() => {
                dispatch('fetchUser')
            })
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
    commit('SET_TOKEN', token)
    setHttpToken(token)
}