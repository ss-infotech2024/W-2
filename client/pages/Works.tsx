import Header from "@/components/Header";
import { CheckCircle, Clock, FileText } from "lucide-react";

export default function Works() {
  const ongoingWorks = [
    {
      name: "गाव की मुख्य सड़क का विस्तार",
      status: "चल रहा है",
      progress: 65,
      budget: "₹12 लाख",
      duration: "6 महीने",
      contractor: "राज कंस्ट्रक्शन",
      details: "गांव की मुख्य सड़क को 4 मीटर से 6 मीटर तक चौड़ा किया जा रहा है।",
      image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=400&h=300&fit=crop",
    },
    {
      name: "पाणीपुरवठा पाइपलाइन का निर्माण",
      status: "चल रहा है",
      progress: 80,
      budget: "₹8 लाख",
      duration: "3 महीने",
      contractor: "जल निकाय निर्माण",
      details: "गांव के सभी घरों तक जल पाइपलाइन का विस्तार किया जा रहा है।",
      image: "https://images.unsplash.com/photo-1581092918692-5f2f11c2c8b2?w=400&h=300&fit=crop",
    },
    {
      name: "ड्रेनेज सिस्टम का निर्माण",
      status: "चल रहा है",
      progress: 45,
      budget: "₹5 लाख",
      duration: "4 महीने",
      contractor: "सिविल इंजीनियरिंग कंपनी",
      details: "गांव में आधुनिक ड्रेनेज सिस्टम का निर्माण जारी है।",
      image: "https://images.unsplash.com/photo-1581092918270-991b38693d1b?w=400&h=300&fit=crop",
    },
  ];

  const completedWorks = [
    {
      name: "ग्रामसभा भवन",
      completionDate: "2022",
      budget: "₹25 लाख",
      features:
        "आधुनिक सुविधाओं के साथ सामुदायिक भवन, 200 व्यक्तियों की क्षमता",
      image: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=400&h=300&fit=crop",
    },
    {
      name: "सार्वजनिक शौचालय निर्माण",
      completionDate: "2021",
      budget: "₹8 लाख",
      features: "180 व्यक्तिगत शौचालय, स्वच्छ भारत मिशन के अंतर्गत",
      image: "https://images.unsplash.com/photo-1585518459706-200b4d45f360?w=400&h=300&fit=crop",
    },
    {
      name: "LED स्ट्रीटलाइट का स्थापन",
      completionDate: "2023",
      budget: "₹4 लाख",
      features: "80 LED लाइटें, सार्वजनिक सड़कों पर स्थापित",
      image: "https://images.unsplash.com/photo-1565043666747-69f6646db940?w=400&h=300&fit=crop",
    },
    {
      name: "प्राथमिक विद्यालय का पुनर्निर्माण",
      completionDate: "2023",
      budget: "₹15 लाख",
      features: "6 कक्षाएं, पुस्तकालय, कंप्यूटर लैब",
      image: "https://images.unsplash.com/photo-1427504494785-cdbe9fefbb0b?w=400&h=300&fit=crop",
    },
  ];

  const approvedWorks = [
    {
      name: "स्वास्थ्य केंद्र का विस्तार",
      estimatedBudget: "₹6 लाख",
      timeline: "6 महीने",
      status: "सार्वजनिक टिप्पणी के लिए",
    },
    {
      name: "आंगनवाड़ी केंद्र का निर्माण",
      estimatedBudget: "₹4 लाख",
      timeline: "4 महीने",
      status: "सार्वजनिक टिप्पणी के लिए",
    },
    {
      name: "पशु चारा गोदाम",
      estimatedBudget: "₹3 लाख",
      timeline: "2 महीने",
      status: "निविदा आमंत्रण के लिए",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-blue-700 text-primary-foreground py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold marathi">
            विकास कामे
          </h1>
          <p className="text-lg mt-2 opacity-90 marathi">
            गांव के विकास के लिए चल रहे और पूर्ण प्रकल्प
          </p>
        </div>
      </section>

      {/* Ongoing Works */}
      <section className="py-12 container mx-auto px-4">
        <h2 className="text-3xl font-bold text-primary mb-8 marathi flex items-center gap-2">
          <Clock size={32} className="text-secondary" />
          चालू प्रकल्प
        </h2>
        <div className="space-y-6">
          {ongoingWorks.map((work, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden border-t-4 border-yellow-500 hover:shadow-lg transition-shadow"
            >
              <div className="flex flex-col md:flex-row">
                <img
                  src={work.image}
                  alt={work.name}
                  className="w-full md:w-64 h-48 object-cover"
                />
                <div className="flex-1 p-6">
                  <h3 className="text-xl font-bold text-primary marathi mb-2">
                    {work.name}
                  </h3>
                  <p className="text-gray-700 marathi mb-4">{work.details}</p>

                  {/* Progress Bar */}
                  <div className="mb-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-semibold text-gray-600 marathi">
                        प्रगति
                      </span>
                      <span className="text-sm font-bold text-secondary">
                        {work.progress}%
                      </span>
                    </div>
                    <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-secondary transition-all"
                        style={{ width: `${work.progress}%` }}
                      ></div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                    <div>
                      <p className="text-gray-600 marathi font-semibold">
                        बजेट
                      </p>
                      <p className="text-primary font-bold">{work.budget}</p>
                    </div>
                    <div>
                      <p className="text-gray-600 marathi font-semibold">
                        अवधि
                      </p>
                      <p className="text-primary font-bold">{work.duration}</p>
                    </div>
                    <div>
                      <p className="text-gray-600 marathi font-semibold">
                        ठेकेदार
                      </p>
                      <p className="text-primary font-bold marathi">
                        {work.contractor}
                      </p>
                    </div>
                    <div>
                      <p className="text-gray-600 marathi font-semibold">
                        स्थिति
                      </p>
                      <p className="text-yellow-600 font-bold">{work.status}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Completed Works */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-primary mb-8 marathi flex items-center gap-2">
            <CheckCircle size={32} className="text-green-600" />
            पूर्ण झालेले प्रकल्प
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {completedWorks.map((work, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md overflow-hidden border-t-4 border-green-500"
              >
                <img
                  src={work.image}
                  alt={work.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-lg font-bold text-primary marathi mb-2">
                    {work.name}
                  </h3>
                  <div className="space-y-2 text-sm marathi">
                    <p>
                      <span className="font-semibold">पूरता तारीख:</span>{" "}
                      {work.completionDate}
                    </p>
                    <p>
                      <span className="font-semibold">बजेट:</span> {work.budget}
                    </p>
                    <p>
                      <span className="font-semibold">विशेषताएं:</span>
                    </p>
                    <p className="text-gray-700 ml-4">{work.features}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Approved Works */}
      <section className="py-12 container mx-auto px-4">
        <h2 className="text-3xl font-bold text-primary mb-8 marathi flex items-center gap-2">
          <FileText size={32} className="text-blue-600" />
          मंजूर प्रकल्प
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {approvedWorks.map((work, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md p-6 border-l-4 border-blue-500"
            >
              <h3 className="text-lg font-bold text-primary marathi mb-3">
                {work.name}
              </h3>
              <div className="space-y-2 text-sm marathi">
                <p>
                  <span className="font-semibold">अनुमानित बजेट:</span>
                  <br />
                  {work.estimatedBudget}
                </p>
                <p>
                  <span className="font-semibold">समय अवधि:</span>
                  <br />
                  {work.timeline}
                </p>
                <p>
                  <span className="font-semibold">स्थिति:</span>
                  <br />
                  <span className="text-blue-600">{work.status}</span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Tender Information */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-primary mb-8 marathi">
            📋 निविदा जानकारी
          </h2>
          <div className="bg-white rounded-lg shadow-md p-8 border-l-4 border-secondary space-y-4">
            <div>
              <h3 className="text-lg font-bold text-primary marathi mb-2">
                वर्तमान निविदा
              </h3>
              <p className="text-gray-700 marathi">
                आंगनवाड़ी केंद्र का निर्माण - निविदा आमंत्रण चल रहा है
              </p>
              <p className="text-gray-600 text-sm marathi mt-1">
                अंतिम तारीख: 31 दिसंबर 2025
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-primary marathi mb-2">
                आवेदन कहां करें
              </h3>
              <p className="text-gray-700 marathi">
                ग्रामपंचायत कार्यालय में व्यक्तिगत रूप से या ईमेल के माध्यम से
              </p>
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
