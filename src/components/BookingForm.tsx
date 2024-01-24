
import React, { ChangeEvent, useState, useEffect } from 'react';
import {
  TextField,
  Button,
  Typography,
  Container,
  CssBaseline,
  Stepper,
  Step,
  StepLabel,
  InputLabel, 
  MenuItem,
  Select,
  SelectChangeEvent,
} from '@mui/material';
import './BookingForm.css';

interface BookingFormProps {
  selectedCity?: string | null;
}

const cities = [
  'New York',
  'Los Angeles',
  'Chicago',
  'Houston',
  'Phoenix',
  'Philadelphia',
  'San Antonio',
  'San Diego',
  'Dallas',
  'San Jose',
  'Others',
];

const BookingForm: React.FC<BookingFormProps> = ({ selectedCity }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    age: '',
    city: '',
    company: '',
    chiefComplaints: '',
    physioExperience: '',
    selectedDoctor: '',
  });
  const [bookingConfirmed, setBookingConfirmed] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const [doctorsList, setDoctorsList] = useState<string[]>([]);

  useEffect(() => {
    // Fetch all doctors list from the API
    fetchDoctorsList();
  }, []);

  const handleConfirmBooking = () => {
    setBookingConfirmed(true);
  };

  interface Doctor {
    id: number;
    name: string;
    city: string;
    age: number;
    expertise: string;
  }
  
  const fetchDoctorsList = () => {
   
    fetch('https://server-list-ru5x.onrender.com/doctors')
      .then((response) => response.json())
      .then((data: { doctors: Doctor[] }) => {
        // Check if data.doctors is an array before using map
        if (Array.isArray(data.doctors)) {
          // Extract doctors' names from the API response
          const names = data.doctors.map((doctor: Doctor) => doctor.name);
          setDoctorsList(names);
        } else {
          console.error('Error: Data.doctors is not an array', data);
        }
      })
      .catch((error) => {
        console.error('Error fetching doctors:', error);
      });
  };
  
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | { name?: string; value: unknown }> | SelectChangeEvent<string>
  ) => {
    // Use a callback function to ensure the latest state is used
    setFormData((prevFormData) => ({
      ...prevFormData,
      [e.target.name as string]: (e as React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | { name?: string; value: unknown }>).target.value,
    }));
  };

  const handleContinue = () => {
    setCurrentStep((prevStep) => prevStep + 1);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Implement form submission logic here, e.g., show confirmation message
    console.log('Form submitted:', formData);
  };

    return (
      <Container component="main" maxWidth="sm">
        <CssBaseline />
        <div className="booking-form">
        <div className="form-container">
          <Typography variant="h4" gutterBottom>
            Book your Appointment
          </Typography>
          <Stepper activeStep={currentStep - 1} alternativeLabel>
            <Step>
              <StepLabel>Step 1</StepLabel>
            </Step>
            <Step>
              <StepLabel>Step 2</StepLabel>
            </Step>
            <Step>
              <StepLabel>Step 3</StepLabel>
            </Step>
            <Step>
              <StepLabel>Step 4</StepLabel>
            </Step>
            <Step>
              <StepLabel>Step 5</StepLabel>
            </Step>
            <Step>
              <StepLabel>Step 6</StepLabel>
            </Step>
          </Stepper>
  
          <form onSubmit={handleSubmit} className={`small-form form-step-${currentStep}`}>
            {currentStep === 1 && (
              <>
                <TextField label="Name" name="name" value={formData.name} onChange={handleChange} fullWidth required />
                <TextField label="Phone" type="tel" name="phone" value={formData.phone} onChange={handleChange} fullWidth required />
              </>
            )}
  
            {currentStep === 2 && (
              <>
                <TextField label="Age" name="age" value={formData.age} onChange={handleChange} fullWidth required />
                <InputLabel htmlFor="city">City</InputLabel>
<Select
  label="City"
  name="city"
  id="city"
  value={formData.city}
  onChange={handleChange}
  fullWidth
  required
>
  {cities.map((city) => (
    <MenuItem key={city} value={city}>
      {city}
    </MenuItem>
  ))}
</Select>
                <TextField label="Company" name="company" value={formData.company} onChange={handleChange} fullWidth required />
              </>
            )}
  
            {currentStep === 3 && (
              <>
                <TextField
                  label="Complaints"
                  name="chiefComplaints"
                  value={formData.chiefComplaints}
                  onChange={handleChange}
                  multiline
                  fullWidth
                  required
                />
              </>
            )}
  
            {currentStep === 4 && (
              <>
                <TextField
                  label="Any previous experience with physiotherapy"
                  name="physioExperience"
                  value={formData.physioExperience}
                  onChange={handleChange}
                  multiline
                  fullWidth
                  required
                />
              </>
            )}
  
            {currentStep === 5 && (
              <>
                <Typography variant="h6">Available Doctors in {selectedCity}</Typography>
                <Select
                  label="Select Doctor"
                  name="selectedDoctor"
                  value={formData.selectedDoctor}
                  onChange={handleChange}
                  fullWidth
                  required
                >
                  {doctorsList.map((doctor) => (
                    <MenuItem key={doctor} value={doctor}>
                      {doctor}
                    </MenuItem>
                  ))}
                </Select>
              </>
            )}
  
            {currentStep === 6 && (
              <div>
                <Typography variant="h6">Booking Confirmation:</Typography>
                <Typography>Name: {formData.name}</Typography>
                <Typography>Phone: {formData.phone}</Typography>
                <Typography>Age: {formData.age}</Typography>
                <Typography>City: {formData.city}</Typography>
                <Typography>Company: {formData.company}</Typography>
                <Typography>Chief Complaints: {formData.chiefComplaints}</Typography>
                <Typography>Physio Experience: {formData.physioExperience}</Typography>
                <Typography>Selected Doctor: {formData.selectedDoctor}</Typography>
              </div>
            )}
  
            {currentStep < 6 ? (
              <Button variant="contained" color="primary" onClick={handleContinue} fullWidth>
                Continue
              </Button>
            ) : (
              <Button type="submit" variant="contained" color="primary" fullWidth>
                Confirm Booking
              </Button>
            )}
          </form>
       
       
       </div>
        </div>
        {bookingConfirmed && (
        <div className="thank-you-message">
          <Typography variant="h5">Thank you for contacting!</Typography>
          <Typography>
            Your booking has been confirmed. We'll get in touch with you shortly.
          </Typography>
        </div>
      )}
      </Container>
    );
  };
  
  export default BookingForm;
  