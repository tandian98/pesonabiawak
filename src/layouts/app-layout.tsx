import { type ReactNode } from "react";
import Header from "../components/navbar";
import Footer from "@/components/footer";

interface LayoutProps {
  children: ReactNode;
}

export default function AppLayout({ children }: LayoutProps) {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header selalu muncul */}
      <Header />

      {/* Konten utama */}
      <main className="flex-1">{children}</main>

      {/* Footer selalu muncul */}
      <Footer />
    </div>
  );
}