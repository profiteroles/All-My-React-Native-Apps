const mongoose = require('mongoose');
const bcrypt = require('bcrypt');


const userSchema = new mongoose.Schema({

    email: {

    },

    password: {

    }
});




        });
    });
});

userSchema.methods.comparePassword = function (candidatePassword) {
   
    const user = this;

    return new Promise((resolve, reject) => {
bcrypt.compare(candidatePassword, user.password, (err, isMatch) => {
    if(err){
        return reject(err);
    }

    if(!isMatch){
        return reject(false);
    }
    resolve(true);
});

    });
}

mongoose.model('User', userSchema);