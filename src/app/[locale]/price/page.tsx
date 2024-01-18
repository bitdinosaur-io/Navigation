"use client";
import { useRef } from "react";
import Image from "next/image";
import { useState, createContext, useContext, useReducer } from "react";
import { Fragment, useEffect } from "react";
import { redirect } from "next/navigation";
// import { useTheme } from "next-themes";
import { TopNav } from "@/components/ui/top-nav";
import { Footer } from "@/components/ui/Price/footer";
import { Zap, Check, Rocket, Crown } from "lucide-react";
import cn from "classnames";
import { useLocale, useTranslations } from "next-intl";
import {
  IconBolt,
  IconPlus,
  IconPrism,
  IconRocket,
  IconX,
} from "@tabler/icons-react";
import { Accordion, AccordionItem } from "@nextui-org/react";

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
        <div className="w-full text-gray-600 px-4">
          <div className="relative max-w-xl mx-auto sm:text-center">
            <h3 className="text-gray-800 text-3xl font-semibold sm:text-5xl">
              A Universal Tool For All Your Needs At Your Price Point
            </h3>
            <div className="mt-3 max-w-xl">
              <p>
                Our Pricing plan are designed to be affordable, flexible, and
                tallored to your unique needs
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

      <div className="w-full h-fit flex justify-between items-start px-4 my-24">
        <div className="w-1/3 h-fit flex flex-col gap-3">
          <h2 className="font-bold text-4xl">FAQ</h2>
          <div className="flex flex-col">
            <p className="font-bold text-lg">Still Need Help ?</p>
            <p className="font-bold text-lg text-indigo-600">Contact Us</p>
          </div>
        </div>
        <div className="w-2/3 h-fit">
          <Accordion className="w-full font-bold" fullWidth={true}>
            <AccordionItem
              key="1"
              aria-label="Accordion 1"
              title="Do I need a credit card to start the trial?"
              indicator={({ isOpen }) => (isOpen ? <IconX /> : <IconPlus />)}
              className="font-normal"
            >
              No, we don’t ask for your credit card upfront. Using
              cryptocurrency was recommended.
            </AccordionItem>
            <AccordionItem
              key="2"
              aria-label="Accordion 2"
              title="How do I change my plan?"
              indicator={({ isOpen }) => (isOpen ? <IconX /> : <IconPlus />)}
              className="font-normal"
            >
              You can change your plan in the account settings.
            </AccordionItem>
            <AccordionItem
              key="3"
              aria-label="Accordion 3"
              title="Can I cancel a subscription at any time?"
              indicator={({ isOpen }) => (isOpen ? <IconX /> : <IconPlus />)}
              className="font-normal"
            >
              Yes, absolutely, you can cancel your subscription at any time.
            </AccordionItem>
          </Accordion>
        </div>
      </div>

      <footer className="flex w-full h-full m-auto flex-wrap">
        <div className="w-full bottom-0">
          <Footer />
        </div>
      </footer>
    </div>
  );
}
