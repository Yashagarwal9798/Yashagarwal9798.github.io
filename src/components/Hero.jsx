import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
    const sectionRef = useRef(null);
    const nameRef = useRef(null);
    const subtitleRef = useRef(null);
    const metaRef = useRef(null);
    const bgShape1 = useRef(null);
    const bgShape2 = useRef(null);
    const scrollIndicatorRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            /* ── Character-by-character name reveal ── */
            const chars = nameRef.current.querySelectorAll('.char');
            gsap.set(chars, { y: 120, opacity: 0, rotateX: -90 });
            gsap.to(chars, {
                y: 0,
                opacity: 1,
                rotateX: 0,
                duration: 1.2,
                ease: 'power4.out',
                stagger: 0.04,
                delay: 0.3,
            });

            /* ── Subtitle fade in ── */
            gsap.from(subtitleRef.current, {
                y: 40,
                opacity: 0,
                duration: 1,
                ease: 'power3.out',
                delay: 1.2,
            });

            /* ── Meta info ── */
            gsap.from(metaRef.current, {
                y: 30,
                opacity: 0,
                duration: 0.8,
                ease: 'power3.out',
                delay: 1.6,
            });

            /* ── Scroll indicator pulse ── */
            gsap.to(scrollIndicatorRef.current, {
                y: 10,
                opacity: 0.3,
                duration: 1.5,
                repeat: -1,
                yoyo: true,
                ease: 'sine.inOut',
            });

            /* ── Parallax background shapes ── */
            gsap.to(bgShape1.current, {
                y: -200,
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'top top',
                    end: 'bottom top',
                    scrub: 1,
                },
            });
            gsap.to(bgShape2.current, {
                y: -120,
                x: 50,
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'top top',
                    end: 'bottom top',
                    scrub: 1.5,
                },
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    const nameText = 'YASH AGARWAL';

    return (
        <section
            ref={sectionRef}
            className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
            style={{ perspective: '1000px' }}
        >
            {/* ── Parallax BG Shapes ── */}
            <svg
                ref={bgShape1}
                className="absolute top-[-10%] left-[-5%] w-[600px] h-[600px] opacity-[0.04]"
                viewBox="0 0 200 200"
                fill="none"
            >
                <circle cx="100" cy="100" r="90" stroke="#fff" strokeWidth="0.5" />
                <circle cx="100" cy="100" r="60" stroke="#fff" strokeWidth="0.3" />
                <circle cx="100" cy="100" r="30" stroke="#fff" strokeWidth="0.2" />
                <line x1="10" y1="100" x2="190" y2="100" stroke="#fff" strokeWidth="0.2" />
                <line x1="100" y1="10" x2="100" y2="190" stroke="#fff" strokeWidth="0.2" />
            </svg>
            <svg
                ref={bgShape2}
                className="absolute bottom-[-5%] right-[-5%] w-[500px] h-[500px] opacity-[0.03]"
                viewBox="0 0 200 200"
                fill="none"
            >
                <polygon points="100,10 190,190 10,190" stroke="#fff" strokeWidth="0.4" fill="none" />
                <polygon points="100,40 165,170 35,170" stroke="#fff" strokeWidth="0.3" fill="none" />
                <polygon points="100,70 140,150 60,150" stroke="#fff" strokeWidth="0.2" fill="none" />
            </svg>

            {/* ── Grid overlay ── */}
            <div
                className="absolute inset-0 opacity-[0.03]"
                style={{
                    backgroundImage:
                        'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
                    backgroundSize: '60px 60px',
                }}
            />

            {/* ── Main Content ── */}
            <div className="relative z-10 px-6" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }}>
                <h1
                    ref={nameRef}
                    className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-tighter leading-none mb-6"
                    style={{ fontFamily: 'var(--font-sans)', textAlign: 'center' }}
                >
                    {nameText.split('').map((char, i) => (
                        <span
                            key={i}
                            className="char inline-block"
                            style={{ display: char === ' ' ? 'inline' : 'inline-block' }}
                        >
                            {char === ' ' ? '\u00A0' : char}
                        </span>
                    ))}
                </h1>

                <p
                    ref={subtitleRef}
                    className="text-base sm:text-lg md:text-xl leading-relaxed"
                    style={{ color: 'var(--color-fg-muted)', fontWeight: 300, textAlign: 'center' }}
                >
                    AI / ML Engineer · Full-Stack Developer · Open Source Contributor
                </p>

                <div
                    ref={metaRef}
                    className="mt-8 flex flex-wrap items-center justify-center gap-4"
                >
                    {['Python', 'C++', 'Node.js', 'React', 'AWS', 'Docker'].map((t) => (
                        <span key={t} className="tech-pill">{t}</span>
                    ))}
                </div>
            </div>

            {/* ── Scroll indicator ── */}
            <div
                ref={scrollIndicatorRef}
                className="absolute bottom-10 flex flex-col items-center gap-2"
            >
                <span
                    className="text-xs uppercase tracking-[0.2em]"
                    style={{ color: 'var(--color-fg-dim)', fontFamily: 'var(--font-mono)' }}
                >
                    Scroll
                </span>
                <svg width="16" height="24" viewBox="0 0 16 24" fill="none">
                    <rect x="1" y="1" width="14" height="22" rx="7" stroke="#555" strokeWidth="1" />
                    <circle cx="8" cy="8" r="2" fill="#888" />
                </svg>
            </div>
        </section>
    );
}
