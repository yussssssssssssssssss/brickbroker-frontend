import React, { useState } from 'react';
import { PropertyService,ScheduleVisitRequest } from '../services/propertyService';

interface ScheduleVisitFormProps {
  propertyId: number;
}

const ScheduleVisitForm: React.FC<ScheduleVisitFormProps> = ({ propertyId }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phoneNumber: '',
    preferredDate: '',
    preferredTime: '',
    notes: '',
    visitType: 'IN_PERSON',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const requestData: ScheduleVisitRequest = {
      ...formData,
      propertyId: propertyId,
    };

    try {
      const response = await PropertyService.scheduleVisit(requestData);

      if (response.success && response.data) {
        alert(response.data.message);
        setFormData({
          fullName: '',
          email: '',
          phoneNumber: '',
          preferredDate: '',
          preferredTime: '',
          notes: '',
          visitType: 'IN_PERSON',
        });
      } else {
        alert('Failed: ' + (response.error || 'Something went wrong'));
      }
    } catch (err) {
      alert('Error: Unable to schedule visit.');
    }

    setIsSubmitting(false);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="text"
        name="fullName"
        value={formData.fullName}
        onChange={handleChange}
        placeholder="Full Name"
        required
        className="w-full px-4 py-2 border rounded-lg"
      />
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Email Address"
        required
        className="w-full px-4 py-2 border rounded-lg"
      />
      <input
        type="tel"
        name="phoneNumber"
        value={formData.phoneNumber}
        onChange={handleChange}
        placeholder="Phone Number"
        required
        className="w-full px-4 py-2 border rounded-lg"
      />

      <div className="grid grid-cols-2 gap-4">
        <input
          type="date"
          name="preferredDate"
          value={formData.preferredDate}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border rounded-lg"
        />
        <input
          type="time"
          name="preferredTime"
          value={formData.preferredTime}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border rounded-lg"
        />
      </div>

      <select
        name="visitType"
        value={formData.visitType}
        onChange={handleChange}
        required
        className="w-full px-4 py-2 border rounded-lg"
      >
        <option value="IN_PERSON">In-Person Visit</option>
        <option value="VIRTUAL">Virtual Tour</option>
      </select>

      <textarea
        name="notes"
        value={formData.notes}
        onChange={handleChange}
        placeholder="Additional Notes (optional)"
        className="w-full px-4 py-2 border rounded-lg"
      />

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-[#BC8664] hover:bg-[#A0734F] text-white py-2 rounded-lg"
      >
        {isSubmitting ? 'Scheduling...' : 'Schedule Visit'}
      </button>
    </form>
  );
};

export default ScheduleVisitForm;
