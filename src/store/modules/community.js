import communityApi from "@/api/communityApi";

// state
const state = {
    communityList: [
        {
            id: 0,
            name: '',
            content: '',
            createdAt: '',
            replayList: [
                {
                    name: '',
                    content: ''
                },
            ]
        }
    ],
    communityListPage: 0,
    communityListIsLast: true,
}

// mutations
const mutations = {
    setCommunityList(state, {communityList}) {
        state.communityList = communityList
        return state.communityList
    },
    fetchCommunityList(state, {communityList}) {
        state.communityList = [...state.communityList, ...communityList]
        return state.communityList
    },
    setCommunityReplayList(state, {replyList, communityId}) {
        state.communityList[communityId].replayList = (replyList)
        return state.communityList
    },
    setCommunityListPage(state, {communityListPage}) {
        state.communityListPage = communityListPage
        return state.communityListPage
    },
    setCommunityListIsLast(state, {communityListIsLast}) {
        state.communityListIsLast = communityListIsLast
        return state.communityListIsLast
    }
}

// actions
const actions = {
    async setCommunityList({commit}, payload) {
        try {
            const {data: {content, number, last}} = await communityApi.getCommunityList(payload)
            console.log(content)
            commit('setCommunityList', {communityList: content})
            commit('setCommunityListPage', {communityListPage: number})
            commit('setCommunityListIsLast', {communityListIsLast: last})
        } catch (e) {
            commit('setCommunityList', {communityList: null})
            commit('setCommunityListPage', {communityListPage: null})
            commit('setCommunityListIsLast', {communityListIsLast: null})
            console.log(e)
            throw e
        }
    },
    async fetchCommunityList({commit}, payload) {
        try {
            const {content, number, last} = await communityApi.getCommunityList(payload)
            commit('fetchCommunityList', {communityList: content})
            commit('setCommunityListPage', {communityListPage: number})
            commit('setCommunityListIsLast', {communityListIsLast: last})
        } catch (e) {
            commit('setCommunityList', {communityList: null})
            commit('setCommunityListPage', {communityListPage: null})
            commit('setCommunityListIsLast', {communityListIsLast: null})
            console.log(e)
            throw e
        }
    },
}

// getters
const getters = {
    getCommunityList(state) {
        return state.communityList
    },
    getCommunityListPage(state) {
        return state.communityListPage
    },
    getCommunityListIsLast(state) {
        return state.communityListIsLast
    },
}

export default {
    state,
    mutations,
    actions,
    getters
}
