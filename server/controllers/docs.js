import Document  from "../models/Document.js";

export const addDocs = async (req, res)=>{
    const newDocument = new Document(req.body)
    try {
        const savedDocument = await newDocument.save()
        res.status(201).json(savedDocument)
    } catch (err) {

        res.status(500).json(err)

    }
}

export const getDocs = async(req, res) =>{
    try {
        const docs = await Document.findById(req.params.id);
        res.status(200).json(docs);
    } catch (err) {
        res.status(500).json(err)
    }

}

export const deleteDocs = async (req, res)=>{
    try {
        await Document.findByIdAndDelete(req.params.id)
        res.status(200).json("Successfully deleted the food!")
    } catch (err) {
        res.status(500).json(err)
    }
}
