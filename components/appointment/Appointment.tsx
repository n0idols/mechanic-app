import { DeleteButton } from "../Icons";
import useDeleteAppointment from "@/hooks/useDeleteAppointment";

export default function Appointment({ appointment }) {
  const deleteAppointment = useDeleteAppointment();

  const handleDelete = () => {
    confirm("U sure bro?");

    deleteAppointment.mutate(appointment.id);
  };

  return (
    <div
      key={appointment.id}
      className="mb-4 rounded-sm bg-gray-100 p-2 shadow-sm"
    >
      <div className="flex flex-col justify-between">
        <h1 className="font-light">{appointment.date}</h1>

        <p>{appointment.service.title}</p>
        <p>{appointment.time.slot}</p>
        {/* <p>{appointment.services.map((service) => service.title)}</p>
          <p>{appointment.time.map((time) => time.slot)}</p> */}

        <div className="flex">
          <div onClick={handleDelete}>
            <DeleteButton />
          </div>
        </div>
      </div>
    </div>
  );
}
