'use client';

import { useState } from 'react';
import { Carousel } from 'acme-carousel';

export default function Gallery() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button onClick={() => setIsOpen(true)}>View pictures</button>
      {isOpen && (
        <Carousel
          items={[
            {
              id: '1',
              src: 'https://example.com/image1.jpg',
              alt: 'Beautiful landscape',
              title: 'Amazing View',
              description: 'A stunning landscape photograph',
            },
            {
              id: '2',
              src: 'https://example.com/image2.jpg',
              alt: 'City skyline',
              title: 'Urban Life',
              description: 'The vibrant city at night',
            },
            {
              id: '3',
              src: 'https://example.com/image3.jpg',
              alt: 'Mountain range',
              title: `Nature's Beauty`,
              description: 'Majestic mountains under the clear sky',
            },
            {
              id: '4',
              src: 'https://example.com/image4.jpg',
              alt: 'Beach scene',
              title: 'Coastal Paradise',
              description: 'A serene beach with turquoise waters',
            },
          ]}
          autoplay={{ enabled: true, interval: 2000 }}
          infinite
          pauseOnHover
        />
      )}
    </div>
  );
}
