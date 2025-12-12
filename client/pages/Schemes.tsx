import Header from "@/components/Header";

export default function Schemes() {
  const centeralSchemes = [
    {
      name: "प्रधानमंत्री आवास योजना",
      benefits: "गरीबी रेखा के नीचे परिवारों के लिए पक्का मकान",
      eligibility: "आय ₹3 लाख तक",
      subsidy: "₹2.70 लाख तक",
      beneficiaries: "45 परिवार",
    },
    {
      name: "जल जीवन मिशन",
      benefits: "सभी घरों में शुद्ध पेयजल आपूर्ति",
      eligibility: "सभी ग्रामीण घर",
      subsidy: "100% सरकारी",
      beneficiaries: "185 घरे",
    },
    {
      name: "स्वच्छ भारत मिशन",
      benefits: "व्यक्तिगत शौचालय निर्माण",
      eligibility: "गरीब परिवार",
      subsidy: "₹12,000 तक",
      beneficiaries: "180 शौचालये",
    },
    {
      name: "उज्ज्वला योजना",
      benefits: "LPG गैस कनेक्शन",
      eligibility: "BPL परिवार",
      subsidy: "₹1,600 प्रति कनेक्शन",
      beneficiaries: "125 परिवार",
    },
    {
      name: "पीएम किसान योजना",
      benefits: "प्रत्यक्ष आय समर्थन",
      eligibility: "सभी कृषक",
      subsidy: "₹6000 वार्षिक",
      beneficiaries: "285 किसान",
    },
    {
      name: "मनरेगा योजना",
      benefits: "ग्रामीण रोजगार गारंटी",
      eligibility: "18 वर्ष से अधिक",
      subsidy: "₹290 प्रति दिन",
      beneficiaries: "120 परिवार",
    },
  ];

  const stateSchemes = [
    {
      name: "महात्मा फुले जीवनदायिनी योजना",
      benefits: "महिलाओं को आजीवन आय सहायता",
      eligibility: "60 वर्ष से अधिक विधवा",
      subsidy: "₹500 मासिक",
    },
    {
      name: "श्रावणबाळ योजना",
      benefits: "बच्चों के लिए शिक्षा सहायता",
      eligibility: "गरीब परिवार के बच्चे",
      subsidy: "₹500-1000 मासिक",
    },
    {
      name: "संजय गांधी निराधार योजना",
      benefits: "वृद्ध जनों के लिए पेंशन",
      eligibility: "65 वर्ष से अधिक",
      subsidy: "₹400-600 मासिक",
    },
    {
      name: "महिला स्वावलंबन योजना",
      benefits: "महिलाओं के लिए व्यापार ऋण",
      eligibility: "महिलाएं",
      subsidy: "₹50000 तक ऋण",
    },
  ];

  const gramSchemes = [
    {
      name: "पाणीपुरवठा सुधारणा योजना",
      description: "गांव में सुधार की गई जल पाइपलाइन",
      status: "चल रहा है",
      budget: "₹15 लाख",
      target: "सभी घरे",
    },
    {
      name: "गाव स्वच्छता अभियान",
      description: "गांव के सभी हिस्सों की सफाई",
      status: "चल रहा है",
      budget: "₹3 लाख",
      target: "100% कवरेज",
    },
    {
      name: "रस्ते विस्तारीकरण योजना",
      description: "मुख्य सड़कों का निर्माण और मरम्मत",
      status: "पूर्ण",
      budget: "₹25 लाख",
      target: "8 किमी पक्की सड़क",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-blue-700 text-primary-foreground py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold marathi">
            योजना आणि लाभ
          </h1>
          <p className="text-lg mt-2 opacity-90 marathi">
            गांव के विकास के लिए सरकारी योजनाएं
          </p>
        </div>
      </section>

      {/* Central Schemes */}
      <section className="py-12 container mx-auto px-4">
        <h2 className="text-3xl font-bold text-primary mb-8 marathi">
          🏛️ केंद्र सरकारच्या योजना
        </h2>
        <div className="grid gap-6">
          {centeralSchemes.map((scheme, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md p-6 border-l-4 border-secondary hover:shadow-lg transition-shadow"
            >
              <h3 className="text-xl font-bold text-primary marathi mb-4">
                {scheme.name}
              </h3>
              <div className="grid md:grid-cols-3 gap-4 mb-4">
                <div className="bg-blue-50 p-4 rounded">
                  <p className="text-xs font-semibold text-gray-600 marathi">
                    लाभ
                  </p>
                  <p className="text-sm text-gray-800 marathi mt-1">
                    {scheme.benefits}
                  </p>
                </div>
                <div className="bg-green-50 p-4 rounded">
                  <p className="text-xs font-semibold text-gray-600 marathi">
                    पात्रता
                  </p>
                  <p className="text-sm text-gray-800 marathi mt-1">
                    {scheme.eligibility}
                  </p>
                </div>
                <div className="bg-orange-50 p-4 rounded">
                  <p className="text-xs font-semibold text-gray-600 marathi">
                    सहायता
                  </p>
                  <p className="text-sm text-gray-800 marathi mt-1">
                    {scheme.subsidy}
                  </p>
                </div>
              </div>
              <p className="text-sm text-gray-600 marathi">
                <span className="font-semibold">लाभार्थी:</span>{" "}
                {scheme.beneficiaries}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* State Schemes */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-primary mb-8 marathi">
            🏢 राज्य सरकारच्या योजना
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {stateSchemes.map((scheme, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md p-6 border-t-4 border-primary"
              >
                <h3 className="text-lg font-bold text-primary marathi mb-3">
                  {scheme.name}
                </h3>
                <div className="space-y-2 text-sm">
                  <p className="marathi">
                    <span className="font-semibold">लाभ:</span> {scheme.benefits}
                  </p>
                  <p className="marathi">
                    <span className="font-semibold">पात्रता:</span>{" "}
                    {scheme.eligibility}
                  </p>
                  <p className="marathi">
                    <span className="font-semibold">सहायता:</span>{" "}
                    {scheme.subsidy}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gram Panchayat Schemes */}
      <section className="py-12 container mx-auto px-4">
        <h2 className="text-3xl font-bold text-primary mb-8 marathi">
          🏘️ ग्रामपंचायत पातळीवरील योजना
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {gramSchemes.map((scheme, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md p-6 border-l-4 border-green-500"
            >
              <h3 className="text-lg font-bold text-primary marathi mb-2">
                {scheme.name}
              </h3>
              <p className="text-gray-600 marathi text-sm mb-3">
                {scheme.description}
              </p>
              <div className="space-y-2 text-sm">
                <p className="marathi">
                  <span className="font-semibold">स्थिति:</span>
                  <span
                    className={`ml-2 ${
                      scheme.status === "चल रहा है"
                        ? "text-green-600"
                        : "text-blue-600"
                    } font-semibold`}
                  >
                    {scheme.status}
                  </span>
                </p>
                <p className="marathi">
                  <span className="font-semibold">बजेट:</span> {scheme.budget}
                </p>
                <p className="marathi">
                  <span className="font-semibold">लक्ष्य:</span> {scheme.target}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* How to Apply */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-primary mb-8 marathi">
            📝 योजनाचे आवेदन कसे करावे
          </h2>
          <div className="bg-white rounded-lg shadow-md p-8 border-l-4 border-secondary space-y-6">
            <div>
              <h3 className="text-lg font-bold text-primary marathi mb-2">
                पद्धत 1: व्यक्तिगत
              </h3>
              <ol className="list-decimal list-inside space-y-1 marathi text-gray-700">
                <li>ग्रामपंचायत कार्यालय में जाएं</li>
                <li>आवश्यक दस्तावेज जमा करें</li>
                <li>आवेदन पत्र भरें और जमा करें</li>
                <li>पुष्टि दस्तावेज लें</li>
              </ol>
            </div>
            <div>
              <h3 className="text-lg font-bold text-primary marathi mb-2">
                पद्धत 2: ऑनलाइन
              </h3>
              <ol className="list-decimal list-inside space-y-1 marathi text-gray-700">
                <li>ग्राम पंचायत राज विभाग की वेबसाइट पर जाएं</li>
                <li>योजना का चयन करें</li>
                <li>ऑनलाइन आवेदन करें</li>
                <li>आवेदन संख्या नोट करें</li>
              </ol>
            </div>
            <div>
              <h3 className="text-lg font-bold text-primary marathi mb-2">
                आवश्यक दस्तावेज
              </h3>
              <ul className="list-disc list-inside space-y-1 marathi text-gray-700">
                <li>आधार कार्ड</li>
                <li>राशन कार्ड</li>
                <li>आय प्रमाण पत्र</li>
                <li>जाति प्रमाण पत्र (यदि आवश्यक हो)</li>
                <li>निवास प्रमाण पत्र</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact for More Info */}
      <section className="py-12 container mx-auto px-4">
        <div className="bg-blue-50 border-l-4 border-primary p-8 rounded-lg">
          <h3 className="text-xl font-bold text-primary marathi mb-3">
            अधिक जानकारी के लिए
          </h3>
          <p className="marathi mb-2">
            ग्रामपंचायत कार्यालय: <span className="font-semibold">देवळी (पेंढरी)</span>
          </p>
          <p className="marathi mb-2">
            ईमेल: <span className="font-semibold">gpdevalipendhari@gmail.com</span>
          </p>
          <p className="marathi">
            कार्य समय: <span className="font-semibold">सकाळी 10:00 - सायं 5:00</span>
          </p>
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
