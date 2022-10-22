const UsersServices = require ('../services/users');



class UsersController {
    async createUsers(req, res) {
        try{
            const id = await UsersServices.createUsers(req.body);
            res.status(201).json(id);
        }catch(err){
            console.log(err)
        }
    }
}

module.exports = new UsersController()