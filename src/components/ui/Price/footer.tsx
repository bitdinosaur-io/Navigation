import Image from "next/image";
import bitdinosaur from "@/assets/img/bitdinosaur-logo.png";
import { Tooltip } from "@nextui-org/react";
import Link from "next/link";
import { Twitter, Send, Mail } from "lucide-react";
import Logowhite from "@/assets/img/logo-white.png";
import { useTranslations } from "next-intl";
import {
  IconArrowUpRight,
  IconBrandTelegram,
  IconBrandTwitter,
  IconMail,
} from "@tabler/icons-react";

export function Footer() {
  const t = useTranslations("FooterHome");

  return (
    <div className="w-full bg-transparent flex flex-col px-4 border-t-gray-400/20 border-t-2">
      <div className="w-full h-fit flex pt-12 py-12">
        <div className="w-1/3 h-full flex flex-col gap-3">
          <Tooltip
            content={
              <div className="flex flex-col items-center z-50">
                <Image
                  src={bitdinosaur}
                  width={100}
                  height={100}
                  alt="bitdinosaur"
                  className="animate-bounce dark:invert"
                ></Image>
                <p className="font-fira tracking-wide">
                  <span className="text-green-500">B</span>
                  <span className="text-yellow-500">i</span>
                  <span className="text-red-500">t</span>
                  Dinosaur
                </p>
              </div>
            }
            placement="top"
          >
            <div className="flex  h-13 w-13 cursor-pointer items-center xsmall:w-14 xsmall:h-14 mid:h-12 mid:w-12">
              <Image src={Logowhite} alt="logo" className="" />
            </div>
          </Tooltip>
          <div className="text-slate-800 opacity-75 text-sm font-medium dark:text-color-surface-500">
            <div className="flex justify-start gap-6 items-center">
              <p className="text-center text-xs font-medium tracking-wide text-slate-800 xsmall:text-sm dark:text-white/30">
                <span className="font-body">©</span> 2022-2023 BitDinosaur
              </p>
            </div>
            <p>{t("Slogan.SloganI")}</p>
            <p>{t("Slogan.SloganII")}</p>
          </div>

          <div className="flex items-center gap-0.5 -ml-2 -mt-1">
            <Link
              href="https://twitter.com/bitdinosaurio"
              className="text-slate-800 opacity-75 rounded-full transition-all duration-300 ease-in-out p-2 hover:bg-white/60 active:bg-white/40 dark:p-2 dark:dark:text-color-surface-600 dark:hover:bg-gray-500/60 dark:active:bg-gray-500/20"
            >
              <IconBrandTwitter strokeWidth={2.5} size={24} />
            </Link>
            <Link
              href="https://t.me/BitDinosaurLabs"
              className="text-slate-800 opacity-75 rounded-full transition-all duration-300 ease-in-out p-2 hover:bg-white/60 active:bg-white/40 dark:p-2 dark:dark:text-color-surface-600 dark:hover:bg-gray-500/60 dark:active:bg-gray-500/20"
            >
              <IconBrandTelegram strokeWidth={2.5} size={24} />
            </Link>
            <Link
              href="mailto:team@bitdinosaur.io"
              className="text-slate-800 opacity-75 rounded-full transition-all duration-300 ease-in-out p-2 hover:bg-white/60 active:bg-white/40 dark:p-2 dark:dark:text-color-surface-600 dark:hover:bg-gray-500/60 dark:active:bg-gray-500/20"
            >
              <IconMail strokeWidth={2.5} size={24} />
            </Link>
          </div>
        </div>
        <div className="w-2/3 h-full grid grid-cols-3">
          <div className="col-span-1 flex flex-col gap-6 font-bold">
            <div className="text-lg text-slate-800 dark:text-color-surface-500">
              Pricing
            </div>
            <div className="flex flex-col gap-2 font-semibold text-slate-800 transition-all ease-in-out duration-200 dark:text-color-surface-600">
              <div className="w-fit opacity-75 hover:opacity-100">
                <Link href="#Repository">Plans</Link>
              </div>
              <div className="w-fit opacity-75 hover:opacity-100">
                <Link href="#Multiple_Approval">FAQ</Link>
              </div>
            </div>
          </div>
          <div className="col-span-1 flex flex-col gap-6 font-bold">
            <div className="text-lg text-slate-800 dark:text-color-surface-500">
              Product
            </div>
            <div className="flex flex-col gap-2 font-semibold text-slate-800 transition-all ease-in-out duration-200 dark:text-color-surface-600">
              <div className="w-fit opacity-75 hover:opacity-100">
                <Link
                  href="#Repository"
                  className="relative flex items-center gap-1"
                >
                  <span>Ord</span>
                  <IconArrowUpRight
                    size={16}
                    strokeWidth={2.5}
                    className="absolute top-0 -right-4"
                  />
                </Link>
              </div>
              <div className="w-fit opacity-75 hover:opacity-100">
                <Link
                  href="#Multiple_Approval"
                  className="relative flex items-center gap-1"
                >
                  <span>ENS</span>
                  <IconArrowUpRight
                    size={16}
                    strokeWidth={2.5}
                    className="absolute top-0 -right-4"
                  />
                </Link>
              </div>
              <div className="w-fit opacity-75 hover:opacity-100">
                <Link
                  href="#Multi_Chain"
                  className="relative flex items-center gap-1"
                >
                  <span>Tracker</span>
                  <IconArrowUpRight
                    size={16}
                    strokeWidth={2.5}
                    className="absolute top-0 -right-4"
                  />
                </Link>
              </div>
              <div className="w-fit opacity-75 hover:opacity-100">
                <Link
                  href="#Multi_Chain"
                  className="relative flex items-center gap-1"
                >
                  <span className="">Approval</span>
                  <IconArrowUpRight
                    size={16}
                    strokeWidth={2.5}
                    className="absolute top-0 -right-4"
                  />
                </Link>
              </div>
            </div>
          </div>
          <div className="col-span-1 flex flex-col gap-6 font-bold ">
            <div className="text-lg text-slate-800 dark:text-color-surface-500">
              {t("Help.title")}
            </div>
            <div className="flex flex-col gap-2 font-semibold text-slate-800 transition-all ease-in-out duration-200 dark:text-color-surface-600">
              <div className="w-fit opacity-75 hover:opacity-100">
                <Link href="/contact-us">{t("Help.contact")}</Link>
              </div>
              <div className="w-fit opacity-75 hover:opacity-100">
                {t("Help.pp")}
              </div>
              <div className="w-fit opacity-75 hover:opacity-100">
                {t("Help.tos")}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
