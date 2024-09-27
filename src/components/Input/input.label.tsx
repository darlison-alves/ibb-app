
interface DInputProps {
    label: string;
}

export default function DInput({ label }: DInputProps) {
    return (
      <div>
        <label htmlFor="price" className="block text-sm font-medium leading-6 text-gray-900">
          {label}
        </label>
        <div className="relative mt-2 rounded-md shadow-sm">
          <input
            id="price"
            name="price"
            type="text"
            placeholder=""
            className="block w-full rounded-md border-0 py-1.5 pl-3 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
        </div>
      </div>
    )
}