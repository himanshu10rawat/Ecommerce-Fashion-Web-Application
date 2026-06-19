"use client";

import { useEffect, useRef, useState } from "react";
import Autoplay from "embla-carousel-autoplay";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

export default function Banner() {
  const [api, setApi] = useState();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  const plugin = useRef(
    Autoplay({
      delay: 5000,
      stopOnInteraction: false,
    }),
  );

  useEffect(() => {
    if (!api) return;

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap());

    const onSelect = () => {
      setCurrent(api.selectedScrollSnap());
    };

    api.on("select", onSelect);

    return () => {
      api.off("select", onSelect);
    };
  }, [api]);

  const banners = [
    {
      src: "/banner-images/banner1.jpg",
      alt: "Fashion lady banner 1st",
    },
    {
      src: "/banner-images/banner2.jpg",
      alt: "Fashion lady banner 2nd",
    },
    {
      src: "/banner-images/banner3.jpg",
      alt: "Fashion lady banner 3rd",
    },
    {
      src: "/banner-images/banner4.jpg",
      alt: "Fashion lady banner 4th",
    },
  ];

  return (
    <div className="w-full">
      <Carousel setApi={setApi} plugins={[plugin.current]} className="w-full">
        <CarouselContent>
          {banners.map(({ src, alt }, index) => (
            <CarouselItem key={src} className={"relative w-full h-100"}>
              <Image
                src={src}
                alt={alt}
                fill
                sizes="100vw"
                preload={index === 0}
                className="object-cover"
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-4 h-10 w-10" />
        <CarouselNext className="right-4 h-10 w-10" />
      </Carousel>
      <div className="mt-4 flex justify-center gap-2">
        {Array.from({ length: count }).map((_, index) => (
          <button
            key={index}
            onClick={() => api?.scrollTo(index)}
            aria-label={`Go to slide ${index + 1}`}
            className={`h-2 rounded-full transition-all duration-300 ${
              current === index ? "w-6 bg-black" : "w-2 bg-gray-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
