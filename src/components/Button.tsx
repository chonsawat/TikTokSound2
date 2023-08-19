export const Button: React.FC<React.HTMLProps<HTMLButtonElement>> = (props) => {
  return (
    <button
      onClick={props.onClick}
      type="submit"
      className="ml-5 bg-cyan-500 text-white px-4 py-2 rounded-md hover:bg-cyan-200 hover:text-cyan-500 upper hover:font-semibold shadow-lg shadow-cyan-100 hover:shadow-cyan-500 hover:shadow-md"
    >
      {props.children}
    </button>
  );
};
