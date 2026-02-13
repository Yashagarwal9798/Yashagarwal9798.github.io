import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Footer() {
    const footerRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(footerRef.current, {
                y: 40,
                opacity: 0,
                duration: 0.8,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: footerRef.current,
                    start: 'top 95%',
                },
            });
        }, footerRef);
        return () => ctx.revert();
    }, []);

    return (
        <footer
            ref={footerRef}
            style={{
                borderTop: '1px solid var(--color-border)',
                padding: 'clamp(100px, 16vh, 200px) 24px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                width: '100%',
            }}
        >
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '48px', width: '100%', maxWidth: '800px' }}>
                <div className="text-center">
                    <h3 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
                        Let&apos;s Connect
                    </h3>
                    <p className="text-sm md:text-base mb-8" style={{ color: 'var(--color-fg-muted)' }}>
                        Open to collaborations, opportunities, and interesting conversations.
                    </p>
                </div>

                {/* ── Contact Details ── */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-8" style={{ width: '100%' }}>
                    <a
                        href="mailto:yashagarwal9798@gmail.com"
                        data-cursor="Email"
                        className="flex items-center gap-3 group"
                    >
                        <svg
                            className="w-5 h-5 transition-transform duration-300 group-hover:scale-110"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            style={{ color: 'var(--color-fg-muted)' }}
                        >
                            <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                        <span className="text-sm transition-colors duration-300" style={{ color: 'var(--color-fg-muted)' }}>
                            yashagarwal9798@gmail.com
                        </span>
                    </a>

                    <span style={{ color: 'var(--color-fg-dim)' }} className="hidden sm:inline">·</span>

                    <a
                        href="tel:+919798464041"
                        data-cursor="Call"
                        className="flex items-center gap-3 group"
                    >
                        <svg
                            className="w-5 h-5 transition-transform duration-300 group-hover:scale-110"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            style={{ color: 'var(--color-fg-muted)' }}
                        >
                            <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6A19.79 19.79 0 012.12 4.18 2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
                        </svg>
                        <span className="text-sm transition-colors duration-300" style={{ color: 'var(--color-fg-muted)' }}>
                            +91 9798464041
                        </span>
                    </a>
                </div>

                {/* ── Social Icons ── */}
                <div className="flex items-center justify-center gap-8" style={{ width: '100%' }}>
                    <a
                        href="https://github.com/Yashagarwal9798"
                        target="_blank"
                        rel="noopener noreferrer"
                        data-cursor="GitHub"
                        className="group"
                    >
                        <svg
                            className="w-6 h-6 transition-transform duration-300 group-hover:scale-110"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            style={{ color: 'var(--color-fg-muted)' }}
                        >
                            <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.009-.866-.013-1.7-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.268 2.75 1.026A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.026 2.747-1.026.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
                        </svg>
                    </a>
                    <a
                        href="https://linkedin.com/in/"
                        target="_blank"
                        rel="noopener noreferrer"
                        data-cursor="LinkedIn"
                        className="group"
                    >
                        <svg
                            className="w-6 h-6 transition-transform duration-300 group-hover:scale-110"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            style={{ color: 'var(--color-fg-muted)' }}
                        >
                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                        </svg>
                    </a>
                </div>
                <div style={{ marginTop: '48px' }}>
                    <p
                        className="text-xs"
                        style={{ color: 'var(--color-fg-dim)', fontFamily: 'var(--font-mono)', textAlign: 'center' }}
                    >
                        Built with ❤ by Yash Agarwal · 2025
                    </p>
                </div>
            </div>
        </footer>
    );
}
