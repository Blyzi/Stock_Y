const database = require('../db/database')

class ItemsDAO {
    async createItem(name_brand, model, ref, price, quantity){
        const [id] = await database('items')
            .insert({
                name_brand,
                model,
                ref,
                price,
                quantity
            }).returning('id_brand')
    
    return id;
    }
}

module.exports = new ItemsDAO()