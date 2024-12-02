export default function handler(req, res) {
  if (req.method === "POST") {
    const { email, password } = req.body;

    // Dummy authentication (ganti dengan DB/Backend)
    const validUser = {
      email: "user@example.com",
      password: "password123",
    };

    if (email === validUser.email && password === validUser.password) {
      // Buat response sukses dengan dummy token
      return res
        .status(200)
        .json({ token: "dummy_jwt_token", user: { email } });
    } else {
      return res.status(401).json({ error: "Invalid credentials" });
    }
  } else {
    return res.status(405).json({ error: "Method not allowed" });
  }
}
