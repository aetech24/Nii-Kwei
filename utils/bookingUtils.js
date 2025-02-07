// Form validation
export const validateForm = (formData, currentStep) => {
  const errors = {};

  switch (currentStep) {
    case 1:
      if (!formData.eventName?.trim()) {
        errors.eventName = 'Event name is required';
      }
      if (!formData.eventDate?.trim()) {
        errors.eventDate = 'Event date is required';
      } else {
        const selectedDate = new Date(formData.eventDate);
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        if (selectedDate < today) {
          errors.eventDate = 'Event date cannot be in the past';
        }
      }
      if (!formData.eventTime?.trim()) {
        errors.eventTime = 'Event time is required';
      }
      if (!formData.eventType?.trim()) {
        errors.eventType = 'Please select an event type';
      }
      break;

    case 2:
      if (!formData.fullName?.trim()) {
        errors.fullName = 'Full name is required';
      }
      if (!formData.email?.trim()) {
        errors.email = 'Email is required';
      } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
        errors.email = 'Invalid email format';
      }
      if (!formData.phone?.trim()) {
        errors.phone = 'Phone number is required';
      } else if (!/^\+?[\d\s-]{10,}$/.test(formData.phone.replace(/\s+/g, ''))) {
        errors.phone = 'Invalid phone number format';
      }
      break;

    case 3:
      if (!formData.selectedMinister?.trim()) {
        errors.selectedMinister = 'Please select a preferred minister';
      }
      if (!formData.guestCount?.toString().trim()) {
        errors.guestCount = 'Please provide expected number of guests';
      } else if (parseInt(formData.guestCount) <= 0) {
        errors.guestCount = 'Number of guests must be greater than 0';
      }
      if (!formData.additionalInfo?.trim()) {
        errors.additionalInfo = 'Please provide any special requests or additional information';
      }
      break;
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors
  };
};

// Submit booking request
export const submitBookingRequest = async (formData) => {
  // This would be replaced with an actual API call in production
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        success: true,
        bookingId: `BK-${Math.random().toString(36).substr(2, 9).toUpperCase()}`,
        message: 'Your booking request has been submitted successfully!'
      });
    }, 1500);
  });
};

// Process form data before submission
export const processFormData = (formData) => {
  return {
    ...formData,
    submissionDate: new Date().toISOString(),
    status: 'pending',
    bookingReference: `REF-${Math.random().toString(36).substr(2, 6).toUpperCase()}`
  };
};
