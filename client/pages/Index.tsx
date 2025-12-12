import Header from "@/components/Header";
import { ChevronLeft, ChevronRight, Phone, Mail, MapPin, Droplet, Zap, Users, Home, BookOpen, Heart } from "lucide-react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Index() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad576?w=1200&h=600&fit=crop",
      title: "ग्रामपंचायत भवन",
    },
    {
      image: "https://images.unsplash.com/photo-1427504494785-cdbe9fefbb0b?w=1200&h=600&fit=crop",
      title: "शेतीची जमीन",
    },
    {
      image: "https://images.unsplash.com/photo-1574482620811-1aa16ffe3c82?w=1200&h=600&fit=crop",
      title: "ग्रामीण जीवन",
    },
    {
      image: "https://images.unsplash.com/photo-1511379938547-c1f69b13d835?w=1200&h=600&fit=crop",
      title: "सामुदायिक कार्यक्रम",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const announcements = [
    {
      date: "१५-डिसेंबर-२०२५",
      title: "ग्रामसभा बैठक",
      text: "ग्रामसभा बैठक दिनांक २०-डिसेंबर को प्रातः १०:०० बजे आयोजित होगी।",
    },
    {
      date: "१०-डिसेंबर-२०२५",
      title: "जल जीवन मिशन",
      text: "गांव में नई जल पाइपलाइन का निर्माण कार्य शुरू हो गया है।",
    },
    {
      date: "०५-डिसेंबर-२०२५",
      title: "आवास योजना",
      text: "प्रधानमंत्री आवास योजना के लिए आवेदन आमंत्रित किए जा रहे हैं।",
    },
    {
      date: "२८-नोव्हेंबर-२०२५",
      title: "स्वच्छता अभियान",
      text: "गांव की सफाई के लिए विशेष अभियान का आयोजन किया जाएगा।",
    },
  ];

  const schemes = [
    "प्रधानमंत्री आवास योजना",
    "जल जीवन मिशन",
    "स्वच्छ भारत मिशन",
    "उज्ज्वला योजना",
    "पीएम किसान योजना",
    "मनरेगा योजना",
  ];

  const quickLinks = [
    { icon: "📋", label: "ग्रामसभा नोटीस", href: "/services" },
    { icon: "👶", label: "जन्म दाखला", href: "/services" },
    { icon: "⚰️", label: "मृत्यू दाखला", href: "/services" },
    { icon: "📢", label: "तक्रार नोंदणी", href: "/services" },
    { icon: "💰", label: "कर भरणा", href: "/services" },
    { icon: "📋", label: "दस्तऐवज", href: "/services" },
  ];

  const stats = [
    { label: "एकूण लोकसंख्या", value: "902" },
    { label: "पुरुष", value: "479" },
    { label: "स्त्रिया", value: "423" },
    { label: "घरे", value: "185" },
    { label: "शेतजमीन (एकर)", value: "450" },
    { label: "विहिर", value: "12" },
    { label: "बोअरवेल", value: "28" },
    { label: "शाळा", value: "2" },
  ];

  const facilities = [
    {
      icon: <Droplet className="w-8 h-8" />,
      title: "पाणीपुरवठा",
      desc: "गांव में 24 घंटे की जल आपूर्ति व्यवस्था",
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "विजली",
      desc: "सभी घरों में 24 घंटे विद्युत आपूर्ति",
    },
    {
      icon: <Home className="w-8 h-8" />,
      title: "सड़के",
      desc: "पक्की और कच्ची सड़कों का विस्तृत नेटवर्क",
    },
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: "शिक्षा",
      desc: "प्राथमिक और माध्यमिक विद्यालय",
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "स्वास्थ्य",
      desc: "प्राथमिक स्वास्थ्य केंद्र और आंगनवाड़ी",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "सामाजिक",
      desc: "महिला बचत समूह और युवा केंद्र",
    },
  ];

  const mainCrops = [
    { name: "धान", icon: "🌾" },
    { name: "कपास", icon: "🌾" },
    { name: "सोयाबीन", icon: "🌾" },
    { name: "दाल", icon: "🌾" },
    { name: "तेल बीज", icon: "🌾" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Slider Section */}
      <section className="relative h-96 md:h-[28rem] overflow-hidden bg-gray-900">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/40"></div>
            <div className="absolute bottom-4 left-4 md:bottom-8 md:left-8 text-white">
              <h2 className="text-2xl md:text-4xl font-bold">{slide.title}</h2>
            </div>
          </div>
        ))}

        <button
          onClick={prevSlide}
          className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all"
          aria-label="Previous slide"
        >
          <ChevronLeft size={24} />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all"
          aria-label="Next slide"
        >
          <ChevronRight size={24} />
        </button>

        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-2 rounded-full transition-all ${
                index === currentSlide
                  ? "bg-secondary w-8"
                  : "bg-white/50 w-2 hover:bg-white/75"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </section>

      {/* Welcome Message */}
      <section className="bg-gradient-to-r from-primary to-blue-700 text-primary-foreground py-8 md:py-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-3 marathi">
            देवळी (पेंढरी) ग्रामपंचायतमध्ये आपले स्वागत आहे
          </h1>
          <p className="text-lg opacity-95 max-w-3xl mx-auto marathi">
            हा संपूर्ण पारदर्शी व गावाच्या विकासासाठी समर्पित ग्रामपंचायतचा अधिकृत संकेतस्थल आहे। आपण शिक्षा, स्वास्थ्य, पाणीपुरवठा, कृषी विकास आणि समाजिक कल्याण कार्यक्रमांमध्ये महत्वाचे भूमिका निभावत आहोत।
          </p>
        </div>
      </section>

      {/* Latest Announcements */}
      <section className="py-8 md:py-12 bg-gray-50 border-b border-gray-200">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-primary mb-6 marathi">
            📢 ताज्या घोषणा
          </h2>
          <div className="grid gap-4">
            {announcements.map((announcement, index) => (
              <div
                key={index}
                className="bg-white border-l-4 border-secondary p-4 rounded-r-lg shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-2">
                  <span className="text-sm font-bold text-secondary marathi">
                    {announcement.title}
                  </span>
                  <span className="text-xs font-semibold text-gray-500">
                    {announcement.date}
                  </span>
                </div>
                <p className="text-gray-700 marathi">{announcement.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Running Schemes */}
      <section className="py-8 md:py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-primary mb-6 marathi">
            🏛️ चालू योजना
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {schemes.map((scheme, index) => (
              <Link
                key={index}
                to="/schemes"
                className="bg-gradient-to-br from-primary to-blue-700 text-primary-foreground p-6 rounded-lg font-semibold hover:shadow-lg transition-all hover:scale-105 cursor-pointer marathi text-center"
              >
                {scheme}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-8 md:py-12 bg-gray-50 border-b border-gray-200">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-primary mb-6 marathi">
            महत्वाच्या लिंक
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {quickLinks.map((link, index) => (
              <Link
                key={index}
                to={link.href}
                className="bg-white border-2 border-gray-200 p-4 rounded-lg text-center hover:border-secondary hover:shadow-md transition-all marathi"
              >
                <div className="text-3xl mb-2">{link.icon}</div>
                <p className="text-xs font-semibold text-gray-800">{link.label}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Village Statistics */}
      <section className="py-8 md:py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-primary mb-6 marathi">
            📊 महत्वाचे आकडे
          </h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-secondary to-orange-400 text-white p-6 rounded-lg text-center shadow-md hover:shadow-lg transition-shadow marathi"
              >
                <p className="text-3xl md:text-4xl font-bold mb-2">{stat.value}</p>
                <p className="text-sm md:text-base font-semibold">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Facilities Section */}
      <section className="py-8 md:py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-primary mb-6 marathi">
            🏗️ गावाची सुविधा
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {facilities.map((facility, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md border-t-4 border-secondary hover:shadow-lg transition-shadow"
              >
                <div className="text-secondary mb-3">{facility.icon}</div>
                <h3 className="text-xl font-bold text-primary mb-2 marathi">
                  {facility.title}
                </h3>
                <p className="text-gray-600 text-sm marathi">{facility.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Crops */}
      <section className="py-8 md:py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-primary mb-6 marathi">
            🌾 मुख्य पिके
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {mainCrops.map((crop, index) => (
              <div
                key={index}
                className="bg-green-50 border-2 border-green-200 p-6 rounded-lg text-center hover:bg-green-100 transition-colors"
              >
                <p className="text-4xl mb-2">{crop.icon}</p>
                <p className="font-semibold text-gray-800 marathi">{crop.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Village Information Cards */}
      <section className="py-8 md:py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Sarpanch Message */}
            <div className="bg-white p-6 md:p-8 rounded-lg shadow-md border-t-4 border-secondary">
              <h3 className="text-xl md:text-2xl font-bold text-primary mb-4 marathi">
                🎤 सरपंचांचा संदेश
              </h3>
              <p className="text-gray-700 leading-relaxed marathi text-sm md:text-base">
                आपले ग्रामपंचायत देवळी (पेंढरी) गावाच्या सर्व नागरिकांच्या विकासासाठी प्रतिबद्ध आहे। आपण शिक्षा, स्वास्थ्य, पाणीपुरवठा आणि कृषी विकासात महत्वाचे कार्य करत आहोत। हे गाव समृद्ध आणि आधुनिक बनवण्यासाठी आपण सर्वांचे सहयोग खोजत आहोत। आपले विचार आणि सुझाव आमच्या विकास कार्यक्रमांचा महत्वाचा भाग आहेत।
              </p>
              <p className="mt-4 font-semibold text-primary marathi">
                - श्री. पपीता बंडूजी चिखलखुंडे, सरपंच
              </p>
            </div>

            {/* Village Info */}
            <div className="bg-white p-6 md:p-8 rounded-lg shadow-md border-t-4 border-primary">
              <h3 className="text-xl md:text-2xl font-bold text-primary mb-4 marathi">
                ℹ️ गावाचा परिचय
              </h3>
              <div className="space-y-3 text-gray-700 text-sm marathi">
                <p>
                  <span className="font-semibold">गांव का नाम:</span> देवळी (पेंढरी)
                </p>
                <p>
                  <span className="font-semibold">स्थापना वर्ष:</span> 1962
                </p>
                <p>
                  <span className="font-semibold">एकूण लोकसंख्या:</span> 902
                </p>
                <p>
                  <span className="font-semibold">मुख्य भाषा:</span> मराठी
                </p>
                <p>
                  <span className="font-semibold">मुख्य व्यवसाय:</span> शेती,
                  दुग्धव्यवसाय, किरकोळ व्यापार
                </p>
                <p>
                  <span className="font-semibold">तहसील:</span> हिंगणा
                </p>
                <p>
                  <span className="font-semibold">जिल्हा:</span> नागपूर
                </p>
                <p>
                  <span className="font-semibold">राज्य:</span> महाराष्ट्र
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Today's Thought */}
      <section className="py-8 md:py-12 bg-gradient-to-r from-primary via-blue-600 to-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-lg font-semibold mb-2 marathi">💭 आजचा विचार</h3>
          <p className="text-xl md:text-2xl font-semibold italic marathi max-w-2xl mx-auto">
            "एकता येथे शक्ती आहे, सहयोग येथे यश आहे, विकास येथे गांव आहे।"
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-8 md:py-12 bg-gray-50 border-t border-gray-200">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-primary mb-6 text-center marathi">
            📞 संपर्क माहिती
          </h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <MapPin className="w-8 h-8 text-secondary mx-auto mb-3" />
              <h3 className="font-semibold text-primary mb-2 marathi">पत्ता</h3>
              <p className="text-sm text-gray-700 marathi">
                देवळी (पेंढरी), पोस्ट देवळी, तहसील हिंगणा, जिल्हा नागपूर, महाराष्ट्र
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <Mail className="w-8 h-8 text-secondary mx-auto mb-3" />
              <h3 className="font-semibold text-primary mb-2">ईमेल</h3>
              <p className="text-sm text-blue-600 marathi">
                gpdevalipendhari@gmail.com
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <Phone className="w-8 h-8 text-secondary mx-auto mb-3" />
              <h3 className="font-semibold text-primary mb-2 marathi">वेळ</h3>
              <p className="text-sm text-gray-700 marathi">
                सकाळी 10:00 - सायं 5:00
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-8">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-3">
            <h3 className="font-bold text-lg marathi">देवळी (पेंढरी) ग्रामपंचायत</h3>
            <p className="text-sm opacity-90 marathi">
              डिजिटल इंडिया मिशन अंतर्गत निर्मित
            </p>
            <p className="text-xs opacity-75">
              © 2025 देवळी (पेंढरी) ग्रामपंचायत. सर्व अधिकार आरक्षित.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
