import Header from "@/components/Header";
import { FileText, Download, FormInput } from "lucide-react";
import { useState } from "react";

export default function Services() {
  const [activeTab, setActiveTab] = useState("birth");

  const services = [
    {
      id: "birth",
      name: "जन्म दाखला",
      icon: "👶",
      description: "नवजात शिशु का जन्म पंजीकरण",
      eligibility: "60 दिन के भीतर पंजीकरण",
      timeframe: "5-7 कार्य दिवस",
      documents: [
        "माता-पिता के पहचान पत्र की कॉपी",
        "पता प्रमाण",
        "चिकित्सक की रिपोर्ट",
        "सहायक के द्वारा हस्ताक्षरित घोषणा",
      ],
      fee: "निःशुल्क",
    },
    {
      id: "death",
      name: "मृत्यू दाखला",
      icon: "⚰️",
      description: "मृतक व्यक्ति का मृत्यु पंजीकरण",
      eligibility: "मृत्यु के 30 दिन के भीतर",
      timeframe: "3-5 कार्य दिवस",
      documents: [
        "मृतक की पहचान",
        "मृत्यु का कारण",
        "चिकित्सक की रिपोर्ट (यदि आवश्यक)",
        "गवाह की घोषणा",
      ],
      fee: "₹100-200",
    },
    {
      id: "residence",
      name: "रहिवासी दाखला",
      icon: "🏠",
      description: "निवास प्रमाण पत्र जारी करना",
      eligibility: "कम से कम 6 महीने का निवासी",
      timeframe: "5 कार्य दिवस",
      documents: [
        "आधार कार्ड",
        "बिजली बिल",
        "पानी बिल",
        "मतदाता पहचान पत्र",
      ],
      fee: "₹50",
    },
    {
      id: "tax",
      name: "कर माहिती",
      icon: "💰",
      description: "ग्रामपंचायत कर की माहिती",
      eligibility: "संपत्ति मालिक",
      timeframe: "तुरंत",
      documents: [
        "संपत्ति कागजात",
        "पहचान पत्र",
        "पता प्रमाण",
      ],
      fee: "₹0-500",
    },
  ];

  const downloads = [
    { name: "कर अर्ज फॉर्म", file: "tax-form.pdf", size: "256 KB" },
    { name: "तक्रार फॉर्म", file: "complaint-form.pdf", size: "128 KB" },
    {
      name: "प्रमाणपत्र अर्ज फॉर्म",
      file: "certificate-form.pdf",
      size: "184 KB",
    },
    { name: "जन्म/मृत्यू पंजीकरण फॉर्म", file: "registration-form.pdf", size: "256 KB" },
    {
      name: "वार्षिक हिशेबपत्रक 2024",
      file: "accounts-2024.pdf",
      size: "512 KB",
    },
    { name: "वार्षिक अहवाल 2023-24", file: "annual-report.pdf", size: "1.2 MB" },
  ];

  const currentService = services.find((s) => s.id === activeTab);

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-blue-700 text-primary-foreground py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold marathi">
            सेवा / नागरिक सुविधा
          </h1>
          <p className="text-lg mt-2 opacity-90 marathi">
            ग्रामपंचायत द्वारा प्रदान की जाने वाली सभी सेवाएं
          </p>
        </div>
      </section>

      {/* Services Tabs */}
      <section className="py-12 container mx-auto px-4">
        <h2 className="text-3xl font-bold text-primary mb-8 marathi">
          📋 सेवाओं की सूची
        </h2>

        {/* Tab Buttons */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
          {services.map((service) => (
            <button
              key={service.id}
              onClick={() => setActiveTab(service.id)}
              className={`p-4 rounded-lg font-semibold transition-all text-center marathi ${
                activeTab === service.id
                  ? "bg-secondary text-white shadow-lg"
                  : "bg-white border-2 border-gray-200 text-gray-800 hover:border-secondary"
              }`}
            >
              <div className="text-2xl mb-2">{service.icon}</div>
              <div className="text-xs md:text-sm">{service.name}</div>
            </button>
          ))}
        </div>

        {/* Service Details */}
        {currentService && (
          <div className="bg-white rounded-lg shadow-lg p-8 border-t-4 border-secondary">
            <h3 className="text-2xl font-bold text-primary marathi mb-2">
              {currentService.name}
            </h3>
            <p className="text-gray-600 marathi mb-6">
              {currentService.description}
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              {/* Left Column */}
              <div className="space-y-6">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-bold text-primary marathi mb-2">
                    पात्रता
                  </h4>
                  <p className="text-gray-700 marathi text-sm">
                    {currentService.eligibility}
                  </p>
                </div>

                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-bold text-primary marathi mb-2">
                    समय अवधि
                  </h4>
                  <p className="text-gray-700 marathi text-sm">
                    {currentService.timeframe}
                  </p>
                </div>

                <div className="bg-orange-50 p-4 rounded-lg">
                  <h4 className="font-bold text-primary marathi mb-2">
                    शुल्क
                  </h4>
                  <p className="text-gray-700 marathi text-sm">
                    {currentService.fee}
                  </p>
                </div>
              </div>

              {/* Right Column - Documents */}
              <div className="bg-gray-50 p-6 rounded-lg">
                <h4 className="font-bold text-primary marathi mb-4">
                  आवश्यक दस्तावेज
                </h4>
                <ul className="space-y-2">
                  {currentService.documents.map((doc, index) => (
                    <li key={index} className="flex items-start gap-3 marathi text-sm text-gray-700">
                      <span className="text-secondary font-bold flex-shrink-0">
                        ✓
                      </span>
                      {doc}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Application Form */}
            <div className="bg-blue-50 p-6 rounded-lg">
              <h4 className="font-bold text-primary marathi mb-4 flex items-center gap-2">
                <FormInput size={20} />
                आवेदन पत्र
              </h4>
              <form className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="नाम"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-secondary"
                  />
                  <input
                    type="text"
                    placeholder="पिता का नाम"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-secondary"
                  />
                  <input
                    type="email"
                    placeholder="ईमेल"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-secondary"
                  />
                  <input
                    type="tel"
                    placeholder="फोन नंबर"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-secondary"
                  />
                </div>
                <textarea
                  placeholder="विवरण / टिप्पणी"
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-secondary"
                ></textarea>
                <button
                  type="submit"
                  className="w-full bg-primary text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors marathi"
                >
                  आवेदन जमा करें
                </button>
              </form>
            </div>
          </div>
        )}
      </section>

      {/* Downloads Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-primary mb-8 marathi flex items-center gap-2">
            <Download size={32} />
            दस्तऐवज डाउनलोड
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {downloads.map((doc, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md border-l-4 border-secondary hover:shadow-lg transition-shadow cursor-pointer"
              >
                <div className="flex items-start gap-4">
                  <FileText className="w-8 h-8 text-secondary flex-shrink-0 mt-1" />
                  <div className="flex-1 min-w-0">
                    <h4 className="font-bold text-primary marathi text-sm mb-1 break-words">
                      {doc.name}
                    </h4>
                    <p className="text-xs text-gray-500">{doc.size}</p>
                    <button className="text-secondary text-xs font-semibold mt-2 hover:text-blue-700">
                      डाउनलोड करें
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Available Schedule */}
      <section className="py-12 container mx-auto px-4">
        <h2 className="text-3xl font-bold text-primary mb-8 marathi">
          📅 सेवा उपलब्धता
        </h2>
        <div className="bg-white rounded-lg shadow-md p-8 border-l-4 border-secondary">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-bold text-primary marathi mb-4">
                कार्य दिवस
              </h3>
              <div className="space-y-2 marathi text-gray-700">
                <p>सोमवार - शुक्रवार: 10:00 - 17:00</p>
                <p>शनिवार: 10:00 - 13:00</p>
                <p className="font-semibold text-primary">
                  रविवार को बंद
                </p>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-bold text-primary marathi mb-4">
                संपर्क करें
              </h3>
              <div className="space-y-2 marathi text-gray-700">
                <p>
                  <span className="font-semibold">कार्यालय:</span> देवळी (पेंढरी)
                </p>
                <p>
                  <span className="font-semibold">ईमेल:</span>{" "}
                  gpdevalipendhari@gmail.com
                </p>
                <p>
                  <span className="font-semibold">फोन:</span> +91 94220-XXXXX
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-8">
        <div className="container mx-auto px-4 text-center space-y-2">
          <h3 className="font-bold text-lg marathi">देवळी (पेंढरी) ग्रामपंचायत</h3>
          <p className="text-xs opacity-75">
            © 2025 देवळी (पेंढरी) ग्रामपंचायत. सर्व अधिकार आरक्षित.
          </p>
        </div>
      </footer>
    </div>
  );
}
