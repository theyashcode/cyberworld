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

        <div className="bg-slate-800 p-8 rounded-2xl shadow-lg mt-10">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3506.3932982146594!2d77.34093750000001!3d28.497812499999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cdc15f5a424b1%3A0x3f6ebed6e9694a5a!2sF8XR%2B49%2C%20Faridabad%2C%20Haryana!5e0!3m2!1sen!2sin!4v1774973041518!5m2!1sen!2sin" width={"100%"} height={"400"} style={{border : 0}}
          loading="lazy" className="rounded" ></iframe>
        </div>

      </div>
    </section>
  );
}
