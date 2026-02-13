import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const contributions = [
    {
        project: 'SageMath',
        pr: 'PR #41328',
        title: 'Integer Overflow Fix',
        description:
            'Fixed critical integer overflow in is_small_power() — a 32-bit int overflowed for values > 2³¹ (e.g. 4294967300 → 4). Changed int i to long i, matching small_powers map type.',
        tags: ['C++', 'Math', 'Bug Fix'],
        span: 'col-span-2',
    },
    {
        project: 'JuliaLang',
        pr: 'PR #60640',
        title: '@fastmath Perf Regression',
        description:
            'Added missing pow_fast methods for Float32/Float16 using llvm.powi intrinsic directly, fixing x² inlining regression that fell back to power_by_squaring.',
        tags: ['Julia', 'LLVM', 'Performance'],
        span: 'col-span-1',
    },
    {
        project: 'omegaUp',
        pr: '24 Merged PRs',
        title: 'Platform-Wide Contributions',
        description:
            'Implemented dynamic streak counter, UI stability fixes, form validation, onboarding logic, and search/filter optimizations across frontend and backend.',
        tags: ['Vue.js', 'PHP', 'MySQL', 'Full-Stack'],
        span: 'col-span-1',
    },
];

const omegaUpHighlights = [
    { id: '#8946', label: 'Dynamic Streak Counter', complexity: 'High' },
    { id: '#8910', label: 'UI Stability — Text Overflow', complexity: 'Medium' },
    { id: '#8903', label: 'Language Validation — Contests', complexity: 'Medium' },
    { id: '#8865', label: 'Onboarding Required Fields', complexity: 'Low' },
];

export default function OpenSource() {
    const sectionRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.utils.toArray('.oss-reveal').forEach((el, i) => {
                gsap.from(el, {
                    y: 80,
                    opacity: 0,
                    duration: 0.9,
                    ease: 'power3.out',
                    delay: i * 0.08,
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
        <section id="opensource" ref={sectionRef} className="section-padding">
            <p
                className="oss-reveal text-xs uppercase tracking-[0.3em] mb-4"
                style={{ color: 'var(--color-fg-dim)', fontFamily: 'var(--font-mono)' }}
            >
                03 / Open Source
            </p>
            <h2 className="oss-reveal text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-gradient" style={{ marginBottom: '60px' }}>
                Contributions
            </h2>

            {/* ── Bento grid ── */}
            <div className="grid grid-cols-1 md:grid-cols-3" style={{ gap: '40px', marginBottom: '60px' }}>
                {contributions.map((c) => (
                    <div
                        key={c.pr}
                        className={`oss-reveal glass-card p-8 md:p-10 flex flex-col justify-between md:${c.span}`}
                    >
                        <div>
                            <div className="flex items-center gap-3" style={{ marginBottom: '18px' }}>
                                <span className="font-bold text-sm">{c.project}</span>
                                <span
                                    className="text-xs"
                                    style={{ color: 'var(--color-fg-dim)', fontFamily: 'var(--font-mono)' }}
                                >
                                    {c.pr}
                                </span>
                            </div>
                            <h3 className="text-lg md:text-xl font-bold tracking-tight" style={{ marginBottom: '16px' }}>
                                {c.title}
                            </h3>
                            <p
                                className="text-sm"
                                style={{ color: 'var(--color-fg-muted)', lineHeight: '1.9' }}
                            >
                                {c.description}
                            </p>
                        </div>
                        <div className="flex flex-wrap" style={{ gap: '10px', marginTop: '24px' }}>
                            {c.tags.map((t) => (
                                <span key={t} className="tech-pill">{t}</span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>

            {/* ── omegaUp breakdown ── */}
            <div className="oss-reveal glass-card p-8 md:p-10 max-w-3xl">
                <h4 className="font-bold text-sm uppercase tracking-[0.1em]" style={{ marginBottom: '24px' }}>
                    omegaUp — Key Pull Requests
                </h4>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                    {omegaUpHighlights.map((h) => (
                        <div
                            key={h.id}
                            className="flex items-center justify-between"
                            style={{ padding: '12px 0', borderBottom: '1px solid var(--color-border)' }}
                        >
                            <div className="flex items-center gap-3">
                                <span
                                    className="text-xs"
                                    style={{ color: 'var(--color-fg-dim)', fontFamily: 'var(--font-mono)' }}
                                >
                                    {h.id}
                                </span>
                                <span className="text-sm">{h.label}</span>
                            </div>
                            <span className="tech-pill">{h.complexity}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
