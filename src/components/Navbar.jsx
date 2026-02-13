import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

const links = [
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' },
    { label: 'Open Source', href: '#opensource' },
    { label: 'Compete', href: '#competitive' },
    { label: 'Skills', href: '#skills' },
    { label: 'Achievements', href: '#achievements' },
];

export default function Navbar() {
    const navRef = useRef(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setVisible(window.scrollY > window.innerHeight * 0.6);
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        gsap.to(navRef.current, {
            y: visible ? 0 : -100,
            opacity: visible ? 1 : 0,
            duration: 0.5,
            ease: 'power3.out',
        });
    }, [visible]);

    const scrollTo = (e, href) => {
        e.preventDefault();
        const el = document.querySelector(href);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <nav
            ref={navRef}
            className="fixed top-0 left-0 w-full z-50 px-6 md:px-12 py-4 flex items-center justify-between"
            style={{
                background: 'rgba(0,0,0,0.7)',
                backdropFilter: 'blur(16px)',
                borderBottom: '1px solid rgba(255,255,255,0.06)',
                transform: 'translateY(-100px)',
                opacity: 0,
            }}
        >
            <a
                href="#"
                onClick={(e) => {
                    e.preventDefault();
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="font-bold text-lg tracking-tight"
            >
                YA<span className="text-[var(--color-fg-muted)]">.</span>
            </a>

            <div className="hidden md:flex items-center gap-8">
                {links.map((l) => (
                    <a
                        key={l.href}
                        href={l.href}
                        onClick={(e) => scrollTo(e, l.href)}
                        className="text-sm text-[var(--color-fg-muted)] hover:text-white transition-colors duration-300 tracking-wide uppercase"
                        style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', letterSpacing: '0.12em' }}
                    >
                        {l.label}
                    </a>
                ))}
            </div>
        </nav>
    );
}
