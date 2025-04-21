"use client";

import { useEffect, useState } from "react";
import slideContent from "./slideContent";
import Link from "next/link";
import Image from "next/image";
import styles from "./HeroSlider.module.css";

const HeroSlider = () => {
    const [current, setCurrent] = useState(0);
    const totalSlides = slideContent.length;

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrent((prev) => (prev + 1) % totalSlides);
        }, 7000);
        return () => clearInterval(interval);
    }, [totalSlides]);

    const goToPrev = () => {
        setCurrent((prev) => (prev - 1 + totalSlides) % totalSlides);
    };

    const goToNext = () => {
        setCurrent((prev) => (prev + 1) % totalSlides);
    };

    const { title, description, buttonText, buttonLink, imageUrl } = slideContent[current];

    return (
        <section className={styles.hero}>
            <div className={styles.sliderWrapper}>
                <div
                    className={styles.sliderTrack}
                    style={{ transform: `translateX(-${current * 100}%)` }}
                >
                    {slideContent.map((slide, i) => (
                        <div className={styles.slide} key={i}>
                            <div className={styles.imageWrapper}>
                                <Image
                                    src={slide.imageUrl}
                                    alt={slide.title}
                                    fill
                                    style={{ objectFit: "cover" }}
                                    priority={i === current}
                                />
                                <div className={styles.overlay}></div>
                            </div>
                            <div className={styles.content}>
                                <h2>{slide.title}</h2>
                                <p>{slide.description}</p>
                                <Link
                                    className="sofax-default-btn pill sofax-header-btn"
                                    data-text={slide.buttonText}
                                    href={slide.buttonLink}
                                >
                                    <span className="button-wraper">{slide.buttonText}</span>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Arrows */}
            <button
                onClick={() =>
                    setCurrent((prev) =>
                        prev === 0 ? slideContent.length - 1 : prev - 1
                    )
                }
                className={`${styles.arrow} ${styles.leftArrow}`}
            >
                &#8592;
            </button>
            <button
                onClick={() =>
                    setCurrent((prev) => (prev + 1) % slideContent.length)
                }
                className={`${styles.arrow} ${styles.rightArrow}`}
            >
                &#8594;
            </button>

            {/* Dots */}
            <div className={styles.dots}>
                {slideContent.map((_, i) => (
                    <button
                        key={i}
                        onClick={() => setCurrent(i)}
                        className={`${styles.dot} ${i === current ? styles.active : ""}`}
                    />
                ))}
            </div>
        </section>

    );
};

export default HeroSlider;
