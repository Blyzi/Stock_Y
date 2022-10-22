const database = require('../db/database')

class Enums {
    async createEnums(){
        knex.schema.raw("CREATE TYPE brand as ENUM  ('Ground Jordan', 'Abibas', 'Itta', 'Yard', 'Manuel Vans', 'Wlone','Monsombre', 'Kanye East', 'Infime', 'Ybox');")
        knex.schema.raw("CREATE TYPE shoeSize as ENUM  ('3.5', '4', '4.5', '5', '5.5', '6', '6.5', '7', '7.5', '8', '8.5', '9', '9.5', '10', '10.5', '11', '11.5', '12', '12.5', '13', '13.5', '14', '14.5', '15', '15.5', '16', '16.5', '17',' 17.5', '18');")
        knex.schema.raw("CREATE TYPE clotheSize as ENUM  ('XXS', 'XS', 'S', 'M', 'L', 'XL', 'XXL', 'XXXL');")
        knex.schema.raw("CREATE TYPE gender as ENUM  ('M', 'F');")
    }
}