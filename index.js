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
    "correo": "fer11@correo.com",
    "direccion":"madrid",
})

const usuarios= await UserModel.find();

console.log("la tabla de usuarios tiene los siguientes documentos: ",usuarios)

const usuarioFer1= await UserModel.find({"nombre":"fernando", "correo":'fer9@correo.com'});

console.log("el usuusuarioFer1 es: ", usuarioFer1)

await UserModel.findOneAndUpdate({"nombre":"fernando", "correo":'fer11@correo.com'},{correo:"fernando3@correo.com"}, {new:true})

await UserModel.findOneAndDelete({nombre:"fernando", correo:'fer9@correo.com'})


try {
    await db.disconnect();
    console.log("Conexión a MongoDB cerrada con éxito");
  } catch (error) {
    console.error("Error al cerrar la conexión:", error);
  }