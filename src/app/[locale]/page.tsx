"use client";

import { NextSeo } from "next-seo";
import Link from "next/link";
import Image from "next/image";
import { useState, createContext, useContext, useReducer } from "react";
import { Fragment, useEffect } from "react";
import { ArrowUpRight, Contact } from "lucide-react";
import { TopNav } from "@/components/ui/top-nav";
import { Footer } from "@/components/ui/footer";
import Trackerbg from "@/components/imgs/trackerbg.svg";
import TypeIt from "typeit-react";
import { Dices } from "lucide-react";
import { Clock2 } from "lucide-react";
import { IconDashboard, IconDiscount2 } from "@tabler/icons-react";
import { redirect, useSearchParams } from "next/navigation";
import { useRouter, usePathname } from "next-intl/client";

export default function HomePage() {
  function random() {
    let urls = [
      "https://ord.watcher.tools",
      "https://ens.watcher.tools",
      "https://track.watcher.tools",
      "https://approval.watcher.tools",
    ];
    window.location.href = urls[Math.floor(Math.random() * urls.length)];
  }

  return (
    <div className="relative flex flex-col min-h-screen bg-indigo-100/50 pb-3 px-4 pt-2 backdrop-blur sm:px-6 sm:pb-20 lg:px-12 xl:pb-6 3xl:px-56 3xl:pt-2.5">
      {/* SEO */}
      <NextSeo
        title="Navigation - Watcher.tools"
        description="Watcher.tools Navigation Page"
      />

      {/* 顶部菜单 */}
      <div className="mb-14 flex flex-wrap">
        <div className="w-full sm:mb-0 ">
          <TopNav />
        </div>
      </div>

      {/* slogan */}
      <div className="w-full min-h-fit h-28 large:h-20">
        <div className="flex  flex-col text-black/80 text-2xl mid:text-3xl large:text-4xl tracking-tight font-bold text-center px-12 items-center">
          <TypeIt
            element={"p"}
            options={{
              speed: 100,
              deleteSpeed: 100,
              waitUntilVisible: true,
              lifeLike: false,
              loop: true,
              loopDelay: 1000,
              afterStep: (instance: any) => {},
              afterComplete: (instance: any) => {},
            }}
            getBeforeInit={(instance) => {
              instance
                .type("Your Minimal And")
                .pause(2000)
                .move(-2)
                .type("ist")
                .move(null, { to: "END" })
                .type(" General Blockchain Tool")
                .pause(1500)
                .delete()
                // .break({ delay: 500 })
                .type("Make Encrypted World Data With Application Value")
                .pause(4000)
                .delete()
                .go();
              return instance;
            }}
          />
          {/* <Typewriter  /> */}
        </div>
      </div>

      {/* dice */}
      <div className="flex mb-[5.5rem] w-full h-12 gap-4 justify-center">
        {/* <button
          // onClick={random}
          id="price"
          className="flex items-center shadow-xl tracking-wide shadow-gray-200 gap-1 cursor-pointer bg-indigo-200 font-medium rounded-full text-sm px-5 py-5 mid:py-7 mid:px-7 mid:text-base transition duration-700 ease-in-out hover:scale-105 hover:shadow-gray-300/70"
        >
          <span>
            <IconDiscount2 />
          </span>
          <span>Plans</span>
        </button> */}

        <button
          onClick={() => random()}
          id="test"
          className="flex items-center shadow-xl tracking-wide shadow-gray-200 gap-2 cursor-pointer bg-indigo-200 font-medium rounded-full text-sm px-5 py-5 mid:py-7 mid:px-7 mid:text-base transition duration-700 ease-in-out hover:scale-105 hover:shadow-gray-300/70"
        >
          <span>
            <Dices />
          </span>
          <span>Roll A Dice</span>
        </button>
        {/* <button
          // onClick={random}
          id="dash"
          className="flex items-center shadow-xl tracking-wide shadow-gray-200 gap-1 cursor-pointer bg-indigo-200 font-medium rounded-full text-sm px-5 py-5 mid:py-7 mid:px-7 mid:text-base transition duration-700 ease-in-out hover:scale-105 hover:shadow-gray-300/70"
        >
          <span>
            <IconDashboard />
          </span>
          <span>Dashboard</span>
        </button> */}
      </div>

      {/* product */}
      <div className="w-full mb-10 h=full">
        <div className="grid auto-cols-max auto-rows-max grid-rows-6 grid-cols-4 large:grid-rows-6 large:grid-cols-10 large:grid-flow-col grid-flow-row gap-4">
          <div className="group row-span-1 col-span-4 large:row-span-3 large:col-span-4 flex flex-col px-5 large:px-6 py-5 large:py-7 justify-between rounded-2xl bg-blue-200 shadow-xl shadow-gray-200 w-full h-full transition duration-700 ease-in-out hover:translate-x-1 hover:-translate-y-1 hover:brightness-105 hover:shadow-gray-300/70">
            <div>
              <p className="font-bold text-sm text-black/60">Tool</p>
            </div>
            <div className="flex w-full justify-between">
              <div>
                <p className="font-bold text-black/80 text-2xl large:text-3xl mb-1">
                  Ord
                </p>
                <p className="font-medium text-black/40 text-sm large:text-base tracking-normal">
                  Ordinals Analyze Tool
                </p>
              </div>
              <div className="items-end flex -m-2">
                <div className="w-fit h-fit p-2 transition duration-1000 ease-in-out cursor-alias group-hover:rotate-[45deg] group-hover:bg-gray-400/40 rounded-full ">
                  <Link
                    href="https://ord.watcher.tools"
                    className="cursor-alias"
                  >
                    <ArrowUpRight />
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="group shadow-xl shadow-gray-200 row-span-1 col-span-2 large:row-span-3 large:col-span-2 flex flex-col px-5 large:px-6 py-5 large:py-7 justify-between rounded-2xl bg-lime-200 w-full h-full transition duration-700 ease-in-out hover:translate-x-1 hover:-translate-y-1 hover:brightness-105 hover:shadow-gray-300/70">
            <div>
              <p className="font-bold text-sm text-black/60">Tool</p>
            </div>
            <div className="flex w-full justify-between">
              <div className="">
                <p className="font-bold text-black/80 text-xl large:text-2xl">
                  Approval
                </p>
                {/* <p className="font-bold text-black/80 text-xl large:text-2xl">
                  Coming Soon
                </p> */}
                <p className="font-medium text-black/40 tracking-normal text-sm large:text-base">
                  Check & Roveke Tool
                </p>
              </div>
              <div className="items-end flex -m-2">
                <div className="w-fit h-fit p-2 transition duration-1000 ease-in-out cursor-alias  group-hover:rotate-[45deg] group-hover:bg-gray-400/40 rounded-full ">
                  <Link
                    href="https://approval.watcher.tools"
                    className="cursor-alias"
                  >
                    <ArrowUpRight />
                  </Link>
                </div>
                {/* <div className="w-fit h-fit p-2 transition duration-1000 ease-in-out cursor-not-allowed rounded-full group-hover:bg-gray-400/40">
                  <Link href="/" className="group-hover:hidden">
                    <ArrowUpRight />
                  </Link>
                  <Clock2 className="hidden group-hover:flex" />
                </div> */}
              </div>
            </div>
          </div>
          <div className="group shadow-xl shadow-gray-200 row-span-1 col-span-2 large:row-span-3 large:col-span-2 flex flex-col px-5 large:px-6 py-5 large:py-7 justify-between rounded-2xl bg-rose-200 w-full h-full transition duration-700 ease-in-out hover:translate-x-1 hover:-translate-y-1 hover:brightness-105 hover:shadow-gray-300/70">
            <div>
              <p className="font-bold text-sm text-black/60">Tool</p>
            </div>
            <div className="flex w-full justify-between">
              <div className="">
                <p className="font-bold text-black/80 mb-1 text-2xl large:text-3xl">
                  Watch
                </p>
                {/* <p className="font-bold text-black/80 text-xl large:text-2xl">
                  Coming Soon
                </p> */}
                <p className="font-medium text-sm large:text-base text-black/40 tracking-normal">
                  Revamping
                </p>
                {/* <p className="font-medium text-sm large:text-base text-black/40 tracking-normal">
                  Address Monitor
                </p> */}
              </div>
              <div className="items-end flex -m-2">
                {/* <div className="w-fit h-fit p-2 transition duration-1000 ease-in-out cursor-alias  group-hover:rotate-[45deg] group-hover:bg-gray-400/40 rounded-full ">
                  <Link href="https://ord.watcher.tools">
                    <ArrowUpRight />
                  </Link>
                </div> */}
                <div className="w-fit h-fit p-2 transition duration-1000 ease-in-out cursor-not-allowed rounded-full group-hover:bg-gray-400/40">
                  <Link href="/" className="group-hover:hidden">
                    <ArrowUpRight />
                  </Link>
                  <Clock2 className="hidden group-hover:flex" />
                </div>
              </div>
            </div>
          </div>
          <div className="group shadow-xl shadow-gray-200 row-span-2 col-span-4 large:row-span-6 large:col-span-3 flex-col flex px-5 large:px-6 py-5 large:py-7 justify-between rounded-2xl bg-purple-200 w-full h-full transition duration-700 ease-in-out hover:translate-x-1 hover:-translate-y-1 hover:brightness-105 hover:shadow-gray-300/70">
            <div>
              <p className="font-bold text-sm text-black/60">Tool</p>
            </div>
            <div className="flex w-full justify-between">
              <div>
                <p className="font-bold text-2xl large:text-3xl text-black/80 mb-1">
                  Tracker
                </p>
                {/* <p className="font-bold text-black/80 text-xl large:text-2xl">
                  Coming Soon
                </p> */}
                <p className="font-medium text-black/40 text-sm large:text-base tracking-normal">
                  BlockChain Address Tracker
                </p>
              </div>
              <div className="items-end flex -m-2">
                <div className="w-fit h-fit p-2 transition duration-1000 ease-in-out cursor-alias  group-hover:rotate-[45deg] group-hover:bg-gray-400/40 rounded-full ">
                  <Link
                    href="https://track.watcher.tools"
                    className="cursor-alias"
                  >
                    <ArrowUpRight />
                  </Link>
                </div>
                {/* <div className="w-fit h-fit p-2 transition duration-1000 ease-in-out cursor-not-allowed rounded-full group-hover:bg-gray-400/40">
                  <Link href="/" className="group-hover:hidden">
                    <ArrowUpRight />
                  </Link>
                  <Clock2 className="hidden group-hover:flex" />
                </div> */}
              </div>
            </div>
          </div>
          <div className="group shadow-xl shadow-gray-200 row-span-1 col-span-4 large:row-span-4 large:col-span-3 flex flex-col px-5 large:px-6 py-5 large:py-7 justify-between rounded-2xl bg-emerald-300/50 w-full h-full transition duration-700 ease-in-out hover:translate-x-1 hover:-translate-y-1 hover:brightness-105 hover:shadow-gray-300/70">
            <div>
              <p className="font-bold text-sm text-black/60">Tool</p>
            </div>
            <div className="flex w-full justify-between">
              <div className="">
                <p className="font-bold text-2xl large:text-3xl text-black/80 mb-1">
                  ENS
                </p>
                <p className="font-medium text-black/40 text-sm large:text-base tracking-normal">
                  ENS Analyze Tool
                </p>
              </div>
              <div className="items-end flex -m-2">
                <div className="w-fit h-fit p-2 transition duration-1000 ease-in-out cursor-alias  group-hover:rotate-[45deg] group-hover:bg-gray-400/40 rounded-full ">
                  <Link
                    href="https://ens.watcher.tools"
                    className="cursor-alias"
                  >
                    <ArrowUpRight />
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="group shadow-xl shadow-gray-200 row-span-1 col-span-4 large:row-span-2 large:col-span-3 flex flex-col px-5 large:px-6 py-5 large:py-7 justify-between rounded-2xl bg-amber-200 w-full h-36 large:h-32 transition duration-700 ease-in-out hover:translate-x-1 hover:-translate-y-1 hover:brightness-105 hover:shadow-gray-300/70">
            <div>
              <p className="font-bold text-sm text-black/60">Service</p>
            </div>
            <div className="flex w-full justify-between">
              <div className="">
                {/* <p className="font-bold text-xl large:text-2xl text-black/80">
                  Authentication
                </p> */}
                <p className="font-bold text-black/80 text-xl large:text-2xl">
                  Coming Soon
                </p>
                {/* <p className="font-medium text-black/40 tracking-normal text-sm large:text-base">All-In-One BlockChain Analyst</p> */}
              </div>
              <div className="items-end flex -m-2">
                {/* <div className="w-fit h-fit p-2 transition duration-1000 ease-in-out cursor-alias  group-hover:rotate-[45deg] group-hover:bg-gray-400/40 rounded-full ">
                  <Link href="https://ord.watcher.tools">
                    <ArrowUpRight />
                  </Link>
                </div> */}
                <div className="w-fit h-fit p-2 transition duration-1000 ease-in-out cursor-not-allowed  rounded-full group-hover:bg-gray-400/40">
                  <Link href="/" className="group-hover:hidden">
                    <ArrowUpRight />
                  </Link>
                  <Clock2 className="hidden group-hover:flex" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* footer */}
      <footer className="flex w-full h-full m-auto flex-wrap">
        <div className="w-full bottom-0">
          <Footer />
        </div>
      </footer>
    </div>
  );
}
