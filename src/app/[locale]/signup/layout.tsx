export default function ContactUsLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="w-full min-h-screen max-h-screen h-full flex bg-white mid:p-8">
      {children}
    </section>
  );
}
