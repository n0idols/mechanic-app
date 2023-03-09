"use client";

import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import AddTimeForm from "./AddTimeForm";
import Modal from "@/components/Modal";
import { DeleteButton, EditButton } from "@/components/Icons";
import axios from "axios";
import AddAppointmentForm from "./AddAppointment";
import useAppointments from "@/hooks/useAppointments";
import Appointment from "./Appointment";

export default function GetAppointments() {
  const appointmentsQuery = useAppointments();
  const [isModalOpen, setModalOpen] = useState(false);

  function handleClose() {
    setModalOpen(false);
  }

  const mutation = useMutation((time) => {
    return axios.delete(`/api/time/${time.id}`).then((res) => res.data);
  });

  async function handleDelete(time) {
    mutation.mutate(time);
  }

  //   const updateTimeSlot = (id) => {
  //     const queryClient = useQueryClient();

  //     return useMutation({
  //       mutationFn: (newSlot) =>w
  //         axios
  //           .patch(`/api/time/${id}`, { slot: newSlot })
  //           .then((response) => response.data),
  //       // 💡 response of the mutation is passed to onSuccess
  //       onSuccess: (newSlot) => {
  //         // ✅ update detail view directly
  //         queryClient.setQueryData(["timeSlots", id], newSlot);
  //       },
  //     });
  //   };

  return (
    <div>
      <div className="my-4">
        <h2 className="text-5xl font-thin">Appointments</h2>
      </div>

      {appointmentsQuery.isLoading ? (
        <>Loading...</>
      ) : (
        <>
          {appointmentsQuery.data?.data.map((appointment) => (
            <Appointment appointment={appointment} />
          ))}
          {/* <pre>{JSON.stringify(appointmentsQuery, null, 2)}</pre> */}
        </>
      )}

      <AddAppointmentForm />
    </div>
  );
}
