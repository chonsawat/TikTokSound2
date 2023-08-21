export const Button: React.FC<React.HTMLProps<HTMLButtonElement>> = (props) => {
  return (
    <button
      onClick={props.onClick}
      type="submit"
      className="ml-5 bg-cyan-400 text-white px-4 py-2 rounded-md hover:bg-cyan-600 upper font-semibold shadow-lg shadow-cyan-600/75 hover:shadow-md"
    >
      {props.children}
    </button>
  );
};
