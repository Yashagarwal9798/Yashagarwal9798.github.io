import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Experience() {
    const sectionRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.utils.toArray('.exp-reveal').forEach((el) => {
                gsap.from(el, {
                    y: 60,
                    opacity: 0,
                    duration: 0.9,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: el,
                        start: 'top 85%',
                    },
                });
            });
        }, sectionRef);
        return () => ctx.revert();
    }, []);

    return (
        <section id="experience" ref={sectionRef} className="section-padding">
            <p
                className="exp-reveal text-xs uppercase tracking-[0.3em] mb-4"
                style={{ color: 'var(--color-fg-dim)', fontFamily: 'var(--font-mono)' }}
            >
                01 / Experience
            </p>
            <h2 className="exp-reveal text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-gradient" style={{ marginBottom: '60px' }}>
                Where I&apos;ve Worked
            </h2>

            {/* ── BITAcademia Card ── */}
            <div className="exp-reveal glass-card p-10 md:p-14 max-w-4xl">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6" style={{ marginBottom: '32px' }}>
                    <div>
                        <h3 className="text-2xl md:text-3xl font-bold tracking-tight">
                            BITAcademia
                        </h3>
                        <p className="text-sm" style={{ color: 'var(--color-fg-muted)', marginTop: '10px' }}>
                            Birla Institute of Technology, Mesra
                        </p>
                    </div>
                    <span
                        className="text-xs uppercase tracking-[0.15em] whitespace-nowrap self-start mt-1"
                        style={{ color: 'var(--color-fg-dim)', fontFamily: 'var(--font-mono)' }}
                    >
                        Full-Stack Developer · 2024 – Present
                    </span>
                </div>

                <p
                    className="text-sm md:text-base"
                    style={{ color: 'var(--color-fg-muted)', lineHeight: '1.9', marginBottom: '40px' }}
                >
                    Engineered a comprehensive academic management platform serving students, faculty,
                    and administration at BIT Mesra. The platform centralizes institutional data,
                    course management, and administrative workflows, enhancing the academic experience
                    for thousands of users across a multi-stakeholder ecosystem.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2" style={{ gap: '36px', marginBottom: '48px' }}>
                    {[
                        {
                            label: 'Core Development',
                            value: 'JavaScript / Node.js',
                            detail: 'Standardized, scalable application logic',
                        },
                        {
                            label: 'Media Management',
                            value: 'Cloudinary',
                            detail: 'High-performance academic resources & profile media',
                        },
                        {
                            label: 'File Uploads',
                            value: 'Multer Middleware',
                            detail: 'Secure multipart/form-data for assignments',
                        },
                        {
                            label: 'UI/UX Layer',
                            value: 'Tailwind CSS',
                            detail: 'Responsive interface with institutional branding',
                        },
                    ].map((item) => (
                        <div key={item.label} className="glass-card" style={{ padding: '24px' }}>
                            <span
                                className="text-xs uppercase tracking-[0.15em] block"
                                style={{ color: 'var(--color-fg-dim)', fontFamily: 'var(--font-mono)', marginBottom: '12px' }}
                            >
                                {item.label}
                            </span>
                            <p className="font-semibold text-sm" style={{ marginBottom: '8px' }}>{item.value}</p>
                            <p className="text-xs" style={{ color: 'var(--color-fg-muted)', marginTop: '8px' }}>
                                {item.detail}
                            </p>
                        </div>
                    ))}
                </div>

                <div className="flex items-center gap-3">
                    <span className="tech-pill">11-50 Employees</span>
                    <span className="tech-pill">Institutional Scale</span>
                </div>
            </div>
        </section>
    );
}
