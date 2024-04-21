"use client";

import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Timeout } from "@/lib/types";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";

export const Free30DayGit = () => {
  const [countdown, setCountdown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const [intervalId, setIntervalId] = useState<Timeout | null>(null);

  useEffect(() => {
    const id = setInterval(updateCountdown, 1000);
    setIntervalId(id);

    return () => clearInterval(id);
  }, []);

  function updateCountdown() {
    const targetDate = new Date("June 1, 2024 00:00:00").getTime();
    const now = new Date().getTime();
    const difference = targetDate - now;

    if (difference <= 0) {
      clearInterval(intervalId!);
      console.log("Countdown expired");
      return;
    }

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    setCountdown({ days, hours, minutes, seconds });
  }

  return (
    <div className="flex flex-col items-center justify-center h-[70vh] bg-gray-900 dark:bg-gray-100">
      <div className="max-w-md w-full bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-4">
            Free 30-Day Git and GitHub Training
          </h1>
          <p className="text-gray-600 dark:text-gray-400 mb-8">
            Join our exclusive WhatsApp group and learn Git and GitHub from the
            experts. The training starts on June 1st, 2024.
          </p>
        </div>
        <div className="flex justify-center items-center space-x-4 mb-8">
          <div className="bg-gray-200 dark:bg-gray-700 rounded-lg px-4 py-2 text-center">
            <div className="text-4xl font-bold text-gray-900 dark:text-gray-100">
              {countdown.days}
            </div>
            <div className="text-gray-600 dark:text-gray-400">Days</div>
          </div>
          <div className="bg-gray-200 dark:bg-gray-700 rounded-lg px-4 py-2 text-center">
            <div className="text-4xl font-bold text-gray-900 dark:text-gray-100">
              {countdown.hours}
            </div>
            <div className="text-gray-600 dark:text-gray-400">Hours</div>
          </div>
          <div className="bg-gray-200 dark:bg-gray-700 rounded-lg px-4 py-2 text-center">
            <div className="text-4xl font-bold text-gray-900 dark:text-gray-100">
              {countdown.minutes}
            </div>
            <div className="text-gray-600 dark:text-gray-400">Minutes</div>
          </div>
          <div className="bg-gray-200 dark:bg-gray-700 rounded-lg px-4 py-2 text-center">
            <div className="text-4xl font-bold text-gray-900 dark:text-gray-100">
              {countdown.seconds}
            </div>
            <div className="text-gray-600 dark:text-gray-400">Seconds</div>
          </div>
        </div>
        <div className="text-center">
          <Button className="w-full">
            <Link href="https://chat.whatsapp.com/LOlImBfwzJV259jDMagjlc">
              Join WhatsApp Group <FaWhatsapp size={25} className="inline text-green-500" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};
