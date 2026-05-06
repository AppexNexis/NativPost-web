import {
    Body,
    Button,
    Container,
    Head,
    Hr,
    Html,
    Link,
    Preview,
    Section,
    Text,
} from '@react-email/components';
import * as React from 'react';

type AffiliateApplicationEmailProps = {
    fullName: string;
    email: string;
    whatsapp: string;
    role?: string;
    platforms?: string;
    followers?: string;
    companies?: string;
    videoUrl?: string;
    motivation: string;
    socialLinks?: string;
    applicationId: string;
    adminUrl?: string;
};

const BRAND_PURPLE = '#864FFE';
const BRAND_DARK = '#1A1A1C';
const GRAY_50 = '#F5F5F7';
const GRAY_100 = '#F3F4F6';
const GRAY_200 = '#E5E7EB';
const GRAY_400 = '#9CA3AF';
const GRAY_600 = '#6B7280';
const GRAY_700 = '#374151';
const WHITE = '#FFFFFF';

const main: React.CSSProperties = {
    backgroundColor: GRAY_50,
    fontFamily: '"DM Sans", "Inter", system-ui, -apple-system, sans-serif',
    margin: '0',
    padding: '24px 16px',
};

const container: React.CSSProperties = {
    backgroundColor: WHITE,
    margin: '0 auto',
    maxWidth: '560px',
    borderRadius: '16px',
    overflow: 'hidden',
    boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
    border: `1px solid ${GRAY_200}`,
};

const header: React.CSSProperties = {
    backgroundColor: BRAND_DARK,
    padding: '28px 36px 24px',
};

const logoText: React.CSSProperties = {
    margin: '0 0 6px',
    fontSize: '24px',
    fontWeight: '700',
    letterSpacing: '-0.5px',
    lineHeight: '1',
};

const logoIcon: React.CSSProperties = {
    display: 'inline-block',
    width: '30px',
    height: '30px',
    lineHeight: '30px',
    borderRadius: '50%',
    backgroundColor: WHITE,
    textAlign: 'center',
    fontSize: '14px',
    fontWeight: '800',
    color: BRAND_DARK,
    marginRight: '8px',
    verticalAlign: 'middle',
};

const logoNativ: React.CSSProperties = { color: WHITE, verticalAlign: 'middle' };
const logoPost: React.CSSProperties = { color: 'rgba(255,255,255,0.45)', verticalAlign: 'middle' };

const tagline: React.CSSProperties = {
    margin: '6px 0 0',
    fontSize: '13px',
    color: GRAY_400,
};

const banner: React.CSSProperties = {
    backgroundColor: '#F4F2FE',
    borderTop: `3px solid ${BRAND_PURPLE}`,
    padding: '24px 36px',
};

const badge: React.CSSProperties = {
    display: 'inline-block',
    backgroundColor: '#EDE9FE',
    color: '#5B21B6',
    borderRadius: '20px',
    padding: '4px 12px',
    fontSize: '12px',
    fontWeight: '600',
    marginBottom: '12px',
    border: '1px solid #DDD6FE',
};

const bannerTitle: React.CSSProperties = {
    margin: '0 0 6px',
    fontSize: '22px',
    fontWeight: '700',
    color: BRAND_DARK,
    letterSpacing: '-0.3px',
};

const bannerSub: React.CSSProperties = {
    margin: '0',
    fontSize: '15px',
    color: '#4B5563',
    lineHeight: '1.6',
};

const content: React.CSSProperties = { padding: '28px 36px' };

const sectionLabel: React.CSSProperties = {
    margin: '0 0 10px',
    fontSize: '11px',
    fontWeight: '600',
    color: GRAY_400,
    textTransform: 'uppercase',
    letterSpacing: '0.8px',
};

const table: React.CSSProperties = {
    width: '100%',
    borderCollapse: 'collapse',
    backgroundColor: '#FAFAFA',
    border: `1px solid ${GRAY_200}`,
    borderRadius: '10px',
    overflow: 'hidden',
    marginBottom: '24px',
    fontSize: '14px',
};

const trStyle: React.CSSProperties = {
    borderBottom: `1px solid ${GRAY_100}`,
};

const tdLabel: React.CSSProperties = {
    padding: '10px 14px',
    fontWeight: '600',
    color: GRAY_600,
    width: '140px',
    verticalAlign: 'top',
    whiteSpace: 'nowrap',
};

const tdValue: React.CSSProperties = {
    padding: '10px 14px',
    color: BRAND_DARK,
    verticalAlign: 'top',
    lineHeight: '1.5',
};

const motivationBox: React.CSSProperties = {
    backgroundColor: '#FAFAFA',
    border: `1px solid ${GRAY_200}`,
    borderLeft: `3px solid ${BRAND_PURPLE}`,
    borderRadius: '0 10px 10px 0',
    padding: '16px 20px',
    marginBottom: '28px',
};

const motivationText: React.CSSProperties = {
    margin: '0',
    fontSize: '14px',
    color: GRAY_700,
    lineHeight: '1.7',
    fontStyle: 'italic',
};

const primaryButton: React.CSSProperties = {
    backgroundColor: BRAND_PURPLE,
    borderRadius: '8px',
    color: WHITE,
    fontSize: '14px',
    fontWeight: '600',
    textDecoration: 'none',
    padding: '12px 22px',
    display: 'inline-block',
};

const divider: React.CSSProperties = { borderColor: GRAY_100, margin: '0 36px' };
const footer: React.CSSProperties = { padding: '20px 36px 28px' };

const footerText: React.CSSProperties = {
    margin: '0 0 6px',
    fontSize: '12px',
    color: GRAY_400,
    lineHeight: '1.6',
    textAlign: 'center',
};

const footerLink: React.CSSProperties = { color: GRAY_600, textDecoration: 'underline' };

export default function AffiliateApplicationEmail({
    fullName = 'Applicant',
    email = '',
    whatsapp = '',
    role,
    platforms,
    followers,
    companies,
    videoUrl,
    motivation = '',
    socialLinks,
    applicationId = '',
    adminUrl = 'https://nativpost.com/affiliate-admin',
}: AffiliateApplicationEmailProps) {
    const rows = [
        { label: 'Name', value: fullName },
        { label: 'Email', value: email },
        { label: 'WhatsApp', value: whatsapp },
        { label: 'Role', value: role || 'Not specified' },
        { label: 'Platforms', value: platforms || 'Not specified' },
        { label: 'Audience size', value: followers || 'Not specified' },
        { label: 'Social links', value: socialLinks || 'None listed' },
        { label: 'Companies', value: companies || 'None listed' },
        ...(videoUrl ? [{ label: 'Video intro', value: videoUrl }] : []),
    ];

    return (
        <Html lang="en">
            <Head />
            <Preview>{`New affiliate application from ${fullName}`}</Preview>
            <Body style={main}>
                <Container style={container}>

                    {/* Header */}
                    <Section style={header}>
                        <Text style={logoText}>
                            <span style={logoIcon}>N</span>
                            <span style={logoNativ}>Nativ</span>
                            <span style={logoPost}>Post</span>
                        </Text>
                        <Text style={tagline}>Studio-crafted content, published.</Text>
                    </Section>

                    {/* Banner */}
                    <Section style={banner}>
                        <span style={badge}>New application 📋</span>
                        <Text style={bannerTitle}>Affiliate application received</Text>
                        <Text style={bannerSub}>
                            <strong>{fullName}</strong>
                            {' has applied to join the NativPost affiliate program.'}
                        </Text>
                    </Section>

                    {/* Content */}
                    <Section style={content}>
                        <Text style={sectionLabel}>Applicant details</Text>
                        <table style={table}>
                            <tbody>
                                {rows.map((row) => (
                                    <tr key={row.label} style={trStyle}>
                                        <td style={tdLabel}>{row.label}</td>
                                        <td style={tdValue}>{row.value}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>

                        <Text style={sectionLabel}>Motivation</Text>
                        <Section style={motivationBox}>
                            <Text style={motivationText}>{motivation}</Text>
                        </Section>

                        <Button href={adminUrl} style={primaryButton}>
                            Review in admin dashboard →
                        </Button>
                    </Section>

                    <Hr style={divider} />

                    {/* Footer */}
                    <Section style={footer}>
                        <Text style={footerText}>
                            Application ID: {applicationId}
                        </Text>
                        <Text style={footerText}>
                            <Link href={adminUrl} style={footerLink}>Affiliate admin</Link>
                            {' · '}
                            <Link href="https://nativpost.com" style={footerLink}>NativPost</Link>
                            {' · A product of '}
                            <Link href="https://www.appexnexis.site/" style={footerLink}>AppexNexis LTD</Link>
                        </Text>
                    </Section>

                </Container>
            </Body>
        </Html>
    );
}