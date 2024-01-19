import AppointmentForm from "./appointment-form";

export default function AppointmentPage() {
  return (
    <main className="my-12">
      <h2 className="block scroll-m-20 my-12 pb-2 uppercase text-center tracking-wider text-2xl font-light ">
        appointment
      </h2>
      <section className="container h-[78vh] px-8 py-3 md:pl-6 md:pr-0 xl:px-16 flex ">
        <div className="w-full md:w-2/4 flex items-center">
          <AppointmentForm />
        </div>
        <div className="md:block md:w-2/4 relative">
          {/* <div className="w-full h-full bg-[url('/img1-min.jpg')] bg-cover bg-center bg-no-repeat"></div> */}
          <div></div>
          <div className="hidden xl:block absolute top-[50%] right-16 translate-y-[-50%]">
            <h1 className="text-6xl font-black">
              By <br /> Appointment
            </h1>
            <p className="leading-8 w-10/12 font-light mt-3">
              To receive a copy of our latest McWale E-lookbook which are full
              of great ideas and style tips: please submit your details below.
              Feel free to send us any queries, comments or request fabric
              swatches using the comment box.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
