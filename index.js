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
});

const UserModel=db.model('UserModel', UserSchema, 'UserModel')

await UserModel.create({
    "nombre":"fernando",
    "correo": "fer8@correo.com",
    "direccion":"madrid",
})

const usuarios= await UserModel.find();

console.log("la tabla de usuarios tiene los siguientes documentos: ",usuarios)

const usuarioFer1= await UserModel.find({"nombre":"fernando", "correo":'fer7@correo.com'});

console.log("el usuusuarioFer1 es: ", usuarioFer1)