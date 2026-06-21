import { useState } from "react";
import img from "../../assets/333925c654707fe05c976b1af7a01aaf.jpg";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess("");

    emailjs
      .send(
        "service_e65610q",
        "https://dashboard.emailjs.com/admin/templates",
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        "KJG8UrUPtdn6b5xsK"
      )
      .then(
        () => {
          setLoading(false);
          setSuccess("✅ Message sent successfully!");
          setFormData({ name: "", email: "", message: "" });
        },
        (error) => {
          setLoading(false);
          setSuccess("❌ Failed to send message!");
          console.log(error);
        }
      );
  };

  return (
    <section className="md:mt-7 mt-4">
      <div className="w-11/12 mx-auto">

        {/* Title */}
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Let's <span className="text-blue-600">connect</span>
          </h2>
          <div className="w-20 h-1 bg-blue-600 rounded-full mx-auto mt-4"></div>
        </div>

        {/* Layout */}
        <div className="grid md:grid-cols-2 gap-10 items-center">

          {/* Image */}
          <div className="flex justify-center">
            <img
              src={img}
              alt="contact"
              className="w-full max-w-md rounded-3xl"
            />
          </div>

          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200"
          >

            {/* Name */}
            <div className="mb-4">
              <label className="text-gray-700 font-medium">👤 Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full mt-2 px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-600 outline-none"
              />
            </div>

            {/* Email */}
            <div className="mb-4">
              <label className="text-gray-700 font-medium">@ Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full mt-2 px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-600 outline-none"
              />
            </div>

            {/* Message */}
            <div className="mb-6">
              <label className="text-gray-700 font-medium">💬 Message</label>
              <textarea
                name="message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full mt-2 px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-600 outline-none"
              />
            </div>

            {/* Status Message */}
            {success && (
              <p className="mb-4 text-center font-medium text-sm text-gray-700">
                {success}
              </p>
            )}

            {/* Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold flex items-center justify-center gap-2 transition"
            >
              {loading ? "Sending..." : "🚀 Send Message"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;