const express = require('express');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const User = mongoose.model('User');

const router = express.Router();

router.post('/signup', async (req, res) => {
}catch (err){
}
});

router.post('/signin', async (req, res) =>{
const {email,password} = req.body;

if(!email || !password){);
}
 const user = await User.findOne({email});
if(!user){

    return res.return(404).send({error: 'Email not found'});
}

try{
    await user.comparePassword(password);

    const token = jwt.sign({userId:user._id}, 'MY_SECRET_KEY');
    res.send({token});
} catch(err){

    return res.status(422).send({error: 'Invalid password or email'});

}
});

module.exports = router;