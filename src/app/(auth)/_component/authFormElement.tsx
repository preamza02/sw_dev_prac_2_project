export default function AuthFormElement(
    {
        title,
        value,
        setValue,
        type = "text"
    }:
        {
            title: string,
            value: string,
            setValue: (value: string) => void,
            type?: "email" | "text" | "password" | "tel"
        }) {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setValue(value);
    };
    return (
        <div className="w-full">
            <label htmlFor={title} className="block text-sm font-medium text-gray-700">{title}</label>
            <input
                type={type}
                name={title}
                value={value}
                onChange={handleChange}
                required
                className="mt-1 mx-1 p-2 block w-full border border-gray-300 rounded-md"
            />
        </div>
    )
}