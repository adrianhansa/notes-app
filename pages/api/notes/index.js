import dbConnect from "../../../utils/dbConnect";
import Note from "../../../models/Note";

dbConnect();

export default async (req, res) => {
  const { method } = req;
  try {
    switch (method) {
      case "GET":
        const notes = await Note.find();
        res.status(200).json(notes);
        break;
      case "POST":
        const note = await Note.create(req.body);
        return res.status(201).json(note);
      default:
        res.status(400).json({ success: false });
        break;
    }
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
