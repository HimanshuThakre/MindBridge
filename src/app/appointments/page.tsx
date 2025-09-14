import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { BookingForm } from "./booking-form";

export default function AppointmentsPage() {
  return (
    <div className="flex flex-col gap-6">
      <header>
        <h1 className="text-3xl font-bold tracking-tight">
          Book an Appointment
        </h1>
        <p className="text-muted-foreground">
          Schedule a confidential session with a campus counselor.
        </p>
      </header>
      <div className="mx-auto w-full max-w-2xl">
        <Card>
          <CardHeader>
            <CardTitle>Appointment Details</CardTitle>
            <CardDescription>
              Select a counselor, date, and time that works for you. All
              bookings are confidential.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <BookingForm />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
