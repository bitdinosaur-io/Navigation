import Image from "next/image";
import bitdinosaur from "@/components/imgs/bitdinosaur-logo.png";
import Link from "next/link";
import { Tooltip } from "@nextui-org/react";
import { useEffect, useState } from "react";

export function Footer() {
  return (
    <div className="flex flex-col items-center">
      <div className="flex items-center">
        <p className="flex text-sm font-medium tracking-wider text-indigo-800 xsmall:text-base">
          <Link href="/contact-us">Powered By</Link>
        </p>
        {/* <Tooltip
          className="rounded-lg"
          content={
            <div className="flex flex-col items-center z-50">
              <Image
                src={bitdinosaur}
                width={100}
                height={100}
                alt="bitdinosaur"
                className="animate-bounce"
              ></Image>
              <p className="font-body">
                <span className="text-green-500">B</span>
                <span className="text-yellow-500">i</span>
                <span className="text-red-500">t</span>
                Dinosaur
              </p>
            </div>
          }
          style="light"
          placement="top"
        >
          
        </Tooltip> */}
        <Tooltip
          showArrow
          content={
            <div className="flex flex-col items-center">
              <Image
                src={bitdinosaur}
                width={100}
                height={100}
                alt="bitdinosaur"
                className="animate-bounce"
              ></Image>
              <p className="font-body tracking-wider">BitDinosaur</p>
            </div>
          }
        >
          <div className="ml-1 h-8 w-8 cursor-n-resize">
            <Image
              src={bitdinosaur}
              width={100}
              height={100}
              alt="bitdinosaur"
            />
          </div>
        </Tooltip>
      </div>

      <p className="text-center text-xs text-gray-700 xsmall:text-sm">
        <span className="font-body text-gray-700">©</span> 2022-2023 BitDinosaur
        All Rights Reserved
      </p>
    </div>
  );
}
