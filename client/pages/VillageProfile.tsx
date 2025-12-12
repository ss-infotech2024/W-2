import Header from "@/components/Header";
import { MapPin, Users, Home, Droplet, Zap, BookOpen, Heart } from "lucide-react";

export default function VillageProfile() {
  const demographics = [
    { label: "एकूण लोकसंख्या", value: "902" },
    { label: "पुरुष", value: "479" },
    { label: "स्त्रिया", value: "423" },
    { label: "घरे", value: "185" },
    { label: "साक्षर व्यक्ती", value: "623" },
    { label: "साक्षरता दर", value: "69%" },
  ];

  const infrastructure = [
    {
      icon: <Droplet className="w-6 h-6" />,
      title: "पाणीपुरवठा",
      details: [
        "24 घंटा निर्बाध जल आपूर्ति",
        "12 सार्वजनिक कुएं",
        "28 बोरवेल",
        "2 सामुदायिक टैंक",
      ],
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "विजली",
      details: [
        "सभी घरों में बिजली कनेक्शन",
        "24 घंटे विद्युत आपूर्ति",
        "5 सामुदायिक लाइटें",
        "15 कृषि पंप कनेक्शन",
      ],
    },
    {
      icon: <Home className="w-6 h-6" />,
      title: "सड़कें",
      details: [
        "पक्की सड़कें - 8 किमी",
        "कच्ची सड़कें - 12 किमी",
        "3 पुल और पाइपलाइन",
        "प्रवेशद्वार सड़क खुली",
      ],
    },
    {
      icon: <BookOpen className="w-6 h-6" />,
      title: "शिक्षा",
      details: [
        "1 प्राथमिक विद्यालय",
        "1 माध्यमिक विद्यालय",
        "कुल 150 विद्यार्थी",
        "15 शिक्षक और कर्मचारी",
      ],
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: "स्वास्थ्य",
      details: [
        "1 प्राथमिक स्वास्थ्य केंद्र",
        "2 आंगनवाड़ी केंद्र",
        "1 आशा कार्यकर्ता",
        "नियमित स्वास्थ्य शिविर",
      ],
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "सामाजिक",
      details: [
        "8 महिला बचत समूह",
        "3 पुरुष बचत समूह",
        "1 युवा केंद्र",
        "10 स्वयंसेवी संगठन",
      ],
    },
  ];

  const history = [
    {
      year: "1962",
      title: "ग्रामपंचायत की स्थापना",
      desc: "देवळी (पेंढरी) ग्रामपंचायत की आधिकारिक स्थापना हुई।",
    },
    {
      year: "1985",
      title: "पाणीपुरवठा परियोजना",
      desc: "गांव में पहली बार स्थायी पाणीपुरवठा व्यवस्था शुरू हुई।",
    },
    {
      year: "2000",
      title: "विद्यालय का विस्तार",
      desc: "माध्यमिक विद्यालय का निर्माण पूरा हुआ।",
    },
    {
      year: "2015",
      title: "बिजली का विस्तार",
      desc: "सभी घरों में बिजली कनेक्शन का कार्य पूरा हुआ।",
    },
    {
      year: "2020",
      title: "डिजिटल भारत",
      desc: "गांव को डिजिटल भारत कार्यक्रम में शामिल किया गया।",
    },
  ];

  const mainCrops = [
    { name: "धान", description: "मुख्य रबी फसल" },
    { name: "कपास", description: "नकदी फसल" },
    { name: "सोयाबीन", description: "महत्वपूर्ण दलहन" },
    { name: "दाल", description: "प्रोटीन समृद्ध" },
    { name: "तेल बीज", description: "व्यावसायिक फसल" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-blue-700 text-primary-foreground py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold marathi">
            गावाची विस्तृत माहिती
          </h1>
          <p className="text-lg mt-2 opacity-90 marathi">
            देवळी (पेंढरी) - एक समृद्ध ग्रामीण सम्प्रदाय
          </p>
        </div>
      </section>

      {/* Demographics */}
      <section className="py-12 container mx-auto px-4">
        <h2 className="text-3xl font-bold text-primary mb-8 marathi">
          📊 जनसांख्यिकी आकड़े
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {demographics.map((demo, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md border-l-4 border-secondary"
            >
              <p className="text-gray-600 text-sm marathi font-semibold">
                {demo.label}
              </p>
              <p className="text-3xl font-bold text-secondary mt-2">
                {demo.value}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Infrastructure */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-primary mb-8 marathi">
            🏗️ गावाचा आधारभूत संरचना
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {infrastructure.map((infra, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md border-t-4 border-secondary"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="text-secondary">{infra.icon}</div>
                  <h3 className="text-xl font-bold text-primary marathi">
                    {infra.title}
                  </h3>
                </div>
                <ul className="space-y-2">
                  {infra.details.map((detail, i) => (
                    <li
                      key={i}
                      className="text-sm text-gray-700 marathi flex items-start"
                    >
                      <span className="text-secondary mr-2">✓</span>
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* History Timeline */}
      <section className="py-12 container mx-auto px-4">
        <h2 className="text-3xl font-bold text-primary mb-8 marathi">
          📜 गावाचा इतिहास
        </h2>
        <div className="space-y-6">
          {history.map((event, index) => (
            <div
              key={index}
              className="flex gap-4 md:gap-8"
            >
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 bg-secondary text-white rounded-full flex items-center justify-center font-bold text-sm marathi">
                  {event.year.slice(-2)}
                </div>
                {index < history.length - 1 && (
                  <div className="w-1 h-16 bg-secondary mt-2"></div>
                )}
              </div>
              <div className="pb-8">
                <h3 className="text-xl font-bold text-primary marathi">
                  {event.title}
                </h3>
                <p className="text-gray-600 mt-2 marathi">{event.desc}</p>
                <p className="text-secondary font-bold mt-1">{event.year}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Main Crops */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-primary mb-8 marathi">
            🌾 मुख्य पिकें
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4">
            {mainCrops.map((crop, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md border-l-4 border-green-500 text-center"
              >
                <p className="text-3xl mb-2">🌾</p>
                <h3 className="font-bold text-primary marathi">{crop.name}</h3>
                <p className="text-sm text-gray-600 marathi mt-2">
                  {crop.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Village Characteristics */}
      <section className="py-12 container mx-auto px-4">
        <h2 className="text-3xl font-bold text-primary mb-8 marathi">
          📍 गावाचे वैशिष्ट्य
        </h2>
        <div className="bg-white p-8 rounded-lg shadow-md border-l-4 border-secondary space-y-4">
          <div>
            <h3 className="text-lg font-bold text-primary marathi mb-2">
              भौगोलिक अवस्थिति
            </h3>
            <p className="text-gray-700 marathi">
              देवळी (पेंढरी) गाव नागपूर जिल्हे में हिंगणा तहसील में स्थित है। गांव समुद्र सतह से लगभग 310 मीटर की ऊंचाई पर स्थित है।
            </p>
          </div>
          <div>
            <h3 className="text-lg font-bold text-primary marathi mb-2">
              जलवायु
            </h3>
            <p className="text-gray-700 marathi">
              गांव में अर्ध-शुष्क जलवायु है। औसत वार्षिक वर्षा लगभग 800-900 मिमी है। गर्मी की ऋतु में अधिकतम तापमान 40-42°C तक पहुंचता है।
            </p>
          </div>
          <div>
            <h3 className="text-lg font-bold text-primary marathi mb-2">
              मिट्टी का प्रकार
            </h3>
            <p className="text-gray-700 marathi">
              गांव में मुख्यतः काली मिट्टी है जो कपास, दाल और तेल बीजों की खेती के लिए उपयुक्त है।
            </p>
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
