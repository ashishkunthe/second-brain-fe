export function Input({
  ref,
  placeholder,
}: {
  placeholder: string;
  ref?: any;
}) {
  return (
    <div className="mt-4">
      <input
        ref={ref}
        placeholder={placeholder}
        className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  );
}
