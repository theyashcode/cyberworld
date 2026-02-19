export default function ContactPage() {
  return (
    <section className="min-h-screen bg-slate-950 text-white py-20 px-6">
      <div className="max-w-6xl mx-auto">

       
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Contact <span className="text-blue-400">CyberWorld</span>
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Get in touch with us for any digital service assistance.
          </p>
        </div>

        
        <div className="grid md:grid-cols-2 gap-12">

          
          <div className="bg-slate-800 p-8 rounded-2xl shadow-lg">
            <h2 className="text-2xl font-semibold text-blue-400 mb-6">
              Contact Information
            </h2>

            <div className="space-y-6 text-gray-300">

              <div>
                <p className="font-semibold text-white mb-1">Phone Numbers</p>
                <p>📞 7042099745</p>
                <p>📞 8510093360</p>
              </div>

              <div>
                <p className="font-semibold text-white mb-1">Location</p>
                <p>Ismailpur, Faridabad, Haryana</p>
                <p className="text-blue-400">
                  Near Great Glory Public School
                </p>
              </div>

              <div>
                <p className="font-semibold text-white mb-1">Working Hours</p>
                <p>Monday – Sunday</p>
                <p>9:00 AM – 10:00 PM</p>
              </div>

            </div>
          </div>

          
          <div className="bg-slate-800 p-8 rounded-2xl shadow-lg flex items-center justify-center">
            <div className="text-center">
              <h2 className="text-2xl font-semibold text-blue-400 mb-4">
                Need Assistance?
              </h2>
              <p className="text-gray-300 mb-6">
                Call us directly or visit our center for quick and reliable service.
              </p>

              <a
                href="tel:7042099745"
                className="bg-blue-500 px-6 py-3 rounded-full text-white hover:bg-blue-600 transition"
              >
                Call Now
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
