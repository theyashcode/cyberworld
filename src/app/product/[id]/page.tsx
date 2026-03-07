import { services } from "@/data/services";
import Link from "next/link";

export default async function DetailPage({ params }: any) {
  const { id } = await params;

  const service = services.find(
    (item) => item.id.toLowerCase() === id.toLowerCase()
  );

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black text-white">
        <h1 className="text-3xl">Service Not Found</h1>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen flex justify-center items-center px-4 py-20  bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a] text-white overflow-hidden">

      {/* Background Glow */}
      <div className="absolute w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[120px] top-[-100px] left-[-100px]" />
      <div className="absolute w-[400px] h-[400px] bg-purple-600/20 rounded-full blur-[120px] bottom-[-100px] right-[-100px]" />

      {/* Main Card */}
      <div className="relative w-full max-w-4xl bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-10 sm:p-14 shadow-2xl">

        {/* Title */}
        <h1 className="text-3xl sm:text-4xl font-bold text-blue-400 mb-4">
          {service.serviceName}
        </h1>

        <p className="text-gray-300 text-base sm:text-lg mb-10 leading-relaxed">
          {service.service}
        </p>

        {/* Divider */}
        <div className="h-[1px] bg-white/20 mb-10" />

        {/* Required Documents */}
        <h2 className="text-xl sm:text-2xl font-semibold mb-6">
          📄 Required Documents
        </h2>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {service.documents.map((doc, index) => (
            <div
              key={index}
              className="bg-gradient-to-r from-blue-900/40 to-purple-900/40 
                         border border-blue-400/40 p-5 rounded-xl 
                         shadow-lg hover:shadow-blue-500/40 
                         hover:scale-105 transition duration-300"
            >
              <p className="text-white font-medium">{doc}</p>
            </div>
          ))}
        </div>

        {/* Button */}
        <div className="mt-12 text-center">
          <Link
            href="/"
            className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 
                       hover:from-blue-700 hover:to-purple-700 
                       px-6 py-3 rounded-xl font-medium 
                       transition duration-300 shadow-lg"
          >
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}