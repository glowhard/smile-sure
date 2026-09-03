'use client';

import React, { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { DayPicker } from "react-day-picker";
import * as Popover from "@radix-ui/react-popover";
import { format, isBefore, startOfDay } from "date-fns";
import { useContactEmail } from "../hooks/useContactEmail";
import { fadeUpVariant } from '@/src/constants/animations';
import Turnstile from './Turnstile';

const FADE_DURATION = 0.7;

const bookingSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  phone: z.string().regex(/^[0-9]{10}$/, "Enter a valid 10-digit number"),
  email: z.string().email("Enter a valid email address"),
  date: z.string().min(1, "Please select a date"),
});

type BookingForm = z.infer<typeof bookingSchema>;

const BookVisit = () => {
  const { send, isLoading, toast, toastVariant } = useContactEmail();
  const [selectedDate, setSelectedDate] = useState<Date | undefined>();
  const [calendarOpen, setCalendarOpen] = useState(false);
  const [turnstileToken, setTurnstileToken] = useState<string>('');
  const [turnstileFailed, setTurnstileFailed] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm<BookingForm>({
    resolver: zodResolver(bookingSchema),
    mode: "onBlur",
  });

  const onSubmit = async (data: BookingForm) => {
    const success = await send({ ...data, turnstileToken: turnstileToken || undefined });

    if (success) {
      reset();
      setSelectedDate(undefined);
      setTurnstileToken('');
      setSubmitted(true);
    }
  };

  const handleBookAnother = () => {
    setSubmitted(false);
    setTurnstileFailed(false);
  };

  const handleTurnstileVerify = useCallback((token: string) => {
    setTurnstileToken(token);
  }, []);

  const handleTurnstileError = useCallback(() => {
    setTurnstileFailed(true);
  }, []);

  const handleDateSelect = (date: Date | undefined) => {
    setSelectedDate(date);

    if (date) {
      setValue("date", format(date, "yyyy-MM-dd"), { shouldValidate: true });
    } else {
      setValue("date", "", { shouldValidate: true });
    }

    setCalendarOpen(false);
  };

  const today = startOfDay(new Date());

  return (
    <section
      id="book-visit"
      className="relative py-16 sm:py-24 md:py-32 overflow-hidden bg-book-visit"
    >
      <div className="absolute inset-0 bg-black/40 pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 flex flex-col items-center justify-center relative z-10">
        <motion.div
          className="relative w-full rounded-2xl sm:rounded-3xl px-4 sm:px-6 md:px-12 lg:px-16 py-8 sm:py-10 md:py-12 lg:py-16 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUpVariant}
        >
          <motion.p
            className="relative z-10 text-xs sm:text-sm font-semibold uppercase text-white/90 mb-3 sm:mb-4 tracking-wider"
            variants={fadeUpVariant}
            transition={{ duration: FADE_DURATION }}
          >
            Book a Visit
          </motion.p>

          <motion.h2
            className="relative z-10 text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-white leading-tight mb-4 sm:mb-6 px-2"
            variants={fadeUpVariant}
            transition={{ duration: FADE_DURATION }}
          >
            Ready to transform your smile? <br className="hidden sm:block" /> Schedule your visit today.
          </motion.h2>

          <motion.p
            className="relative z-10 text-sm sm:text-base md:text-lg text-white/90 max-w-3xl mx-auto leading-relaxed px-2 mb-8 sm:mb-12"
            variants={fadeUpVariant}
            transition={{ duration: FADE_DURATION }}
          >
            Visit our Sector 120 clinic and meet Dr. Shrestha Singh. Get expert consultation for braces, dental treatments, and comprehensive oral care in a comfortable, modern setting.
          </motion.p>

          {/* Form Card */}
          <motion.div
            className="w-full sm:w-[95%] md:w-[90%] lg:w-[80%] mx-auto bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-7 md:p-8 lg:p-10 shadow-2xl"
            variants={fadeUpVariant}
            transition={{ duration: FADE_DURATION }}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-6 sm:mb-8">
              <motion.a
                href="https://wa.me/919220688266?text=Hi,%20I%20would%20like%20to%20book%20an%20appointment"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 py-4 sm:py-5 rounded-xl sm:rounded-2xl bg-[#25D366] hover:bg-[#1fb855] text-white font-bold text-sm sm:text-base md:text-lg transition-all duration-300 shadow-lg hover:shadow-xl"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <svg className="w-6 h-6 sm:w-7 sm:h-7" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                WhatsApp
              </motion.a>

              <motion.a
                href="tel:9220688266"
                className="flex items-center justify-center gap-3 py-4 sm:py-5 rounded-xl sm:rounded-2xl bg-white border-2 border-primary text-primary hover:bg-primary/5 font-bold text-sm sm:text-base md:text-lg transition-all duration-300 shadow-lg hover:shadow-xl"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <svg className="w-6 h-6 sm:w-7 sm:h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Call Now
              </motion.a>
            </div>

            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4 }}
                  className="flex flex-col items-center justify-center py-10 sm:py-14"
                >
                  <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-emerald-50 flex items-center justify-center mb-6">
                    <svg className="w-12 h-12 sm:w-14 sm:h-14" viewBox="0 0 24 24" fill="none">
                      <motion.path
                        d="M5 13l4 4L19 7"
                        stroke="#059669"
                        strokeWidth={2.5}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                      />
                    </svg>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">
                    Appointment Request Sent!
                  </h3>

                  <p className="text-sm sm:text-base text-gray-500 mb-8 max-w-sm">
                    We&apos;ll call you within 24 hours to confirm your visit.
                  </p>

                  <button
                    onClick={handleBookAnother}
                    className="px-6 py-3 rounded-xl border-2 border-gray-200 text-sm font-semibold text-gray-600 hover:border-primary hover:text-primary transition-all duration-200"
                  >
                    Book Another Appointment
                  </button>
                </motion.div>
              ) : (
                <motion.div
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Divider */}
                  <div className="flex items-center gap-4 mb-6 sm:mb-8">
                    <div className="flex-1 h-px bg-gray-200"></div>
                    <span className="text-xs sm:text-sm text-gray-400 font-medium">or book via email</span>
                    <div className="flex-1 h-px bg-gray-200"></div>
                  </div>

                  {/* Form */}
                  <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5"
                    noValidate
                  >
                    {/* Name */}
                    <div>
                      <label htmlFor="booking-name" className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1.5 ml-1">
                        Full Name
                      </label>

                      <input
                        id="booking-name"
                        type="text"
                        autoComplete="name"
                        placeholder="Rahul Sharma"
                        {...register("name")}
                        className={`w-full px-4 py-3.5 sm:py-4 rounded-xl bg-gray-50 border-2 transition-all duration-200 text-sm sm:text-base placeholder-gray-300 font-medium outline-none ${
                          errors.name
                            ? "border-red-300 focus:border-red-400 focus:ring-2 focus:ring-red-100"
                            : "border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 focus:bg-white"
                        }`}
                      />

                      <AnimatePresence>
                        {errors.name && (
                          <motion.p
                            initial={{ opacity: 0, y: -4 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -4 }}
                            className="text-xs text-red-500 mt-1 ml-1 font-medium"
                          >
                            {errors.name.message}
                          </motion.p>
                        )}
                      </AnimatePresence>
                    </div>

                    {/* Phone */}
                    <div>
                      <label htmlFor="booking-phone" className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1.5 ml-1">
                        Phone Number
                      </label>

                      <div className="relative">
                        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-sm text-gray-400 font-medium pointer-events-none">
                          +91
                        </span>

                        <input
                          id="booking-phone"
                          type="tel"
                          autoComplete="tel"
                          placeholder="9876543210"
                          maxLength={10}
                          {...register("phone")}
                          className={`w-full pl-12 pr-4 py-3.5 sm:py-4 rounded-xl bg-gray-50 border-2 transition-all duration-200 text-sm sm:text-base placeholder-gray-300 font-medium outline-none ${
                            errors.phone
                              ? "border-red-300 focus:border-red-400 focus:ring-2 focus:ring-red-100"
                              : "border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 focus:bg-white"
                          }`}
                        />
                      </div>

                      <AnimatePresence>
                        {errors.phone && (
                          <motion.p
                            initial={{ opacity: 0, y: -4 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -4 }}
                            className="text-xs text-red-500 mt-1 ml-1 font-medium"
                          >
                            {errors.phone.message}
                          </motion.p>
                        )}
                      </AnimatePresence>
                    </div>

                    {/* Email */}
                    <div>
                      <label htmlFor="booking-email" className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1.5 ml-1">
                        Email Address
                      </label>

                      <input
                        id="booking-email"
                        type="email"
                        autoComplete="email"
                        placeholder="rahul@gmail.com"
                        {...register("email")}
                        className={`w-full px-4 py-3.5 sm:py-4 rounded-xl bg-gray-50 border-2 transition-all duration-200 text-sm sm:text-base placeholder-gray-300 font-medium outline-none ${
                          errors.email
                            ? "border-red-300 focus:border-red-400 focus:ring-2 focus:ring-red-100"
                            : "border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 focus:bg-white"
                        }`}
                      />

                      <AnimatePresence>
                        {errors.email && (
                          <motion.p
                            initial={{ opacity: 0, y: -4 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -4 }}
                            className="text-xs text-red-500 mt-1 ml-1 font-medium"
                          >
                            {errors.email.message}
                          </motion.p>
                        )}
                      </AnimatePresence>
                    </div>

                    {/* Date Picker */}
                    <div>
                      <label htmlFor="booking-date" className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1.5 ml-1">
                        Preferred Date
                      </label>

                      <input type="hidden" {...register("date")} />

                      <Popover.Root open={calendarOpen} onOpenChange={setCalendarOpen}>
                        <Popover.Trigger asChild>
                          <button
                            id="booking-date"
                            type="button"
                            className={`w-full px-4 py-3.5 sm:py-4 rounded-xl bg-gray-50 border-2 transition-all duration-200 text-sm sm:text-base font-medium outline-none text-left flex items-center justify-between ${
                              errors.date
                                ? "border-red-300 focus:border-red-400 focus:ring-2 focus:ring-red-100"
                                : "border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 focus:bg-white"
                            }`}
                          >
                            <span className={selectedDate ? "text-gray-900" : "text-gray-300"}>
                              {selectedDate ? format(selectedDate, "dd MMM yyyy") : "Select a date"}
                            </span>

                            <svg className="w-5 h-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                          </button>
                        </Popover.Trigger>

                        <Popover.Portal>
                          <Popover.Content
                            className="z-[100] bg-white rounded-2xl shadow-2xl border border-gray-100 p-4"
                            sideOffset={8}
                            align="start"
                          >
                            <DayPicker
                              mode="single"
                              selected={selectedDate}
                              onSelect={handleDateSelect}
                              disabled={(date) => isBefore(date, today)}
                              classNames={{
                                root: "text-sm",
                                months: "flex flex-col",
                                month: "space-y-3",
                                month_caption: "flex justify-center items-center h-8",
                                caption_label: "text-sm font-semibold text-gray-800",
                                nav: "flex items-center justify-between absolute inset-x-0 top-0 px-1",
                                button_previous: "p-1.5 rounded-lg hover:bg-gray-100 text-gray-600 transition-colors",
                                button_next: "p-1.5 rounded-lg hover:bg-gray-100 text-gray-600 transition-colors",
                                weekdays: "grid grid-cols-7 mb-1",
                                weekday: "text-xs font-medium text-gray-400 text-center w-9 py-1",
                                weeks: "space-y-0.5",
                                week: "grid grid-cols-7",
                                day: "text-center",
                                day_button: "w-9 h-9 rounded-lg text-sm font-medium transition-all duration-150 hover:bg-primary/10 hover:text-primary",
                                selected: "!bg-primary !text-white rounded-lg font-semibold",
                                today: "ring-1 ring-primary/30 rounded-lg font-semibold text-primary",
                                disabled: "text-gray-200 cursor-not-allowed hover:bg-transparent hover:text-gray-200",
                                outside: "text-gray-200",
                              }}
                            />
                          </Popover.Content>
                        </Popover.Portal>
                      </Popover.Root>

                      <AnimatePresence>
                        {errors.date && (
                          <motion.p
                            initial={{ opacity: 0, y: -4 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -4 }}
                            className="text-xs text-red-500 mt-1 ml-1 font-medium"
                          >
                            {errors.date.message}
                          </motion.p>
                        )}
                      </AnimatePresence>
                    </div>

                    {/* Turnstile */}
                    <Turnstile onVerify={handleTurnstileVerify} onExpire={() => setTurnstileToken('')} onError={handleTurnstileError} />

                    {/* Submit */}
                    <motion.button
                      type="submit"
                      disabled={isLoading || (!turnstileToken && !turnstileFailed)}
                      className="sm:col-span-2 flex items-center justify-center gap-2 px-6 py-4 sm:py-5 rounded-xl sm:rounded-2xl bg-primary hover:bg-primary/90 disabled:bg-primary/50 transition-all duration-300 text-white font-bold text-sm sm:text-base md:text-lg shadow-lg hover:shadow-xl disabled:cursor-not-allowed mt-2"
                      whileHover={{ scale: isLoading ? 1 : 1.01 }}
                      whileTap={{ scale: isLoading ? 1 : 0.98 }}
                    >
                      {isLoading ? "Booking..." : "Book Appointment"}
                      {!isLoading && (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      )}
                    </motion.button>
                  </form>

                  {/* Toast (error only - success shows the success state) */}
                  <AnimatePresence>
                    {toast && toast.type === "error" && (
                      <motion.div
                        role="status"
                        aria-live="polite"
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className={`mt-5 rounded-xl border-2 px-5 py-4 text-sm font-semibold shadow-md ${toastVariant}`}
                      >
                        <div className="flex items-center gap-2">
                          <svg className="w-5 h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                          </svg>
                          <span>{toast.message}</span>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default BookVisit;
