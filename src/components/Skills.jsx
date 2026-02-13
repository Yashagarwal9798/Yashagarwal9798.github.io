import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const skillCategories = [
    {
        label: 'Languages',
        skills: ['Python', 'C++', 'JavaScript', 'TypeScript'],
    },
    {
        label: 'AI / ML',
        skills: ['PyTorch', 'TensorFlow', 'Transformers', 'NLP', 'Computer Vision'],
    },
    {
        label: 'Frontend',
        skills: ['React', 'Next.js', 'Vue.js', 'Tailwind CSS'],
    },
    {
        label: 'Backend',
        skills: ['Node.js', 'Express', 'Flask', 'REST APIs'],
    },
    {
        label: 'Cloud & DevOps',
        skills: ['AWS', 'Docker', 'ECS', 'CI/CD', 'Linux'],
    },
    {
        label: 'Databases',
        skills: ['MongoDB', 'MySQL', 'PostgreSQL', 'Redis'],
    },
];

export default function Skills() {
    const sectionRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.utils.toArray('.skill-reveal').forEach((el, i) => {
                gsap.from(el, {
                    y: 50,
                    opacity: 0,
                    duration: 0.7,
                    ease: 'power3.out',
                    delay: i * 0.06,
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
        <section id="skills" ref={sectionRef} className="section-padding">
            <p
                className="skill-reveal text-xs uppercase tracking-[0.3em] mb-4"
                style={{ color: 'var(--color-fg-dim)', fontFamily: 'var(--font-mono)' }}
            >
                05 / Technical Stack
            </p>
            <h2 className="skill-reveal text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-gradient" style={{ marginBottom: '60px' }}>
                Skills
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3" style={{ gap: '40px' }}>
                {skillCategories.map((cat) => (
                    <div key={cat.label} className="skill-reveal glass-card" style={{ padding: '32px' }}>
                        <h3
                            className="text-xs font-semibold uppercase tracking-[0.15em]"
                            style={{ color: 'var(--color-fg-dim)', fontFamily: 'var(--font-mono)', marginBottom: '20px' }}
                        >
                            {cat.label}
                        </h3>
                        <div className="flex flex-wrap" style={{ gap: '10px' }}>
                            {cat.skills.map((s) => (
                                <span
                                    key={s}
                                    className="tech-pill transition-all duration-300 hover:border-[var(--color-border-highlight)] hover:text-white"
                                >
                                    {s}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
