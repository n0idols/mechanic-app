"use client";

import useCreateAppointment from "@/hooks/useCreateAppointment";
import useServices from "@/hooks/useServices";
import useTimeslots from "@/hooks/useTimeslots";
import { useState } from "react";

export default function AddAppointmentForm() {
  const appointmentMutation = useCreateAppointment();
  const servicesQuery = useServices();
  const timeslotsQuery = useTimeslots();

  const [values, setValues] = useState({
    date: "",
    timeSlotId: 0,
    serviceId: 0,
    // service: { title: "" },
    // time: { title: "" },
  });

  const handleMutation = (e: React.FormEvent) => {
    e.preventDefault();
    appointmentMutation.mutate(values);
  };

  const handleDateChange = (e) => {
    setValues({
      ...values,
      date: e.target.value,
    });
  };
  const handleTimeChange = (e) => {
    setValues({
      ...values,
      timeSlotId: e.target.value,
    });
  };
  const handleServiceChange = (e) => {
    setValues({
      ...values,
      serviceId: e.target.value,
    });
  };

  return (
    <>
      <div className="mx-auto my-12 max-w-2xl">
        <h2>Schedule an Appointment</h2>
        <pre>{JSON.stringify(values, 2, null)}</pre>
        <p>Date: {values.date}</p>
        <form onSubmit={handleMutation}>
          <label htmlFor="date">Date</label>
          <input type="date" onChange={handleDateChange} />

          <label htmlFor="service">
            <span>Time</span>
          </label>
          {timeslotsQuery.isLoading ? (
            <></>
          ) : (
            <>
              <select name="time" onChange={handleTimeChange}>
                {timeslotsQuery.data?.data.map((time) => (
                  <option value={time.id}>{time.slot}</option>
                ))}
              </select>
            </>
          )}
          <label htmlFor="service">
            <span>Service</span>
          </label>
          {servicesQuery.isLoading ? (
            <></>
          ) : (
            <>
              <select name="service" id="" onChange={handleServiceChange}>
                {servicesQuery.data?.data.map((service) => (
                  <option value={service.id}>{service.title}</option>
                ))}
              </select>
            </>
          )}

          {/* <fieldset className="border border-gray-300 p-4">
            <legend className="text-sm font-black uppercase">
              The Details
            </legend>
            <label htmlFor="date">Notes</label>
            <input type="textarea" onChange={(e) => setDate(e.target.value)} />
          </fieldset> */}

          <button className="btn" type="submit">
            Submit
          </button>
        </form>
      </div>
    </>
  );
}
