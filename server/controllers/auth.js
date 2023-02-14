import User from "../models/User.js"

import cryptojs from 'crypto-js';

import Jwt  from "jsonwebtoken";
export const registerUser = async(req, res) =>{

    const hashPassword = cryptojs.AES.encrypt(req.body.password, process.env.PASS).toString();

    const newUser = User({

        username:  req.body.username,
        email:     req.body.email,
        phoneNum : req.body.phoneNum,
        password:  hashPassword

    })
    try {
    const user = await newUser.save()
    res.status(201).json(user)
    } catch (err) {
        res.status(500).json(err)

    }

}

export const loginUser = async (req, res)=>{
    try {
        const user = await User.findOne({email:req.body.email});
        !user && res.status(500).json("Invalid credentials");
        const hashedPassword = cryptojs.AES.decrypt(user.password,
            process.env.PASS
            )

        const userPassword = hashedPassword.toString(cryptojs.enc.Utf8)


        if (userPassword !== req.body.password){ 
        return res.status(401).json("Wrong credentials")
        }

        const accessToken = Jwt.sign({
            id: user._id,
            isAdmin: user.isAdmin

        },

        process.env.JWT,

        {expiresIn:"2d"}

        );
        const {password, ...otherInfo} = user._doc
        
        res.status(200).json({...otherInfo, accessToken});

    } catch (err) {
        res.status(500).json(err)
    }
}
