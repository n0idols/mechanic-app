"use client";

import axios from "axios";
import { useMutation } from "@tanstack/react-query";
import { Suspense, useState } from "react";
import Modal from "@/components/Modal";
import useCreateService from "@/hooks/useCreateService";
import Loading from "./loading";

export default function AddServiceForm() {
  const serviceMutation = useCreateService();
  const [values, setValues] = useState({ title: "" });
  const [isModalOpen, setModalOpen] = useState(false);

  async function submitMutation(e: React.FormEvent) {
    e.preventDefault();
    serviceMutation.mutate(values);
    setModalOpen(false);
  }

  return (
    <>
      <button onClick={() => setModalOpen(true)}>Add New Service</button>
      <div>
        {serviceMutation.isLoading ? (
          <Suspense fallback={<Loading />} />
        ) : (
          <>
            {serviceMutation.isError ? (
              <div>An error occurred: {serviceMutation.error.message}</div>
            ) : null}

            {serviceMutation.isSuccess ? <div>Service added!</div> : null}
          </>
        )}
      </div>
      <Modal
        title="Add new Service"
        show={isModalOpen}
        onClose={() => setModalOpen(false)}
      >
        <div className="flex flex-col p-2">
          <form onSubmit={submitMutation} className="">
            <input
              type="text"
              placeholder="Name of Service"
              name="service"
              value={values.title}
              onChange={(e) => setValues({ title: e.target.value })}
              className="my-2 block w-full p-2"
            />
            <button
              type="submit"
              className="block w-full rounded-md bg-blue-400 p-2"
            >
              Add Service
            </button>
          </form>
        </div>
      </Modal>
    </>
  );
}
