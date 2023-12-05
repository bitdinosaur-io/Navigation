export default function ContactUsLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="w-full min-h-screen max-h-screen h-full p-8 flex bg-white">
      {children}
    </section>
  );
}
