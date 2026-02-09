import db from 'mongoose';

db.connect('mongodb+srv://usuario_prueba:123@cluster0.w6ghmta.mongodb.net/marketplace')
.then(() => console.log('Connected!'));
