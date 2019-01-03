import uniqid from 'uniqid';

export const idGenerator = () => {
    let id = uniqid()
    return id
}

export const timestamp = () => {
    return Date.now()
}