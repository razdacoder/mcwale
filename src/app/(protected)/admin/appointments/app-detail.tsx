"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { getSingleAppointment } from "@/services/appointmnet";
import { useQuery } from "@tanstack/react-query";
import { format } from "date-fns";

type Props = {
  selectedId: string;
  setSelectedId: (values: string | null) => void;
};

export default function AppointmentDetail({
  selectedId,
  setSelectedId,
}: Props) {
  const { data: app, isLoading } = useQuery({
    queryKey: ["app-detail", selectedId],
    queryFn: () => getSingleAppointment(selectedId),
  });

  return (
    <div>
      <Card className="overflow-hidden" x-chunk="dashboard-05-chunk-4">
        <CardHeader className="flex flex-row items-start bg-muted/50">
          <div className="grid gap-0.5">
            <CardTitle className="group flex items-center gap-2 text-lg">
              Appointment Detail
            </CardTitle>
            <CardDescription>
              {isLoading ? (
                <Skeleton className="h-2" />
              ) : (
                <>
                  {" "}
                  Booked at: {format(app?.created_at as Date, "MMMM d, yyyy")}
                </>
              )}
            </CardDescription>
          </div>
          <div className="ml-auto flex items-center gap-1"></div>
        </CardHeader>
        <CardContent className="p-6 text-sm">
          <div className="grid gap-3">
            <dl className="grid gap-3">
              <div className="flex items-center justify-between">
                <dt className="text-muted-foreground">Name</dt>
                <dd>
                  {app?.first_name} {app?.last_name}
                </dd>
              </div>
              <div className="flex items-center justify-between">
                <dt className="text-muted-foreground">Email</dt>
                <dd>
                  <a href="mailto:">{app?.email}</a>
                </dd>
              </div>
              <div className="flex items-center justify-between">
                <dt className="text-muted-foreground">Phone</dt>
                <dd>
                  <a href="tel:">{app?.phone_number}</a>
                </dd>
              </div>
              <div className="flex items-center justify-between">
                <dt className="text-muted-foreground">Address</dt>
                <dd>
                  <address className="grid gap-0.5 not-italic text-muted-foreground">
                    <span>{app?.address}</span>
                  </address>
                </dd>
              </div>
              <div className="flex items-center justify-between">
                <dt className="text-muted-foreground">Date</dt>
                <dd>{format(app?.date as Date, "PPPP p")}</dd>
              </div>
            </dl>
          </div>
        </CardContent>
        <CardFooter className="flex flex-row items-center border-t bg-muted/50 px-6 py-3">
          <div className="text-xs text-muted-foreground">
            {isLoading ? (
              <Skeleton className="h-2" />
            ) : (
              <> Updated: {format(app?.created_at as Date, "MMMM d, yyyy")}</>
            )}
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}
