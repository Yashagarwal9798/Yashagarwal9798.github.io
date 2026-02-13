import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const achievements = [
    {
        title: 'Amazon ML Summer School \'25 Scholar',
        description: 'Selected from over 1,00,000 applicants',
        stat: 'Top 0.3%',
        icon: (
            <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="#f59e0b" strokeWidth="1.5">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
        ),
    },
    {
        title: 'IEEE MegaProject Finalist',
        description: 'Secured a top 7 position among 45+ teams',
        stat: 'Top 7',
        icon: (
            <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="#3b82f6" strokeWidth="1.5">
                <path d="M8 21h8m-4-4v4m-4.5-8.65C5.4 11.36 4 9.28 4 7V4l8-2 8 2v3c0 2.28-1.4 4.36-3.5 5.35L12 17l-4.5-4.65z" />
            </svg>
        ),
    },
    {
        title: 'CodeZilla — 7th Rank',
        description: 'ACM BIT-Mesra, Pantheon Techfest — competing against 50+ teams',
        stat: '#7',
        icon: (
            <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="#10b981" strokeWidth="1.5">
                <path d="M14.5 10.33l-2.5-1.5-2.5 1.5V4h5v6.33zM6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
        ),
    },
    {
        title: 'IEEE Recruitment Contest',
        description: 'Ranked 30th out of 300+ participants',
        stat: '#30 / 300+',
        icon: (
            <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="#8b5cf6" strokeWidth="1.5">
                <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1zM4 22v-7" />
            </svg>
        ),
    },
    {
        title: 'Flipkart GRiD 7.0 — National Semi-Finalist',
        description: 'Recognized for innovation and problem-solving at a national-level competition',
        stat: '2025',
        icon: (
            <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="#ec4899" strokeWidth="1.5">
                <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
            </svg>
        ),
    },
];

export default function Achievements() {
    const sectionRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.utils.toArray('.ach-reveal').forEach((el, i) => {
                gsap.from(el, {
                    y: 50,
                    opacity: 0,
                    duration: 0.7,
                    ease: 'power3.out',
                    delay: i * 0.08,
                    scrollTrigger: {
                        trigger: el,
                        start: 'top 90%',
                    },
                });
            });
        }, sectionRef);
        return () => ctx.revert();
    }, []);

    return (
        <section id="achievements" ref={sectionRef} className="section-padding">
            <p
                className="ach-reveal text-xs uppercase tracking-[0.3em] mb-4"
                style={{ color: 'var(--color-fg-dim)', fontFamily: 'var(--font-mono)' }}
            >
                06 / Recognition
            </p>
            <h2 className="ach-reveal text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-gradient" style={{ marginBottom: '60px' }}>
                Achievements
            </h2>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', maxWidth: '900px' }}>
                {achievements.map((a, i) => (
                    <div
                        key={i}
                        className="ach-reveal glass-card"
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '24px',
                            padding: '28px 32px',
                        }}
                    >
                        <div
                            style={{
                                flexShrink: 0,
                                width: '48px',
                                height: '48px',
                                borderRadius: '12px',
                                background: 'rgba(255,255,255,0.04)',
                                border: '1px solid var(--color-border)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                            }}
                        >
                            {a.icon}
                        </div>

                        <div style={{ flex: 1, minWidth: 0 }}>
                            <h3
                                className="text-base sm:text-lg font-semibold"
                                style={{ marginBottom: '6px', color: '#fff' }}
                            >
                                {a.title}
                            </h3>
                            <p
                                className="text-sm"
                                style={{ color: 'var(--color-fg-muted)', lineHeight: '1.6' }}
                            >
                                {a.description}
                            </p>
                        </div>

                        <span
                            className="tech-pill"
                            style={{
                                flexShrink: 0,
                                fontWeight: 600,
                                whiteSpace: 'nowrap',
                            }}
                        >
                            {a.stat}
                        </span>
                    </div>
                ))}
            </div>
        </section>
    );
}
