"use client";
import React, { FormEvent, useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
// import LoginApi from "@/api/login";
import { Loader2 } from "lucide-react";
import { redirect, usePathname, useSearchParams } from "next/navigation";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import { useRouter } from "next-intl/client";
import { ErrorToast, SuccessToast } from "@/components/functions/toasts";
import LoginApi from "@/api/login";
import { useCookies } from "react-cookie";
import Logopic from "@/components/imgs/logo-white.png";
import illPic from "@/components/imgs/MessyDoodle.svg";
import SignUpApi from "@/api/signup";
import SignUpContext from "@/components/functions/context/signupreducer";
import CountdownTimer from "@/components/functions/countdown";
import EmailContext from "@/components/functions/context/emailreducer";
import ActiveContext from "@/components/functions/context/activereducer";
import LoginContext from "@/components/functions/context/loginreducer";
import SignUpInfoContext from "@/components/functions/context/signupinforeducer";
import CheckCodeApi from "@/api/checkcode";
import Link from "next/link";

interface SignUpFormInput {
  email: string;
  code: string;
  password: string;
  cpassword: string;
}

interface CountdownTimerProps {
  initialSeconds: number;
}

const LoginForm = () => {
  const t = useTranslations("SignUpForm");
  const {
    register,
    handleSubmit,
    watch,
    getValues,
    formState: { errors },
  } = useForm<SignUpFormInput>();

  const [SignUpisOpen, setSignUpisOpen] = useContext(SignUpContext);
  const [LoginisOpen, setLoginisOpen] = useContext(LoginContext);
  const [SignUpInfo, setSignUpInfo] = useContext(SignUpInfoContext);
  const [isDisabled, setIsDisabled] = useState(true);
  const [inputValue, setInputValue] = useState("");
  const [one, setOne] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [isLoad, setIsLoad] = useState(false);
  const onSubmit: any = async (data: SignUpFormInput) => {
    console.log(data, "regdata");

    const CheckCodeData = {
      email: data.email,
      code: data.code,
    };
    const regdata = {
      email: data.email,
      code: data.code,
      password: data.password,
    };
    let parmas = { email: data.email, password: data.password };
    setIsLoad(true);
    try {
      const responseCheck = await CheckCodeApi(CheckCodeData);
      console.log(responseCheck, "check");

      if (responseCheck.status === 200) {
        await SignUpApi(regdata);
        const responseReg = await Promise.resolve(responseCheck);
        console.log(responseReg, "reg");
        if (responseReg.status === 200) {
          setIsLoad(false);
          SuccessToast(t("SignUpSuccessToast"));
          setSignUpInfo(parmas);
          setSignUpisOpen(false);
          setLoginisOpen(true);
        } else if (responseReg.status === 400) {
          ErrorToast(t("SignParameterError"), 8000);
          setIsLoad(false);
        } else if (responseReg.status === 403) {
          ErrorToast(t("SignUpCodeError"), 8000);
          setIsLoad(false);
        } else if (responseReg.status === 500) {
          setIsLoad(false);
          ErrorToast(t("SignUpServiceError"), 8000);
        } else {
          setIsLoad(false);
          ErrorToast(responseReg.data, 8000);
        }
      } else if (responseCheck.status === 404) {
        ErrorToast(t("CodeCheckError"), 8000);
        setIsLoad(false);
      } else {
        setIsLoad(false);
        ErrorToast(responseCheck.data.message, 8000);
      }
    } catch (error) {
      ErrorToast("Something Went Wrong", 8000);
      setIsLoad(false);
    }
  };

  function Onetime() {
    if (isActive && !one) {
      setOne(true);
      setIsDisabled(false);
    }
  }

  const handleInputChange = (event: any) => {
    setInputValue(event.target.value);
  };

  useEffect(() => {
    Onetime();
  }, [isActive]);

  return (
    <div className="w-full min-h-full flex flex-1 justify-between gap-6">
      <div className="bg-indigo-50/70 rounded-3xl w-full h-full flex flex-col justify-between px-16 pt-16 pb-6">
        <div className="flex h-fit w-12 items-center">
          <Image src={Logopic} alt="LogoPic" />
        </div>
        <div className="w-full h-fit flex-col flex gap-8">
          <div className="w-full h-fit flex-col flex gap-2">
            <div className="w-full h-fit text-3xl font-bold">
              <p>{t("SignUpTitle")}</p>
            </div>
            <div className="w-full h-fit text-base text-gray-400">
              {t("SignUpSubTitle")}
            </div>
          </div>
          <div className="w-full h-fit">
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex flex-col gap-4"
            >
              <fieldset className=" w-full flex flex-col justify-center">
                <label
                  className="text-base font-medium leading-none mb-2.5 text-black/80 block dark:text-color-surface-500"
                  htmlFor="name"
                >
                  {t("SignUpEmail")}
                </label>
                <div className="w-full h-full relative">
                  <input
                    className="w-full grow shrink-0 rounded-lg px-2.5 text-sm leading-none text-indigo-700 shadow-[0_0_0_1px] shadow-indigo-300 h-12 focus:shadow-[0_0_0_2px] focus:shadow-indigo-300 outline-none placeholder:text-black/20 dark:bg-zinc-800 dark:focus:shadow-zinc-700 dark:shadow-zinc-800 dark:placeholder:text-white/30 dark:text-color-surface-500"
                    placeholder={t("SignUpEmailPlaceholder")}
                    {...register("email", {
                      required: true,
                      maxLength: 50,
                      validate: {
                        matchPattern: (v) =>
                          /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/.test(
                            v
                          ),
                      },
                    })}
                    value={inputValue}
                    onChange={handleInputChange}
                    autoComplete="off"
                  />
                  <div className="h-12 px-3 absolute text-sm bg-indigo-100 rounded-r-lg inset-y-0 right-0 flex items-center transition duration-500 ease-in-out hover:bg-indigo-200 active:bg-indigo-400 dark:bg-indigo-300 dark:hover:bg-indigo-400">
                    <CountdownTimer initialSeconds={60} />
                  </div>
                </div>
                {errors?.email?.type === "required" && (
                  <p className=" pt-2 text-sm font-medium text-red-400">
                    {t("SignUpRequried")}
                  </p>
                )}
                {errors.email?.type === "matchPattern" && (
                  <p className=" pt-2 text-sm font-medium text-red-400">
                    {t("SignUpEmailError")}
                  </p>
                )}
                {errors.email?.type === "maxLength" && (
                  <p className=" pt-2 text-sm font-medium text-red-400">
                    {t("SignUpEmailLength")}
                  </p>
                )}
              </fieldset>
              <fieldset className="w-full flex flex-col justify-start">
                <label
                  className="text-base font-medium leading-none mb-2.5 text-black/80 block dark:text-color-surface-500"
                  htmlFor="name"
                >
                  {t("SignUpCode")}
                </label>
                <input
                  disabled={isDisabled}
                  className="w-full grow shrink-0 rounded-lg px-2.5 text-sm leading-none text-indigo-700 shadow-[0_0_0_1px] shadow-indigo-300 h-12 focus:shadow-[0_0_0_2px] focus:shadow-indigo-300 outline-none placeholder:text-black/20 dark:bg-zinc-800 dark:focus:shadow-zinc-700 dark:shadow-zinc-800 dark:placeholder:text-white/30 dark:text-color-surface-500"
                  placeholder={t("SignUpCodePlaceholder")}
                  {...register("code", {
                    required: true,
                  })}
                  autoComplete="off"
                />

                {errors?.code?.type === "required" && (
                  <p className="pt-2 text-sm font-medium text-red-400">
                    {t("SignUpRequried")}
                  </p>
                )}
              </fieldset>
              <fieldset className=" w-full flex flex-col justify-start">
                <label
                  className="text-base font-medium leading-none mb-2.5 text-black/80 block dark:text-color-surface-500"
                  htmlFor="name"
                >
                  {t("SignUpPassword")}
                </label>
                <input
                  className="grow shrink-0 rounded-lg px-2.5 text-sm leading-none text-indigo-700 shadow-[0_0_0_1px] shadow-indigo-300 h-12 focus:shadow-[0_0_0_2px] focus:outline-none focus:ring-0  focus:shadow-indigo-300 outline-none border-0 placeholder:text-black/20 dark:bg-zinc-800 dark:focus:shadow-zinc-700 dark:shadow-zinc-800 dark:placeholder:text-white/30 dark:text-color-surface-500"
                  type="password"
                  placeholder={t("SignUpPasswordPlaceholder")}
                  {...register("password", { required: true, maxLength: 50 })}
                  autoComplete="off"
                />
                {errors?.password?.type === "required" && (
                  <p className=" pt-2 text-sm font-medium text-red-400">
                    {t("SignUpRequried")}
                  </p>
                )}
                {errors.password?.type === "maxLength" && (
                  <p className=" pt-2 text-sm font-medium text-red-400">
                    {t("SignUpPasswordLength")}
                  </p>
                )}
              </fieldset>
              <fieldset className=" w-full flex flex-col justify-start">
                <label
                  className="text-base font-medium leading-none mb-2.5 text-black/80 block dark:text-color-surface-500"
                  htmlFor="name"
                >
                  {t("SignUpConfirmPassword")}
                </label>
                <input
                  className="grow shrink-0 rounded-lg px-2.5 text-sm leading-none text-indigo-700 shadow-[0_0_0_1px] shadow-indigo-300 h-12 focus:shadow-[0_0_0_2px] focus:outline-none focus:ring-0  focus:shadow-indigo-300 outline-none border-0 placeholder:text-black/20 dark:bg-zinc-800 dark:focus:shadow-zinc-700 dark:shadow-zinc-800 dark:placeholder:text-white/30 dark:text-color-surface-500"
                  type="password"
                  placeholder={t("SignUpConfirmPasswordPlaceholder")}
                  {...register("cpassword", {
                    required: true,
                    validate: (value) => value === getValues("password"),
                  })}
                  autoComplete="off"
                />
                {errors?.cpassword?.type === "required" && (
                  <p className=" pt-2 text-sm font-medium text-red-400">
                    {t("SignUpRequried")}
                  </p>
                )}
                {errors.cpassword && errors.cpassword.type === "validate" && (
                  <p className=" pt-2 text-sm font-medium text-red-400">
                    {t("SignUpConfirmPasswordError")}
                  </p>
                )}
              </fieldset>
              <div className="flex justify-center w-full h-fit flex-col gap-2">
                <button
                  className="w-full appearance-none rounded-lg px-4 h-12 text-base leading-none hover:bg-indigo-500 outline-none cursor-pointer transition duration-500 ease-in-out focus:shadow-[0_0_0_2px] focus:shadow-indigo-300 bg-indigo-600 text-white font-medium dark:bg-indigo-300 dark:hover:bg-indigo-400"
                  type="submit"
                >
                  {isLoad ? (
                    <div className="flex items-center justify-center ">
                      <Loader2
                        className="animate-spin text-indigo-600"
                        size={20}
                      />
                    </div>
                  ) : (
                    <div className="font-bold">
                      <p>{t("SignUpButton")}</p>
                    </div>
                  )}
                </button>

                <div className="w-full h-fit text-center">
                  {t("SignUpAlready")}{" "}
                  <Link href={"/signin"}>
                    <span className="font-medium text-indigo-600">
                      {t("SignUpAlreadyII")}
                    </span>
                  </Link>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div className="w-full h-fit">
          <p className="text-center text-xs text-gray-700 xsmall:text-sm">
            <span className="font-body text-gray-700">©</span> 2022-2023
            BitDinosaur All Rights Reserved
          </p>
        </div>
      </div>
      <div className="bg-indigo-300/50 rounded-3xl w-full h-full flex flex-col p-16 gap-4">
        <div className="w-full h-fit text-2xl font-medium tracking-wide leading-relaxed text-indigo-600">
          <p>{t("SloganI")}</p>
          <p>{t("SloganII")}</p>
        </div>
        <div className="flex h-full w-full items-center 3xl:p-24">
          <Image src={illPic} alt="illPic" />
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
