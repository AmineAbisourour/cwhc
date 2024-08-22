/**
 * v0 by Vercel.
 * @see https://v0.dev/t/po6CI6tA4oo
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";

function BookingPage() {
  const [step, setStep] = useState(1);
  const [bookingData, setBookingData] = useState({
    city: "",
    date: null,
    time: null,
    phone: "",
  });
  const handleCityChange = (value: any) => {
    setBookingData((prevData) => ({
      ...prevData,
      city: value,
    }));
    setStep(2);
  };
  const handleDateChange = (value: any) => {
    setBookingData((prevData) => ({
      ...prevData,
      date: value,
    }));
    setStep(3);
  };
  const handleTimeChange = (value: any) => {
    setBookingData((prevData) => ({
      ...prevData,
      time: value,
    }));
    setStep(4);
  };
  const handlePhoneChange = (value: any) => {
    setBookingData((prevData) => ({
      ...prevData,
      phone: value,
    }));
    setStep(5);
  };
  const handleConfirm = () => {
    console.log("Booking Data:", bookingData);
  };
  return (
    <div className="max-w-md mx-auto p-6 space-y-6">
      {step === 1 && (
        <div>
          <h2 className="text-2xl font-bold mb-4">
            Where would you like to go?
          </h2>
          <Input
            placeholder="Enter a city"
            value={bookingData.city}
            onChange={handleCityChange}
          />
        </div>
      )}
      {step === 2 && (
        <div>
          <h2 className="text-2xl font-bold mb-4">
            When would you like to go?
          </h2>
          <div className="grid grid-cols-2 gap-4">
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  className="flex-col items-start w-full h-auto"
                >
                  <span className="font-semibold uppercase text-[0.65rem]">
                    Date
                  </span>
                  {/* <span className="font-normal">
                    {bookingData.date
                      ? bookingData.date.toLocaleDateString()
                      : "Select date"}
                  </span> */}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="p-0 max-w-[276px]">
                <Calendar
                  mode="single"
                  value={bookingData.date}
                  onValueChange={handleDateChange}
                />
              </PopoverContent>
            </Popover>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  className="flex-col items-start w-full h-auto"
                >
                  <span className="font-semibold uppercase text-[0.65rem]">
                    Time
                  </span>
                  {/* <span className="font-normal">
                    {bookingData.time
                      ? bookingData.time.toLocaleTimeString()
                      : "Select time"}
                  </span> */}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="p-0 max-w-[276px]">
                <div />
              </PopoverContent>
            </Popover>
          </div>
        </div>
      )}
      {step === 3 && (
        <div>
          <h2 className="text-2xl font-bold mb-4">What's your phone number?</h2>
          <Input
            placeholder="Enter your phone number"
            value={bookingData.phone}
            onChange={handlePhoneChange}
          />
        </div>
      )}
      {step === 4 && (
        <div>
          <h2 className="text-2xl font-bold mb-4">Booking Summary</h2>
          <div className="space-y-2">
            <div className="flex justify-between">
              <span>City:</span>
              <span>{bookingData.city}</span>
            </div>
            <div className="flex justify-between">
              <span>Date:</span>
              {/* <span>{bookingData.date?.toLocaleDateString()}</span> */}
            </div>
            <div className="flex justify-between">
              <span>Time:</span>
              {/* <span>{bookingData.time?.toLocaleTimeString()}</span> */}
            </div>
            <div className="flex justify-between">
              <span>Phone:</span>
              <span>{bookingData.phone}</span>
            </div>
          </div>
        </div>
      )}
      {step === 5 && (
        <div>
          <h2 className="text-2xl font-bold mb-4">Confirm Booking</h2>
          <Button size="lg" className="w-full" onClick={handleConfirm}>
            Confirm Booking
          </Button>
        </div>
      )}
      <div className="flex justify-between">
        {step > 1 && (
          <Button
            variant="ghost"
            onClick={() => setStep(step - 1)}
            className="text-muted-foreground"
          >
            Back
          </Button>
        )}
        {step < 5 && (
          <Button
            onClick={() => setStep(step + 1)}
            disabled={
              (step === 1 && !bookingData.city) ||
              (step === 2 && (!bookingData.date || !bookingData.time)) ||
              (step === 3 && !bookingData.phone)
            }
          >
            Next
          </Button>
        )}
      </div>
    </div>
  );
}
export default BookingPage;
