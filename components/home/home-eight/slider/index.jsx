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
        }, 5000);
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
            <div className={styles.imageWrapper}>
                <Image
                    src={imageUrl}
                    alt={title}
                    fill
                    style={{ objectFit: "cover" }}
                    priority
                />
                <div className={styles.overlay}></div>
            </div>

            <div className={styles.content}>
                <h2>{title}</h2>
                <p>{description}</p>
                <Link className="sofax-default-btn pill sofax-header-btn" data-text="Get started" href={buttonLink}>
                    <span className="button-wraper">Get started</span>
                </Link>
            </div>

            {/* Arrows */}
            <button className={`${styles.arrow} ${styles.leftArrow}`} onClick={goToPrev}>
                &#10094;
            </button>
            <button className={`${styles.arrow} ${styles.rightArrow}`} onClick={goToNext}>
                &#10095;
            </button>

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
