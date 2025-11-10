import React, {useRef, useState, useEffect} from 'react';
import styles from './styles.module.css';

export type WizardSlide = {
    src: string;
    alt?: string;
    label?: string; // optional: short caption per step
};

interface WizardCarouselProps {
    title?: string;
    slides: WizardSlide[];
}

const WizardCarousel: React.FC<WizardCarouselProps> = ({ title, slides }) => {
    const trackRef = useRef<HTMLDivElement | null>(null);
    const [active, setActive] = useState(0);

    // scroll to active slide
    useEffect(() => {
        const el = trackRef.current?.children[active] as HTMLElement | undefined;
        if (el) {
            el.scrollIntoView({behavior: 'smooth', inline: 'center', block: 'nearest'});
        }
    }, [active]);

    const go = (dir: -1 | 1) => {
        if (!slides.length) return;
        setActive((prev) => {
            const next = prev + dir;
            if (next < 0) return 0;
            if (next >= slides.length) return slides.length - 1;
            return next;
        });
    };

    const onScroll = () => {
        const track = trackRef.current;
        if (!track) return;
        const children = Array.from(track.children) as HTMLElement[];
        if (!children.length) return;

        const trackCenter = track.scrollLeft + track.clientWidth / 2;

        let bestIndex = 0;
        let bestDist = Infinity;

        children.forEach((child, index) => {
            const childCenter = child.offsetLeft + child.clientWidth / 2;
            const dist = Math.abs(childCenter - trackCenter);
            if (dist < bestDist) {
                bestDist = dist;
                bestIndex = index;
            }
        });

        setActive(bestIndex);
    };

    return (
        <div className={styles.carousel}>
            {title && <div className={styles.header}>{title}</div>}

            <div className={styles.viewport}>
                <button
                    type="button"
                    className={`${styles.arrow} ${styles.arrowLeft}`}
                    onClick={() => go(-1)}
                    aria-label="Previous step"
                    disabled={active === 0}
                >
                    ‹
                </button>

                <div
                    className={styles.track}
                    ref={trackRef}
                    onScroll={onScroll}
                >
                    {slides.map((slide, index) => (
                        <div
                            key={slide.src + index}
                            className={`${styles.slide} ${index === active ? styles.slideActive : ''}`}
                        >
                            <div className={styles.frame}>
                                <img src={slide.src} alt={slide.alt ?? ''} loading="lazy" />
                            </div>
                            {slide.label && (
                                <div className={styles.caption}>{slide.label}</div>
                            )}
                        </div>
                    ))}
                </div>

                <button
                    type="button"
                    className={`${styles.arrow} ${styles.arrowRight}`}
                    onClick={() => go(1)}
                    aria-label="Next step"
                    disabled={active === slides.length - 1}
                >
                    ›
                </button>
            </div>

            <div className={styles.footer}>
                <div className={styles.dots}>
                    {slides.map((_, i) => (
                        <button
                            key={i}
                            type="button"
                            className={`${styles.dot} ${i === active ? styles.dotActive : ''}`}
                            onClick={() => setActive(i)}
                            aria-label={`Go to step ${i + 1}`}
                        />
                    ))}
                </div>
                <div className={styles.hint}>
                    Step {active + 1} of {slides.length} — swipe horizontally or use arrows.
                </div>
            </div>
        </div>
    );
};

export default WizardCarousel;
