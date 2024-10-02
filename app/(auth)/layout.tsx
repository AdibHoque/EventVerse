import Footer from "@/components/ui/shared/Footer";
import Header from "@/components/ui/shared/Header";

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex h-screen flex-col">
      <Header></Header>
      <main className="flex-1">{children}</main>
      <Footer></Footer>
    </div>
  );
}
