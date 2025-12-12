import Header from "@/components/Header";
import { Mail, Phone } from "lucide-react";

export default function Committee() {
  const sarpanch = {
    name: "श्री. पपीता बंडूजी चिखलखुंडे",
    position: "सरपंच",
    phone: "94220-XXXXX",
    email: "sarpanch@devalipendhari.in",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
    bio: "श्री. पपीता बंडूजी चिखलखुंडे को गांव के विकास के लिए गहरी प्रतिबद्धता के लिए जाना जाता है। वह कृषि क्षेत्र में अग्रणी हैं और सामाजिक कल्याण कार्यक्रमों में सक्रिय रूप से भाग लेते हैं।",
  };

  const upSarpanch = {
    name: "श्री. देवेंद्र धनराज बालकृष्ण",
    position: "उपसरपंच",
    phone: "94220-XXXXX",
    email: "upsarpanch@devalipendhari.in",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
    bio: "उपसरपंच सामाजिक संगठन और महिला कल्याण कार्यक्रमों के प्रमुख हैं।",
  };

  const members = [
    {
      name: "श्री. राज कुमार शर्मा",
      ward: "वार्ड 1",
      phone: "94220-XXXXX",
      position: "सदस्य",
      bio: "शिक्षा और गांव के बुनियादी ढांचे के विकास पर ध्यान केंद्रित करते हैं।",
    },
    {
      name: "श्रीमती राधा संभाजी पवार",
      ward: "वार्ड 2",
      phone: "94220-XXXXX",
      position: "सदस्य",
      bio: "महिला बचत समूहों और आंगनवाड़ी कार्यक्रमों की देखभाल करती हैं।",
    },
    {
      name: "श्री. अजय विजय मोहिते",
      ward: "वार्ड 3",
      phone: "94220-XXXXX",
      position: "सदस्य",
      bio: "कृषि विकास और जल संरक्षण परियोजनाओं के लिए जिम्मेदार हैं।",
    },
    {
      name: "श्रीमती आशा राहुल चौधरी",
      ward: "वार्ड 4",
      phone: "94220-XXXXX",
      position: "सदस्य",
      bio: "पर्यावरण और स्वच्छता अभियानों को संचालित करती हैं।",
    },
    {
      name: "श्री. मोहन लाल सिंह",
      ward: "वार्ड 5",
      phone: "94220-XXXXX",
      position: "सदस्य",
      bio: "सड़क और सामुदायिक संपत्ति के रखरखाव की निगरानी करते हैं।",
    },
  ];

  const officials = [
    {
      name: "श्री. राज वसंत उमाटे",
      position: "ग्राम सचिव / तलाठी",
      phone: "94220-XXXXX",
      email: "secretary@devalipendhari.in",
      responsibilities:
        "ग्रामपंचायत के सभी प्रशासनिक कार्य, रिकॉर्ड रखरखाव, और राजस्व कार्य।",
    },
    {
      name: "श्री. विजय प्रभाकर",
      position: "ग्राम सेवक",
      phone: "94220-XXXXX",
      email: "sevak@devalipendhari.in",
      responsibilities:
        "सार्वजनिक स्वास्थ्य, स्वच्छता और विकास योजनाओं का कार्यान्वयन।",
    },
    {
      name: "श्री. राकेश सुनील नायक",
      position: "कोतवाल",
      phone: "94220-XXXXX",
      email: "kotwal@devalipendhari.in",
      responsibilities:
        "गांव के कानून और व्यवस्था, सार्वजनिक शांति और सुरक्षा।",
    },
    {
      name: "श्री. संजय गोपाल",
      position: "रोहयो मेट",
      phone: "94220-XXXXX",
      email: "rohyo@devalipendhari.in",
      responsibilities:
        "सड़क, पाणीपुरवठा और अन्य सार्वजनिक संपत्ति का रखरखाव।",
    },
  ];

  const pastSarpanchs = [
    { name: "श्री. शरद कुमार मेश्वर", years: "1962-1970" },
    { name: "श्री. विमल शंकर राव", years: "1970-1977" },
    { name: "श्री. गणेश विठ्ठल मोहिते", years: "1977-1985" },
    { name: "श्री. राज महादेव पवार", years: "1985-1995" },
    { name: "श्री. अनिल राम कुलकर्णी", years: "1995-2005" },
    { name: "श्रीमती सुनीता राज भोई", years: "2005-2015" },
    { name: "श्री. विक्रम दत्ता शर्मा", years: "2015-2025" },
  ];

  const responsibilities = [
    "शिक्षा और कौशल विकास में सुधार",
    "जल, बिजली और स्वच्छता की व्यवस्था",
    "कृषि विकास और किसान कल्याण",
    "महिला और बाल कल्याण कार्यक्रम",
    "स्वास्थ्य और पोषण सेवाएं",
    "सामाजिक सुरक्षा योजनाओं का कार्यान्वयन",
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-blue-700 text-primary-foreground py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold marathi">
            ग्रामपंचायत समिती
          </h1>
          <p className="text-lg mt-2 opacity-90 marathi">
            गांव के विकास के लिए समर्पित अधिकारी और सदस्य
          </p>
        </div>
      </section>

      {/* Sarpanch Section */}
      <section className="py-12 container mx-auto px-4">
        <h2 className="text-3xl font-bold text-primary mb-8 marathi">🎖️ सरपंच</h2>
        <div className="bg-white rounded-lg shadow-lg p-8 border-t-4 border-secondary max-w-2xl mx-auto">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="flex-shrink-0">
              <img
                src={sarpanch.image}
                alt={sarpanch.name}
                className="w-40 h-40 rounded-lg object-cover border-4 border-secondary"
              />
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-primary marathi">
                {sarpanch.name}
              </h3>
              <p className="text-lg font-semibold text-secondary marathi mb-4">
                {sarpanch.position}
              </p>
              <p className="text-gray-700 marathi mb-4">{sarpanch.bio}</p>
              <div className="space-y-2">
                <div className="flex items-center gap-3 text-gray-600">
                  <Phone size={18} className="text-secondary" />
                  <span>{sarpanch.phone}</span>
                </div>
                <div className="flex items-center gap-3 text-gray-600">
                  <Mail size={18} className="text-secondary" />
                  <span>{sarpanch.email}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Up Sarpanch Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-primary mb-8 marathi">
            🎯 उपसरपंच
          </h2>
          <div className="bg-white rounded-lg shadow-lg p-8 border-t-4 border-primary max-w-2xl mx-auto">
            <div className="flex flex-col md:flex-row gap-8">
              <div className="flex-shrink-0">
                <img
                  src={upSarpanch.image}
                  alt={upSarpanch.name}
                  className="w-40 h-40 rounded-lg object-cover border-4 border-primary"
                />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-primary marathi">
                  {upSarpanch.name}
                </h3>
                <p className="text-lg font-semibold text-secondary marathi mb-4">
                  {upSarpanch.position}
                </p>
                <p className="text-gray-700 marathi mb-4">{upSarpanch.bio}</p>
                <div className="space-y-2">
                  <div className="flex items-center gap-3 text-gray-600">
                    <Phone size={18} className="text-secondary" />
                    <span>{upSarpanch.phone}</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-600">
                    <Mail size={18} className="text-secondary" />
                    <span>{upSarpanch.email}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Members Section */}
      <section className="py-12 container mx-auto px-4">
        <h2 className="text-3xl font-bold text-primary mb-8 marathi">
          👥 ग्रामपंचायत सदस्य
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {members.map((member, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md p-6 border-l-4 border-secondary"
            >
              <h3 className="text-lg font-bold text-primary marathi">
                {member.name}
              </h3>
              <p className="text-sm font-semibold text-secondary marathi mb-2">
                {member.ward}
              </p>
              <p className="text-sm text-gray-700 marathi mb-3">{member.bio}</p>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <Phone size={14} className="text-secondary" />
                <span>{member.phone}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Officials Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-primary mb-8 marathi">
            🏛️ ग्रामपंचायत अधिकारी
          </h2>
          <div className="grid gap-6">
            {officials.map((official, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md p-6 border-t-4 border-primary"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-primary marathi">
                      {official.name}
                    </h3>
                    <p className="text-lg font-semibold text-secondary marathi mb-2">
                      {official.position}
                    </p>
                    <p className="text-gray-700 marathi text-sm mb-3">
                      {official.responsibilities}
                    </p>
                    <div className="space-y-1 text-sm">
                      <div className="flex items-center gap-2">
                        <Phone size={14} className="text-secondary" />
                        <span>{official.phone}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Mail size={14} className="text-secondary" />
                        <span>{official.email}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Responsibilities Section */}
      <section className="py-12 container mx-auto px-4">
        <h2 className="text-3xl font-bold text-primary mb-8 marathi">
          📋 समितीची जबाबदारी
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {responsibilities.map((resp, index) => (
            <div key={index} className="flex gap-4">
              <div className="text-2xl">✓</div>
              <p className="text-gray-700 marathi font-semibold">{resp}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Past Sarpanchs */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-primary mb-8 marathi">
            📜 पूर्वीचे सरपंच
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {pastSarpanchs.map((past, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md p-6 border-l-4 border-secondary text-center"
              >
                <p className="font-bold text-primary marathi text-sm">
                  {past.name}
                </p>
                <p className="text-gray-600 text-xs mt-2 marathi">
                  {past.years}
                </p>
              </div>
            ))}
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
