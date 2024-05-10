import { Appointment } from "@/lib/types";
import { api } from "./supabase";

export const getAllAppointments = async () => {
  const response = await api.get("/appointments");
  if (response.status != 200) {
    throw new Error("Could not fetch appointments");
  }

  return response.data as Appointment[];
};

export const getSingleAppointment = async (id: string) => {
  const response = await api.get(`/appointments/${id}`);
  if (response.status != 200) {
    throw new Error("Could not fetch appointment");
  }

  return response.data as Appointment;
};
