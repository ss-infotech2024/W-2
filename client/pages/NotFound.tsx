import { Link } from "react-router-dom";
import Header from "@/components/Header";

const NotFound = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      <div className="flex-1 flex items-center justify-center px-4 py-12">
        <div className="text-center max-w-md">
          <h1 className="text-5xl font-bold text-primary mb-4">404</h1>
          <p className="text-xl text-gray-600 mb-2 marathi">पृष्ठ सापडले नाही</p>
          <p className="text-gray-500 mb-6 marathi">
            आपण शोधत असलेले पृष्ठ उपलब्ध नाही. कृपया मुख्य पृष्ठावर परत जा.
          </p>
          <Link
            to="/"
            className="inline-block bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors marathi"
          >
            मुख्य पृष्ठावर जा
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
