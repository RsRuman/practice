const state = {
    users: []
};

const getters = {
    users: state => state.users
};

const actions = {
    async getUsers({commit}){
        return await axios.get(route('users.data'))
            .then((response) => {
                if (response.data.status === 200){
                    commit('setUsersData', response.data.data);
                }
            })
    }
};

const mutations = {
    setUsersData: (state, data) => {
        state.users = data;
    }
};


export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations,
};
