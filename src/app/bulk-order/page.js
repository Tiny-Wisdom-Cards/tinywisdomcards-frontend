import BulkOrderForm from "@/components/BulkOrderForm";
// import Footer from "@/components/Footer"
import BulkOrderHero from "@/components/BulkOrderHero";
import Wholesale from "@/components/Wholesale";
import Partnership from "@/components/Partnership";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function BulkOrderPage() {
  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <header className="bg-[url(/images/bg-primary.png)] bg-cover bg-center relative h-screen">
        <div className="absolute w-full h-full top-0 left-0 bg-[#121B2C]/97 z-10"></div>
        <div className="relative z-20">
          <Navbar />
          <BulkOrderHero />
        </div>
      </header>

      <Wholesale />

      <Partnership />

      <BulkOrderForm />

      <Footer />
    </div>
  );
}
