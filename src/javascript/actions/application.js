
function login(actionContext, payload, done) {
    actionContext.dispatch('LOGIN', payload);
    done();
}

function logout(actionContext, payload, done) {
    actionContext.dispatch('LOGOUT', payload);
    done();
}

export { login, logout };
