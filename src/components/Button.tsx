export const Button: React.FC<{
  children: React.ReactNode;
  onClick: () => void;
}> = (props) => {
  return (
    <button
      onClick={props.onClick}
      type="submit"
      className="ml-5 bg-cyan-500 text-white px-4 py-2 rounded-md hover:bg-cyan-200 hover:text-cyan-500 upper hover:font-semibold"
    >
      {props.children}
    </button>
  );
};
