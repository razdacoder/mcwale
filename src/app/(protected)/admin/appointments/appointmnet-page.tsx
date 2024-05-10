"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Appointment } from "@/lib/types";
import { getAllAppointments } from "@/services/appointmnet";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import AppointmentDetail from "./app-detail";
import { DataTable } from "./app-table";
import { app_columns } from "./columns";

export default function AppointmentClientPage() {
  const { data: app } = useQuery({
    queryKey: ["get-all-appointments"],
    queryFn: () => getAllAppointments(),
  });

  const [selectedId, setSelectedId] = useState<string | null>(null);

  return (
    <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8 lg:grid-cols-3 xl:grid-cols-3">
      <div className="grid auto-rows-max items-start gap-4 md:gap-8 lg:col-span-2">
        <Card x-chunk="dashboard-05-chunk-3">
          <CardHeader className="px-7">
            <CardTitle>Appointments</CardTitle>
            <CardDescription>Recent appointments booked.</CardDescription>
          </CardHeader>
          <CardContent>
            <DataTable
              columns={app_columns}
              data={app as Appointment[]}
              selectedId={selectedId}
              setId={(value) => setSelectedId(value)}
            />
          </CardContent>
        </Card>
      </div>
      {selectedId && (
        <AppointmentDetail
          selectedId={selectedId}
          setSelectedId={(value) => setSelectedId(value)}
        />
      )}
    </main>
  );
}
