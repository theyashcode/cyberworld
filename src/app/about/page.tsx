export default function AboutPage() {
  return (
    <section className="min-h-screen bg-slate-950 text-white py-20 px-6">
      <div className="max-w-6xl mx-auto">

        
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            About <span className="text-blue-400">CyberWorld</span>
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Providing reliable and professional digital services for over 6 years.
          </p>
        </div>

      
        <div className="grid md:grid-cols-2 gap-12 items-center">

        
          <div>
            <h2 className="text-2xl font-semibold text-blue-400 mb-4">
              Our Journey
            </h2>

            <p className="text-gray-300 leading-relaxed mb-6">
              CyberWorld started its journey 6 years ago with just a small mini laptop 
              and a big dream — to provide trusted and affordable digital services 
              to the local community.
            </p>

            <p className="text-gray-300 leading-relaxed mb-6">
              Over the years, we have helped hundreds of customers with Aadhaar updates, 
              PAN card applications, voter ID services, passport assistance, online forms, 
              and professional printing solutions.
            </p>

            <p className="text-gray-300 leading-relaxed">
              Our mission is simple — to make government and online services 
              easy, fast, and hassle-free for everyone.
            </p>
          </div>

          
          <div className="bg-slate-800 p-8 rounded-2xl shadow-lg">
            <h3 className="text-xl font-semibold text-blue-400 mb-6">
              Business Information
            </h3>

            <div className="space-y-4 text-gray-300">

              <p>
                <span className="font-semibold text-white">Experience:</span> 6+ Years
              </p>

              <p>
                <span className="font-semibold text-white">Location:</span> 
                Ismailpur, 
                <span className="text-blue-400"> Faridabad</span>, 
                Haryana
              </p>

              <p>
                <span className="font-semibold text-white">Nearby Landmark:</span> 
                Near Great Glory Public School
              </p>

              <p>
                <span className="font-semibold text-white">Services:</span> 
                Aadhaar, PAN, Voter ID, Passport, Online Forms, Print & Scan etc.
              </p>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
