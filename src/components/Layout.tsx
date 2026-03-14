import Navbar from "./Navbar";
import Footer from "./Footer";
import { MessageCircle } from "lucide-react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen bg-background relative selection:bg-primary/30 selection:text-primary-foreground">
      <Navbar />
      <main className="pt-16">{children}</main>
      <Footer />
      
      {/* Floating WhatsApp Widget */}
      <a
        href="https://wa.me/919718417771?text=Hi!%20I'm%20interested%20in%20your%20services."
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg hover:scale-110 hover:shadow-[0_0_40px_-10px_#25D366] transition-all duration-300 pointer-events-auto"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle size={32} />
      </a>
    </div>
  );
};

export default Layout;
