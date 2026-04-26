"use client";

import "swiper/css";
import "swiper/css/pagination";
import styles from "./Slider.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { Button, Container } from "@/components"
import { LINKS } from "@/constants/links";

export const Slider = () => {
  return (
    <section className={styles.slider} id="slider">
      <Container>
        <Swiper
          style={{ height: '100vh' }}
          modules={[Autoplay, Pagination]}
          autoplay={{ delay: 4000 }}
          loop
          direction='horizontal'
          breakpoints={{
            1200: {
              direction: 'vertical',
            },
          }}
          slidesPerView={1}
          spaceBetween={20}
          pagination={{
            clickable: true,
          }}
        >
          <SwiperSlide className={styles.slide}>
            <img className={styles.img} src="/images/case-1.webp" alt="" />

            <div className={styles.info}>
              <p className={styles.title}>
                <span>Instant Auto Sales: </span>
                Boost conversion
              </p>

              <p className={styles.subtitle}>
                Immediately deliver digital products and services to your users.
              </p>
              <Button href={LINKS.API_DOCS} variant="primary" className={styles.button}>
                Open API Docs
              </Button>
            </div>
          </SwiperSlide>

          <SwiperSlide className={styles.slide}>
            <img className={styles.img} src="/images/case-2.webp" alt="" />


            <div className={styles.info}>
              <p className={styles.title}>
                <span>Channels integration:</span> Seamless access
              </p>
              <p className={styles.subtitle}>
                Automatically unlock exclusive content to your users.
              </p>
              <Button href={LINKS.API_DOCS} variant="primary" className={styles.button}>Open API Docs</Button>
            </div>
          </SwiperSlide>

          <SwiperSlide className={styles.slide}>
            <img className={styles.img} src="/images/case-3.webp" alt="" />

            <div className={styles.info}>
              <p className={styles.title}>
                <span>Endless customization:</span> with Webhooks
              </p>
              <p className={styles.subtitle}>
                Receive successful payment notifications in real-time.
              </p>
              <Button href={LINKS.API_DOCS} variant="primary" className={styles.button}>Open API Docs</Button>
            </div>
          </SwiperSlide>
        </Swiper>
      </Container>
    </section>
  );
};
