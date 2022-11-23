

const {Sequelize}=require('sequelize');


const sequelize=new Sequelize('notes','root','',{
    host:'localhost',
    dialect:'mysql'
})
const connection=async()=>{

try {
    
    await sequelize.authenticate();
    console.log("connection test successful");

} catch (error) {
    console.error("error occured: ",error);
    
}
}
connection();

const Note=sequelize.define('note',{
    note:{
        type:Sequelize.STRING,
    },
    tag:{
        type:Sequelize.STRING
    }
})
console.log(sequelize.models.note)
console.log(Note==sequelize.models.note);
