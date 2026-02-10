import db from 'mongoose';

db.connect('mongodb+srv://usuario_prueba:123@cluster0.w6ghmta.mongodb.net/marketplace')
.then(() => console.log('Connected!'))
.catch((e)=>console.log(e.message));

const Schema= db.Schema;

const UserSchema=new Schema({
    "nombre":String,
    "correo": {
        type:String,
        require:true,
        unique:true
    },
    "direccion":String,
    fecha:{
        type: Timestamp,
        
    }
});

const UserModel=db.model('UserModel', UserSchema, 'UserModel')

await UserModel.create({
    "nombre":"fernando",
    "correo": "fer2@correo.com",
    "direccion":"madrid",
  
})


const fecha= new Date();
console.log(fecha)
