import dbConnect from "../../../utils/dbConnect";
import Note from "../../../models/Note";

dbConnect();

export default async (req, res) => {
  const { method } = req;
  try {
    switch (method) {
      case "GET":
        const note = await Note.findById(req.query.id);
        res.status(200).json(note);
        break;
      case "PUT":
        const noteUpdated = await Note.findByIdAndUpdate(
          req.query.id,
          { title: req.body.title, description: req.body.description },
          {
            new: true,
          }
        );
        if (!noteUpdated)
          return res.status(404).json({ message: "Note not found." });
        res.status(200).json(noteUpdated);
        break;
      case "DELETE":
        const noteDeleted = await Note.findByIdAndDelete(req.query.id);
        if (!noteDeleted)
          return res.status(404).json({ message: "Note not found." });
        res.status(200).json({ message: "Note deleted." });
        break;
      default:
        res.status(400).json({ success: false });
        break;
    }
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
