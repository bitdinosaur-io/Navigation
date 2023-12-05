import React, { useState, useEffect, useContext, useRef } from "react";
import EmailContext from "@/components/functions/context/emailreducer";
import ActiveContext from "@/components/functions/context/activereducer";
import GetCodeApi from "@/api/getcode";
import { Loader2 } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import { ErrorToast, SuccessToast } from "./toasts";

interface CountdownTimerProps {
  initialSeconds: number;
}

const CountdownTimer: React.FC<CountdownTimerProps> = ({ initialSeconds }) => {
  const t = useTranslations("GetCode");
  const [remainingSeconds, setRemainingSeconds] = useState(initialSeconds);
  const [isLoad, setIsLoad] = useState(false);
  // const loader = useRef<any>(null);
  const [isActive, setIsActive] = useContext(ActiveContext);
  const [inputValue, setInputValue] = useContext(EmailContext);
  const EmailPattern = /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;

  useEffect(() => {
    let interval: NodeJS.Timeout;

    if (isActive && remainingSeconds > 0) {
      interval = setInterval(() => {
        setRemainingSeconds((prevSeconds) => prevSeconds - 1);
      }, 1000);
    } else if (remainingSeconds === 0) {
      resetCountdown();
    }

    return () => {
      clearInterval(interval);
    };
  }, [isActive, remainingSeconds]);

  const startCountdown = async () => {
    if (!EmailPattern.test(inputValue)) {
      return;
    }
    if (!isActive) {
      setIsLoad(true);
      const EmailData = {
        email: inputValue,
      };
      await GetCodeApi(EmailData).then((response) => {
        const { status, data } = response;
        if (status === 200) {
          setIsActive(true);
          setIsLoad(false);
          SuccessToast(t("Sended"));
        } else if (status === 400) {
          setIsLoad(false);
          ErrorToast(t("ParameterError"), 8000);
        } else if (status === 500) {
          setIsLoad(false);
          ErrorToast(t("ServiceError"), 8000);
        } else {
          ErrorToast(data.message, 8000);
          setIsLoad(false);
        }
      });
    }
  };

  const resetCountdown = () => {
    setRemainingSeconds(initialSeconds);
    setIsActive(false);
  };

  return (
    <div>
      <button
        type="button"
        onClick={startCountdown}
        className="flex items-center"
      >
        {isLoad ? (
          <div className="flex items-center justify-center">
            <Loader2 className="animate-spin text-indigo-600" size={20} />
          </div>
        ) : (
          <div className="text-[15px] text-indigo-500 font-bold">
            {remainingSeconds == 60 ? (
              <p className="">{t("SignUpGetCode")}</p>
            ) : (
              remainingSeconds + "s"
            )}
          </div>
        )}
      </button>
    </div>
  );
};

export default CountdownTimer;
