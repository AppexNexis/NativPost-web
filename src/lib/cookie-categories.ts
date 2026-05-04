export type CookieCategory = {
    id: 'essential' | 'analytics' | 'advertising' | 'personalization';
    title: string;
    description: string;
    required: boolean;
    cookies: {
        name: string;
        purpose: string;
        duration: string;
    }[];
};

export const cookieCategories: CookieCategory[] = [
    {
        id: 'essential',
        title: 'Essential Cookies',
        description:
            'Required for the website to function. These enable core features like navigation, theme preferences, and secure sessions. They cannot be disabled.',
        required: true,
        cookies: [
            {
                name: 'np_cookie_consent',
                purpose: 'Stores your cookie consent decision',
                duration: '1 year',
            },
            {
                name: 'np_cookie_preferences',
                purpose: 'Stores your detailed cookie category preferences',
                duration: '1 year',
            },
            {
                name: 'theme',
                purpose: 'Remembers your light or dark mode preference',
                duration: 'Session',
            },
        ],
    },
    {
        id: 'analytics',
        title: 'Analytics Cookies',
        description:
            'Help us understand how visitors use NativPost so we can improve the experience. All data is anonymised and never sold.',
        required: false,
        cookies: [
            {
                name: 'ph_*',
                purpose: 'PostHog product analytics — tracks page views and feature usage',
                duration: '1 year',
            },
            {
                name: '_clck, _clsk',
                purpose: 'Microsoft Clarity session recording and heatmaps',
                duration: '1 year',
            },
            {
                name: '_ga, _gid',
                purpose: 'Google Analytics — distinguishes unique users and sessions',
                duration: '2 years',
            },
        ],
    },
    {
        id: 'advertising',
        title: 'Marketing Cookies',
        description:
            'Used to show you relevant ads for NativPost across other platforms and to measure the effectiveness of our campaigns.',
        required: false,
        cookies: [
            {
                name: '_fbp',
                purpose: 'Facebook Pixel — tracks conversions from Facebook ads',
                duration: '3 months',
            },
            {
                name: 'google_ads',
                purpose: 'Google Ads — measures ad performance and remarketing',
                duration: '90 days',
            },
        ],
    },
    {
        id: 'personalization',
        title: 'Personalization Cookies',
        description:
            'Allow us to remember your preferences so we can tailor the NativPost experience to you personally.',
        required: false,
        cookies: [
            {
                name: 'user_preferences',
                purpose: 'Stores your dashboard layout and display preferences',
                duration: '6 months',
            },
        ],
    },
];