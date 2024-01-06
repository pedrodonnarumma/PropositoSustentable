import { useCallback, useEffect, useState } from 'react';
import { Carousel, Embla } from '@mantine/carousel';
import { Progress } from '@mantine/core';
import CarrouselTest from '../components/CarrouselTest'

function CarouselMain() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [embla, setEmbla] = useState<Embla | null>(null);

  const handleScroll = useCallback(() => {
    if (!embla) return;
    const progress = Math.max(0, Math.min(1, embla.scrollProgress()));
    setScrollProgress(progress * 100);
  }, [embla, setScrollProgress]);

  useEffect(() => {
    if (embla) {
      embla.on('scroll', handleScroll);
      handleScroll();
    }
  }, [embla]);

  return (
    <>
      <Carousel
        dragFree
        slideSize="50%"
        slideGap="md"
        height={200}
        getEmblaApi={setEmbla}
        initialSlide={2}
      >
        <Carousel.Slide>sdfsd</Carousel.Slide>
        <Carousel.Slide>2DAHJDASHDASIODJDAHJDASHDASIODJ</Carousel.Slide>
        <Carousel.Slide>3DAHJDASHDASIODJDAHJDASHDASIODJDAHJDASHDASIODJ</Carousel.Slide>
        <Carousel.Slide>1DAHJDASHDASIODJ</Carousel.Slide>
        <Carousel.Slide>2DAHJDASHDASIODJDAHJDASHDASIODJ</Carousel.Slide>
        <Carousel.Slide>3DAHJDASHDASIODJDAHJDASHDASIODJDAHJDASHDASIODJ</Carousel.Slide>
        <Carousel.Slide>1DAHJDASHDASIODJ</Carousel.Slide>
        <Carousel.Slide>2DAHJDASHDASIODJDAHJDASHDASIODJ</Carousel.Slide>
        <Carousel.Slide>3DAHJDASHDASIODJDAHJDASHDASIODJDAHJDASHDASIODJ</Carousel.Slide>
        {/* ...other slides */}
      </Carousel>
      <Progress
        value={scrollProgress}
        maw={320}
        size="sm"
        mt="xl"
        mx="auto"
      />
    </>
  );
} export default CarouselMain