const UsersDAO = require('../dao/users')

class UsersServices {
    createUsers(usersDto) {
        const  { name_user, email_user, password_user, phone_user } = usersDto
        return UsersDAO.createUsers(name_user, email_user, password_user, phone_user);
    }
}

module.exports = new UsersServices();