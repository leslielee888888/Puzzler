const STORAGE_KEY = 'PULLZES'
let storage = () => {
    return {
        setDate: (data) => {
            console.log(data);
            if (data) {
                window.localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
            } else {
                window.localStorage.removeItem(STORAGE_KEY);
            }
        },
        getDate: () => (JSON.parse(window.localStorage.getItem(STORAGE_KEY)))
    }

}
export default storage;