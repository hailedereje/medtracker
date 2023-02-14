import Medicine from "../models/Medicine.js";

export const addMedicine = async (req, res)=>{
    const newMedicine = new Medicine(req.body)
    try {
        const savedMedicine = await newMedicine.save()
        res.status(201).json(savedMedicine)
    } catch (err) {

        res.status(500).json(err)

    }
}

export const getAllergy = async(req, res) =>{
    try {
        const meidcines = await Medicine.findById(req.params.id);
        res.status(200).json(meidcines);
    } catch (err) {
        res.status(500).json(err)
    }

}

export const deleteMedicine = async (req, res)=>{
    try {
        await Medicine.findByIdAndDelete(req.params.id)
        res.status(200).json("Successfully deleted the food!")
    } catch (err) {
        res.status(500).json(err)
    }
}
