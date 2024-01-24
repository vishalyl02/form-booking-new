
import React, { useState } from 'react';
import { Grid, Button } from '@mui/material';
import Testimonial from './Testimonial';

interface TestimonialData {
  id: number;
  content: string;
  author: string;
  image: string;
}

const testimonialData: TestimonialData[] = [
    { id: 1, content: 'Absolutely impressed with the best services provided!.Thank you for the outstanding service', author: 'Daniel Desai', image: 'https://images.unsplash.com/photo-1617608436966-601ebdeabe82?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bmF0dXJlJTIwaW1hZ2V8ZW58MHx8MHx8fDA%3D' },
  { id: 2, content: 'Top-notch assistance and nice medication from start to finish!. I highly recommend their services for anyone seeking quality care', author: 'Peter Abraham', image: 'https://images.unsplash.com/photo-1520564816385-4f9d711941aa?w=1400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fG5hdHVyZSUyMGltYWdlfGVufDB8fDB8fHww' },
  { id: 3, content: 'Exceptional service and the best help I have ever received!. Grateful for the outstanding experience and effective medication.', author: 'Mathur Sen Singh', image: 'https://images.unsplash.com/photo-1494247622028-9a5bbfbf529a?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTQwfHxuYXR1cmUlMjBpbWFnZXxlbnwwfHwwfHx8MA%3D%3D' },
  { id: 4, content: 'A stellar team that delivers the best services with utmost professionalism!. Highly satisfied with the overall experience!', author: 'Rahul Jacob', image: 'https://images.unsplash.com/photo-1620914854125-67a1981aae6a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG5hdHVyZSUyMGltYWdlfGVufDB8fDB8fHww' },
  { id: 5, content: 'Incredibly impressed with the nice medication and exceptional services!. Kudos for providing an outstanding service!', author: 'Nancy Stephen', image: 'https://images.unsplash.com/photo-1619851302789-ceaf8fa05f9a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fG5hdHVyZSUyMGltYWdlfGVufDB8fDB8fHww' },
  { id: 6, content: 'Outstanding support and the best help available!. A truly commendable team dedicated to delivering excellence.', author: 'Ramit Roy', image: 'https://images.unsplash.com/photo-1613322801003-0f7bdf988ecb?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDZ8fG5hdHVyZSUyMGltYWdlfGVufDB8fDB8fHww' },
  { id: 7, content: 'Flawless services and the best help I have ever encountered!. I highly recommend their services for anyone in need of reliable assistance.', author: 'Prashun Ahuja', image: 'https://plus.unsplash.com/premium_photo-1673138824704-344104aec465?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTd8fG5hdHVyZSUyMGltYWdlfGVufDB8fDB8fHww' },
  { id: 8, content: 'Impressed with the exceptional services and nice medication!. Thank you for going the extra mile and ensuring a positive experience!', author: 'Agarawal Lina', image: 'https://images.unsplash.com/photo-1627155936109-f4f08fb0f1cf?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Njd8fG5hdHVyZSUyMGltYWdlfGVufDB8fDB8fHww' },
  { id: 9, content: 'First-rate services and the best help I could ask for!. I highly recommend their services for a seamless and satisfying experience.', author: 'Humant Ojha', image: 'https://images.unsplash.com/photo-1658527732981-8590af89b0a3?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTgyfHxuYXR1cmUlMjBpbWFnZXxlbnwwfHwwfHx8MA%3D%3D' },
 ];
  

const TestimonialSlider: React.FC = () => {
  const [startIndex, setStartIndex] = useState(0);

  const handleNext = () => {
    setStartIndex((prevIndex) => prevIndex + 3);
  };

  const handlePrev = () => {
    setStartIndex((prevIndex) => Math.max(0, prevIndex - 3));
  };

  return (
    <>
      <Grid container spacing={2}>
        {testimonialData.slice(startIndex, startIndex + 3).map((testimonial) => (
          <Testimonial key={testimonial.id} {...testimonial} />
        ))}
      </Grid>
      <Button onClick={handlePrev} disabled={startIndex === 0}>Prev</Button>
      <Button onClick={handleNext} disabled={startIndex + 3 >= testimonialData.length}>Next</Button>
    </>
  );
};

export default TestimonialSlider;
