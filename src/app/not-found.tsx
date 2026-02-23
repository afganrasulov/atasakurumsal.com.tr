import Link from "next/link";
import { ArrowLeft, Home } from "lucide-react";

export default function NotFound() {
    return (
        <div className="min-h-[70vh] flex items-center justify-center">
            <div className="text-center px-4">
                <div className="text-8xl font-black text-slate-200 mb-4">404</div>
                <h1 className="text-3xl font-bold text-slate-900 mb-3">
                    Sayfa Bulunamadı
                </h1>
                <p className="text-slate-500 mb-8 max-w-md mx-auto">
                    Aradığınız sayfa taşınmış veya kaldırılmış olabilir.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                    <Link
                        href="/"
                        className="inline-flex items-center gap-2 bg-slate-900 text-white px-8 py-3 rounded-full font-bold hover:bg-blue-600 transition-all active:scale-95"
                    >
                        <Home size={18} />
                        Ana Sayfaya Dön
                    </Link>
                    <Link
                        href="/iletisim"
                        className="inline-flex items-center gap-2 bg-white text-slate-700 border border-slate-200 px-8 py-3 rounded-full font-bold hover:bg-slate-50 transition-all active:scale-95"
                    >
                        <ArrowLeft size={18} />
                        İletişim
                    </Link>
                </div>
            </div>
        </div>
    );
}
