var ObjectID =require('mongodb').ObjectID;
var bcrypt = require('bcrypt');

module.exports = function(db){
    var userColl = db.collection('users');
    var userModel = {}
    
    //Obtener usuario por correo
    userModel.getByEmail = function(email, handler){
        var query = {"email": email};
        userColl.findOne(query, (err, user)=>{
            if(err){
                console.log(err);
                return handler(err, null);
            }
            if(!user){
                return handler(new Error("No se encontro el usuario"), null);
            }
            return handler(null, user);
        });
    }

    //Ingreso de nuevo user
    userModel.addNew = (email, password, handler) =>{
        var newUser = Object.assign({}, {email:email, password:genPassword() });
        userColl.insertOne(newUser, (err, result)=>{
            if(err){
                console.log(err);
                return handler(err, null);
            }
            if(){
                
            }
        });
    };//addNewUser

    function genPassword(rawPassword){
        return rawPassword;
    }
    return userModel;
}