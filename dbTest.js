

const { Sequelize, Op, where } = require('sequelize');


const sequelize = new Sequelize('notes', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
})
const connection = async () => {

    try {

        await sequelize.authenticate();
        console.log("connection test successful");

    } catch (error) {
        console.error("error occured: ", error);

    }
}
connection();

const Note = sequelize.define('note', {
    note: {
        type: Sequelize.STRING,
    },
    tag: {
        type: Sequelize.STRING
    }
})
console.log(sequelize.models.note)
console.log(Note == sequelize.models.note);


//Create a table name Product with the following attribute;

const Product = sequelize.define("product", {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    description: {
        type: Sequelize.STRING,
    },
    cost: {
        type: Sequelize.INTEGER,
        allowNull: false,
    }
}, {
    tableName: "products"
});

//Insert some of the data into products table:
//at a one time put into one data in the table
Product.create({
    id: 1,
    name: "iphone12",
    description: "Apple product",
    cost: 8700,
})
Product.create({
    id: 1,
    name: "iphone12",
    description: "Apple product",
    cost: 8700,
})
Product.create({
    id: 1,
    name: "iphone12",
    description: "Apple product",
    cost: 8700,
})

//at a one time put the data in the table in multimple data;

Product.bulkCreate([
    {
        id: 1,
        name: "iphone12",
        description: "Apple product",
        cost: 8700,
    }, {
        id: 1,
        name: "iphone12",
        description: "Apple product",
        cost: 8700,
    },
    {
        id: 1,
        name: "iphone12",
        description: "Apple product",
        cost: 8700,
    },
])


//find all the records of products table

Product.findAll();

Product.findAll({
    attributes: [[
        sequelize.fn('COUNT',
            sequelize('id')
        ), 'name'
    ]]
});

//where 

// select *from Product where name="iphone"
Product.findAll({
    where: {
        name: { [Op.eq]: "iphone" }
    }
});

// select * from Product where name="iphone" or id=2;
Product.findAll({
    where: {
        [Op.or]: [
            { name: "iphone" },
            { id: 2 }
        ]
    }
});

Product.findAll({
    where: {
        [Op.or]: {
            id: 2,
            id: 3
        }
    }
})


// [Op.eq]:3 -> =3
// [Op.ne]:3 ->!=3
// [Op.is]:null->null
// [Op.not]:true->is not true
// [Op.or]:[1,2]->1 or 2
// [Op.and]:[1,2]->1 and 2
// [Op.gt]:5-> >5
// [Op.lt]:5-><5
// [Op.gte]:5->>=5
// [Op.lte]:5-><=5
// [Op.between]:[4,5]->Bewteen 4 and 5
// [Op.notBetween]:[4,6]->Not between 4 and 6
// [Op.like]:'Ele%'->Starts with elec
// [Op.notLike]:'Ele%'->not like elec%
// [Op.startsWith]:'nitesh'->startsWith
// [Op.endsWith]:"kumar"->endsWith
// [Op.iLike]:"%lelc"->case insensitive ends with elc


/**
 * Updates
 */

Product.update({
    name: "iphone15"
}, {
    where: {
        name: "iphone12"
    }
})


//Delete operation

Product.destroy({
    where:{
        id:23
    }
});

Product.destroy({
    truncate:true
})



const process=require('process');
console.log(process.env);
process.env