import Header from "@/components/Header";
import { useState } from "react";
import { X } from "lucide-react";

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const galleryImages = [
    {
      category: "ग्रामपंचायत भवन",
      images: [
        {
          src: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=500&h=400&fit=crop",
          title: "ग्रामपंचायत कार्यालय",
          date: "2024",
        },
        {
          src: "https://images.unsplash.com/photo-1504190712956-ea9e0f99c8a8?w=500&h=400&fit=crop",
          title: "ग्रामसभा हॉल",
          date: "2024",
        },
        {
          src: "https://images.unsplash.com/photo-1489749798305-4fea3ba63d60?w=500&h=400&fit=crop",
          title: "कार्यालय प्रवेशद्वार",
          date: "2023",
        },
      ],
    },
    {
      category: "शिक्षा सुविधाएं",
      images: [
        {
          src: "https://images.unsplash.com/photo-1427504494785-cdbe9fefbb0b?w=500&h=400&fit=crop",
          title: "प्राथमिक विद्यालय",
          date: "2024",
        },
        {
          src: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=500&h=400&fit=crop",
          title: "विद्यालय का कक्षा कक्ष",
          date: "2024",
        },
        {
          src: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=500&h=400&fit=crop",
          title: "पुस्तकालय",
          date: "2023",
        },
      ],
    },
    {
      category: "गाँव के दृश्य",
      images: [
        {
          src: "https://images.unsplash.com/photo-1625246333195-78d9c38ad576?w=500&h=400&fit=crop",
          title: "गांव की सड़क",
          date: "2024",
        },
        {
          src: "https://images.unsplash.com/photo-1574482620811-1aa16ffe3c82?w=500&h=400&fit=crop",
          title: "ग्रामीण खेत",
          date: "2024",
        },
        {
          src: "https://images.unsplash.com/photo-1500382017468-f049863256f0?w=500&h=400&fit=crop",
          title: "प्राकृतिक दृश्य",
          date: "2023",
        },
      ],
    },
    {
      category: "सामुदायिक कार्यक्रम",
      images: [
        {
          src: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=500&h=400&fit=crop",
          title: "सामुदायिक सभा",
          date: "2024",
        },
        {
          src: "https://images.unsplash.com/photo-1511379938547-c1f69b13d835?w=500&h=400&fit=crop",
          title: "गांव का पर्व",
          date: "2023",
        },
        {
          src: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=500&h=400&fit=crop",
          title: "सफाई अभियान",
          date: "2023",
        },
      ],
    },
    {
      category: "विकास परियोजनाएं",
      images: [
        {
          src: "https://images.unsplash.com/photo-1581092918270-991b38693d1b?w=500&h=400&fit=crop",
          title: "सड़क निर्माण कार्य",
          date: "2024",
        },
        {
          src: "https://images.unsplash.com/photo-1581092162562-40038f56c00f?w=500&h=400&fit=crop",
          title: "जल पाइपलाइन",
          date: "2024",
        },
        {
          src: "https://images.unsplash.com/photo-1580828343064-fde4fc206bc6?w=500&h=400&fit=crop",
          title: "LED लाइट स्थापन",
          date: "2023",
        },
      ],
    },
    {
      category: "स्वास्थ्य और कल्याण",
      images: [
        {
          src: "https://images.unsplash.com/photo-1632833066661-4d9e5d1dc6be?w=500&h=400&fit=crop",
          title: "स्वास्थ्य शिविर",
          date: "2024",
        },
        {
          src: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=500&h=400&fit=crop",
          title: "आंगनवाड़ी केंद्र",
          date: "2024",
        },
        {
          src: "https://images.unsplash.com/photo-1631217314831-e13db528e4f2?w=500&h=400&fit=crop",
          title: "बाल कल्याण कार्य",
          date: "2023",
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-blue-700 text-primary-foreground py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold marathi">गॅलरी</h1>
          <p className="text-lg mt-2 opacity-90 marathi">
            गांव की गतिविधियों और विकास कार्यों की फोटोग्राफी
          </p>
        </div>
      </section>

      {/* Gallery Sections */}
      <section className="py-12 container mx-auto px-4">
        {galleryImages.map((section, sectionIndex) => (
          <div key={sectionIndex} className="mb-12">
            <h2 className="text-2xl font-bold text-primary marathi mb-6 pb-3 border-b-2 border-secondary">
              {section.category}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {section.images.map((image, imageIndex) => (
                <div
                  key={imageIndex}
                  className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow cursor-pointer group"
                  onClick={() => setSelectedImage(image.src)}
                >
                  <div className="relative overflow-hidden h-64">
                    <img
                      src={image.src}
                      alt={image.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all flex items-center justify-center">
                      <span className="text-white text-2xl opacity-0 group-hover:opacity-100 transition-opacity">
                        🔍
                      </span>
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-primary marathi mb-1">
                      {image.title}
                    </h3>
                    <p className="text-xs text-gray-600">{image.date}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl w-full" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 bg-white rounded-full p-2 hover:bg-gray-200 transition-colors"
            >
              <X size={24} className="text-primary" />
            </button>
            <img
              src={selectedImage}
              alt="Full size"
              className="w-full h-auto rounded-lg"
            />
          </div>
        </div>
      )}

      {/* Photo Statistics */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-primary marathi mb-8 text-center">
            📸 गॅलरी के आंकड़े
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <p className="text-3xl font-bold text-secondary">18</p>
              <p className="text-gray-600 marathi font-semibold mt-2">
                कुल फोटो
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <p className="text-3xl font-bold text-secondary">6</p>
              <p className="text-gray-600 marathi font-semibold mt-2">
                श्रेणियां
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <p className="text-3xl font-bold text-secondary">2024</p>
              <p className="text-gray-600 marathi font-semibold mt-2">
                नवीनतम अपडेट
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <p className="text-3xl font-bold text-secondary">92%</p>
              <p className="text-gray-600 marathi font-semibold mt-2">
                कवरेज
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
