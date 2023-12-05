import Image from "next/image";
import Link from "next/link";
import { useState, useRef } from "react";
import bitdinosaur from "@/components/imgs/bitdinosaur-logo.png";
import { ArrowLeft } from "lucide-react";
import { Twitter, Send, Mail } from "lucide-react";

export default function Contactus() {
  return (
    <div className="w-full h-screen bg-indigo-50 relative overflow-hidden dark:bg-color-surface-300">
      <div className="absolute w-1/2 h-1/2 bottom-0 left-10 mid:left-[-80px] large:left-[-160px] xlarge:left-20 3xl:left-56">
        <div className="scale-150">
          <Image src={bitdinosaur} alt="dinosaur" />
        </div>
      </div>
      <div className="w-full h-screen bg-white/30 backdrop-blur-md flex justify-end dark:bg-color-surface-100/50">
        <div className="relative large:w-1/2 large:h-screen xlarge:w-1/3 xlarge:h-screen bg-white shadow-gray-500 flex flex-col justify-center items-start p-10 dark:bg-color-surface-200 dark:shadow-none">
          <div className="top-8 left-8 absolute ">
            <Link href="/" className="flex h-6 w-6 justify-start">
              <ArrowLeft
                size={20}
                className="text-black/80 dark:text-color-surface-500"
              />
            </Link>
          </div>
          <div className="flex items-center gap-3 mb-16">
            <div className="w-24 h-full flex dark:contrast-75 dark:brightness-150 dark:saturate-200">
              <Image src={bitdinosaur} alt="dinosaur" />
            </div>
            <div>
              <p className="font-bold text-xl">
                <span className="text-indigo-500">Bit</span>
                <span className="text-black/80 dark:text-white">Dinosaur</span>
              </p>
              <p className="text-xs font-bold text-gray-400">
                Blockchain Ecological Data Observer
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-4 items-start justify-center">
            <div className="h-1 w-16 border-t-2 border-gray-400 dark:border-color-surface-300"></div>

            <div className="flex items-center">
              <Link
                href="https://twitter.com/bitdinosaurio"
                className=" text-black/80 mr-2"
              >
                <Twitter
                  strokeWidth={2.5}
                  size={24}
                  className="text-black/80 dark:text-color-surface-500"
                />
              </Link>
              <Link href="https://twitter.com/bitdinosaurio">
                <p className="text-gray-700 text-sm tracking-wide dark:text-color-surface-500">
                  @Bitdinosaurio
                </p>
              </Link>
            </div>
            <div className="flex items-center">
              <Link
                href="https://t.me/BitDinosaurLabs"
                className=" text-black/80 mr-2"
              >
                <Send
                  strokeWidth={2.5}
                  size={24}
                  className="text-black/80 dark:text-color-surface-500"
                />
              </Link>
              <Link href="https://t.me/BitDinosaurLabs">
                <p className="text-gray-700 text-sm tracking-wide dark:text-color-surface-500">
                  @BitDinosaurLabs
                </p>
              </Link>
            </div>
            <div className="flex items-center">
              <Link
                href="mailto:team@bitdinosaur.io"
                className=" text-black/80 mr-2"
              >
                <Mail
                  strokeWidth={2.5}
                  size={24}
                  className="text-black/80 dark:text-color-surface-500"
                />
              </Link>
              <Link href="mailto:team@bitdinosaur.io">
                <p className="text-gray-700 text-sm tracking-wide dark:text-color-surface-500">
                  team@bitdinosaur.io
                </p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
