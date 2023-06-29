export interface API {
    get: Function,
    post: Function,
    put: Function
}

export default () : API => ({
    get: (key: string) => {
        return localStorage.getItem(key)
    },
    post: (key: string, value: any) => {
        localStorage.setItem(key, value)
    },
    put: (key: string, value: any) => {
        localStorage.setItem(key, value)
    }
})