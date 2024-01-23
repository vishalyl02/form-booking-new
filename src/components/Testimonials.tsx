// TestimonialSlider.tsx
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
    { id: 1, content: 'Testimonial 1 content', author: 'Author 1', image: 'https://images.unsplash.com/photo-1611075385312-e8087cdd9967?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjEwfHxkb2N0b3JzfGVufDB8fDB8fHww' },
  { id: 2, content: 'Testimonial 2 content', author: 'Author 2', image: 'https://images.unsplash.com/photo-1631815585553-a8a8d2361e2e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjE2fHxkb2N0b3JzfGVufDB8fDB8fHww' },
  { id: 3, content: 'Testimonial 3 content', author: 'Author 3', image: 'https://images.unsplash.com/photo-1584463623578-37726932ba2d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjI0fHxkb2N0b3JzfGVufDB8fDB8fHww' },
  { id: 4, content: 'Testimonial 4 content', author: 'Author 4', image: 'https://images.unsplash.com/photo-1611075385312-e8087cdd9967?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjEwfHxkb2N0b3JzfGVufDB8fDB8fHww' },
  { id: 5, content: 'Testimonial 5 content', author: 'Author 5', image: 'https://images.unsplash.com/photo-1631815585553-a8a8d2361e2e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjE2fHxkb2N0b3JzfGVufDB8fDB8fHww' },
  { id: 6, content: 'Testimonial 6 content', author: 'Author 6', image: 'https://images.unsplash.com/photo-1584463623578-37726932ba2d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjI0fHxkb2N0b3JzfGVufDB8fDB8fHww' },
  { id: 7, content: 'Testimonial 7 content', author: 'Author 7', image: 'https://images.unsplash.com/photo-1611075385312-e8087cdd9967?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjEwfHxkb2N0b3JzfGVufDB8fDB8fHww' },
  { id: 8, content: 'Testimonial 8 content', author: 'Author 8', image: 'https://images.unsplash.com/photo-1631815585553-a8a8d2361e2e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjE2fHxkb2N0b3JzfGVufDB8fDB8fHww' },
  { id: 9, content: 'Testimonial 9 content', author: 'Author 9', image: 'https://images.unsplash.com/photo-1584463623578-37726932ba2d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjI0fHxkb2N0b3JzfGVufDB8fDB8fHww' },
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
