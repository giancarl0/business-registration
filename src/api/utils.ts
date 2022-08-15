
export const get = (key: string): any => {
  const storedItem = localStorage.getItem(key)
  return storedItem ? typeof storedItem === 'string' ? JSON.parse(storedItem) : storedItem : null
}

export const remove = (key: string) => {
  localStorage.removeItem(key)
}

export const post = (key: string, payload: any, raw?: boolean) => {
  localStorage.setItem(key, raw ? payload : JSON.stringify(payload))
}

const API = {
  get,
  remove,
  post
}

export default API
