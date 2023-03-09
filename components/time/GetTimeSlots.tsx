"use client";

import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import AddTimeForm from "./AddTimeForm";
import Modal from "@/components/Modal";
import { DeleteButton, EditButton } from "@/components/Icons";
import axios from "axios";
import useTimeslots from "@/hooks/useTimeslots";

export default function GetTimeSlots() {
  const timeslotQuery = useTimeslots();
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedTime, setSelectedTime] = useState({
    id: 0,
    slot: "",
  });

  const [editedSlot, setEditedSlot] = useState("");

  function handleClose() {
    setModalOpen(false);
  }

  function handleEditModal(time) {
    setModalOpen(true);
    setSelectedTime(time);
  }

  const mutation = useMutation((time) => {
    return axios.delete(`/api/time/${time.id}`).then((res) => res.data);
  });

  async function handleDelete(time) {
    mutation.mutate(time);
  }

  const updateTimeSlot = (id) => {
    const queryClient = useQueryClient();

    return useMutation({
      mutationFn: (newSlot) =>
        axios
          .patch(`/api/time/${id}`, { slot: newSlot })
          .then((response) => response.data),
      // 💡 response of the mutation is passed to onSuccess
      onSuccess: (newSlot) => {
        // ✅ update detail view directly
        queryClient.setQueryData(["timeSlots", id], newSlot);
      },
    });
  };

  function Time({ time }) {
    return (
      <>
        <div key={time.id} className="roudned-sm bg-gray-100 p-2 shadow-sm">
          <div className="flex justify-between">
            <h1 className="font-light">{time.slot}</h1>

            <div className="flex">
              <div onClick={() => handleEditModal(time)}>
                <EditButton />
              </div>
              <div onClick={() => handleDelete(time)}>
                <DeleteButton />
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }

  return (
    <div className="">
      <div className="my-4">
        <h2 className="text-5xl font-thin">Time Slots</h2>
      </div>

      {timeslotQuery.isLoading ? (
        <>Loading..</>
      ) : (
        <>
          {timeslotQuery.data.data.map((time) => (
            <Time time={time} />
          ))}
        </>
      )}
      <Modal show={isModalOpen} onClose={handleClose}>
        <form onSubmit={() => updateTimeSlot(time.id)}>
          <input
            type="text"
            placeholder="Update Time Slot"
            name="timeslot"
            value={editedSlot}
            onChange={(e) => setEditedSlot(e.target.value)}
          />
          <button type="submit">Add Time Slot</button>
        </form>
      </Modal>

      <AddTimeForm />
    </div>
  );
}
