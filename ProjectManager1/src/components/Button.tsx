export default function Button({ children, extraClasses, ...props }) {
  return (
    <button
      {...props}
      className={
        "mt-2 text-black bg-orange-100 hover:bg-orange-200 py-2 px-2 w-fit rounded " +
        extraClasses
      }
    >
      {children}
    </button>
  );
}
