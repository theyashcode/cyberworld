import Image from "next/image";

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
              CyberWorld was started around 6 years ago by Rajan with a small setup and
              just a simple laptop. His goal was to provide trusted and affordable
              digital services to the local community.
            </p>

            <p className="text-gray-300 leading-relaxed mb-6">
              Over time, customers began to trust the service, and today CyberWorld has
              helped hundreds of people with Aadhaar updates, PAN cards, Voter ID services,
              passport assistance, and various online forms.
            </p>

            <p className="text-gray-300 leading-relaxed mb-6">
              One of the most special things about this shop is that the owner lives very
              close by. Even if the shop is temporarily closed, he quickly comes to assist
              customers and ensures their work gets completed without delay.
            </p>

            <p className="text-gray-300 leading-relaxed">
              Today, CyberWorld stands strong because of the trust and support of its customers.
            </p>
          </div>

          <div className="bg-slate-800 p-8 rounded-2xl shadow-lg text-center">


            <div className="flex flex-col items-center mb-6">
              <div className="relative w-24 h-24 rounded-full overflow-hidden border-2 border-blue-400">
                <Image
                  src="/images/oww.png"
                  alt="owner"
                  fill
                  className="object-cover"
                />

              </div>

              <h4 className="mt-4 text-lg font-semibold text-white">
                Rajan Kumar
              </h4>
              <p className="text-sm text-gray-400">
                Shop Owner
              </p>
            </div>


            <h3 className="text-xl font-semibold text-blue-400 mb-6">
              Business Information
            </h3>

            <div className="space-y-4 text-gray-300 text-left">

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