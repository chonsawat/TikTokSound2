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
        className="animate-pulse ml-5 hover:bg-slate-600 hover:text-white px-4 py-2 rounded-md bg-white text-slate-600 upper font-semibold shadow-lg hover:shadow-slate-100 shadow-slate-500 hover:shadow-md"
      >
        {children}
      </button>
    </Link>
  );
};

export default SwitchPageButton;
