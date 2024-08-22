import { useState, useEffect } from "react";
import { format, addHours, startOfToday, setHours, setMinutes } from "date-fns";
import { Calendar } from "@/components/ui/calendar";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { CalendarIcon, ClockIcon } from "lucide-react";

function MatDes() {
  const [date, setDate] = useState<Date | undefined>(undefined);
  const [time, setTime] = useState<string | undefined>(undefined);
  const [timeSlots, setTimeSlots] = useState<string[]>([]);

  useEffect(() => {
    if (date) {
      const slots = [];
      let currentSlot = setMinutes(setHours(date, 0), 0);
      const endOfDay = setMinutes(setHours(date, 23), 0);

      while (currentSlot <= endOfDay) {
        slots.push(format(currentSlot, "HH:mm"));
        currentSlot = addHours(currentSlot, 1);
      }

      setTimeSlots(slots);
    }
  }, [date]);

  const handleConfirm = () => {
    if (date && time) {
      alert(`Selected Date and Time: ${format(date, "PPP")} at ${time}`);
    } else {
      alert("Please select both date and time");
    }
  };

  const handleReset = () => {
    setDate(undefined);
    setTime(undefined);
  };

  return (
    <div className="space-y-4 w-full max-w-sm mx-auto">
      <div className="space-y-2">
        <label
          htmlFor="date"
          className="block text-sm font-medium text-gray-700"
        >
          Select Date
        </label>
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          disabled={(date) => date < startOfToday()}
          className="rounded-md border"
        />
      </div>

      <div className="space-y-2">
        <label
          htmlFor="time"
          className="block text-sm font-medium text-gray-700"
        >
          Select Time
        </label>
        <Select onValueChange={setTime} value={time}>
          <SelectTrigger id="time" className="w-full">
            <SelectValue placeholder="Select time slot" />
          </SelectTrigger>
          <SelectContent>
            {timeSlots.map((slot) => (
              <SelectItem key={slot} value={slot}>
                {slot}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="flex space-x-2">
        <Button onClick={handleConfirm} className="flex-1">
          Confirm
        </Button>
        <Button onClick={handleReset} variant="outline" className="flex-1">
          Reset
        </Button>
      </div>

      {date && time && (
        <div className="text-sm text-gray-600">
          <p className="flex items-center">
            <CalendarIcon className="mr-2 h-4 w-4" />
            Selected Date: {format(date, "PPP")}
          </p>
          <p className="flex items-center mt-1">
            <ClockIcon className="mr-2 h-4 w-4" />
            Selected Time: {time}
          </p>
        </div>
      )}
    </div>
  );
}
export default MatDes;
