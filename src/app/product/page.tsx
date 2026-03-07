import Heading from "@/components/section2/heading"
import Card from "@/components/section2/Card";
import { services } from "@/data/services";

export default function ProductPage() {
  return (
    <section className="w-full bg-amber-500">
      <div className="max-w-7xl mx-auto px-6 text-center py-20">
        <Heading />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-16">
          {services.map((item) => (
            <Card
              key={item.id}
              serviceName={item.serviceName}
              service={item.service}
              LinkUrl={`/product/${item.id}`}
            /> 
          ))}
        </div>
      </div>
    </section>
  );
}