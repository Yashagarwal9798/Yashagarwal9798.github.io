import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const platforms = [
    {
        name: 'Codeforces',
        handle: 'yash_agarwal9798',
        url: 'https://codeforces.com/profile/yash_agarwal9798',
        icon: (
            <svg viewBox="0 0 24 24" className="w-6 h-6" fill="#fff">
                <path d="M4 20h3V8H4v12zm5 0h3V4H9v16zm5 0h3v-8h-3v8z" />
            </svg>
        ),
        description:
            'Primary platform for high-stakes algorithmic contests testing ability to handle time-critical, novel problems.',
        highlight: 'Competitive Rating',
    },
    {
        name: 'CodeChef',
        handle: 'nepolian9798',
        url: 'https://www.codechef.com/users/nepolian9798',
        icon: (
            <svg viewBox="0 0 24 24" className="w-6 h-6" fill="#fff">
                <path d="M11 2c-5 0-7 2-7 7v6c0 5 2 7 7 7h2c5 0 7-2 7-7V9c0-5-2-7-7-7h-2zm1 4a1 1 0 011 1v4h3a1 1 0 010 2h-3v4a1 1 0 01-2 0v-4H8a1 1 0 010-2h3V7a1 1 0 011-1z" />
            </svg>
        ),
        description:
            'Features a divisional rating system (Div 1: 2000+). Emphasizes large-scale contest participation and progress tracking.',
        highlight: 'Divisional System',
    },
    {
        name: 'LeetCode',
        handle: 'nepolian9798',
        url: 'https://leetcode.com/u/nepolian9798/',
        icon: (
            <svg viewBox="0 0 24 24" className="w-6 h-6" fill="#fff">
                <path d="M13.483 0a1.374 1.374 0 00-.961.438L7.116 6.226l-3.854 4.126a1.487 1.487 0 00-.14 1.918l2.2 3.01a1.46 1.46 0 001.164.592l6.026.074a1.46 1.46 0 001.092-.462c.342-.37.522-.863.48-1.36l-.098-1.18a2.31 2.31 0 00-.688-1.434l-3.16-3.07 4.738-5.07a1.37 1.37 0 00-.393-2.022z" />
                <path d="M20.742 14.962l-2.2-3.011a1.46 1.46 0 00-1.164-.591l-6.026-.075a1.46 1.46 0 00-1.092.463 1.46 1.46 0 00-.48 1.36l.098 1.179c.053.548.3 1.058.688 1.434l3.16 3.07-4.738 5.07a1.37 1.37 0 00.394 2.023l2.036 1.053a1.374 1.374 0 001.578-.196l5.406-5.788 3.854-4.126a1.487 1.487 0 00.14-1.918z" />
            </svg>
        ),
        description:
            'Industry benchmark for interview readiness. Ratings of 2000+ correlate with "Guardian" status for top-tier tech clearing.',
        highlight: 'Interview Readiness',
    },
];

export default function Competitive() {
    const sectionRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.utils.toArray('.cp-reveal').forEach((el, i) => {
                gsap.from(el, {
                    y: 70,
                    opacity: 0,
                    duration: 0.9,
                    ease: 'power3.out',
                    delay: i * 0.1,
                    scrollTrigger: {
                        trigger: el,
                        start: 'top 88%',
                    },
                });
            });
        }, sectionRef);
        return () => ctx.revert();
    }, []);

    return (
        <section id="competitive" ref={sectionRef} className="section-padding">
            <p
                className="cp-reveal text-xs uppercase tracking-[0.3em] mb-4"
                style={{ color: 'var(--color-fg-dim)', fontFamily: 'var(--font-mono)' }}
            >
                04 / Algorithmic Rigor
            </p>
            <h2 className="cp-reveal text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-gradient" style={{ marginBottom: '60px' }}>
                Competitive Programming
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3" style={{ gap: '40px' }}>
                {platforms.map((p) => (
                    <div
                        key={p.name}
                        className="cp-reveal glass-card p-8 md:p-10 flex flex-col justify-between"
                        data-cursor="Profile"
                    >
                        <div>
                            <div className="flex items-center gap-3" style={{ marginBottom: '20px' }}>
                                {p.icon}
                                <span className="font-bold text-lg">{p.name}</span>
                            </div>
                            <p
                                className="text-sm"
                                style={{ color: 'var(--color-fg-muted)', lineHeight: '1.9', marginBottom: '20px' }}
                            >
                                {p.description}
                            </p>
                        </div>
                        <div className="flex items-center justify-between" style={{ marginTop: '24px' }}>
                            <a
                                href={p.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-xs"
                                style={{ color: 'var(--color-fg-dim)', fontFamily: 'var(--font-mono)', textDecoration: 'none' }}
                            >
                                @{p.handle}
                            </a>
                            <span className="tech-pill">{p.highlight}</span>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
