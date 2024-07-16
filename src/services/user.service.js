import userDao from '../models/persistence/user.dao';

const getUser = (userId) => {
    userDao.get(userId);
};

const updateUser = (userId, details) => {
    return userDao.update(userId);
};

const addUser = (details) => {
    return userDao.insert(details);
};

const removeUser = (userId) => {
    userDao.remove(userId);
};


export default {
    getUser,
    updateUser,
    addUser,
    removeUser
}