import Header from "@/components/Header";
import { Mail, Phone, MapPin, Clock, MessageCircle } from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("आपकी प्रतिक्रिया सफलतापूर्वक भेजी गई है। धन्यवाद!");
    setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
  };

  const contactInfo = [
    {
      icon: <MapPin className="w-8 h-8" />,
      title: "पता",
      content: "देवळी (पेंढरी), पोस्ट देवळी (पेंढरी), तहसील हिंगणा, जिल्हा नागपूर, महाराष्ट्र 441401",
    },
    {
      icon: <Mail className="w-8 h-8" />,
      title: "ईमेल",
      content: "gpdevalipendhari@gmail.com",
      link: "mailto:gpdevalipendhari@gmail.com",
    },
    {
      icon: <Phone className="w-8 h-8" />,
      title: "फोन",
      content: "+91 94220-XXXXX (सरपंच)",
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "कार्य समय",
      content: "सोमवार - शुक्रवार: 10:00 - 17:00\nशनिवार: 10:00 - 13:00",
    },
  ];

  const departments = [
    {
      name: "ग्राम सचिव कार्यालय",
      contact: "94220-XXXXX",
      timing: "सोमवार - शुक्रवार: 10:00 - 17:00",
      responsibilities: "प्रशासनिक कार्य, रिकॉर्ड रखरखाव",
    },
    {
      name: "राजस्व विभाग",
      contact: "94220-XXXXX",
      timing: "प्रतिदिन: 11:00 - 15:00",
      responsibilities: "कर संग्रह, संपत्ति रिकॉर्ड",
    },
    {
      name: "स्वास्थ्य विभाग",
      contact: "94220-XXXXX",
      timing: "प्रतिदिन: 09:00 - 17:00",
      responsibilities: "स्वास्थ्य सेवाएं, टीकाकरण",
    },
    {
      name: "शिक्षा विभाग",
      contact: "94220-XXXXX",
      timing: "कार्य दिवस: 09:00 - 16:00",
      responsibilities: "शिक्षा संबंधी कार्य",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-blue-700 text-primary-foreground py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold marathi">संपर्क</h1>
          <p className="text-lg mt-2 opacity-90 marathi">
            हमसे जुड़ें और अपने विचार साझा करें
          </p>
        </div>
      </section>

      {/* Contact Information Cards */}
      <section className="py-12 container mx-auto px-4">
        <h2 className="text-3xl font-bold text-primary mb-8 marathi text-center">
          संपर्क जानकारी
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {contactInfo.map((info, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md border-t-4 border-secondary text-center"
            >
              <div className="text-secondary mx-auto mb-3 flex justify-center">
                {info.icon}
              </div>
              <h3 className="font-semibold text-primary mb-2 marathi text-lg">
                {info.title}
              </h3>
              {info.link ? (
                <a
                  href={info.link}
                  className="text-blue-600 hover:text-blue-800 text-sm marathi"
                >
                  {info.content}
                </a>
              ) : (
                <p className="text-gray-700 text-sm marathi whitespace-pre-line">
                  {info.content}
                </p>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Main Contact Form */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-primary mb-8 marathi text-center">
            नागरिक अभिप्राय फॉर्म
          </h2>
          <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-lg border-l-4 border-secondary">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="name"
                  placeholder="आपका नाम"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-secondary marathi"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="ईमेल पता"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-secondary"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <input
                  type="tel"
                  name="phone"
                  placeholder="फोन नंबर"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-secondary"
                />
                <select
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-secondary marathi"
                >
                  <option value="">विषय चुनें</option>
                  <option value="योजना संबंधी">योजना संबंधी</option>
                  <option value="सेवा संबंधी">सेवा संबंधी</option>
                  <option value="शिकायत">शिकायत</option>
                  <option value="सुझाव">सुझाव</option>
                  <option value="अन्य">अन्य</option>
                </select>
              </div>

              <textarea
                name="message"
                placeholder="आपका संदेश"
                rows={5}
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-secondary marathi"
              ></textarea>

              <button
                type="submit"
                className="w-full bg-primary text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors marathi flex items-center justify-center gap-2"
              >
                <MessageCircle size={20} />
                संदेश भेजें
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Departments */}
      <section className="py-12 container mx-auto px-4">
        <h2 className="text-3xl font-bold text-primary mb-8 marathi text-center">
          विभाग और उनके संपर्क
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {departments.map((dept, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md border-l-4 border-primary"
            >
              <h3 className="text-lg font-bold text-primary marathi mb-3">
                {dept.name}
              </h3>
              <div className="space-y-2 text-sm text-gray-700 marathi">
                <p>
                  <span className="font-semibold">संपर्क:</span> {dept.contact}
                </p>
                <p>
                  <span className="font-semibold">समय:</span> {dept.timing}
                </p>
                <p>
                  <span className="font-semibold">जिम्मेदारी:</span>{" "}
                  {dept.responsibilities}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Map Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-primary mb-8 marathi text-center">
            हमारा स्थान
          </h2>
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="w-full h-96 bg-gray-200 flex items-center justify-center relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-green-100 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-16 h-16 text-primary mx-auto mb-4" />
                  <p className="text-gray-600 font-semibold marathi">
                    गूगल मैप एकीकृत किया जाएगा
                  </p>
                  <p className="text-gray-500 text-sm marathi mt-2">
                    देवळी (पेंढरी), हिंगणा, नागपूर
                  </p>
                  <p className="text-gray-500 text-xs marathi mt-1">
                    निर्देशांक: 21.2°N, 79.4°E
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-12 container mx-auto px-4">
        <h2 className="text-3xl font-bold text-primary mb-8 marathi text-center">
          बार-बार पूछे जाने वाले प्रश्न
        </h2>
        <div className="space-y-4 max-w-2xl mx-auto">
          {[
            {
              q: "मैं जन्म प्रमाण पत्र के लिए कैसे आवेदन कर सकता हूं?",
              a: "आप सीधे ग्रामपंचायत कार्यालय में आवश्यक दस्तावेजों के साथ जा सकते हैं या ऑनलाइन आवेदन कर सकते हैं।",
            },
            {
              q: "कर का भुगतान कब करना होता है?",
              a: "कर का भुगतान आमतौर पर साल में दो बार (जनवरी और जुलाई) करना होता है।",
            },
            {
              q: "योजनाओं के लिए आवेदन की प्रक्रिया क्या है?",
              a: "आप ग्रामपंचायत कार्यालय में जाकर संबंधित योजना के बारे में जानकारी प्राप्त कर सकते हैं।",
            },
            {
              q: "क्या मैं शिकायत दर्ज कर सकता हूं?",
              a: "हाँ, आप व्यक्तिगत रूप से या ऑनलाइन के माध्यम से शिकायत दर्ज कर सकते हैं।",
            },
          ].map((faq, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md border-l-4 border-secondary"
            >
              <h4 className="font-bold text-primary marathi mb-2">
                प्रश्न: {faq.q}
              </h4>
              <p className="text-gray-700 marathi text-sm">
                उत्तर: {faq.a}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-8">
        <div className="container mx-auto px-4 text-center space-y-2">
          <h3 className="font-bold text-lg marathi">देवळी (पेंढरी) ग्रामपंचायत</h3>
          <p className="text-sm opacity-90 marathi">
            "एकता येथे शक्ती आहे, सहयोग येथे यश आहे"
          </p>
          <p className="text-xs opacity-75">
            © 2025 देवळी (पेंढरी) ग्रामपंचायत. सर्व अधिकार आरक्षित.
          </p>
        </div>
      </footer>
    </div>
  );
}
