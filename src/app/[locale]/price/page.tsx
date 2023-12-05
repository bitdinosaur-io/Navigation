"use client";
import { useRef } from "react";
import Image from "next/image";
import { useState, createContext, useContext, useReducer } from "react";
import { Fragment, useEffect } from "react";
import { redirect } from "next/navigation";
// import { useTheme } from "next-themes";
import { TopNav } from "@/components/ui/top-nav";
import { Zap, Check, Rocket, Crown } from "lucide-react";
import cn from "classnames";
import { useLocale, useTranslations } from "next-intl";
import { IconBolt, IconPrism, IconRocket } from "@tabler/icons-react";

export default function Price() {
  const t = useTranslations("Price");

  const plans = [
    {
      name: t("PlanI.name"),
      desc: t("PlanI.desc"),
      price: "$0",
      isMostPop: false,
      features: [t("PlanI.Features.I"), t("PlanI.Features.II")],
      icon: <IconBolt strokeWidth={2.5} />,
    },
    {
      name: t("PlanII.name"),
      desc: t("PlanII.desc"),
      price: "$199",
      isMostPop: true,
      features: [
        t("PlanII.Features.I"),
        t("PlanII.Features.II"),
        t("PlanII.Features.III"),
        t("PlanII.Features.IV"),
      ],
      icon: <IconRocket strokeWidth={2.5} />,
    },
    {
      name: t("PlanIII.name"),
      desc: t("PlanIII.desc"),
      price: "$199 - 999",
      isMostPop: false,
      features: [
        t("PlanIII.Features.I"),
        t("PlanIII.Features.II"),
        t("PlanIII.Features.III"),
        t("PlanIII.Features.IV"),
        t("PlanIII.Features.V"),
        t("PlanIII.Features.VI"),
      ],
      icon: <IconPrism strokeWidth={2.5} />,
    },
  ];
  return (
    <div className="w-full h-full">
      <div className="mb-14 flex flex-wrap">
        <div className="w-full sm:mb-0 ">
          <TopNav />
        </div>
      </div>
      <section className="pt-4 pb-14">
        <div className="max-w-screen-xl mx-auto text-gray-600 px-14">
          <div className="relative max-w-xl mx-auto sm:text-center">
            <h3 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
              Start By Picking Your Plan
            </h3>
            <div className="mt-3 max-w-xl">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                efficitur consequat nunc.
              </p>
            </div>
          </div>

          <div className="mt-16 justify-center gap-6 sm:grid sm:grid-cols-2 sm:space-y-0 lg:grid-cols-3">
            {plans.map((item, idx) => (
              <div
                key={idx}
                className={cn(
                  "relative flex-1 h-[33rem] flex items-stretch flex-col rounded-2xl shadow-lg mt-6 sm:mt-0",
                  {
                    "bg-indigo-700 shadow-indigo-700": item.isMostPop,
                    "bg-white shadow-black/10": !item.isMostPop,
                  }
                )}
              >
                <div className="p-8 flex items-center justify-between">
                  <div className="space-y-1">
                    <span
                      className={cn(" font-medium text-sm", {
                        "text-white": item.isMostPop,
                        "text-indigo-600": !item.isMostPop,
                      })}
                    >
                      {item.name}
                    </span>
                    <div
                      className={cn(" text-4xl font-semibold", {
                        "text-white": item.isMostPop,
                        "text-gray-800": !item.isMostPop,
                      })}
                    >
                      {item.price}{" "}
                      <span
                        className={cn("text-xl font-medium", {
                          "text-white": item.isMostPop,
                          "text-gray-800": !item.isMostPop,
                        })}
                      >
                        /mo
                      </span>
                    </div>
                  </div>
                  <div
                    className={cn("rounded-full  p-2", {
                      "bg-white/5": item.isMostPop,
                      "bg-indigo-100": !item.isMostPop,
                    })}
                  >
                    <div
                      className={cn("rounded-full p-2", {
                        "bg-white/10 text-white/80": item.isMostPop,
                        "bg-indigo-200 text-indigo-500": !item.isMostPop,
                      })}
                    >
                      {item.icon}
                    </div>
                  </div>
                </div>
                <ul
                  className={cn("px-8 py-4 space-y-3 flex-1", {
                    "text-white/60": item.isMostPop,
                    "text-gray-600": !item.isMostPop,
                  })}
                >
                  {item.features.map((featureItem, idx) => (
                    <li key={idx} className="flex items-center gap-4">
                      <div className="p-1 bg-indigo-50 rounded-full">
                        <Check
                          size={16}
                          strokeWidth={3}
                          className="text-indigo-500"
                        />
                      </div>
                      <span
                        className={cn({
                          "text-gray-200": item.isMostPop,
                          "text-gray-600": !item.isMostPop,
                        })}
                      >
                        {featureItem}
                      </span>
                    </li>
                  ))}
                </ul>

                <div
                  className={cn("p-8 space-y-4", {
                    "text-white": item.isMostPop,
                    "text-gray-800": !item.isMostPop,
                  })}
                >
                  <p>{item.desc}</p>
                  <button
                    className={cn(
                      "px-3 py-3 rounded-lg w-full font-semibold text-sm duration-150",
                      {
                        " text-indigo-600 bg-white hover:bg-white/90 active:bg-white/50":
                          item.isMostPop,
                        "text-white bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-700":
                          !item.isMostPop,
                      }
                    )}
                  >
                    Get Started
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
