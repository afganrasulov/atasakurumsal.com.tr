export interface Service {
    id: string;
    title: string;
    description: string;
    icon: string;
    href: string;
    color: string;
}

export interface NavLink {
    href: string;
    label: string;
}

export interface Office {
    city: string;
    address: string;
}

export interface FAQItem {
    question: string;
    answer: string;
}

export interface PricingRow {
    category: string;
    domestic: string;
    abroad: string;
    transfer: string;
}

export interface ContactFormData {
    name: string;
    phone: string;
    email: string;
    message: string;
}
