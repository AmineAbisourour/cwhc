import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Calendar } from "@/components/ui/calendar";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import {
  format,
  addHours,
  startOfHour,
  isToday,
  isBefore,
  isSameDay,
} from "date-fns";

interface BookingData {
  package?: string;
  city?: string;
  date?: Date;
  time?: string;
  phone?: string;
}

interface BookingProps {
  initialData?: Partial<BookingData>;
}

export default function Component({ initialData = {} }: BookingProps) {
  const [step, setStep] = useState(0);
  const [bookingData, setBookingData] = useState<BookingData>(() => {
    const savedData = localStorage.getItem("bookingData");
    const parsedSavedData = savedData ? JSON.parse(savedData) : {};
    return { ...parsedSavedData, ...initialData };
  });
  const [showConfirmation, setShowConfirmation] = useState(false);

  useEffect(() => {
    localStorage.setItem("bookingData", JSON.stringify(bookingData));
  }, [bookingData]);

  const handleInputChange = (
    field: keyof BookingData,
    value: string | Date
  ) => {
    setBookingData((prev) => ({ ...prev, [field]: value }));
  };

  const generateTimeSlots = (selectedDate: Date) => {
    const slots = [];
    let startTime = isToday(selectedDate)
      ? startOfHour(addHours(new Date(), 1))
      : startOfHour(selectedDate);
    const endTime = addHours(startOfHour(new Date(selectedDate)), 24);

    while (isBefore(startTime, endTime)) {
      slots.push(format(startTime, "HH:mm"));
      startTime = addHours(startTime, 2);
    }

    return slots;
  };

  const isStepValid = () => {
    switch (step) {
      case 0:
        return !!bookingData.package;
      case 1:
        return !!bookingData.city;
      case 2:
        return !!bookingData.date;
      case 3:
        return !!bookingData.time;
      case 4:
        return !!bookingData.phone && bookingData.phone.length >= 10;
      default:
        return true;
    }
  };

  const renderStep = () => {
    switch (step) {
      case 0:
        return (
          <div className="space-y-4">
            <Label htmlFor="package">Select a package</Label>
            <Select
              onValueChange={(value) => handleInputChange("package", value)}
              value={bookingData.package}
            >
              <SelectTrigger id="package">
                <SelectValue placeholder="Choose a package" />
              </SelectTrigger>
              <SelectContent className="bg-white border border-gray-200 shadow-lg">
                <SelectItem value="basic">Basic Package</SelectItem>
                <SelectItem value="standard">Standard Package</SelectItem>
                <SelectItem value="premium">Premium Package</SelectItem>
              </SelectContent>
            </Select>
          </div>
        );
      case 1:
        return (
          <div className="space-y-4">
            <Label htmlFor="city">Select a city</Label>
            <Select
              onValueChange={(value) => handleInputChange("city", value)}
              value={bookingData.city}
            >
              <SelectTrigger id="city">
                <SelectValue placeholder="Choose a city" />
              </SelectTrigger>
              <SelectContent className="bg-white border border-gray-200 shadow-lg">
                <SelectItem value="new-york">New York</SelectItem>
                <SelectItem value="los-angeles">Los Angeles</SelectItem>
                <SelectItem value="chicago">Chicago</SelectItem>
                <SelectItem value="houston">Houston</SelectItem>
              </SelectContent>
            </Select>
          </div>
        );
      case 2:
        return (
          <div className="space-y-4">
            <Label>Select a date</Label>
            <Calendar
              mode="single"
              selected={bookingData.date}
              onSelect={(date: Date) => handleInputChange("date", date as Date)}
              disabled={(date: Date) => {
                const today = new Date();
                today.setHours(0, 0, 0, 0); // Set time to midnight for accurate comparison
                return date < today;
              }}
              className="rounded-md border"
            />
          </div>
        );
      case 3:
        return (
          <div className="space-y-4">
            <Label htmlFor="time">Select a time slot</Label>
            <Select
              onValueChange={(value) => handleInputChange("time", value)}
              value={bookingData.time}
            >
              <SelectTrigger id="time">
                <SelectValue placeholder="Choose a time slot" />
              </SelectTrigger>
              <SelectContent className="bg-white border border-gray-200 shadow-lg">
                {bookingData.date &&
                  generateTimeSlots(bookingData.date).map((slot) => (
                    <SelectItem key={slot} value={slot}>
                      {slot}
                    </SelectItem>
                  ))}
              </SelectContent>
            </Select>
          </div>
        );
      case 4:
        return (
          <div className="space-y-4">
            <Label htmlFor="phone">Enter your phone number</Label>
            <Input
              id="phone"
              type="tel"
              placeholder="Phone number"
              value={bookingData.phone || ""}
              onChange={(e) => handleInputChange("phone", e.target.value)}
            />
          </div>
        );
      case 5:
        return (
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Booking Summary</h3>
            <p>Package: {bookingData.package}</p>
            <p>City: {bookingData.city}</p>
            <p>
              Date:{" "}
              {bookingData.date && format(bookingData.date, "MMMM d, yyyy")}
            </p>
            <p>Time: {bookingData.time}</p>
            <p>Phone: {bookingData.phone}</p>
          </div>
        );
      default:
        return null;
    }
  };

  const handleNext = () => {
    if (step < 5) {
      setStep(step + 1);
    } else {
      setShowConfirmation(true);
    }
  };

  const handleBack = () => {
    if (step > 0) {
      setStep(step - 1);
    }
  };

  const handleConfirm = () => {
    // Here you would typically send the booking data to your backend
    console.log("Booking confirmed:", bookingData);
    setShowConfirmation(false);
    // Reset the form and local storage
    setBookingData({});
    localStorage.removeItem("bookingData");
    setStep(0);
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6">Book Your Service</h2>
      {renderStep()}
      <div className="mt-6 flex justify-between">
        {step > 0 && (
          <Button onClick={handleBack} variant="outline">
            Back
          </Button>
        )}
        <Button onClick={handleNext} disabled={!isStepValid()}>
          {step === 5 ? "Confirm Booking" : "Next"}
        </Button>
      </div>
      <Dialog open={showConfirmation} onOpenChange={setShowConfirmation}>
        <DialogContent className="bg-white border border-gray-200 shadow-lg">
          <DialogHeader>
            <DialogTitle>Booking Confirmed!</DialogTitle>
            <DialogDescription>
              Congratulations! Your booking has been received. We'll contact you
              shortly with more details.
            </DialogDescription>
          </DialogHeader>
          <Button onClick={handleConfirm}>Close</Button>
        </DialogContent>
      </Dialog>
    </div>
  );
}
