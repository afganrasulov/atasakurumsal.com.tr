import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";

export interface BreadcrumbItem {
    label: string;
    href?: string;
}

interface BreadcrumbProps {
    items: BreadcrumbItem[];
}

export function Breadcrumb({ items }: BreadcrumbProps) {
    return (
        <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex items-center space-x-2 text-sm text-gray-400">
                <li>
                    <Link
                        href="/"
                        className="flex items-center hover:text-white transition-colors duration-200"
                        title="Ana Sayfa"
                    >
                        <Home className="w-4 h-4" />
                        <span className="sr-only">Ana Sayfa</span>
                    </Link>
                </li>
                {items.length > 0 && (
                    <li>
                        <ChevronRight className="w-4 h-4 text-gray-600" />
                    </li>
                )}
                {items.map((item, index) => {
                    const isLast = index === items.length - 1;

                    return (
                        <li key={item.label} className="flex items-center space-x-2">
                            {isLast || !item.href ? (
                                <span className="text-gray-200 font-medium" aria-current="page">
                                    {item.label}
                                </span>
                            ) : (
                                <>
                                    <Link
                                        href={item.href}
                                        className="hover:text-white transition-colors duration-200"
                                    >
                                        {item.label}
                                    </Link>
                                    <ChevronRight className="w-4 h-4 text-gray-600" />
                                </>
                            )}
                        </li>
                    );
                })}
            </ol>
        </nav>
    );
}
