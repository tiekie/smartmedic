"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Form } from "@/components/ui/form";
import { createUser } from "@/lib/actions/patient.actions";
import { UserFormValidation } from "@/lib/validation";

import "react-phone-number-input/style.css";
import CustomFormField, { FormFieldType } from "../CustomFormField";
import SubmitButton from "../SubmitButton";

export const PatientForm = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<z.infer<typeof UserFormValidation>>({
    resolver: zodResolver(UserFormValidation),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof UserFormValidation>) => {
    setIsLoading(true);

    try {
      const user = {
        name: values.name,
        email: values.email,
        phone: values.phone,
      };

      const newUser = await createUser(user);

      if (newUser) {
        router.push(`/patients/${newUser.$id}/register`);
      }
    } catch (error) {
      console.log(error);
    }

    setIsLoading(false);
  };

  // Function to handle button click
  const handleIconClick = () => {
    window.location.href = "https://poe.com/SmartMedicAssistant";
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="flex-1 space-y-6">
        <section className="mb-12 space-y-4">
          <h1 className="header">Hi there 👋</h1>
          <p className="text-dark-700">Get started with SmartMedic.</p>
        </section>

        <CustomFormField
          fieldType={FormFieldType.INPUT}
          control={form.control}
          name="name"
          label="Full name"
          placeholder="Jenovic bitus"
          iconSrc="/assets/icons/user.svg"
          iconAlt="user"
        />

        <CustomFormField
          fieldType={FormFieldType.INPUT}
          control={form.control}
          name="email"
          label="Email"
          placeholder="jenovicbitus@gmail.com"
          iconSrc="/assets/icons/email.svg"
          iconAlt="email"
        />

        <CustomFormField
          fieldType={FormFieldType.PHONE_INPUT}
          control={form.control}
          name="phone"
          label="Phone number"
          placeholder="(027) 123-4567"
        />

        <SubmitButton isLoading={isLoading}>Get Started</SubmitButton>
      </form>

      {/* Floating Button with "Ask AI" Text and Arrow */}
      <div className="fixed bottom-8 right-8 flex items-center space-x-2">
        {/* Text */}
        <span className="text-blue-500 font-semibold">Ask AI</span>

        {/* Arrow pointing to button 
        <div className="relative">
          <div className="absolute right-full top-1/2 transform -translate-y-1/2 translate-x-full">
            <img src="/assets/icons/arrow-right.svg" alt="Arrow pointing to the button" className="w-4 h-4" />
          </div>
        </div> 
*/}

        {/* Icon Button */}
        <button
          onClick={handleIconClick}
          className="w-12 h-12 rounded-full bg-blue-500 hover:bg-green-500 flex items-center justify-center"
        >
          <img src="/assets/icons/CHATBOT.png" alt="Assistant Icon" className="w-12 h-12" />
        </button>
      </div>
    </Form>
  );
};


