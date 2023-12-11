"use client";
import Image from "next/image";
import logopic from "@/components/imgs/logo-4.png";
import { useState, useEffect } from "react";
import { Twitter, Send, Mail } from "lucide-react";
import { useCookies } from "react-cookie";
import Link from "next/link";
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
      <div
        className="flex flex-wrap items-center cursor-pointer"
        onClick={handleOpen}
      >
        <div className="flex h-12 w-12 items-center xsmall:w-14 xsmall:h-14 mid:h-16 mid:w-16">
          <Image src={logopic} alt="logo" />
        </div>
        <div className="hidden mid:flex">
          <p className="ml-3 flex font-titbackup text-2xl tracking-tight xsmall:text-test mid:text-3xl font-semibold text-indigo-800">
            <span className="font-titbackup">W</span>
            <span className="font-titbackup">atcher</span>
            {/* <span className="font-normal text-black/50">.</span> */}
            <span className="font-normal text-gray-600">.tools</span>
          </p>
        </div>
      </div>

      <div className="flex items-center h-full gap-4 mid:gap-6">
        <div className="flex items-center gap-4 mid:gap-6">
          <Link
            href="https://twitter.com/bitdinosaurio"
            className=" text-black/80"
          >
            <Twitter
              strokeWidth={2.5}
              size={ScreenHeight && ScreenWidth >= 768 ? 24 : 22}
            />
          </Link>
          <Link href="https://t.me/BitDinosaurLabs" className=" text-black/80">
            <Send
              strokeWidth={2.5}
              size={ScreenHeight && ScreenWidth >= 768 ? 24 : 22}
            />
          </Link>
          <Link href="mailto:team@bitdinosaur.io" className=" text-black/80">
            <Mail
              strokeWidth={2.5}
              size={ScreenHeight && ScreenHeight >= 768 ? 24 : 22}
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
                <Avatar
                  showFallback
                  name={useremail && useremail.username}
                  className="bg-indigo-200 cursor-pointer"
                  src="/22"
                />
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
                  <User
                    name={useremail && useremail.username}
                    description=""
                    classNames={{
                      name: "text-default-600",
                      description: "text-default-500",
                    }}
                    avatarProps={{
                      showFallback: true,
                      size: "sm",
                      className: "bg-indigo-200",
                      src: "/22",
                    }}
                  />
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
