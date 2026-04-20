'use client';

import Clarity from '@microsoft/clarity';

const isClient = () => typeof window !== 'undefined';

export function initClarity(projectId?: string) {
  if (!isClient() || !projectId) return;
  try {
    Clarity.init(projectId);
  } catch (err) {
    if (process.env.NODE_ENV === 'development') console.warn('Clarity init failed:', err);
  }
}

export function identifyClarity(
  customId: string,
  customSessionId?: string,
  customPageId?: string,
  friendlyName?: string,
) {
  if (!isClient() || !customId) return;
  try {
    Clarity.identify(customId, customSessionId, customPageId, friendlyName);
  } catch (err) {
    if (process.env.NODE_ENV === 'development') console.warn('Clarity.identify failed:', err);
  }
}

export function setClarityTag(key: string, value: string | string[]) {
  if (!isClient()) return;
  try {
    Clarity.setTag(key, value);
  } catch { /* ignore */ }
}

export function clarityEvent(eventName: string) {
  if (!isClient()) return;
  try {
    Clarity.event(eventName);
  } catch { /* ignore */ }
}

export function clarityConsent(consent = true) {
  if (!isClient()) return;
  try {
    Clarity.consent(consent);
  } catch { /* ignore */ }
}

export function upgradeClarity(reason: string) {
  if (!isClient()) return;
  try {
    Clarity.upgrade(reason);
  } catch { /* ignore */ }
}