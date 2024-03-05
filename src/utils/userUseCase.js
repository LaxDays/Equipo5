const { log } = require('console');
const fs = require('fs');
const path = './src/database/users.json'

readFile = async() => {
    return await new Promise ((resolve, reject) => {
        fs.readFile(path, 'utf-8', (error, data) => {
            if (error) {
                reject(error);
            } else resolve (JSON.parse(data));
        })
    })
}

writeFile = async(data) => {
    return await new Promise ((resolve, reject) => {
        fs.writeFile(path, JSON.stringify(data, null, 4), (error) => {
            if (error) {
                reject(error);
            } else {
                resolve (data)
            };
        })
    })
}


createUser = async(user) => {
    try {
        let users = await readFile();
        users.push(user);
        let created = await writeFile(users)
        if(created) {
            return user
        } else {
            return null
        }
    } catch (error) {
        return null
    }
}

getUsers = async() => {
    try {
        return await readFile();
    } catch (error) {
        return null
    }
}

updateUser = async(id, user) => {
    try {
        const users = await readFile();
        const newUsers = users.map((u) => {
            if (u.id == id) {
                return user
            }
            return u
        })

        let = created = await writeFile(newUsers)
        if (created) {
            return user
        } else {
            return null
        }
        
    } catch (error) {
        return null
    }
}

deleteUser = async(id) => {
    try {
        let users = await readFile();
        const deleted = users.map((u) => {
            if (u.id == id) {
                users.pop(u.id);
                return {}
            }
            return u
        })
        return await writeFile(deleted);
    } catch (error) {
        return null
    }
}

module.exports = {
    createUser,
    getUsers,
    updateUser,
    deleteUser
}
