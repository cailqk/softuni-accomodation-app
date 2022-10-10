async function login(username, password) {
   return new Promise((res, rej) => {
        if(username === 'ivan' && password === '1234') {
            res({
                _id: '5435435435',
                username: 'ivan',
                roles: ['user']
            })
        }else {
            rej(new Error('Incorrect Username of Password'));
        }
    })
};

module.exports = {
    login
}