export default function EndpointHeader({
    method,
    path,
    description,
  }: {
    method: string;
    path: string;
    description: string;
  }) {
    return (
      <div className="mb-4">
        <h2 className="text-lg font-bold">
          <span className="bg-black text-white px-2 py-1 rounded mr-2">{method}</span>
          {path}
        </h2>
        <p className="text-gray-600 mt-1">{description}</p>
      </div>
    );
  }
  