"use client";

import axios from "axios";
import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import Modal from "@/components/Modal";

export default function AddTimeForm() {
  const [slot, setSlot] = useState("");
  const [isModalOpen, setModalOpen] = useState(false);

  function handleModalClose() {
    setModalOpen(false);
  }

  const mutation = useMutation(() => {
    return axios.post("/api/time/create", { slot });
  });

  async function timeMutation(e: React.FormEvent) {
    e.preventDefault();
    mutation.mutate();
  }

  return (
    <>
      <button onClick={() => setModalOpen(true)}>Add New Slot</button>
      <div>
        {mutation.isLoading ? (
          <div
            className="flex
          h-full w-full items-center justify-center bg-black text-white"
          >
            <h1 className="text-8xl">Loading...</h1>
          </div>
        ) : (
          <>
            {mutation.isError ? (
              <div>An error occurred: {mutation.error.message}</div>
            ) : null}

            {mutation.isSuccess ? <div>Time added!</div> : null}
          </>
        )}
      </div>
      <Modal
        title="Add new Time Slot"
        show={isModalOpen}
        onClose={handleModalClose}
      >
        <div className="flex flex-col p-2">
          <form onSubmit={timeMutation} className="">
            <input
              type="text"
              placeholder="Time Slot"
              name="time slot"
              value={slot}
              onChange={(e) => setSlot(e.target.value)}
              className="my-2 block w-full p-2"
            />
            <button
              type="submit"
              className="block w-full rounded-md bg-blue-400 p-2"
            >
              Add Time Slot
            </button>
          </form>
        </div>
      </Modal>
    </>
  );
}
