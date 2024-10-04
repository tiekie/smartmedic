/* eslint-disable tailwindcss/classnames-order */
import Image from "next/image";
import Link from "next/link";
import { FaUserTie } from "react-icons/fa"; // Importing an icon from react-icons

import { PatientForm } from "@/components/forms/PatientForm";
import { PasskeyModal } from "@/components/PasskeyModal";

const Home = ({ searchParams }: SearchParamProps) => {
  const isAdmin = searchParams?.admin === "true";

  return (
    <div className="flex h-screen max-h-screen">
      {isAdmin && <PasskeyModal />}

      <aside className="bg-gray-800 text-white flex flex-col items-center p-4 w-16">
        <Link 
          href="/?admin=true" 
          className="mb-4 flex items-center justify-center w-7 h-7 bg-green-500 rounded-full"
          aria-label="Receptionist"
        >
          <FaUserTie size={20} />
        </Link>
      </aside>

      <section className="remove-scrollbar container my-auto">
        <div className="sub-container max-w-[496px]">
          <Image
            src="/assets/icons/favpng_logo-physician-medical-prescription-clinic-hospital.png"
            height={1000}
            width={1000}
            alt="patient"
            className="mb-12 h-16 w-24"
          />

          <PatientForm />

          <div className="text-14-regular mt-20 flex justify-between">
            <p className="justify-items-end text-dark-600 xl:text-left">
              <b>GET IN CONTACT:</b> <br /> 
              
              011 6457952
            </p>
          </div>
        </div>
      </section>

      <Image
        src="/assets/images/inf.jpg"
        height={1000}
        width={1000}
        alt="patient"
        className="side-img max-w-[50%] hidden md:block"
      />
    </div>
  );
};

export default Home;




