'use client';

import { useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';
import { initClarity, identifyClarity, setClarityTag, clarityEvent } from '@/lib/clarity';
import { getOrCreateAnonId } from '@/utils/anonId';

const PROJECT_ID = process.env.NEXT_PUBLIC_CLARITY_PROJECT_ID ?? '';

function resolvePageName(pathname: string): string {
    if (pathname === '/') return 'Home';
    if (pathname.startsWith('/blog/') && pathname.length > 6) return 'Blog Post';
    if (pathname === '/blog' || pathname === '/blog/') return 'Blog';
    if (pathname.startsWith('/game/palworld')) return 'Palworld Hosting';
    if (pathname.startsWith('/game/minecraft-java')) return 'Minecraft Java Hosting';
    if (pathname.startsWith('/game/minecraft-bedrock')) return 'Minecraft Bedrock Hosting';
    if (pathname.startsWith('/game/minecraft')) return 'Minecraft Hosting';
    if (pathname.startsWith('/game/vrising')) return 'V Rising Hosting';
    if (pathname.startsWith('/game/enshrouded')) return 'Enshrouded Hosting';
    if (pathname.startsWith('/game/hytale')) return 'Hytale Hosting';
    if (pathname.startsWith('/game/')) return 'Game Hosting';
    if (pathname === '/games') return 'Games';
    if (pathname === '/about') return 'About';
    if (pathname === '/terms') return 'Terms';
    if (pathname === '/privacy') return 'Privacy';
    if (pathname === '/affiliate') return 'Affiliate';
    if (pathname === '/affiliate-apply') return 'Affiliate Apply';
    return 'Unknown';
}

export default function ClarityProvider() {
    const pathname = usePathname();
    const initialized = useRef(false);

    // Initialize once on mount
    useEffect(() => {
        if (initialized.current) return;
        initialized.current = true;
        initClarity(PROJECT_ID);
        const anonId = getOrCreateAnonId();
        if (anonId) identifyClarity(anonId);
    }, []);

    // Track every page navigation
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