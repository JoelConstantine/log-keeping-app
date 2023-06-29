export default ({ api }) => ({
    getLogbooks() {
        return this._get("logbooks/")
    },
    async _get(url: string) {
        const data = await api.get(url)
        return data
    }
})