// client/pages/Gallery.tsx
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
          src: "/public/G2.jpg",
          title: "ग्रामपंचायत कार्यालय",
          date: "2024",
        },
        {
          src: "/public/G5.jpg",
          title: "ग्रामसभा हॉल",
          date: "2024",
        },
        {
          src: "/public/G4.jpg",
          title: "कार्यालय प्रवेशद्वार",
          date: "2023",
        },
      ],
    },
    // {
    //   category: "शिक्षा सुविधाएं",
    //   images: [
    //     {
    //       src: "/images/G4.jpg",
    //       title: "प्राथमिक विद्यालय",
    //       date: "2024",
    //     },
    //     {
    //       src: "/images/sachiv.jpg",
    //       title: "विद्यालय का कक्षा कक्ष",
    //       date: "2024",
    //     },
    //     {
    //       src: "/images/sarpanch.jpg",
    //       title: "पुस्तकालय",
    //       date: "2023",
    //     },
    //   ],
    // },
    // {
    //   category: "गाँव के दृश्य",
    //   images: [
    //     {
    //       src: "/images/G1.jpg", // Replace with actual village road image if available
    //       title: "गांव की सड़क",
    //       date: "2024",
    //     },
    //     {
    //       src: "/images/G2.jpg", // Replace with actual field image
    //       title: "ग्रामीण खेत",
    //       date: "2024",
    //     },
    //     {
    //       src: "/images/G3.jpg", // Replace with actual nature image
    //       title: "प्राकृतिक दृश्य",
    //       date: "2023",
    //     },
    //   ],
    // },
    // {
    //   category: "सामुदायिक कार्यक्रम",
    //   images: [
    //     {
    //       src: "/images/G4.jpg",
    //       title: "सामुदायिक सभा",
    //       date: "2024",
    //     },
    //     {
    //       src: "/images/sachiv.jpg",
    //       title: "गांव का पर्व",
    //       date: "2023",
    //     },
    //     {
    //       src: "/images/sarpanch.jpg",
    //       title: "सफाई अभियान",
    //       date: "2023",
    //     },
    //   ],
    // },
    // {
    //   category: "विकास परियोजनाएं",
    //   images: [
    //     {
    //       src: "/images/G1.jpg",
    //       title: "सड़क निर्माण कार्य",
    //       date: "2024",
    //     },
    //     {
    //       src: "/images/G2.jpg",
    //       title: "जल पाइपलाइन",
    //       date: "2024",
    //     },
    //     {
    //       src: "/images/G3.jpg",
    //       title: "LED लाइट स्थापन",
    //       date: "2023",
    //     },
    //   ],
    // },
    // {
    //   category: "स्वास्थ्य और कल्याण",
    //   images: [
    //     {
    //       src: "/images/G4.jpg",
    //       title: "स्वास्थ्य शिविर",
    //       date: "2024",
    //     },
    //     {
    //       src: "/images/sachiv.jpg",
    //       title: "आंगनवाड़ी केंद्र",
    //       date: "2024",
    //     },
    //     {
    //       src: "/images/sarpanch.jpg",
    //       title: "बाल कल्याण कार्य",
    //       date: "2023",
    //     },
    //   ],
    // },
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
                      loading="lazy"
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
              className="w-full h-auto rounded-lg max-h-[90vh] object-contain"
            />
          </div>
        </div>
      )}


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