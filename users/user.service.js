const db = require('app/config/db.config.js');
const UserModel = db.User;

module.exports = {
    authenticate,
    getAll,
    createAdmin,
    createNew,
    updateUser,
    deleteUser,
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

    user = { username: 'admin', password: 'admin', firstName: 'Admin', lastName: 'Admin', role: 'Admin' }
    await UserModel.create(user);

    return user
}

async function createNew({username, firstName, lastName, role, password}) {

    const user = await UserModel.findOne({
        where: {
          username: username,
        },
      }).then(row => {
        console.log(row)
        return row;
    });

    if(!user) {
        userinfo = { username: username, password: password, firstName: firstName, lastName: lastName, role: role }
        await UserModel.create(userinfo);
    
        return userinfo;
    } else {
        return {
            error: 'This user is existing already!',
        };
    }
}

async function updateUser({id, username, firstName, lastName, role, password}) {

    const user = await UserModel.findOne({
        where: {
          username: username,
        },
      }).then(row => {
        return row;
    });

    if(user) {
        userinfo = { username: username, password: password, firstName: firstName, lastName: lastName, role: role }
        await UserModel.update(userinfo, {
            where: {
                id: id
            }
        });
    
        return userinfo;
    } else {
        return {
            error: 'This user is not existing already!',
        };
    }
}

async function deleteUser(id) {

    const user = await UserModel.findOne({
        where: {
          id: id,
        },
      }).then(row => {
        return row;
    });

    if(user) {
        await UserModel.destroy({
            where: {
                id: id
            }
        });
    
        return {
            msg: 'Deleted successfully!',
        };
    } else {
        return {
            error: 'This user is not existing already!',
        };
    }
}