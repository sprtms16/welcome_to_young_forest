import axiosInstance from '@/plugins/proxyHandler'

export default {
    async getCommunityList(payload) {
        try {
            return await axiosInstance.get(`/api/v1/community`, {
                ...payload
            })
        } catch (e) {
            console.log(e)
            throw e
        }
    },
};
