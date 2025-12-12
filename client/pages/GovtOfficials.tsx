import Header from "@/components/Header";

export default function GovtOfficials() {
  const stateOfficials = [
    {
      name: "श्री. आचार्य देवव्रत",
      position: "माननीय राज्यपाल",
      state: "महाराष्ट्र",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop",
      term: "2019 - वर्तमान",
    },
    {
      name: "श्री. देवेंद्र फडणवीस",
      position: "माननीय मुख्यमंत्री",
      state: "महाराष्ट्र",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=300&fit=crop",
      term: "2023 - वर्तमान",
    },
    {
      name: "श्री. एकनाथ शिंदे",
      position: "माननीय उपमुख्यमंत्री",
      state: "महाराष्ट्र",
      image: "https://images.unsplash.com/photo-1507019647581-e41aaf00d6b4?w=300&h=300&fit=crop",
      term: "2023 - वर्तमान",
    },
    {
      name: "श्री. अजित पवार",
      position: "माननीय उपमुख्यमंत्री",
      state: "महाराष्ट्र",
      image: "https://images.unsplash.com/photo-1506596773649-6bae19cd8993?w=300&h=300&fit=crop",
      term: "2023 - वर्तमान",
    },
  ];

  const districtOfficials = [
    {
      name: "श्री. राज कुमार",
      position: "जिल्हा प्रशासक",
      district: "नागपूर",
      phone: "+91 XXXX XXXX",
    },
    {
      name: "श्री. विजय शर्मा",
      position: "पोलिस अधीक्षक",
      district: "नागपूर",
      phone: "+91 XXXX XXXX",
    },
    {
      name: "श्रीमती आशा पवार",
      position: "शिक्षा अधिकारी",
      district: "नागपूर",
      phone: "+91 XXXX XXXX",
    },
  ];

  const talukaOfficials = [
    {
      name: "श्री. गणेश मेश्वर",
      position: "तहसीलदार",
      taluka: "हिंगणा",
      phone: "+91 XXXX XXXX",
    },
    {
      name: "श्री. मोहन कुलकर्णी",
      position: "पटेल",
      taluka: "हिंगणा",
      phone: "+91 XXXX XXXX",
    },
    {
      name: "श्रीमती सुनीता राव",
      position: "महिला विकास अधिकारी",
      taluka: "हिंगणा",
      phone: "+91 XXXX XXXX",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-blue-700 text-primary-foreground py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold marathi">
            सरकारी अधिकारी
          </h1>
          <p className="text-lg mt-2 opacity-90 marathi">
            महाराष्ट्र राज्य, नागपूर जिल्हा और हिंगणा तहसील के प्रमुख अधिकारी
          </p>
        </div>
      </section>

      {/* State Officials */}
      <section className="py-12 container mx-auto px-4">
        <h2 className="text-3xl font-bold text-primary mb-8 marathi">
          🏛️ महाराष्ट्र राज्य के प्रमुख अधिकारी
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {stateOfficials.map((official, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden border-t-4 border-secondary hover:shadow-xl transition-shadow"
            >
              <div className="flex flex-col md:flex-row">
                <img
                  src={official.image}
                  alt={official.name}
                  className="w-full md:w-48 h-48 object-cover"
                />
                <div className="flex-1 p-6 flex flex-col justify-center">
                  <h3 className="text-xl font-bold text-primary marathi mb-1">
                    {official.name}
                  </h3>
                  <p className="text-lg font-semibold text-secondary marathi mb-2">
                    {official.position}
                  </p>
                  <p className="text-gray-600 marathi text-sm mb-3">
                    {official.state}
                  </p>
                  <p className="text-xs text-gray-500">
                    कार्यकाल: {official.term}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* District Officials */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-primary mb-8 marathi">
            📍 जिल्हा नागपूर के प्रमुख अधिकारी
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {districtOfficials.map((official, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md p-6 border-l-4 border-primary"
              >
                <h3 className="text-lg font-bold text-primary marathi mb-1">
                  {official.name}
                </h3>
                <p className="text-base font-semibold text-secondary marathi mb-2">
                  {official.position}
                </p>
                <div className="space-y-2 text-sm text-gray-600 marathi">
                  <p>
                    <span className="font-semibold">जिल्हा:</span> {official.district}
                  </p>
                  <p>
                    <span className="font-semibold">फोन:</span> {official.phone}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Taluka Officials */}
      <section className="py-12 container mx-auto px-4">
        <h2 className="text-3xl font-bold text-primary mb-8 marathi">
          🏢 तहसील हिंगणा के प्रमुख अधिकारी
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {talukaOfficials.map((official, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md p-6 border-t-4 border-green-500"
            >
              <h3 className="text-lg font-bold text-primary marathi mb-1">
                {official.name}
              </h3>
              <p className="text-base font-semibold text-secondary marathi mb-2">
                {official.position}
              </p>
              <div className="space-y-2 text-sm text-gray-600 marathi">
                <p>
                  <span className="font-semibold">तहसील:</span> {official.taluka}
                </p>
                <p>
                  <span className="font-semibold">फोन:</span> {official.phone}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Government Hierarchy */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-primary mb-8 marathi text-center">
            🏛️ सरकारी प्रशासनिक संरचना
          </h2>
          <div className="max-w-2xl mx-auto">
            <div className="space-y-4">
              {[
                { level: "राष्ट्रीय स्तर", head: "राष्ट्रपति / प्रधानमंत्री" },
                { level: "राज्य स्तर", head: "राज्यपाल / मुख्यमंत्री" },
                {
                  level: "जिल्हा स्तर",
                  head: "जिल्हा प्रशासक / पोलिस अधीक्षक",
                },
                {
                  level: "तहसील स्तर",
                  head: "तहसीलदार / पटेल",
                },
                {
                  level: "गाँव स्तर",
                  head: "सरपंच / ग्रामपंचायत",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 bg-white p-4 rounded-lg shadow-sm"
                >
                  <div className="w-12 h-12 bg-secondary text-white rounded-full flex items-center justify-center font-bold">
                    {index + 1}
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-primary marathi">
                      {item.level}
                    </h4>
                    <p className="text-sm text-gray-600 marathi">
                      {item.head}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Useful Links */}
      <section className="py-12 container mx-auto px-4">
        <h2 className="text-3xl font-bold text-primary mb-8 marathi text-center">
          🔗 उपयोगी लिंक
        </h2>
        <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
          {[
            { name: "महाराष्ट्र सरकार", url: "#" },
            { name: "नागपूर जिल्हा", url: "#" },
            { name: "हिंगणा तहसील", url: "#" },
            { name: "भारत सरकार", url: "#" },
          ].map((link, index) => (
            <a
              key={index}
              href={link.url}
              className="bg-white p-4 rounded-lg shadow-md border-l-4 border-secondary hover:shadow-lg transition-shadow marathi font-semibold text-primary"
            >
              {link.name} →
            </a>
          ))}
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
