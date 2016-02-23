import BaseStore from 'fluxible/addons/BaseStore';

class ApplicationStore extends BaseStore {

    constructor(dispatcher) {
        super(dispatcher);
        this.login = false;
        this.user = {};
    }

    onLogin() {
        this.login = true;
        this.user = { name: 'joshua' };
        this.emitChange();
    }

    onLogout() {
        this.login = false;
        this.user = {};
        this.emitChange();
    }


    getState() {
        return {
            login: this.login,
            user: this.user,
        };
    }

    dehydrate() {
        return this.getState();
    }

    rehydrate(state) {
        this.login = state.login;
        this.user = state.user;
    }

}

ApplicationStore.storeName = 'ApplicationStore';

ApplicationStore.handlers = {
    'LOGIN': 'onLogin',
    'LOGOUT': 'onLogout',
};

export default ApplicationStore;
