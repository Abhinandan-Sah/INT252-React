import React, { useState } from 'react';

// Reusable form state management component using render props
const FormStateManager = ({ initialState, children }) => {
  const [formData, setFormData] = useState(initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const resetForm = () => {
    setFormData(initialState);
  };

  return children({
    formData,
    handleChange,
    resetForm
  });
};

// Student Personal Information Component
const StudentPersonalInfo = () => {
  const initialPersonalState = {
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: ''
  };

  return (
    <FormStateManager initialState={initialPersonalState}>
      {({ formData, handleChange, resetForm }) => (
        <div className="p-4 bg-gray-100 rounded-lg mb-4">
          <h2 className="text-xl font-bold mb-4">Personal Information</h2>
          <form className="space-y-4">
            <div>
              <label className="block mb-2">First Name</label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className="w-full p-2 border rounded"
              />
            </div>
            <div>
              <label className="block mb-2">Last Name</label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className="w-full p-2 border rounded"
              />
            </div>
            <div>
              <label className="block mb-2">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-2 border rounded"
              />
            </div>
            <div>
              <label className="block mb-2">Phone Number</label>
              <input
                type="tel"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                className="w-full p-2 border rounded"
              />
            </div>
            <div className="flex space-x-4">
              <button
                type="button"
                onClick={resetForm}
                className="bg-red-500 text-white px-4 py-2 rounded"
              >
                Reset
              </button>
            </div>
          </form>
        </div>
      )}
    </FormStateManager>
  );
};

// Student Academic Information Component
const StudentAcademicInfo = () => {
  const initialAcademicState = {
    major: '',
    gpa: '',
    graduationYear: '',
    currentSemester: ''
  };

  return (
    <FormStateManager initialState={initialAcademicState}>
      {({ formData, handleChange, resetForm }) => (
        <div className="p-4 bg-gray-100 rounded-lg">
          <h2 className="text-xl font-bold mb-4">Academic Information</h2>
          <form className="space-y-4">
            <div>
              <label className="block mb-2">Major</label>
              <input
                type="text"
                name="major"
                value={formData.major}
                onChange={handleChange}
                className="w-full p-2 border rounded"
              />
            </div>
            <div>
              <label className="block mb-2">GPA</label>
              <input
                type="number"
                name="gpa"
                step="0.1"
                min="0"
                max="4.0"
                value={formData.gpa}
                onChange={handleChange}
                className="w-full p-2 border rounded"
              />
            </div>
            <div>
              <label className="block mb-2">Graduation Year</label>
              <input
                type="number"
                name="graduationYear"
                value={formData.graduationYear}
                onChange={handleChange}
                className="w-full p-2 border rounded"
              />
            </div>
            <div>
              <label className="block mb-2">Current Semester</label>
              <select
                name="currentSemester"
                value={formData.currentSemester}
                onChange={handleChange}
                className="w-full p-2 border rounded"
              >
                <option value="">Select Semester</option>
                <option value="Fall">Fall</option>
                <option value="Spring">Spring</option>
                <option value="Summer">Summer</option>
              </select>
            </div>
            <div className="flex space-x-4">
              <button
                type="button"
                onClick={resetForm}
                className="bg-red-500 text-white px-4 py-2 rounded"
              >
                Reset
              </button>
            </div>
          </form>
        </div>
      )}
    </FormStateManager>
  );
};

// Main Student Application Component
const StudentApplication = () => {
  return (
    <div className="container mx-auto max-w-2xl p-4">
      <h1 className="text-2xl font-bold text-center mb-6">Student Application</h1>
      <div className="grid md:grid-cols-2 gap-4">
        <StudentPersonalInfo />
        <StudentAcademicInfo />
      </div>
    </div>
  );
};

export default StudentApplication;