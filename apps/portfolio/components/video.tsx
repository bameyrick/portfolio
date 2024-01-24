'use client';

import { useEffect, useRef, useState } from 'react';

export function Video({ src }: { src: string }) {
  const [isIntersecting, setIsIntersecting] = useState(false);

  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => setIsIntersecting(entry.isIntersecting));

    observer.observe(ref.current as unknown as Element);

    return () => observer.disconnect();
  }, [isIntersecting]);

  useEffect(() => {
    if (isIntersecting) {
      (ref.current as unknown as HTMLVideoElement).play();
    } else {
      (ref.current as unknown as HTMLVideoElement).pause();
    }
  }, [isIntersecting]);

  return (
    <video ref={ref} controls={true} loop={true}>
      <source src={src} />
    </video>
  );
}
