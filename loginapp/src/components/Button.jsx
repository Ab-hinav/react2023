export default function Button({ children, ...props }) {
  return (
    <button
      className="px-4 py-2 rounded font-semibold bg-amber-400 uppercase hover:bg-amber-500 transition-colors"
      {...props}
    >
      {children}
    </button>
  );
}
