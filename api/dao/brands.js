const database = require('../db/database')

class BrandsDAO {
    async createBrand(name_brand, description){
        const [id] = await database('brands')
            .insert({
                name_brand,
                description
            }).returning('id_brand')
    
    return id;
    }
}

module.exports = new BrandsDAO()