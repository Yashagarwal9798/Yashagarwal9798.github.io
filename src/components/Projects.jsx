import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const projects = [
    {
        title: 'Automatic Deploy',
        subtitle: 'Cloud Automation CLI',
        description:
            'A CLI tool that automates the creation of 5+ critical AWS resources — ECS, IAM, VPCs, subnets, and security groups — reducing manual deployment workload by 80% and deployment errors by 90%.',
        stack: ['Node.js', 'AWS SDK', 'Docker', 'ECS'],
        metrics: ['80% less manual work', '90% fewer errors', '300+ npm downloads'],
        link: '#',
    },
    {
        title: 'LLM From Scratch',
        subtitle: 'Generative AI Transformer',
        description:
            'A GPT-inspired transformer built from first principles: masked multi-head self-attention, byte-pair encoding, positional embeddings. Trained on 66K chars achieving L=0.748 in 5 epochs.',
        stack: ['Python', 'PyTorch', 'NumPy', 'BPE'],
        metrics: ['L=0.748 loss', '<3s inference', 'Single-layer arch'],
        link: '#',
    },
    {
        title: 'ReWear',
        subtitle: 'Social E-Commerce Platform',
        description:
            'End-to-end MERN stack application serving 1,000+ users for clothing swaps and point-based redemption. Admin panel moderating 5,000+ items/week with real-time spam filtering.',
        stack: ['MongoDB', 'Express', 'React', 'Node.js'],
        metrics: ['1,000+ users', '5,000+ items/week', '30% engagement boost'],
        link: '#',
    },
    {
        title: 'Peacify',
        subtitle: 'AI-Driven Mental Health',
        description:
            'Mental health platform with two ML models for Depression and Stress assessment at 85%+ accuracy. Custom NLP chatbot with tokenization pipeline for real-time support.',
        stack: ['Python', 'TensorFlow', 'NLP', 'Flask'],
        metrics: ['85%+ accuracy', 'IEEE Top 7 / 45+', 'Real-time NLP'],
        link: '#',
    },
];

export default function Projects() {
    const sectionRef = useRef(null);
    const trackRef = useRef(null);
    const headingRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            /* ── Heading reveal ── */
            gsap.from(headingRef.current, {
                y: 80,
                opacity: 0,
                duration: 1,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: headingRef.current,
                    start: 'top 85%',
                },
            });

            /* ── Horizontal scroll ── */
            const track = trackRef.current;
            const cards = track.querySelectorAll('.project-card');
            const totalScroll = track.scrollWidth - window.innerWidth;

            gsap.to(track, {
                x: -totalScroll,
                ease: 'none',
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'top top',
                    end: () => `+=${totalScroll}`,
                    pin: true,
                    scrub: 1,
                    anticipatePin: 1,
                },
            });

            /* ── Card stagger reveal ── */
            cards.forEach((card, i) => {
                gsap.from(card, {
                    opacity: 0,
                    y: 60,
                    rotate: 2,
                    duration: 0.8,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: card,
                        start: 'left 90%',
                        containerAnimation: gsap.getById?.('horizontalScroll'),
                        toggleActions: 'play none none none',
                    },
                    delay: i * 0.1,
                });
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section id="projects" ref={sectionRef} className="relative min-h-screen">
            {/* ── Section heading (above pinned area) ── */}
            <div className="section-padding pb-0">
                <p
                    ref={headingRef}
                    className="text-xs uppercase tracking-[0.3em] mb-4"
                    style={{ color: 'var(--color-fg-dim)', fontFamily: 'var(--font-mono)' }}
                >
                    02 / Featured Work
                </p>
                <h2 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-gradient">
                    Projects
                </h2>
            </div>

            {/* ── Horizontal track ── */}
            <div
                ref={trackRef}
                className="flex items-center px-8 md:px-16 pt-12"
                style={{ width: 'max-content', gap: '40px' }}
            >
                {projects.map((p, i) => (
                    <a
                        key={i}
                        href={p.link}
                        data-cursor="View"
                        className="project-card glass-card flex-shrink-0 p-8 md:p-10 flex flex-col justify-between"
                        style={{ width: 'clamp(340px, 40vw, 520px)', height: '420px' }}
                    >
                        <div>
                            <span
                                className="text-xs uppercase tracking-[0.2em] block"
                                style={{ color: 'var(--color-fg-dim)', fontFamily: 'var(--font-mono)', marginBottom: '16px' }}
                            >
                                {p.subtitle}
                            </span>
                            <h3 className="text-2xl md:text-3xl font-bold tracking-tight" style={{ marginBottom: '18px' }}>
                                {p.title}
                            </h3>
                            <p
                                className="text-sm"
                                style={{ color: 'var(--color-fg-muted)', lineHeight: '1.9' }}
                            >
                                {p.description}
                            </p>
                        </div>

                        <div style={{ marginTop: '32px' }}>
                            <div className="flex flex-wrap" style={{ gap: '10px', marginBottom: '16px' }}>
                                {p.stack.map((s) => (
                                    <span key={s} className="tech-pill">{s}</span>
                                ))}
                            </div>
                            <div className="flex flex-wrap" style={{ gap: '14px' }}>
                                {p.metrics.map((m, j) => (
                                    <span
                                        key={j}
                                        className="text-xs"
                                        style={{ color: 'var(--color-accent)', fontFamily: 'var(--font-mono)' }}
                                    >
                                        {m}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </a>
                ))}

                {/* Spacer to give room at end of scroll */}
                <div className="flex-shrink-0 w-[20vw]" />
            </div>
        </section>
    );
}
