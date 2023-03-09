import React, { useState } from "react";
import useEditService from "@/hooks/useEditService";
import useDeleteService from "@/hooks/useDeleteService";
import { DeleteButton, EditButton } from "./Icons";
import Modal from "./Modal";
import Loader from "./Loader";

export default function Service({ service }) {
  const editService = useEditService();
  const deleteService = useDeleteService();

  const [isModalOpen, setModalOpen] = useState(false);
  const [values, setValues] = useState({
    id: service.id,
    title: service.title,
  });

  const handleMutation = (e) => {
    e.preventDefault();

    editService.mutate(values);
    setModalOpen(false);
  };

  const handleTitleChange = (e) => {
    setValues({
      ...values,
      title: e.target.value,
    });
  };

  const handleDelete = () => {
    confirm("U sure bro?");
    deleteService.mutate(service.id);
  };
  return (
    <>
      <div
        key={service.id}
        className="m-2 rounded-sm bg-gray-100 p-2 shadow-sm"
      >
        <div className="flex justify-between">
          <h1 className="font-light">{service.title}</h1>

          <div className="flex">
            <div onClick={() => setModalOpen(true)}>
              <EditButton />
            </div>

            <div onClick={handleDelete}>
              <DeleteButton />
            </div>
          </div>
        </div>
      </div>
      {deleteService.isLoading && <Loader />}
      {editService.isLoading && <Loader />}

      <Modal
        show={isModalOpen}
        onClose={() => setModalOpen(false)}
        title={service.title}
      >
        <form onSubmit={handleMutation}>
          <input
            type="text"
            placeholder={service.title}
            name="service"
            value={values.title}
            onChange={handleTitleChange}
          />

          <button type="submit">Update Service</button>
        </form>

        <pre>{JSON.stringify(values, null, 2)}</pre>
      </Modal>
    </>
  );
}
