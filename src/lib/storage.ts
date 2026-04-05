export function loadFromStorage<T>(key:string):T | null {
    try {
        const row = localStorage.getItem(key)
        if(row == null) return null
        return JSON.parse(row) as T
    } catch {
        return null
    }
}

export function saveToStorage<T>(key:string, value:T):void {
    localStorage.setItem(key, JSON.stringify(value))
}