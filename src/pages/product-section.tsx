import React from "react";
import {
  Package,
  Shield,
  Truck,
  BadgeCheck,
  ArrowRight,
  Star,
  ShoppingCart,
  Sparkles,
  CreditCard,
  RefreshCcw,
  MessageCircle,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Obat, Essen, Original, Unggulan } from "@/assets/photos";
import AppLayout from "@/layouts/app-layout";

type Product = {
  id: number;
  name: string;
  volume: string;
  description: string;
  price: number;
  originalPrice?: number;
  badge?: string;
  badgeVariant: "bestSeller" | "premium" | "popular" | "bestValue";
  isPackage: boolean;
  savings?: number;
  image: string;
};

type Feature = {
  icon: React.ReactNode;
  label: string;
};

const products: Product[] = [
  {
    id: 1,
    name: "Produk Unggulan",
    volume: "10ml, 20ml, 30ml",
    description:
      "Minyak biawak asli 100% murni, diekstrak dengan metode tradisional. Cocok untuk perawatan kulit dan kesehatan sehari-hari.",
    price: 75000,
    badge: "Best Seller",
    badgeVariant: "bestSeller",
    isPackage: false,
    image: Original,
  },
  {
    id: 2,
    name: "Minyak Biawak Unggulan",
    volume: "30ml",
    description:
      "Formula enhanced dengan campuran herbal pilihan untuk hasil yang lebih optimal. Diperkaya ekstrak alami Indonesia.",
    price: 95000,
    badge: "Premium",
    badgeVariant: "premium",
    isPackage: false,
    image: Unggulan,
  },
  {
    id: 3,
    name: "Essen Mancing",
    volume: "2 Botol",
    description:
      "Paket ekonomis berisi 2 botol Minyak Biawak Original. Hemat lebih banyak untuk pemakaian rutin keluarga.",
    price: 140000,
    originalPrice: 150000,
    badge: "Popular",
    badgeVariant: "popular",
    isPackage: true,
    savings: 10000,
    image: Essen,
  },
  {
    id: 4,
    name: "Obat Gatal",
    volume: "4 Botol",
    description:
      "Paket lengkap untuk keluarga berisi 4 botol Minyak Biawak Original. Pilihan terbaik dengan penghematan maksimal.",
    price: 260000,
    originalPrice: 300000,
    badge: "Best Value",
    badgeVariant: "bestValue",
    isPackage: true,
    savings: 40000,
    image: Obat,
  },
];

const features: Feature[] = [
  {
    icon: <Truck className="w-5 h-5" />,
    label: "Gratis Ongkir",
  },
  {
    icon: <CreditCard className="w-5 h-5" />,
    label: "COD Available",
  },
  {
    icon: <BadgeCheck className="w-5 h-5" />,
    label: "100% Original",
  },
  {
    icon: <RefreshCcw className="w-5 h-5" />,
    label: "Garansi Uang Kembali",
  },
];

function formatCurrency(amount: number): string {
  return `IDR ${amount.toLocaleString("id-ID")}`;
}

function getBadgeStyle(variant: Product["badgeVariant"]): string {
  const styles: Record<Product["badgeVariant"], string> = {
    bestSeller: "bg-gradient-to-r from-[#FC9150] to-[#FF6100] text-white",
    premium: "bg-gradient-to-r from-purple-500 to-purple-600 text-white",
    popular: "bg-gradient-to-r from-blue-500 to-blue-600 text-white",
    bestValue: "bg-gradient-to-r from-[#80CC28] to-green-600 text-white",
  };
  return styles[variant];
}

function ProductCard({ product }: { product: Product }) {
  return (
    <Card className="group rounded-2xl border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-xl hover:border-green-200 dark:hover:border-emerald-700 transition-all duration-300 overflow-hidden h-full flex flex-col">
      {/* Product Image */}
      <div className="relative h-48 bg-gradient-to-br from-green-50 via-white to-green-100 dark:from-emerald-950/40 dark:via-gray-900 dark:to-emerald-900/30 overflow-hidden">
        {/* Actual Product Image */}
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-110"
        />

        {/* Gradient Overlay for better badge visibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {/* Badge */}
        {product.badge && (
          <div className="absolute top-3 left-3 z-10">
            <Badge
              className={`${getBadgeStyle(product.badgeVariant)} px-3 py-1 text-xs font-semibold rounded-full shadow-md`}
            >
              <Star className="w-3 h-3 mr-1 fill-current" />
              {product.badge}
            </Badge>
          </div>
        )}
      </div>

      <CardContent className="p-5 lg:p-6 flex flex-col flex-grow">
        {/* Volume/Quantity */}
        <div className="flex items-center gap-2 mb-2">
          <Package className="w-4 h-4 text-[#80CC28]" />
          <span className="text-sm text-gray-500 dark:text-gray-400 font-medium">
            {product.volume}
          </span>
        </div>

        {/* Product Name */}
        <h3 className="text-lg lg:text-xl font-extrabold text-gray-900 dark:text-gray-50 mb-2">
          {product.name}
        </h3>

        {/* Description */}
        <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed mb-4 flex-grow">
          {product.description}
        </p>

        {/* Price Section */}
        <div className="mb-4">
          {product.isPackage && product.originalPrice ? (
            <div className="flex items-center gap-3">
              <span className="text-2xl font-extrabold text-[#80CC28]">
                {formatCurrency(product.price)}
              </span>
              <span className="text-sm text-gray-400 line-through">
                {formatCurrency(product.originalPrice)}
              </span>
            </div>
          ) : (
            <span className="text-2xl font-extrabold text-[#80CC28]">
              {formatCurrency(product.price)}
            </span>
          )}
        </div>

        {/* CTA Button */}
        <Button className="w-full rounded-xl bg-[#80CC28] hover:bg-green-600 text-white font-semibold py-5 transition-all duration-300 hover:shadow-lg hover:shadow-green-500/30 hover:scale-[1.02] flex items-center justify-center gap-2">
          <ShoppingCart className="w-5 h-5" />
          Beli Sekarang
        </Button>
      </CardContent>
    </Card>
  );
}

function FeatureItem({ feature }: { feature: Feature }) {
  return (
    <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-3 text-center sm:text-left">
      <div className="w-10 h-10 rounded-full bg-green-100 dark:bg-emerald-900/40 flex items-center justify-center flex-shrink-0">
        <span className="text-[#80CC28] dark:text-emerald-300">{feature.icon}</span>
      </div>
      <span className="text-sm font-medium text-gray-700 dark:text-gray-200">
        {feature.label}
      </span>
    </div>
  );
}

export default function ProductPage() {
  const whatsappNumber = "6281234567890";
  const whatsappMessage = encodeURIComponent(
    "Halo, saya tertarik untuk order Minyak Biawak dalam jumlah banyak. Bisa info lebih lanjut?"
  );

  return (
    <AppLayout>
    <div className="w-full bg-white dark:bg-gray-950 min-h-screen">
      {/* ===== HERO SECTION ===== */}
      <section className="bg-gradient-to-br from-white via-green-50/30 to-white dark:from-gray-950 dark:via-emerald-950/30 dark:to-gray-950 py-12 lg:py-16">
        <div className="container mx-auto px-6">
          <div className="text-center space-y-4 max-w-3xl mx-auto">
            {/* Badge */}
            <Badge className="bg-green-100 text-green-700 dark:bg-emerald-950/40 dark:text-emerald-300 px-4 py-1.5 rounded-full text-sm font-medium hover:bg-green-100">
              <Sparkles className="w-4 h-4 mr-2" />
              Produk Premium Asli Indonesia
            </Badge>

            {/* Main Heading */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
              <span className="text-gray-900 dark:text-gray-50">Produk </span>
              <span className="bg-gradient-to-r from-[#80CC28] via-green-600 to-[#80CC28] text-transparent bg-clip-text">
                Kami
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
              Temukan berbagai pilihan Minyak Biawak premium dengan kualitas
              terjamin. Dari produk satuan hingga paket hemat untuk keluarga
              Anda.
            </p>
          </div>
        </div>
      </section>

      {/* ===== FEATURES STRIP ===== */}
      <section className="py-8 bg-gray-50 dark:bg-gray-900/30 border-y border-gray-100 dark:border-gray-800">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
            {features.map((feature, index) => (
              <FeatureItem key={index} feature={feature} />
            ))}
          </div>
        </div>
      </section>

      {/* ===== PRODUCT GRID SECTION ===== */}
      <section className="py-16 lg:py-24 bg-white dark:bg-gray-950">
        <div className="container mx-auto px-6">
          {/* Section Header */}
          <div className="text-center mb-12 lg:mb-16 space-y-2">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-50">
              Pilih Produk Terbaik Anda
            </h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto text-lg">
              Semua produk dijamin 100% asli dan berkualitas tinggi
            </p>
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 max-w-7xl mx-auto">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          {/* Additional Info */}
          <div className="mt-12 text-center">
            <div className="inline-flex items-center gap-2 bg-green-50 dark:bg-emerald-950/40 px-6 py-3 rounded-full">
              <Shield className="w-5 h-5 text-[#80CC28]" />
              <span className="text-sm font-medium text-gray-700 dark:text-gray-200">
                Semua produk dilengkapi dengan garansi keaslian dan jaminan uang
                kembali
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ===== CTA BANNER SECTION ===== */}
      <section className="py-2 lg:py-2">
        <div className="container mx-auto px-6">
          <div className="bg-gradient-to-r from-[#80CC28] via-green-600 to-[#80CC28] rounded-3xl p-10 lg:p-16 text-center text-white relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 left-0 w-48 h-48 bg-white/10 rounded-full -translate-x-1/2 -translate-y-1/2" />
            <div className="absolute top-1/2 left-10 w-24 h-24 bg-white/5 rounded-full" />
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-white/10 rounded-full translate-x-1/3 translate-y-1/3" />
            <div className="absolute top-10 right-20 w-16 h-16 bg-white/10 rounded-full" />
            <div className="absolute bottom-10 left-1/4 w-12 h-12 bg-white/5 rounded-full" />

            {/* Content */}
            <div className="relative z-10 space-y-6">
              <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium">
                <Package className="w-4 h-4" />
                Pembelian Grosir & Reseller
              </div>

              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
                Butuh Order dalam Jumlah Banyak?
              </h2>

              <p className="text-green-100 max-w-2xl mx-auto text-base lg:text-lg">
                Dapatkan harga spesial untuk pembelian grosir dan reseller.
                Hubungi kami langsung via WhatsApp untuk penawaran terbaik!
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
                <Button
                  className="rounded-xl bg-white text-green-600 hover:bg-gray-100 px-10 lg:px-12 py-6 lg:py-7 text-base lg:text-lg font-bold shadow-xl transition-all duration-300 hover:scale-105 flex items-center gap-3"
                  onClick={() =>
                    window.open(
                      `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`,
                      "_blank"
                    )
                  }
                >
                  <MessageCircle className="w-6 h-6" />
                  Hubungi via WhatsApp
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </div>

              {/* Trust indicators */}
              <div className="flex flex-wrap items-center justify-center gap-6 pt-6">
                <div className="flex items-center gap-2 text-sm text-green-100">
                  <BadgeCheck className="w-5 h-5" />
                  <span>Respon Cepat</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-green-100">
                  <Truck className="w-5 h-5" />
                  <span>Pengiriman Seluruh Indonesia</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-green-100">
                  <Shield className="w-5 h-5" />
                  <span>Transaksi Aman</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
    </AppLayout>
  );
}