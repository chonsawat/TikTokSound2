import { Link } from "react-router-dom";

type SwitchPageButtonProps = {
  toPage: string;
};

const SwitchPageButton: React.FC<
  React.PropsWithChildren & SwitchPageButtonProps
> = ({ children, toPage }) => {
  return (
    <Link to={toPage}>
      <button
        type="submit"
        className="animate-pulse ml-5 hover:bg-slate-400 hover:text-white px-4 py-2 rounded-md bg-white text-slate-500 upper font-semibold shadow-lg hover:shadow-slate-100 shadow-slate-500 hover:shadow-md"
        // className="animate-pulse ml-5 bg-slate-400 text-white px-4 py-2 rounded-md hover:bg-white hover:text-slate-500 upper hover:font-semibold shadow-lg shadow-slate-100 hover:shadow-slate-500 hover:shadow-md"
      >
        {children}
      </button>
    </Link>
  );
};

export default SwitchPageButton;
