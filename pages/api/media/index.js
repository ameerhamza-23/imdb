import dbConnect from "@/lib/dbConnect";
import Media from "@/models/Media";

export default async function handler(req, res) {
  const { method } = req;

  await dbConnect();

  switch (method) {
    case 'GET':
      try {
        const media = await Media.find({}); // Fetch all media
        res.status(200).json({ success: true, data: media });
      } catch (error) {
        res.status(400).json({ success: false, error });
      }
      break;

    case 'POST':
      try {
        const media = await Media.create(req.body); // Create new media
        res.status(201).json({ success: true, data: media });
      } catch (error) {
        res.status(400).json({ success: false, error });
      }
      break;

    default:
      res.setHeader('Allow', ['GET', 'POST']);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
