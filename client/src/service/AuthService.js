import Api from './Api'

const register = (cred) => {
    return Api().post('/register', cred)
}

export default {
    register
}