import React from 'react';
import './App.css';
import './AppDarkTheme.css';  // Import dark theme styles
import BookingForm from './components/BookingForm';
import Testimonials from './components/Testimonials';

const App: React.FC = () => {
  return (
    <div className="app">
      <section className="section-1">
        <div className="booking-form">
          <BookingForm />
        </div>
      </section>
      <section className="section-2">
        <Testimonials />
      </section>
    </div>
  );
};

export default App;
