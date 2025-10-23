export interface ToolCardProps {
  name: string;
  category: string;
  location: string;
}

export const ToolCard = ({ name, category, location }: ToolCardProps) => {
  return (
    <div className="border rounded-xl p-3 shadow-sm hover:shadow-md transition">
      <h3 className="font-semibold text-base">{name}</h3>
      <p className="text-sm text-gray-500">{category}</p>
      <p className="text-xs text-gray-400 mt-1">📍 {location}</p>
    </div>
  );
};
