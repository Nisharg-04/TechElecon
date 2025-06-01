export const Button = ({ children, onClick }) => {
  return (
    <button
      className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg shadow-md hover:opacity-80 transition"
      onClick={onClick}
    >
      {children}
    </button>
  );
};
