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
        <h1 className="text-2xl md:text-3xl">Service Not Found</h1>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen flex justify-center items-center px-4 py-10 md:py-20 bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a] text-white overflow-hidden">

    
      <div className="absolute w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-blue-600/20 rounded-full blur-[120px] top-[-100px] left-[-100px]" />
      <div className="absolute w-[250px] md:w-[400px] h-[250px] md:h-[400px] bg-purple-600/20 rounded-full blur-[120px] bottom-[-100px] right-[-100px]" />

    
      <div className="relative w-full max-w-md md:max-w-3xl lg:max-w-4xl bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-5 sm:p-8 md:p-14 shadow-2xl">

      
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-400 mb-3 md:mb-4">
          {service.serviceName}
        </h1>

        <p className="text-gray-300 text-sm sm:text-base md:text-lg mb-6 md:mb-10 leading-relaxed">
          {service.service}
        </p>

        
        <div className="h-[1px] bg-white/20 mb-6 md:mb-10" />

        
        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-4 md:mb-6">
          📄 Required Documents
        </h2>

        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
          {service.documents.map((doc, index) => (
            <div
              key={index}
              className="bg-gradient-to-r from-blue-900/40 to-purple-900/40 
                         border border-blue-400/40 p-4 md:p-5 rounded-xl 
                         shadow-lg hover:shadow-blue-500/40 
                         hover:scale-105 transition duration-300"
            >
              <p className="text-white text-sm md:text-base font-medium">{doc}</p>
            </div>
          ))}
        </div>

    
        <div className="mt-8 md:mt-12 text-center">
          <Link
            href="/"
            className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 
                       hover:from-blue-700 hover:to-purple-700 
                       px-5 md:px-6 py-2 md:py-3 rounded-xl text-sm md:text-base font-medium 
                       transition duration-300 shadow-lg"
          >
            ← Back to Home
          </Link>
        </div>

      </div>
    </div>
  );
}