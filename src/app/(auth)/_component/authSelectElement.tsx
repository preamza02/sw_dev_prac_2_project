export default function AuthSelectElement({
  title,
  options,
  value,
  setValue,
}: {
  title: string;
  options: string[];
  value: string;
  setValue: (value: string) => void;
}) {
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    setValue(value);
  };
  return (
    <div className="w-full">
      <label htmlFor={title} className="block text-sm font-medium text-gray-700">
        {title}
      </label>
      <select
        name={title}
        value={value}
        onChange={handleChange}
        required
        className="mx-1 mt-1 block w-full rounded-md border border-gray-300 p-2"
      >
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}
