"use client";

import { useEffect, useState } from "react";
import slideContent from "./slideContent";
import Link from "next/link";
import Image from "next/image";
import styles from "./HeroSlider.module.css";
import { FadeInStaggerTwo, FadeInStaggerTwoChildren } from "../../../animation/FadeInStaggerTwo";

const HeroSlider = () => {
    const [current, setCurrent] = useState(0);
    const totalSlides = slideContent.length;

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrent((prev) => (prev + 1) % totalSlides);
        }, 15000);
        return () => clearInterval(interval);
    }, [totalSlides]);

    const goToPrev = () => {
        setCurrent((prev) => (prev - 1 + totalSlides) % totalSlides);
    };

    const goToNext = () => {
        setCurrent((prev) => (prev + 1) % totalSlides);
    };

    const { title, description, buttonOneText, buttonTwoText, buttonOneLink, buttonTwoLink, imageUrl } = slideContent[current];

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
                                {/* <Link
                                    className="sofax-default-btn pill sofax-header-btn"
                                    data-text={slide.buttonText}
                                    href={slide.buttonLink}
                                >
                                    <span className="button-wraper">{slide.buttonText}</span>
                                </Link>
                                <Link
                                    className="sofax-default-btn pill sofax-header-btn rt-ml-20"
                                    data-text={slide.buttonText}
                                    href={slide.buttonLink}
                                >
                                    <span className="button-wraper">{slide.buttonText}</span>
                                </Link> */}
                                <FadeInStaggerTwo className="sofax-hero-btn-wrap sofax-hero5-btn extra-mt">
                                    <FadeInStaggerTwoChildren>
                                        <Link className="sofax-default-btn pill" data-text={slide.buttonOneText} href={slide.buttonOneLink}>
                                            <span className="button-wraper">{slide.buttonOneText}</span>
                                        </Link>
                                    </FadeInStaggerTwoChildren>
                                    <FadeInStaggerTwoChildren>
                                        <Link className="sofax-default-btn pill outline-btn" data-text={slide.buttonTwoText} href={slide.buttonTwoLink}>
                                            <span className="button-wraper">{slide.buttonTwoText}</span>
                                        </Link>
                                    </FadeInStaggerTwoChildren>
                                </FadeInStaggerTwo>
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
