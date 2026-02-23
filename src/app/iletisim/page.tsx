"use client";

import { useState } from "react";
import { PageTransition } from "@/shared/components/PageTransition";
import { SectionHeader } from "@/shared/components/ui/SectionHeader";
import { Button } from "@/shared/components/ui/Button";
import { COMPANY_INFO } from "@/shared/constants/company";
import { formatPhone } from "@/shared/lib/utils";
import { supabase } from "@/shared/lib/supabase";
import { Send, Phone, Mail, MapPin, CheckCircle, AlertCircle, Loader2 } from "lucide-react";
import { z } from "zod";

const contactSchema = z.object({
    name: z.string().min(2, "İsim en az 2 karakter olmalıdır"),
    phone: z.string().min(10, "Geçerli bir telefon numarası giriniz"),
    email: z.string().email("Geçerli bir e-posta adresi giriniz"),
    message: z.string().min(10, "Mesaj en az 10 karakter olmalıdır"),
});

type FormErrors = Partial<Record<keyof z.infer<typeof contactSchema>, string>>;

export default function IletisimPage() {
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        email: "",
        message: "",
    });
    const [errors, setErrors] = useState<FormErrors>({});
    const [submitted, setSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);
    const [submitError, setSubmitError] = useState<string | null>(null);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
        if (errors[name as keyof FormErrors]) {
            setErrors((prev) => ({ ...prev, [name]: undefined }));
        }
        if (submitError) setSubmitError(null);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const result = contactSchema.safeParse(formData);
        if (!result.success) {
            const fieldErrors: FormErrors = {};
            result.error.issues.forEach((err) => {
                const field = err.path[0] as keyof FormErrors;
                fieldErrors[field] = err.message;
            });
            setErrors(fieldErrors);
            return;
        }

        setErrors({});
        setLoading(true);
        setSubmitError(null);

        const { error } = await supabase.rpc("submit_contact_form", {
            p_name: result.data.name,
            p_phone: result.data.phone,
            p_email: result.data.email,
            p_message: result.data.message,
        });

        setLoading(false);

        if (error) {
            setSubmitError("Mesaj gönderilemedi. Lütfen tekrar deneyin.");
            return;
        }

        setSubmitted(true);
    };

    return (
        <PageTransition>
            <section className="py-20 bg-gradient-to-br from-slate-50 to-white">
                <div className="container mx-auto px-4">
                    <SectionHeader
                        badge="İletişim"
                        title="Bizimle İletişime Geçin"
                        description="Uzman danışmanlarımız en kısa sürede size dönüş yapacaktır."
                    />
                </div>
            </section>

            <section className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-6xl">
                        {/* Form */}
                        <div>
                            {submitted ? (
                                <div className="bg-green-50 rounded-3xl p-12 border border-green-200 text-center">
                                    <CheckCircle size={48} className="text-green-600 mx-auto mb-4" />
                                    <h3 className="text-2xl font-bold text-slate-900 mb-2">
                                        Mesajınız Alındı!
                                    </h3>
                                    <p className="text-slate-600">
                                        En kısa sürede sizinle iletişime geçeceğiz.
                                    </p>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div>
                                        <label htmlFor="name" className="block text-sm font-bold text-slate-700 mb-2">
                                            İsim *
                                        </label>
                                        <input
                                            id="name"
                                            name="name"
                                            type="text"
                                            value={formData.name}
                                            onChange={handleChange}
                                            className={`w-full px-5 py-4 rounded-2xl border ${errors.name ? "border-red-300 bg-red-50" : "border-slate-200"} focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-slate-900`}
                                            placeholder="Adınız Soyadınız"
                                        />
                                        {errors.name && (
                                            <p className="mt-1 text-sm text-red-500 flex items-center gap-1">
                                                <AlertCircle size={14} /> {errors.name}
                                            </p>
                                        )}
                                    </div>

                                    <div>
                                        <label htmlFor="phone" className="block text-sm font-bold text-slate-700 mb-2">
                                            Telefon *
                                        </label>
                                        <input
                                            id="phone"
                                            name="phone"
                                            type="tel"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            className={`w-full px-5 py-4 rounded-2xl border ${errors.phone ? "border-red-300 bg-red-50" : "border-slate-200"} focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-slate-900`}
                                            placeholder="+90 5XX XXX XX XX"
                                        />
                                        {errors.phone && (
                                            <p className="mt-1 text-sm text-red-500 flex items-center gap-1">
                                                <AlertCircle size={14} /> {errors.phone}
                                            </p>
                                        )}
                                    </div>

                                    <div>
                                        <label htmlFor="email" className="block text-sm font-bold text-slate-700 mb-2">
                                            E-posta *
                                        </label>
                                        <input
                                            id="email"
                                            name="email"
                                            type="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            className={`w-full px-5 py-4 rounded-2xl border ${errors.email ? "border-red-300 bg-red-50" : "border-slate-200"} focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-slate-900`}
                                            placeholder="ornek@email.com"
                                        />
                                        {errors.email && (
                                            <p className="mt-1 text-sm text-red-500 flex items-center gap-1">
                                                <AlertCircle size={14} /> {errors.email}
                                            </p>
                                        )}
                                    </div>

                                    <div>
                                        <label htmlFor="message" className="block text-sm font-bold text-slate-700 mb-2">
                                            Mesajınız *
                                        </label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            rows={5}
                                            value={formData.message}
                                            onChange={handleChange}
                                            className={`w-full px-5 py-4 rounded-2xl border ${errors.message ? "border-red-300 bg-red-50" : "border-slate-200"} focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none text-slate-900`}
                                            placeholder="Size nasıl yardımcı olabiliriz?"
                                        />
                                        {errors.message && (
                                            <p className="mt-1 text-sm text-red-500 flex items-center gap-1">
                                                <AlertCircle size={14} /> {errors.message}
                                            </p>
                                        )}
                                    </div>

                                    {submitError && (
                                        <div className="bg-red-50 rounded-2xl p-4 border border-red-200 flex items-center gap-3">
                                            <AlertCircle size={20} className="text-red-500 shrink-0" />
                                            <p className="text-sm text-red-600">{submitError}</p>
                                        </div>
                                    )}

                                    <Button type="submit" size="lg" className="w-full" disabled={loading}>
                                        {loading ? (
                                            <>
                                                <Loader2 size={20} className="animate-spin" />
                                                Gönderiliyor...
                                            </>
                                        ) : (
                                            <>
                                                <Send size={20} />
                                                İletişime Geç
                                            </>
                                        )}
                                    </Button>
                                </form>
                            )}
                        </div>

                        {/* Contact Info */}
                        <div className="space-y-8">
                            <div className="bg-slate-50 rounded-3xl p-8 border border-slate-100">
                                <h3 className="text-xl font-bold text-slate-900 mb-6">İletişim Bilgileri</h3>
                                <div className="space-y-5">
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 rounded-xl bg-blue-600 text-white flex items-center justify-center shrink-0">
                                            <Phone size={20} />
                                        </div>
                                        <div>
                                            <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">Telefon</div>
                                            <a href={`tel:${formatPhone(COMPANY_INFO.phone)}`} className="text-lg font-bold text-slate-900 hover:text-blue-600">
                                                {COMPANY_INFO.phone}
                                            </a>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 rounded-xl bg-blue-600 text-white flex items-center justify-center shrink-0">
                                            <Mail size={20} />
                                        </div>
                                        <div>
                                            <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">E-posta</div>
                                            <a href={`mailto:${COMPANY_INFO.email}`} className="text-lg font-bold text-slate-900 hover:text-blue-600">
                                                {COMPANY_INFO.email}
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {Object.values(COMPANY_INFO.offices).map((office) => (
                                <div key={office.city} className="bg-slate-50 rounded-3xl p-8 border border-slate-100">
                                    <div className="flex items-center gap-3 mb-3">
                                        <MapPin size={20} className="text-blue-600" />
                                        <h3 className="text-lg font-bold text-slate-900">{office.city} Ofisi</h3>
                                    </div>
                                    <address className="not-italic text-slate-600 leading-relaxed text-sm">
                                        {office.address}
                                    </address>
                                </div>
                            ))}

                            <div className="bg-blue-50 rounded-3xl p-8 border border-blue-100">
                                <h3 className="text-lg font-bold text-slate-900 mb-2">Çalışma Saatleri</h3>
                                <div className="space-y-2 text-sm text-slate-600">
                                    <div className="flex justify-between">
                                        <span>Pazartesi – Cuma</span>
                                        <span className="font-bold text-slate-900">{COMPANY_INFO.hours.weekday}</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span>Cumartesi</span>
                                        <span className="font-bold text-slate-500">{COMPANY_INFO.hours.saturday}</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span>Pazar</span>
                                        <span className="font-bold text-slate-500">{COMPANY_INFO.hours.sunday}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </PageTransition>
    );
}
