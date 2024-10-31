import {ThemeProvider} from "@/components/ThemeProvider";
import Footer from "@/components/ui/shared/Footer";
import Header from "@/components/ui/shared/Header";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <div className="flex h-screen flex-col">
        <Header></Header>
        <main className="flex-1">{children}</main>
        <Footer></Footer>
      </div>
    </ThemeProvider>
  );
}
