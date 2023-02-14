import Allergy from "../models/Allergy.js";

export const addAllergy = async (req, res)=>{
    const newAllergy = new Allergy(req.body)
    try {
        const savedAllergy = await newAllergy.save()
        res.status(201).json(savedAllergy)
    } catch (err) {

        res.status(500).json(err)

    }
}

export const getAllergy = async(req, res) =>{
    try {
        const allergies = await Allergy.findById(req.params.id);
        res.status(200).json(allergies);
    } catch (err) {
        res.status(500).json(err)
    }

}

export const deleteALlergy = async (req, res)=>{
    try {
        await Allergy.findByIdAndDelete(req.params.id)
        res.status(200).json("Successfully deleted the food!")
    } catch (err) {
        res.status(500).json(err)
    }
}
