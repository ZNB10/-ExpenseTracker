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
        var newUser = Object.assign({}, {
            email:email, 
            password:genPassword(password), 
            dateCreated: new Date().getTime(),
            active: true,
            lastPasswords:[],
            roles:["public"]
        });
        userColl.insertOne(newUser, (err, result)=>{
            if(err){
                console.log(err);
                return handler(err, null);
            }
            if(result.insertedCount == 0){
                return handler(new Error("No se guardo el usuario"), null);

            }
            return handler(null, result.ops[0]);
        });
    };//addNewUser

    userModel.changePassword = (email, newPassword, handler)=>{
        var query = {email:email},
        var projection = {"password":1, "active":1, "lastPassword":1} //MongoDB Projection
        userColl.findOne(query, {"projection": projection}, (err, user)=>{
            if(err){
                console.log(err);
                return handler(err,null);
            }
            if(!user){
                return handler(new Error("No se encontro usuario"), null);
            }
            if(!user.active)
        })
    }//changePassword

    function genPassword(rawPassword){
        var hashedPassword = bcrypt.hashSync(rawPassword, 10);
        return hashedPassword;
    }
    return userModel;
}