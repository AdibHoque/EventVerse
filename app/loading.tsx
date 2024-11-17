import Footer from "@/components/ui/shared/Footer";
import Header from "@/components/ui/shared/Header";

export default function Loading() {
  return (
    <div className="h-screen flex flex-col justify-between">
      <Header></Header>

      <div className="h-full flex-1 flex justify-center items-center">
        <div className="loader"></div>
      </div>

      <Footer></Footer>
    </div>
  );
}
