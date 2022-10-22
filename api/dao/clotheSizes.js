const database = require('../db/database')

class clotheSizesDAO {
    async createClotheSizes(name_user, email_user, password_user, phone_user){
        const [id] = await database('users')
            .insert({
                name_user,
                email_user,
                password_user,
                phone_user
            }).returning('id_user')
    
    return id;
    }
}

module.exports = new UsersDAO()