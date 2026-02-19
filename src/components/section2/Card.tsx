import Link from "next/link";

type CardProps = {
  serviceName: string;
  service: string;
  LinkUrl: string;
};

const Card = ({ serviceName, service, LinkUrl }: CardProps) => {
  return (
    <div className="bg-slate-800 inline-block m-10 p-6 py-11 rounded-2xl shadow-lg hover:bg-slate-700 transition">
      <h3 className="text-xl font-bold text-blue-400 mb-4">{serviceName}</h3>
      <p className="text-gray-300 text-sm my-7">{service}</p>
      <Link
        href={LinkUrl}
        className="bg-blue-500 px-4 py-2 rounded-full text-white hover:bg-blue-600"
      >
        View Details
      </Link>
    </div>
  );
};

export default Card;