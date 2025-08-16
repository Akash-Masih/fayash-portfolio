export default async function handler(req, res) {
  if (req.method === "POST") {
    const { name, email, phone, message } = req.body;

    console.log("📩 New Message Received:");
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Phone:", phone);
    console.log("Message:", message);

    // Respond success
    return res.status(200).json({ success: true, msg: "Message received!" });
  }

  return res.status(405).json({ error: "Method not allowed" });
}
