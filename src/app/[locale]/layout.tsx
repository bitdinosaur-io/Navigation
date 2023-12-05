import { Suspense } from "react";
import { NextIntlClientProvider } from "next-intl";

export function generateStaticParams() {
  return [{ locale: "en" }, { locale: "cn" }];
}

export default async function IndexLayout({
  children,
  params: { locale },
}: any) {
  let messages;
  try {
    messages = (await import(`../../messages/${locale}.json`)).default;
  } catch (error) {}

  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      <section className="">{children}</section>
    </NextIntlClientProvider>
  );
}
