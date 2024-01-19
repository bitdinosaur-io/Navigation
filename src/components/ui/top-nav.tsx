"use client";
import Image from "next/image";
import logopic from "@/components/imgs/logo-4.png";
import { useState, useEffect } from "react";
import { Twitter, Send, Mail } from "lucide-react";
import { useCookies } from "react-cookie";
import Link from "next/link";
import Avvvatars from "avvvatars-react";
import {
  Avatar,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownSection,
  DropdownItem,
  User,
} from "@nextui-org/react";
import { SuccessToast } from "../functions/toasts";
import {
  IconBrandTelegram,
  IconBrandTwitter,
  IconMail,
} from "@tabler/icons-react";

export function TopNav() {
  const [cookies, setCookie, removeCookie] = useCookies();
  const [isLogin, setIsLogin] = useState(false);
  const [ScreenWidth, setScreenWidth] = useState(0);
  const [ScreenHeight, setScreenHeight] = useState(0);
  const [useremail, setUserEmail] = useState<any>(null);

  useEffect(() => {
    setScreenWidth(window.screen.width);
    setScreenHeight(window.screen.height);
  }, []);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen((cur) => !cur);

  function Logingout() {
    removeCookie("token", {
      path: "/",
      domain: "watcher.tools",
      secure: true,
      sameSite: true,
    });
    removeCookie("user", {
      path: "/",
      domain: "watcher.tools",
      secure: true,
      sameSite: true,
    });
    SuccessToast("Logout Success");
    location.reload();
  }

  useEffect(() => {
    const token = cookies.token;
    if (token) {
      setIsLogin(true);
      const user = cookies.user;
      setUserEmail(user);
    } else {
      return;
    }
  }, []);
  return (
    <div className="flex flex-wrap h-full w-full items-center justify-between bg-transparent pl-4 pr-4 py-4 mid:pl-6 dark:bg-light-dark">
      {/* logo+brand */}

      <Link href={"/"}>
        <div className="flex flex-wrap items-center cursor-pointer">
          <div className="flex h-12 w-12 items-center xsmall:w-14 xsmall:h-14 mid:h-16 mid:w-16">
            <Image src={logopic} alt="logo" />
          </div>
          <div className="hidden mid:flex">
            <p className="ml-3 flex font-chillax text-2xl tracking-tight xsmall:text-test mid:text-3xl font-semibold text-indigo-800">
              Navigation
            </p>
          </div>
        </div>
      </Link>

      <div className="flex items-center h-full gap-4 mid:gap-6">
        <div className="flex items-center gap-4 mid:gap-6">
          <Link
            href="https://twitter.com/bitdinosaurio"
            className=" text-black/80"
          >
            <IconBrandTwitter
              strokeWidth={2.5}
              size={ScreenHeight && ScreenWidth >= 768 ? 28 : 24}
            />
          </Link>
          <Link href="https://t.me/BitDinosaurLabs" className=" text-black/80">
            <IconBrandTelegram
              strokeWidth={2.5}
              size={ScreenHeight && ScreenWidth >= 768 ? 28 : 24}
            />
          </Link>
          <Link href="mailto:team@bitdinosaur.io" className=" text-black/80">
            <IconMail
              strokeWidth={2.5}
              size={ScreenHeight && ScreenWidth >= 768 ? 28 : 24}
            />
          </Link>
        </div>
        <div className="w-fit h-full flex items-center">
          <Dropdown
            radius="lg"
            classNames={{
              base: "before:bg-default-200", // change arrow background
              content: "p-0 border-small border-divider bg-background",
            }}
          >
            <DropdownTrigger>
              {isLogin ? (
                <button className="w-fit h-fit flex items-center justify-center outline-none border-none focus:outline-none focus:border-none">
                  <Avvvatars size={40} value="kevin.matr@gamil.com" />
                </button>
              ) : (
                ""
              )}
            </DropdownTrigger>
            <DropdownMenu
              aria-label="Custom item styles"
              disabledKeys={["profile"]}
              className="p-3"
              itemClasses={{
                base: [
                  "rounded-md",
                  "text-default-500",
                  "transition-opacity",
                  "data-[hover=true]:text-foreground",
                  "data-[hover=true]:bg-default-100",
                  "dark:data-[hover=true]:bg-default-50",
                  "data-[selectable=true]:focus:bg-default-50",
                  "data-[pressed=true]:opacity-70",
                  "data-[focus-visible=true]:ring-default-500",
                ],
              }}
            >
              <DropdownSection aria-label="Profile & Actions" showDivider>
                <DropdownItem
                  isReadOnly
                  key="profile"
                  className="h-14 gap-2 opacity-100"
                >
                  <div className="flex items-center gap-3">
                    <Avvvatars
                      size={40}
                      value={useremail && useremail.username}
                    />
                    <p className="text-ellipsis overflow-hidden">
                      {useremail && useremail.username}
                    </p>
                  </div>
                </DropdownItem>
                {/* <DropdownItem key="dashboard">Dashboard</DropdownItem>
                <DropdownItem key="settings">Settings</DropdownItem> */}
              </DropdownSection>

              <DropdownSection aria-label="Help & Feedback">
                <DropdownItem key="help_and_feedback">
                  Help & Feedback
                </DropdownItem>
                <DropdownItem key="logout">
                  <button onClick={Logingout}>LogOut</button>
                </DropdownItem>
              </DropdownSection>
            </DropdownMenu>
          </Dropdown>
        </div>
      </div>
    </div>
  );
}
