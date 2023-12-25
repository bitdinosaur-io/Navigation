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
import GetUserApi from "@/api/getuser";
import { useCookies } from "react-cookie";
import Logopic from "@/components/imgs/logo-white.png";
import illPic from "@/components/imgs/SprintingDoodle.svg";
import Link from "next/link";

interface LoginFormInput {
  email: string;
  password: string;
}

const LoginForm = () => {
  const t = useTranslations("LoginForm");
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm<LoginFormInput>();
  const [isLoad, setIsLoad] = useState(false);
  const [cookies, setCookie, removeCookie] = useCookies(["user", "token"]);

  const searchParams = useSearchParams();
  const router = useRouter();

  const onSubmit: any = async (data: LoginFormInput) => {
    try {
      setIsLoad(true);
      const getlogin = await LoginApi(data);
      if (getlogin.status === 200) {
        setCookie("token", getlogin.data.token, {
          path: "/",
          maxAge: 3600 * 24 * 7,
          domain: "watcher.tools",
          secure: true,
          sameSite: true,
        });
        try {
          const getuser = await GetUserApi("", getlogin.data.token);
          if (getuser.status === 200) {
            setCookie("user", getuser.data, {
              path: "/",
              maxAge: 3600 * 24 * 7,
              domain: "watcher.tools",
              secure: true,
              sameSite: true,
            });
          } else if (getuser.status === 401) {
            ErrorToast(t("UserIncorrect"), 8000);
          } else if (getuser.status === 500) {
            ErrorToast(t("UserError"), 8000);
          } else {
            ErrorToast(getuser.data.message, 8000);
          }
        } catch (error) {
          ErrorToast(error, 8000);
        }
        setIsLoad(false);
        SuccessToast(t("loginSuccessToast"));
        const search = searchParams.get("returnUrl");
        if (!search) {
          router.replace("/");
        } else {
          router.replace(`${search}`);
        }
      } else if (getlogin.status === 401) {
        setIsLoad(false);
        ErrorToast(t("loginFailToast"), 8000);
      } else {
        setIsLoad(false);
        ErrorToast(getlogin.data.message, 8000);
      }
    } catch (error) {
      ErrorToast(error, 8000);
    }
  };

  return (
    <div className="w-full min-h-full flex flex-1 justify-between gap-6">
      <div className="bg-indigo-50/70 w-full h-full flex flex-col justify-between p-8 mid:p-16 mid:rounded-3xl">
        <div className="flex h-fit w-14 items-center">
          <Image src={Logopic} alt="LogoPic" />
        </div>

        <div className="w-full h-fit flex-col flex gap-8">
          <div className="w-full h-fit flex-col flex gap-6">
            <div className="w-full h-fit text-3xl font-bold">
              <p>
                {t("loginTitle")}{" "}
                <span className="text-indigo-600 font-chillax">DinoLand</span>
              </p>
              <p>{t("loginSubTitle")}</p>
            </div>
            <div className="w-full h-fit text-lg">
              {t("loginNoAccount")}{" "}
              <Link href={"/signup"}>
                <span className="font-medium underline underline-offset-4">
                  {t("loginNoAccountII")}
                </span>
              </Link>
            </div>
          </div>
          <div className="w-full h-fit">
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex flex-col gap-10"
            >
              <fieldset className=" w-full flex flex-col justify-center">
                <label
                  className="text-base font-medium leading-none mb-2.5 text-black/80 block dark:text-color-surface-500"
                  htmlFor="name"
                >
                  {t("loginEmail")}
                </label>
                <input
                  className="grow shrink-0 rounded-lg px-2.5 text-sm leading-none text-indigo-700 shadow-[0_0_0_1px] shadow-indigo-300 h-12 focus:shadow-[0_0_0_2px] focus:shadow-indigo-300 outline-none placeholder:text-black/20 dark:bg-zinc-800 dark:focus:shadow-zinc-700 dark:shadow-zinc-800 dark:placeholder:text-white/30 dark:text-color-surface-500"
                  placeholder={t("loginEmailPlaceholder")}
                  {...register("email", { required: true })}
                  autoComplete="off"
                />
                {errors?.email?.type === "required" && (
                  <p className=" pt-2 text-sm font-medium text-red-400">
                    {t("loginRequried")}
                  </p>
                )}
              </fieldset>
              <fieldset className=" w-full flex flex-col justify-start">
                <label
                  className="text-base font-medium leading-none mb-2.5 text-black/80 block dark:text-color-surface-500"
                  htmlFor="name"
                >
                  {t("loginPassword")}
                </label>
                <input
                  className="grow shrink-0 rounded-lg px-2.5 text-sm leading-none text-indigo-700 shadow-[0_0_0_1px] shadow-indigo-300 h-12 focus:shadow-[0_0_0_2px] focus:outline-none focus:ring-0  focus:shadow-indigo-300 outline-none border-0 placeholder:text-black/20 dark:bg-zinc-800 dark:focus:shadow-zinc-700 dark:shadow-zinc-800 dark:placeholder:text-white/30 dark:text-color-surface-500"
                  type="password"
                  placeholder={t("loginPasswordPlaceholder")}
                  {...register("password", { required: true })}
                  // autoComplete="off"
                />
                {errors?.password?.type === "required" && (
                  <p className=" pt-2 text-sm font-medium text-red-400">
                    {t("loginRequried")}
                  </p>
                )}
              </fieldset>
              <div className="flex justify-center w-full">
                <button
                  className="w-full appearance-none rounded-lg px-4 h-12 text-base leading-none hover:bg-indigo-500 outline-none cursor-pointer transition duration-500 ease-in-out focus:shadow-[0_0_0_2px] focus:shadow-indigo-300 bg-indigo-600 text-white font-medium dark:bg-indigo-300 dark:hover:bg-indigo-400"
                  type="submit"
                >
                  {isLoad ? (
                    <div className="flex items-center justify-center ">
                      <Loader2
                        className="animate-spin text-white"
                        strokeWidth={2.5}
                        size={20}
                      />
                    </div>
                  ) : (
                    <div className="font-bold">
                      <p>{t("loginButton")}</p>
                    </div>
                  )}
                </button>
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

      <div className="bg-indigo-300/50 rounded-3xl w-full h-full flex-col p-16 gap-4 hidden mid:flex">
        <div className="w-full h-fit text-3xl font-medium tracking-wide leading-relaxed text-indigo-600">
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
