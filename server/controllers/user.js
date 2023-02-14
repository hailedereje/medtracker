import User from "../models/User.js"

export const getUser = async(req, res) =>{
    try {
        const user = await User.findById(req.params.id);
        const {password, ...others} = user._doc;
        res.status(200).json(others);
    } catch (err) {
        res.status(500).json(err)
    
    }

}


export const getAllUsers = async (req, res)=>{
    try {
        const allUsers = await User.find()
        res.status(200).json(allUsers)
    } catch (err) {
        res.status(500).json(err)
    }
}


export const updateUser = async (req, res)=>{
    if (req.params.id === req.user.id) {
        try {
            const updatedUser = await User.findByIdAndUpdate(req.params.id,{
            $set:req.body
            },{
                new:true
            })
            res.status(200).json(updatedUser);
        } catch (err) {
            next(err)
        }
    } else {
        res.status(403).json("Not allowed to make the operation");

    }
}


export const deleteUser = async (req, res)=>{
    try {
        await User.findByIdAndDelete(req.params.id)
        res.status(200).json("Successfully deleted the user!")
    } catch (err) {
        res.status(500).json(err)
    }
}
