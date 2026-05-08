'use client';

import { useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';
import { initClarity, identifyClarity, setClarityTag, clarityEvent } from '@/lib/clarity';
import { getOrCreateAnonId } from '@/utils/anonId';

const PROJECT_ID = process.env.NEXT_PUBLIC_CLARITY_PROJECT_ID ?? '';

function resolvePageName(pathname: string): string {
    if (pathname === '/') return 'Home';

    // Blog
    if (pathname.startsWith('/blog/') && pathname.length > 6) return 'Blog Post';
    if (pathname === '/blog' || pathname === '/blog/') return 'Blog';

    // Product
    if (pathname === '/features' || pathname.startsWith('/features/')) return 'Features';
    if (pathname === '/pricing' || pathname.startsWith('/pricing/')) return 'Pricing';
    if (pathname === '/changelog' || pathname.startsWith('/changelog/')) return 'Changelog';
    if (pathname === '/download' || pathname.startsWith('/download/')) return 'Download';
    if (pathname === '/integration' || pathname.startsWith('/integration/')) return 'Integrations';
    if (pathname === '/brandkit' || pathname.startsWith('/brandkit/')) return 'Brand Kit';
    if (pathname === '/analytics' || pathname.startsWith('/analytics/')) return 'Analytics';

    // Use cases / customers
    if (pathname === '/customer' || pathname.startsWith('/customer/')) return 'Customer';
    if (pathname === '/case-study' || pathname.startsWith('/case-study/')) return 'Case Study';
    if (pathname === '/process' || pathname.startsWith('/process/')) return 'Process';

    // Company
    if (pathname === '/about' || pathname.startsWith('/about/')) return 'About';
    if (pathname === '/career' || pathname.startsWith('/career/')) return 'Careers';
    if (pathname === '/press' || pathname.startsWith('/press/')) return 'Press';
    if (pathname === '/our-manifesto' || pathname.startsWith('/our-manifesto/')) return 'Our Manifesto';
    if (pathname === '/contact-us' || pathname.startsWith('/contact-us/')) return 'Contact Us';

    // Resources
    if (pathname === '/documentation' || pathname.startsWith('/documentation/')) return 'Documentation';
    if (pathname === '/faq' || pathname.startsWith('/faq/')) return 'FAQ';
    if (pathname === '/glossary' || pathname.startsWith('/glossary/')) return 'Glossary';

    // Referral & Affiliates
    if (pathname === '/affiliates' || pathname.startsWith('/affiliates/')) return 'Affiliates';
    if (pathname === '/affiliate-policy' || pathname.startsWith('/affiliate-policy/')) return 'Affiliate Policy';
    if (pathname === '/referral-program' || pathname.startsWith('/referral-program/')) return 'Referral Program';

    // Legal & Compliance
    if (pathname === '/privacy-policy' || pathname.startsWith('/privacy-policy/')) return 'Privacy Policy';
    if (pathname === '/legal' || pathname.startsWith('/legal/')) return 'Legal';
    if (pathname === '/gdpr' || pathname.startsWith('/gdpr/')) return 'GDPR';

    // Auth
    if (pathname === '/login' || pathname.startsWith('/login/')) return 'Login';

    return 'Unknown';
}

export default function ClarityProvider() {
    const pathname = usePathname();
    const initialized = useRef(false);

    useEffect(() => {
        if (initialized.current) return;
        initialized.current = true;
        initClarity(PROJECT_ID);
        const anonId = getOrCreateAnonId();
        if (anonId) identifyClarity(anonId);
    }, []);

    useEffect(() => {
        if (!initialized.current) return;
        const pageName = resolvePageName(pathname);
        setClarityTag('page', pageName);
        setClarityTag('path', pathname);
        clarityEvent(`page_view:${pageName}`);
        if (process.env.NODE_ENV === 'development') {
            console.debug('[Clarity] page_view →', pageName, pathname);
        }
    }, [pathname]);

    return null;
}