// Testimonial.tsx
import React from 'react';
import { Typography, Paper, Grid, Button, Card, CardContent, CardMedia } from '@mui/material';

interface TestimonialProps {
  id: number;
  content: string;
  author: string;
  image: string;
}

const Testimonial: React.FC<TestimonialProps> = ({ id, content, author, image }) => {
  return (
    <Grid item xs={12} sm={4}>
      <Card>
        <CardMedia
          component="img"
          height="140"
          image={image}
          alt={`Author ${id}`}
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            {content}
          </Typography>
          <Typography variant="caption" color="text.secondary">
            - {author}
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default Testimonial;
