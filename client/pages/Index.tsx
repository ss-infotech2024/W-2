import Header from "@/components/Header";
import {
    ChevronLeft, ChevronRight, Phone, Mail, MapPin,
    Droplet, Zap, Users, Home, BookOpen, Heart,
    Megaphone, Building, FileText, Baby, Skull, AlertCircle,
    DollarSign, File, Users as UsersIcon, GraduationCap,
    Wifi, Stethoscope, Calendar, Leaf, Wheat,
    MessageCircle, Info, Sparkles, Target, Factory,
    Map, School, Hospital, TrendingUp,
    Cloud, Trees, Sprout, ClipboardList,
    Banknote, Landmark, Lightbulb, Compass,
    Navigation, Camera, Images, X, Crown, Shield,
    UserCheck, Award, Star, Flag
} from "lucide-react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Index() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    const slides = [
        {
            image: "https://www.csm.tech/storage/uploads/news/67656270418611734697584Thumb.jpg",
            title: "ग्रामपंचायत भवन",
        },
        {
            image: "https://m.thewire.in/sortd-service/imaginary/v22-01/webp/medium/high?url=dGhld2lyZS1pbi1wcm9kLXNvcnRkL21lZGlhNDc5MjY5OTAtNGM4ZS0xMWYwLWI3ZWItZDVlNzI1YWU1NzYzLmpwZw==",
            title: "शेतीची जमीन",
        },
        {
            image: "https://img.khetivyapar.com/images/news/1754987208-pm-crop-insurance-3900-crore-payment-35-lakh-farmers-7510.jpg",
            title: "ग्रामीण जीवन",
        },
    ];

    // Gallery preview images for homepage
    const galleryPreview = [
        {
            src: "/G2.jpg",
            title: "ग्रामपंचायत कार्यालय",
            category: "ग्रामपंचायत भवन",
        },
        {
            src: "/G5.jpg",
            title: "ग्रामसभा हॉल",
            category: "ग्रामपंचायत भवन",
        },
        {
            src: "/G4.jpg",
            title: "कार्यालय प्रवेशद्वार",
            category: "ग्रामपंचायत भवन",
        },
        {
            src: "https://visionnewsservice.in/vns_admin/postimages/20250620185053_International%20Yoga.jpeg",
            title: "गांव का सामुदायिक केंद्र",
            category: "सामुदायिक कार्यक्रम",
        },
    ];

    // Government Officials
    const governmentOfficials = [
        {
            name: "श्री. आचार्य देवव्रत",
            position: "माननीय राज्यपाल",
            image: "https://gujaratvidyapith.org/common/media/2024/09/24090205195019.png",
            color: "from-purple-500 to-purple-700",
            ringColor: "ring-purple-300"
        },
        {
            name: "श्री. देवेंद्र फडणवीस",
            position: "माननीय मुख्यमंत्री",
            image: "https://i.cdn.newsbytesapp.com/hn/images/l97420241204122029.jpeg?tr=w-720",
            color: "from-maroon-dark to-maroon",
            ringColor: "ring-red-300"
        },
        {
            name: "श्री. एकनाथ शिंदे",
            position: "माननीय उपमुख्यमंत्री",
            image: "https://upload.wikimedia.org/wikipedia/commons/4/4b/Eknath_Shinde_with_PM_Narendra_Modi_Cropped.jpg",
            color: "from-blue-500 to-blue-700",
            ringColor: "ring-blue-300"
        },
        {
            name: "श्री. अजित पवार",
            position: "माननीय उपमुख्यमंत्री",
            image: "https://www.jagranimages.com/images/newimg/16112024/16_11_2024-ajit_pawar_news_23832003.jpg",
            color: "from-green-500 to-green-700",
            ringColor: "ring-green-300"
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
        { icon: <ClipboardList className="w-10 h-10" />, label: "ग्रामसभा नोटीस", href: "/services" },
        { icon: <Baby className="w-10 h-10" />, label: "जन्म दाखला", href: "/services" },
        { icon: <Skull className="w-10 h-10" />, label: "मृत्यू दाखला", href: "/services" },
        { icon: <AlertCircle className="w-10 h-10" />, label: "तक्रार नोंदणी", href: "/services" },
        { icon: <Banknote className="w-10 h-10" />, label: "कर भरणा", href: "/services" },
        { icon: <FileText className="w-10 h-10" />, label: "दस्तऐवज", href: "/services" },
    ];

    const stats = [
        { label: "एकूण लोकसंख्या", value: "902", icon: <UsersIcon className="w-8 h-8" /> },
        { label: "पुरुष", value: "479", icon: <Users className="w-8 h-8" /> },
        { label: "स्त्रिया", value: "423", icon: <Users className="w-8 h-8" /> },
        { label: "घरे", value: "185", icon: <Home className="w-8 h-8" /> },
        { label: "शेतजमीन (एकर)", value: "450", icon: <Map className="w-8 h-8" /> },
        { label: "विहिर", value: "12", icon: <Droplet className="w-8 h-8" /> },
        { label: "बोअरवेल", value: "28", icon: <Factory className="w-8 h-8" /> },
        { label: "शाळा", value: "2", icon: <School className="w-8 h-8" /> },
    ];

    const facilities = [
        {
            icon: <Droplet className="w-12 h-12" />,
            title: "पाणीपुरवठा",
            desc: "गांव में 24 घंटे की जल आपूर्ति व्यवस्था",
        },
        {
            icon: <Zap className="w-12 h-12" />,
            title: "विजली",
            desc: "सभी घरों में 24 घंटे विद्युत आपूर्ति",
        },
        {
            icon: <Navigation className="w-12 h-12" />,
            title: "सड़के",
            desc: "पक्की और कच्ची सड़कों का विस्तृत नेटवर्क",
        },
        {
            icon: <School className="w-12 h-12" />,
            title: "शिक्षा",
            desc: "प्राथमिक और माध्यमिक विद्यालय",
        },
        {
            icon: <Stethoscope className="w-12 h-12" />,
            title: "स्वास्थ्य",
            desc: "प्राथमिक स्वास्थ्य केंद्र और आंगनवाड़ी",
        },
        {
            icon: <Users className="w-12 h-12" />,
            title: "सामाजिक",
            desc: "महिला बचत समूह और युवा केंद्र",
        },
    ];

    const mainCrops = [
        { name: "धान", icon: <Wheat className="w-12 h-12" /> },
        { name: "कपास", icon: <Sprout className="w-12 h-12" /> },
        { name: "सोयाबीन", icon: <Leaf className="w-12 h-12" /> },
        { name: "दाल", icon: <Trees className="w-12 h-12" /> },
        { name: "तेल बीज", icon: <Cloud className="w-12 h-12" /> },
    ];

    return (
        <div className="min-h-screen bg-background">
            <Header />

            {/* Hero Slider Section */}
            <section className="relative h-[90vh] min-h-[600px] max-h-[900px] overflow-hidden bg-gray-900">
                {slides.map((slide, index) => (
                    <div
                        key={index}
                        className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
                            }`}
                    >
                        <div className="absolute inset-0 w-full h-full">
                            <img
                                src={slide.image}
                                alt={slide.title}
                                className="w-full h-full object-cover object-center"
                                style={{
                                    width: '100%',
                                    height: '100%',
                                    objectFit: 'cover',
                                    objectPosition: 'center'
                                }}
                                onError={(e) => {
                                    e.currentTarget.src = "https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=1920&h=1080&fit=crop";
                                }}
                            />
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent"></div>
                        <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12 lg:p-16 text-white">
                            <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 md:mb-6 drop-shadow-2xl text-center marathi">
                                {slide.title}
                            </h2>
                        </div>
                    </div>
                ))}

                <button
                    onClick={prevSlide}
                    className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 bg-black/70 hover:bg-black/90 text-white p-3 md:p-4 rounded-full transition-all hover:scale-110 shadow-2xl"
                    aria-label="Previous slide"
                >
                    <ChevronLeft size={32} className="md:w-10 md:h-10" />
                </button>
                <button
                    onClick={nextSlide}
                    className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 bg-black/70 hover:bg-black/90 text-white p-3 md:p-4 rounded-full transition-all hover:scale-110 shadow-2xl"
                    aria-label="Next slide"
                >
                    <ChevronRight size={32} className="md:w-10 md:h-10" />
                </button>

                <div className="absolute bottom-8 md:bottom-12 left-1/2 -translate-x-1/2 z-20 flex gap-3">
                    {slides.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentSlide(index)}
                            className={`rounded-full transition-all ${index === currentSlide
                                ? "bg-white w-10 h-3"
                                : "bg-white/50 w-3 h-3 hover:bg-white/75"
                                }`}
                            aria-label={`Go to slide ${index + 1}`}
                        />
                    ))}
                </div>
            </section>

            {/* Welcome Message */}
            <section className="bg-gradient-to-r from-primary to-blue-700 text-primary-foreground py-12 md:py-16 lg:py-20">
                <div className="container mx-auto px-4 md:px-6 lg:px-8 text-center">
                    <div className="flex justify-center mb-6 md:mb-8">
                        <Building className="w-16 h-16 md:w-20 md:h-20 text-white/90" />
                    </div>
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 marathi">
                        देवळी (पेंढरी) ग्रामपंचायतमध्ये आपले स्वागत आहे
                    </h1>
                    <p className="text-lg md:text-xl opacity-95 max-w-4xl mx-auto marathi">
                        हा संपूर्ण पारदर्शी व गावाच्या विकासासाठी समर्पित ग्रामपंचायतचा अधिकृत संकेतस्थल आहे। आपण शिक्षा, स्वास्थ्य, पाणीपुरवठा, कृषी विकास आणि समाजिक कल्याण कार्यक्रमांमध्ये महत्वाचे भूमिका निभावत आहोत।
                    </p>
                </div>
            </section>

            {/* Latest Announcements */}
            <section className="py-12 md:py-16 lg:py-20 bg-gray-50 border-b border-gray-200">
                <div className="container mx-auto px-4 md:px-6 lg:px-8">
                    <div className="flex items-center gap-3 mb-8 md:mb-10 lg:mb-12">
                        <Megaphone className="w-10 h-10 md:w-12 md:h-12 text-secondary" />
                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary marathi">
                            ताज्या घोषणा
                        </h2>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">
                        {announcements.map((announcement, index) => (
                            <div
                                key={index}
                                className="bg-white border-l-4 border-secondary p-6 md:p-8 rounded-r-lg shadow-sm hover:shadow-lg transition-all duration-300 hover:translate-x-1"
                            >
                                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-3">
                                    <span className="text-base md:text-lg font-bold text-secondary marathi">
                                        {announcement.title}
                                    </span>
                                    <span className="text-sm md:text-base font-semibold text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                                        {announcement.date}
                                    </span>
                                </div>
                                <p className="text-gray-700 text-sm md:text-base marathi">{announcement.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Running Schemes */}
            <section className="py-12 md:py-16 lg:py-20">
                <div className="container mx-auto px-4 md:px-6 lg:px-8">
                    <div className="flex items-center gap-3 mb-8 md:mb-10 lg:mb-12">
                        <Landmark className="w-10 h-10 md:w-12 md:h-12 text-primary" />
                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary marathi">
                            चालू योजना
                        </h2>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                        {schemes.map((scheme, index) => (
                            <Link
                                key={index}
                                to="/schemes"
                                className="group relative bg-gradient-to-br from-primary to-blue-700 text-primary-foreground p-6 md:p-8 rounded-xl font-semibold hover:shadow-2xl transition-all duration-300 hover:scale-105 cursor-pointer marathi text-center min-h-[120px] flex items-center justify-center"
                            >
                                <div className="relative z-10">{scheme}</div>
                                <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* Quick Links */}
            <section className="py-12 md:py-16 lg:py-20 bg-gray-50 border-b border-gray-200">
                <div className="container mx-auto px-4 md:px-6 lg:px-8">
                    <div className="flex items-center gap-3 mb-8 md:mb-10 lg:mb-12">
                        <Target className="w-10 h-10 md:w-12 md:h-12 text-primary" />
                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary marathi">
                            महत्वाच्या लिंक
                        </h2>
                    </div>
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
                        {quickLinks.map((link, index) => (
                            <Link
                                key={index}
                                to={link.href}
                                className="group bg-white border-2 border-gray-200 p-4 md:p-6 rounded-xl text-center hover:border-secondary hover:shadow-xl transition-all duration-300 hover:-translate-y-1 marathi min-h-[140px] md:min-h-[160px] flex flex-col items-center justify-center"
                            >
                                <div className="text-secondary mb-3 md:mb-4 group-hover:scale-110 transition-transform duration-300">
                                    {link.icon}
                                </div>
                                <p className="text-xs md:text-sm font-semibold text-gray-800">{link.label}</p>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* Village Statistics */}
            <section className="py-12 md:py-16 lg:py-20">
                <div className="container mx-auto px-4 md:px-6 lg:px-8">
                    <div className="flex items-center gap-3 mb-8 md:mb-10 lg:mb-12">
                        <TrendingUp className="w-10 h-10 md:w-12 md:h-12 text-primary" />
                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary marathi">
                            महत्वाचे आकडे
                        </h2>
                    </div>
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
                        {stats.map((stat, index) => (
                            <div
                                key={index}
                                className="bg-gradient-to-br from-secondary to-orange-400 text-white p-6 md:p-8 rounded-xl text-center shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 marathi"
                            >
                                <div className="flex justify-center mb-3 md:mb-4">
                                    <div className="bg-white/20 p-3 rounded-full">
                                        {stat.icon}
                                    </div>
                                </div>
                                <p className="text-3xl md:text-4xl lg:text-5xl font-bold mb-2">{stat.value}</p>
                                <p className="text-sm md:text-base font-semibold">{stat.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Facilities Section */}
            <section className="py-12 md:py-16 lg:py-20 bg-gray-50">
                <div className="container mx-auto px-4 md:px-6 lg:px-8">
                    <div className="flex items-center gap-3 mb-8 md:mb-10 lg:mb-12">
                        <Lightbulb className="w-10 h-10 md:w-12 md:h-12 text-primary" />
                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary marathi">
                            गावाची सुविधा
                        </h2>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                        {facilities.map((facility, index) => (
                            <div
                                key={index}
                                className="group bg-white p-6 md:p-8 rounded-xl shadow-lg border-t-4 border-secondary hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
                            >
                                <div className="text-secondary mb-4 md:mb-6 group-hover:scale-110 transition-transform duration-300">
                                    {facility.icon}
                                </div>
                                <h3 className="text-xl md:text-2xl font-bold text-primary mb-3 md:mb-4 marathi">
                                    {facility.title}
                                </h3>
                                <p className="text-gray-600 text-sm md:text-base marathi">{facility.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Gallery Preview Section */}
            <section className="py-12 md:py-16 lg:py-20">
                <div className="container mx-auto px-4 md:px-6 lg:px-8">
                    <div className="flex items-center justify-between mb-8 md:mb-10 lg:mb-12">
                        <div className="flex items-center gap-3">
                            <Camera className="w-10 h-10 md:w-12 md:h-12 text-primary" />
                            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary marathi">
                                गॅलरी झलक
                            </h2>
                        </div>
                        <Link
                            to="/gallery"
                            className="bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-all hover:scale-105 marathi"
                        >
                            सर्व फोटो पहा
                        </Link>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
                        {galleryPreview.map((image, index) => (
                            <div
                                key={index}
                                className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer"
                                onClick={() => setSelectedImage(image.src)}
                            >
                                <div className="relative h-64 overflow-hidden">
                                    <img
                                        src={image.src}
                                        alt={image.title}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                        onError={(e) => {
                                            e.currentTarget.src = "https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=800&h=600&fit=crop";
                                        }}
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                                        <div className="text-white">
                                            <p className="text-sm font-semibold">{image.category}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="p-4 bg-white">
                                    <h3 className="font-semibold text-primary marathi mb-1">
                                        {image.title}
                                    </h3>
                                    <p className="text-xs text-gray-500">क्लिक करून मोठे पहा</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="mt-8 text-center">
                        <p className="text-gray-600 marathi">
                            देवळी (पेंढरी) गाव की गतिविधियों, विकास कार्यों और सामुदायिक जीवन की झलक
                        </p>
                    </div>
                </div>
            </section>

            {/* Main Crops */}
            <section className="py-12 md:py-16 lg:py-20 bg-gray-50">
                <div className="container mx-auto px-4 md:px-6 lg:px-8">
                    <div className="flex items-center gap-3 mb-8 md:mb-10 lg:mb-12">
                        <Leaf className="w-10 h-10 md:w-12 md:h-12 text-green-600" />
                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary marathi">
                            मुख्य पिके
                        </h2>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
                        {mainCrops.map((crop, index) => (
                            <div
                                key={index}
                                className="bg-green-50 border-2 border-green-200 p-6 md:p-8 rounded-xl text-center hover:bg-green-100 hover:border-green-300 transition-all duration-300 group"
                            >
                                <div className="text-green-600 mb-3 md:mb-4 group-hover:scale-110 transition-transform duration-300 flex justify-center">
                                    {crop.icon}
                                </div>
                                <p className="font-semibold text-gray-800 text-sm md:text-base marathi">{crop.name}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Village Leadership Section */}
            <section className="py-16 md:py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 md:px-8">
                    <div className="text-center mb-12">
                        <div className="flex items-center justify-center gap-3 mb-4">
                            <Crown className="w-12 h-12 text-yellow-500" />
                            <h2 className="text-3xl md:text-4xl font-bold text-primary marathi">
                                ग्रामपंचायत नेतृत्व
                            </h2>
                            <Shield className="w-12 h-12 text-blue-500" />
                        </div>
                        <p className="text-gray-600 marathi">
                            आमच्या ग्रामपंचायतचे समर्पित नेतृत्व
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto">
                        {/* सरपंच */}
                        <div className="text-center group">
                            <div className="relative w-64 h-64 mx-auto mb-8 overflow-hidden rounded-full shadow-2xl ring-8 ring-yellow-300 ring-offset-4 transition-all group-hover:ring-yellow-400">
                                <img
                                    src="/public/sarpanch.jpg"
                                    alt="श्री. पपीता बंडूजी चिखलखुंडे - सरपंच"
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                            </div>
                            <h4 className="text-2xl font-bold text-primary marathi">
                                श्री. पपीता बंडूजी चिखलखुंडे
                            </h4>
                            <p className="text-yellow-600 text-xl font-bold mt-2">सरपंच</p>
                            <div className="mt-4 p-4 bg-yellow-50 rounded-lg border border-yellow-200">
                                <p className="text-gray-700 font-medium">मोबाईल: 8308987907</p>
                            </div>
                        </div>

                        {/* सचिव */}
                        <div className="text-center group">
                            <div className="relative w-64 h-64 mx-auto mb-8 overflow-hidden rounded-full shadow-2xl ring-8 ring-green-300 ring-offset-4 transition-all group-hover:ring-green-400">
                                <img
                                    src="/public/sachiv.jpg"
                                    alt="श्री. वसंत किसन उमाटे - सचिव"
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                            </div>
                            <h4 className="text-2xl font-bold text-primary marathi">
                                श्री. वसंत किसन उमाटे
                            </h4>
                            <p className="text-green-600 text-xl font-bold mt-2">सचिव</p>
                            <div className="mt-4 p-4 bg-green-50 rounded-lg border border-green-200">
                                <p className="text-gray-700 font-medium">अधिकृत प्रतिनिधी</p>
                            </div>
                        </div>

                        {/* उपसरपंच */}
                        <div className="text-center group">
                            <div className="relative w-64 h-64 mx-auto mb-8 overflow-hidden rounded-full shadow-2xl ring-8 ring-blue-300 ring-offset-4 transition-all group-hover:ring-blue-400">
                                <img
                                    src="/public/upsachiv.jpg"
                                    alt="श्री. रुपेश सिताराम जाधव - उपसरपंच"
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                            </div>
                            <h4 className="text-2xl font-bold text-primary marathi">
                                श्री. रुपेश सिताराम जाधव
                            </h4>
                            <p className="text-blue-600 text-xl font-bold mt-2">उपसरपंच</p>
                            <div className="mt-4 p-4 bg-blue-50 rounded-lg border border-blue-200">
                                <p className="text-gray-700 font-medium">मोबाईल: 9359987542</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Government Section */}
            <section className="py-16 md:py-24 bg-gray-50">
                <div className="container mx-auto px-4 md:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <div className="flex items-center justify-center gap-3 mb-4">
                            <Flag className="w-12 h-12 text-red-500" />
                            <h2 className="text-3xl md:text-4xl font-bold text-primary marathi">
                                महाराष्ट्र शासन
                            </h2>
                            <Award className="w-12 h-12 text-red-500" />
                        </div>
                        <p className="text-xl text-gray-600 marathi">माननीय मंत्रीमंडळ</p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {governmentOfficials.map((official, index) => (
                            <div key={index} className="group text-center">
                                <div className="relative mb-6">
                                    <div className={`w-40 h-40 mx-auto rounded-full flex items-center justify-center text-white text-6xl font-bold shadow-2xl ring-8 ${official.ringColor} bg-gradient-to-br ${official.color}`}>
                                        {official.image ? (
                                            <img
                                                src={official.image}
                                                alt={official.name}
                                                className="w-full h-full rounded-full object-cover"
                                                onError={(e) => {
                                                    const nameParts = official.name.split(' ');
                                                    const initials = nameParts.map(part => part[0]).join('');
                                                    e.currentTarget.src = `https://ui-avatars.com/api/?name=${initials}&background=random&color=fff&size=128`;
                                                }}
                                            />
                                        ) : (
                                            official.name.split(' ').map(part => part[0]).join('')
                                        )}
                                    </div>
                                </div>
                                <h3 className="text-xl font-bold text-gray-800 marathi mb-2">{official.name}</h3>
                                <div className={`px-4 py-2 rounded-full text-sm font-semibold inline-block ${official.position.includes('राज्यपाल') ? 'bg-purple-100 text-purple-800' :
                                    official.position.includes('मुख्यमंत्री') ? 'bg-red-100 text-red-800' :
                                        official.position.includes('उपमुख्यमंत्री') ? 'bg-blue-100 text-blue-800' :
                                            'bg-green-100 text-green-800'
                                    }`}>
                                    {official.position}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Village Information Cards */}
            <section className="py-12 md:py-16 lg:py-20 bg-white">
                <div className="container mx-auto px-4 md:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 gap-8 md:gap-12">
                        {/* Sarpanch Message */}
                        <div className="bg-white p-6 md:p-8 lg:p-10 rounded-xl shadow-lg border-t-4 border-secondary">
                            <div className="flex items-center gap-3 mb-6 md:mb-8">
                                <MessageCircle className="w-8 h-8 md:w-10 md:h-10 text-secondary" />
                                <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-primary marathi">
                                    सरपंचांचा संदेश
                                </h3>
                            </div>
                            <p className="text-gray-700 leading-relaxed marathi text-sm md:text-base lg:text-lg mb-6 md:mb-8">
                                आपले ग्रामपंचायत देवळी (पेंढरी) गावाच्या सर्व नागरिकांच्या विकासासाठी प्रतिबद्ध आहे। आपण शिक्षा, स्वास्थ्य, पाणीपुरवठा आणि कृषी विकासात महत्वाचे कार्य करत आहोत। हे गाव समृद्ध आणि आधुनिक बनवण्यासाठी आपण सर्वांचे सहयोग खोजत आहोत। आपले विचार आणि सुझाव आमच्या विकास कार्यक्रमांचा महत्वाचा भाग आहेत।
                            </p>
                            <div className="border-t pt-4 md:pt-6">
                                <p className="font-semibold text-primary text-sm md:text-base marathi">
                                    - श्री. पपीता बंडूजी चिखलखुंडे, सरपंच
                                </p>
                            </div>
                        </div>

                        {/* Village Info */}
                        <div className="bg-white p-6 md:p-8 lg:p-10 rounded-xl shadow-lg border-t-4 border-primary">
                            <div className="flex items-center gap-3 mb-6 md:mb-8">
                                <Info className="w-8 h-8 md:w-10 md:h-10 text-primary" />
                                <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-primary marathi">
                                    गावाचा परिचय
                                </h3>
                            </div>
                            <div className="space-y-3 md:space-y-4 text-gray-700 text-sm md:text-base marathi">
                                <div className="flex items-start">
                                    <span className="font-semibold min-w-[140px] md:min-w-[160px]">ग्रामपंचायत नाव:</span>
                                    <span>देवळी (पेंढरी)</span>
                                </div>
                                <div className="flex items-start">
                                    <span className="font-semibold min-w-[140px] md:min-w-[160px]">ईमेल आयडी:</span>
                                    <span className="text-blue-600">gpdevalipendhari@gmail.com</span>
                                </div>
                                <div className="flex items-start">
                                    <span className="font-semibold min-w-[140px] md:min-w-[160px]">पत्ता:</span>
                                    <span>देवळी (पेंढरी), पोस्ट देवळी (पेंढरी), तहसील हिंगणा, जिल्हा नागपूर</span>
                                </div>
                                <div className="flex items-start">
                                    <span className="font-semibold min-w-[140px] md:min-w-[160px]">स्थापना वर्ष:</span>
                                    <span>1962</span>
                                </div>
                                <div className="flex items-start">
                                    <span className="font-semibold min-w-[140px] md:min-w-[160px]">एकूण लोकसंख्या:</span>
                                    <span>902</span>
                                </div>
                                <div className="flex items-start">
                                    <span className="font-semibold min-w-[140px] md:min-w-[160px]">पुरुष संख्या:</span>
                                    <span>479</span>
                                </div>
                                <div className="flex items-start">
                                    <span className="font-semibold min-w-[140px] md:min-w-[160px]">स्त्री संख्या:</span>
                                    <span>423</span>
                                </div>
                                <div className="flex items-start">
                                    <span className="font-semibold min-w-[140px] md:min-w-[160px]">तहसील:</span>
                                    <span>हिंगणा</span>
                                </div>
                                <div className="flex items-start">
                                    <span className="font-semibold min-w-[140px] md:min-w-[160px]">जिल्हा:</span>
                                    <span>नागपूर</span>
                                </div>
                                <div className="flex items-start">
                                    <span className="font-semibold min-w-[140px] md:min-w-[160px]">राज्य:</span>
                                    <span>महाराष्ट्र</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Today's Thought */}
            <section className="py-12 md:py-16 lg:py-20 bg-gradient-to-r from-primary via-blue-600 to-primary text-primary-foreground">
                <div className="container mx-auto px-4 md:px-6 lg:px-8 text-center">
                    <div className="flex items-center justify-center gap-2 md:gap-3 mb-4 md:mb-6">
                        <Sparkles className="w-6 h-6 md:w-8 md:h-8" />
                        <h3 className="text-lg md:text-xl lg:text-2xl font-semibold marathi">
                            आजचा विचार
                        </h3>
                        <Sparkles className="w-6 h-6 md:w-8 md:h-8" />
                    </div>
                    <p className="text-xl md:text-2xl lg:text-3xl font-semibold italic marathi max-w-3xl mx-auto leading-relaxed">
                        "एकता येथे शक्ती आहे, सहयोग येथे यश आहे, विकास येथे गांव आहे।"
                    </p>
                </div>
            </section>

            {/* Contact Section */}
            <section className="py-12 md:py-16 lg:py-20 bg-gray-50 border-t border-gray-200">
                <div className="container mx-auto px-4 md:px-6 lg:px-8">
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-8 md:mb-12 text-center marathi">
                        संपर्क माहिती
                    </h2>
                    <div className="grid md:grid-cols-3 gap-6 md:gap-8 max-w-4xl mx-auto">
                        <div className="bg-white p-6 md:p-8 rounded-xl shadow-lg text-center hover:shadow-xl transition-shadow duration-300">
                            <div className="bg-secondary/10 p-4 rounded-full w-fit mx-auto mb-4 md:mb-6">
                                <MapPin className="w-12 h-12 md:w-14 md:h-14 text-secondary" />
                            </div>
                            <h3 className="font-semibold text-primary text-lg md:text-xl mb-3 md:mb-4 marathi">पत्ता</h3>
                            <p className="text-sm md:text-base text-gray-700 marathi">
                                देवळी (पेंढरी), पोस्ट देवळी (पेंढरी), तहसील हिंगणा, जिल्हा नागपूर, महाराष्ट्र
                            </p>
                        </div>
                        <div className="bg-white p-6 md:p-8 rounded-xl shadow-lg text-center hover:shadow-xl transition-shadow duration-300">
                            <div className="bg-secondary/10 p-4 rounded-full w-fit mx-auto mb-4 md:mb-6">
                                <Mail className="w-12 h-12 md:w-14 md:h-14 text-secondary" />
                            </div>
                            <h3 className="font-semibold text-primary text-lg md:text-xl mb-3 md:mb-4">ईमेल</h3>
                            <a href="mailto:gpdevalipendhari@gmail.com" className="text-sm md:text-base text-blue-600 hover:text-blue-800 marathi block">
                                gpdevalipendhari@gmail.com
                            </a>
                        </div>
                        <div className="bg-white p-6 md:p-8 rounded-xl shadow-lg text-center hover:shadow-xl transition-shadow duration-300">
                            <div className="bg-secondary/10 p-4 rounded-full w-fit mx-auto mb-4 md:mb-6">
                                <Phone className="w-12 h-12 md:w-14 md:h-14 text-secondary" />
                            </div>
                            <h3 className="font-semibold text-primary text-lg md:text-xl mb-3 md:mb-4 marathi">वेळ</h3>
                            <p className="text-sm md:text-base text-gray-700 marathi">
                                सकाळी 10:00 - सायं 5:00
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Lightbox Modal */}
            {selectedImage && (
                <div
                    className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
                    onClick={() => setSelectedImage(null)}
                >
                    <div className="relative max-w-6xl w-full" onClick={(e) => e.stopPropagation()}>
                        <button
                            onClick={() => setSelectedImage(null)}
                            className="absolute top-4 right-4 bg-white rounded-full p-3 hover:bg-gray-200 transition-colors z-10"
                        >
                            <X size={28} className="text-primary" />
                        </button>
                        <img
                            src={selectedImage}
                            alt="Full size"
                            className="w-full h-auto rounded-lg max-h-[85vh] object-contain"
                        />
                    </div>
                </div>
            )}

            {/* Footer */}
            <footer className="bg-primary text-primary-foreground py-12 md:py-16">
                <div className="container mx-auto px-4 md:px-6 lg:px-8">
                    <div className="grid md:grid-cols-3 gap-8 md:gap-12">
                        {/* Village Info */}
                        <div className="text-center md:text-left">
                            <h3 className="font-bold text-xl md:text-2xl marathi mb-4">
                                देवळी (पेंढरी) ग्रामपंचायत
                            </h3>
                            <p className="text-base opacity-90 marathi mb-2">
                                स्थापना १९६२ • नागपूर जिल्हा
                            </p>
                            <div className="mt-6">
                                <h4 className="font-semibold text-lg mb-3 marathi">
                                    संपर्क माहिती
                                </h4>
                                <address className="not-italic text-sm md:text-base leading-relaxed">
                                    <p className="mb-1">देवळी (पेंढरी), तहसील हिंगणा</p>
                                    <p className="mb-1">जिल्हा नागपूर, महाराष्ट्र - ४४११०१</p>
                                    <p className="mb-1 mt-4 font-medium">
                                        ८३०८९८७९०७ (सरपंच)
                                    </p>
                                    <a
                                        href="mailto:gpdevalipendhari@gmail.com"
                                        className="text-blue-300 hover:text-blue-100 transition-colors"
                                    >
                                        gpdevalipendhari@gmail.com
                                    </a>
                                </address>
                            </div>
                        </div>

                        {/* Office Hours */}
                        <div className="text-center md:text-left">
                            <h4 className="font-semibold text-lg mb-3 marathi">
                                आमच्याशी जोडले राहा
                            </h4>
                            <div className="bg-white/10 p-4 rounded-lg">
                                <h5 className="font-bold mb-2 marathi">कार्यालय वेळ</h5>
                                <p className="mb-1 marathi">सोमवार ते शनिवार</p>
                                <p className="text-lg font-bold marathi">
                                    १०:०० पूर्वाह्न - ५:०० संध्याकाळ
                                </p>
                            </div>
                            <div className="mt-6 flex justify-center md:justify-start gap-4">
                                <Phone className="w-6 h-6" />
                                <Mail className="w-6 h-6" />
                                <MapPin className="w-6 h-6" />
                            </div>
                        </div>

                        {/* Copyright */}
                        <div className="text-center md:text-left border-t md:border-t-0 pt-8 md:pt-0">
                            <div className="space-y-4">
                                <p className="text-sm opacity-75">
                                    © २०२५ देवळी (पेंढरी) ग्रामपंचायत • सर्व हक्क संरक्षित
                                </p>
                                <p className="text-sm opacity-90 marathi">
                                    डिजिटल इंडिया अंतर्गत विकसित
                                </p>
                                <p className="text-sm opacity-90">
                                    ग्रामपंचायत क्रमांक: GP-045
                                </p>
                            </div>
                            <div className="mt-8">
                                <p className="text-xs opacity-60">
                                    सर्व माहिती अधिकृतपणे प्रकाशित • अद्ययावत माहिती
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}