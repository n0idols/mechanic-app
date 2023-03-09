"use client";
import AddServiceForm from "./AddServiceForm";
import useServices from "@/hooks/useServices";
import Loader from "@/components/Loader";
import Service from "@/components/Service";

export default function GetServices() {
  const servicesQuery = useServices();

  return (
    <div className="">
      <div className="my-4">
        <h2 className="text-5xl font-thin">Services</h2>
      </div>

      {servicesQuery.isError && <>Something is wrong</>}
      {servicesQuery.isLoading ? (
        // <Suspense fallback={<Loading />} />
        <Loader />
      ) : (
        <>
          {servicesQuery.data.data.map((service) => (
            <Service service={service} />
          ))}
        </>
      )}

      <AddServiceForm />
    </div>
  );
}
