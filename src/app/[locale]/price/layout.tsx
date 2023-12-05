import { Suspense } from "react";
import Image from "next/image";
import GradeI from "@//asset/imgs/grade/Grad_03.png";
export default function IndexLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // cfc7f8 bdc2e8
  return (
    <section className="bg-gradient-to-t from-[#c7dcff] to-[#cfc7f8]">
      <section className="font-body relative min-h-screen bg-white/30 px-4 pt-2 backdrop-blur-lg sm:px-6 sm:pb-20 lg:px-12 xl:pb-6 3xl:px-20 3xl:pt-2.5 dark:bg-color-surface-100">
        {children}
      </section>
    </section>
  );
}
