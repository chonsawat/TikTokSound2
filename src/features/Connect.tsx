import { Button, ButtonType } from "../components/Button/Button";
import { InputId } from "../components/InputId";
import SwitchPageButton from "../components/SwitchPageButton";
import {
  isConnectSelector,
  tiktokUidSelector,
} from "../stores/input/input.selector";
import { inputActions } from "../stores/input/input.slice";
import { useAppDispatch, useAppSelector } from "../stores/store";
import { useNavigate, Link } from "react-router-dom";
import { IoSettings } from "react-icons/io5";
import { BsDisplay } from "react-icons/bs";

type ConnectProps = {
  pathname: string;
};

type SwitchComponentProps = {
  isConnected: boolean;
  pathname: string;
};

const SwitchComponent: React.FC<SwitchComponentProps> = ({
  isConnected,
  pathname,
}) => {
  return (
    <>
      {isConnected &&
        (pathname !== "/stream" ? (
          <SwitchPageButton toPage="stream">
            <div className="flex flex-row">
              <p>Stream</p>
              <BsDisplay
                size={20}
                className="animate-bounce ml-3 self-center"
              />
            </div>
          </SwitchPageButton>
        ) : (
          <SwitchPageButton toPage="/">
            <div className="flex flex-row">
              Setting
              <IoSettings size={20} className="animate-spin ml-3 self-center" />
            </div>
          </SwitchPageButton>
        ))}
    </>
  );
};

const Connect: React.FC<React.PropsWithChildren & ConnectProps> = ({
  children,
  pathname,
}) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const uid = useAppSelector(tiktokUidSelector);
  const isConnected = useAppSelector(isConnectSelector);

  const onClickHanler = () => {
    console.log(uid);
    dispatch(inputActions.setIsConnect(!isConnected));

    if (!isConnected) {
      navigate("stream");
    } else {
      navigate("/");
    }
  };

  return (
    <>
      <div className="m-10">
        <h1 className="mt-5 text-3xl font-bold">TikTok Sound</h1>
        <InputId />
        {isConnected ? (
          <Button onClick={onClickHanler} buttonType={ButtonType.DISCONNECT}>
            Disconnect
          </Button>
        ) : (
          <Button onClick={onClickHanler} buttonType={ButtonType.CONNECT}>
            Connect
          </Button>
        )}
        <SwitchComponent pathname={pathname} isConnected={isConnected} />
        <div className="mt-5">{children}</div>
      </div>
    </>
  );
};

export default Connect;
