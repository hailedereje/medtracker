import Food from "../models/Food.js";

export const addFood = async (req, res)=>{
    const newFood = new Food(req.body)
    try {
        const savedFood = await newFood.save()
        res.status(201).json(savedFood)
    } catch (err) {

        res.status(500).json(err)

    }
}

export const getAFood = async(req, res) =>{
    try {
        const food = await Food.findById(req.params.id);
        res.status(200).json(food);
    } catch (err) {
        res.status(500).json(err)
    }

}

export const getAllFoods = async (req, res)=>{

    const cats = req.query.cat;

    try {
        let allFoods;
        if (cats){
            allFoods = await Food.find({
                category: {
                  $in: [cats],
                },
              });
        }
        else{
            allFoods = await Food.find()
        }
       
        res.status(200).json(allFoods)
    } catch (err) {
        res.status(500).json(err)
    }
}


export const updateFood = async (req, res)=>{
    
        try {
            const updatedUser = await Food.findByIdAndUpdate(req.params.id,{
            $set:req.body
            },{
                new:true
            })
            res.status(200).json(updatedUser);
        } catch (err) {
            next(err)
        }
    } 

export const deleteAFood = async (req, res)=>{
    try {
        await Food.findByIdAndDelete(req.params.id)
        res.status(200).json("Successfully deleted the food!")
    } catch (err) {
        res.status(500).json(err)
    }
}
