const db = require('app/config/db.config.js');
const UserModel = db.User;

module.exports = {
    authenticate,
    getAll,
    createAdmin
};

async function authenticate({ username, password }) {
    const users = await UserModel.findAll().then(rows => {
        return rows.map(r => {
            return r.dataValues;
        })
    });
    const user = users.find(u => u.username === username && u.password === password);
    if (user) {
        const { password, ...userWithoutPassword } = user;
        return userWithoutPassword;
    }
}

async function getAll() {
    const users = await UserModel.findAll().then(rows => {
        return rows.map(r => {
            return r.dataValues;
        })
    });
    return users.map(u => {
        const { password, ...userWithoutPassword } = u;
        return userWithoutPassword;
    });
}

async function createAdmin() {
    // const users = await UserModel.findAll();
    // return users.map(u => {
    //     const { password, ...userWithoutPassword } = u;
    //     return userWithoutPassword;
    // });

    user = { username: 'admin', password: 'admin', firstName: 'Admin', lastName: 'Admin' }
    await UserModel.create(user);

    return user
}
