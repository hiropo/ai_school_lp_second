import { cn } from "@/lib/utils";
import React from "react";

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
    children: React.ReactNode;
    className?: string;
    id?: string;
}

export function Section({ children, className, id, ...props }: SectionProps) {
    return (
        <section
            id={id}
            className={cn("py-16 md:py-24 px-4 md:px-6 lg:px-8 max-w-7xl mx-auto", className)}
            {...props}
        >
            {children}
        </section>
    );
}
