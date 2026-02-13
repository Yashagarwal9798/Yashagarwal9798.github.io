import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function CustomCursor() {
    const cursorRef = useRef(null);
    const followerRef = useRef(null);
    const textRef = useRef(null);

    useEffect(() => {
        const cursor = cursorRef.current;
        const follower = followerRef.current;
        const pos = { x: 0, y: 0 };
        const mouse = { x: 0, y: 0 };

        const handleMouseMove = (e) => {
            mouse.x = e.clientX;
            mouse.y = e.clientY;
            gsap.to(cursor, { x: mouse.x, y: mouse.y, duration: 0.1 });
        };

        const tick = () => {
            pos.x += (mouse.x - pos.x) * 0.15;
            pos.y += (mouse.y - pos.y) * 0.15;
            gsap.set(follower, { x: pos.x, y: pos.y });
            requestAnimationFrame(tick);
        };

        const handleEnterInteractive = (e) => {
            const label = e.target.closest('[data-cursor]')?.dataset.cursor || '';
            gsap.to(follower, { scale: 4, opacity: 0.15, duration: 0.4, ease: 'power2.out' });
            gsap.to(cursor, { scale: 0, duration: 0.3 });
            if (label && textRef.current) {
                textRef.current.textContent = label;
                gsap.to(textRef.current, { opacity: 1, duration: 0.3 });
            }
        };

        const handleLeaveInteractive = () => {
            gsap.to(follower, { scale: 1, opacity: 0.5, duration: 0.4, ease: 'power2.out' });
            gsap.to(cursor, { scale: 1, duration: 0.3 });
            if (textRef.current) {
                gsap.to(textRef.current, { opacity: 0, duration: 0.2 });
            }
        };

        window.addEventListener('mousemove', handleMouseMove);
        requestAnimationFrame(tick);

        const interactives = document.querySelectorAll('a, button, [data-cursor]');
        interactives.forEach((el) => {
            el.addEventListener('mouseenter', handleEnterInteractive);
            el.addEventListener('mouseleave', handleLeaveInteractive);
        });

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            interactives.forEach((el) => {
                el.removeEventListener('mouseenter', handleEnterInteractive);
                el.removeEventListener('mouseleave', handleLeaveInteractive);
            });
        };
    }, []);

    /* Hide on mobile / touch */
    const isTouchDevice = typeof window !== 'undefined' && 'ontouchstart' in window;
    if (isTouchDevice) return null;

    return (
        <>
            <div
                ref={cursorRef}
                style={{
                    position: 'fixed',
                    top: -4,
                    left: -4,
                    width: 8,
                    height: 8,
                    borderRadius: '50%',
                    background: '#fff',
                    pointerEvents: 'none',
                    zIndex: 9999,
                    mixBlendMode: 'difference',
                }}
            />
            <div
                ref={followerRef}
                style={{
                    position: 'fixed',
                    top: -20,
                    left: -20,
                    width: 40,
                    height: 40,
                    borderRadius: '50%',
                    border: '1px solid rgba(255,255,255,0.5)',
                    pointerEvents: 'none',
                    zIndex: 9998,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    opacity: 0.5,
                }}
            >
                <span
                    ref={textRef}
                    style={{
                        fontSize: '3.5px',
                        fontFamily: 'var(--font-mono)',
                        color: '#fff',
                        opacity: 0,
                        whiteSpace: 'nowrap',
                        letterSpacing: '0.05em',
                        textTransform: 'uppercase',
                    }}
                >
                </span>
            </div>
        </>
    );
}
