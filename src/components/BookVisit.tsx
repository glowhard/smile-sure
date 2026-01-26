'use client';

import React from "react";
import { motion } from "framer-motion";
import { useContactEmail } from "../hooks/useContactEmail";

// Consistent fade-up animation variant
const FADE_DURATION = 0.7;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const fadeUpVariant: any = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: FADE_DURATION
    }
  }
};

const BookVisit = () => {
  const { send, isLoading, toast, toastVariant } = useContactEmail();

  // Get today's date in YYYY-MM-DD format for min date
  const today = new Date().toISOString().split('T')[0];

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const email = (form.elements.namedItem("email") as HTMLInputElement)?.value;
    const name = (form.elements.namedItem("name") as HTMLInputElement)?.value;
    const phone = (form.elements.namedItem("phone") as HTMLInputElement)?.value;
    const date = (form.elements.namedItem("date") as HTMLInputElement)?.value;

    await send({ email, name, phone, date });
  };

  return (
    <section
      id="book-visit"
      className="relative py-16 sm:py-24 md:py-32 overflow-hidden bg-book-visit"
    >
      {/* Overlay for contrast */}
      <div className="absolute inset-0 bg-black/40 pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 flex flex-col items-center justify-center relative z-10">
        <motion.div
          className="relative w-full rounded-2xl sm:rounded-3xl px-4 sm:px-6 md:px-12 lg:px-16 py-8 sm:py-10 md:py-12 lg:py-16 text-center !pb-[0] overflow-visible"
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
            className="relative z-10 text-sm sm:text-base md:text-lg text-white/90 max-w-3xl mx-auto leading-relaxed px-2"
            variants={fadeUpVariant}
            transition={{ duration: FADE_DURATION }}
          >
            Visit our Sector 120 clinic and meet Dr. Shrestha Singh. Get expert consultation for braces, dental treatments, and comprehensive oral care in a comfortable, modern setting.
          </motion.p>

          {/* Spacer above the floating card on larger screens */}
          <div className="h-12 sm:h-16 md:h-24 lg:h-28"></div>

          {/* Form Card */}
          {/* On mobile, card sits naturally in the flow; on larger screens it "floats" over the background */}
          <div className="flex items-center justify-center w-full px-2 sm:px-0 md:absolute md:bottom-0 md:left-0 md:translate-y-1/2">
            <motion.div
              className="w-full sm:w-[95%] md:w-[90%] lg:w-[85%] bg-white rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 lg:p-8 border-2 border-gray-100 shadow-2xl"
              variants={fadeUpVariant}
              transition={{ duration: FADE_DURATION }}
            >
              <div className="mb-3 sm:mb-4 w-full flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                <motion.p
                  className="text-left text-xs sm:text-sm text-gray-500"
                  variants={fadeUpVariant}
                  transition={{ duration: FADE_DURATION }}
                >
                  Fill out the form below and we&apos;ll confirm your appointment within 24 hours.
                </motion.p>
                <motion.a
                  href="https://wa.me/919220688266?text=Hi,%20I%20would%20like%20to%20book%20an%20appointment"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs sm:text-sm font-semibold text-primary hover:text-primary/80 transition-colors flex items-center gap-1.5 whitespace-nowrap"
                  variants={fadeUpVariant}
                  transition={{ duration: FADE_DURATION }}
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  Book via WhatsApp
                </motion.a>
              </div>

              <form
                onSubmit={handleSubmit}
                className="flex flex-col lg:flex-row items-stretch gap-2.5 sm:gap-3 md:gap-4"
              >
                <motion.input
                  type="text"
                  name="name"
                  placeholder="Full Name*"
                  className="flex-1 px-3 py-2.5 sm:px-4 sm:py-3 md:py-4 rounded-lg sm:rounded-xl border-2 border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-300 text-xs sm:text-sm md:text-base placeholder-gray-400 hover:border-gray-300"
                  required
                  minLength={2}
                />
                <motion.input
                  type="email"
                  name="email"
                  placeholder="Email Address*"
                  className="flex-1 px-3 py-2.5 sm:px-4 sm:py-3 md:py-4 rounded-lg sm:rounded-xl border-2 border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-300 text-xs sm:text-sm md:text-base placeholder-gray-400 hover:border-gray-300"
                  required
                />
                <motion.input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number*"
                  pattern="[0-9]{10}"
                  title="Please enter a valid 10-digit phone number"
                  className="flex-1 px-3 py-2.5 sm:px-4 sm:py-3 md:py-4 rounded-lg sm:rounded-xl border-2 border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-300 text-xs sm:text-sm md:text-base placeholder-gray-400 hover:border-gray-300"
                  required
                  maxLength={10}
                />
                <motion.input
                  type="date"
                  name="date"
                  min={today}
                  placeholder="Preferred Date*"
                  style={{
                    colorScheme: 'light'
                  }}
                  className="flex-1 px-3 py-2.5 sm:px-4 sm:py-3 md:py-4 rounded-lg sm:rounded-xl border-2 border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-300 text-xs sm:text-sm md:text-base hover:border-gray-300 cursor-pointer
                  [&::-webkit-datetime-edit-text]:text-gray-400
                  [&::-webkit-datetime-edit-month-field]:text-gray-400
                  [&::-webkit-datetime-edit-day-field]:text-gray-400
                  [&::-webkit-datetime-edit-year-field]:text-gray-400
                  [&::-webkit-calendar-picker-indicator]:cursor-pointer
                  [&::-webkit-calendar-picker-indicator]:opacity-60
                  [&::-webkit-calendar-picker-indicator]:hover:opacity-100
                  [&.has-value::-webkit-datetime-edit-text]:text-gray-900
                  [&.has-value::-webkit-datetime-edit-month-field]:text-gray-900
                  [&.has-value::-webkit-datetime-edit-day-field]:text-gray-900
                  [&.has-value::-webkit-datetime-edit-year-field]:text-gray-900"
                  onInput={(e) => {
                    const input = e.currentTarget;
                    if (input.value) {
                      input.classList.add('has-value');
                    } else {
                      input.classList.remove('has-value');
                    }
                  }}
                  required
                />
                <motion.button
                  type="submit"
                  disabled={isLoading}
                  className="flex items-center justify-center gap-2 px-4 py-2.5 sm:px-6 sm:py-3 md:px-8 md:py-4 rounded-lg sm:rounded-xl bg-primary hover:bg-primary/90 disabled:bg-primary/60 transition-all duration-300 text-white font-bold text-xs sm:text-sm md:text-base lg:w-auto w-full shadow-lg hover:shadow-xl disabled:cursor-not-allowed"
                  whileHover={{
                    scale: isLoading ? 1 : 1.05,
                  }}
                  whileTap={{ scale: isLoading ? 1 : 0.95 }}
                >
                  <span>
                    {isLoading ? "Booking..." : "Book Appointment"}
                  </span>
                  {!isLoading && (
                    <motion.svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 sm:h-5 sm:w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      whileHover={{ x: 2 }}
                      transition={{ duration: 0.2 }}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </motion.svg>
                  )}
                </motion.button>
              </form>
              {toast && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`mt-4 sm:mt-5 rounded-xl border-2 px-4 py-3 sm:px-5 sm:py-4 text-xs sm:text-sm font-semibold transition-all shadow-md ${toastVariant}`}
                >
                  <div className="flex items-center gap-2">
                    {toast.message.includes('success') || toast.message.includes('sent') ? (
                      <svg className="w-5 h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    ) : (
                      <svg className="w-5 h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                      </svg>
                    )}
                    <span>{toast.message}</span>
                  </div>
                </motion.div>
              )}
            </motion.div>
          </div>
        </motion.div>
        {/* Extra bottom padding so the floating card never gets cut off on small screens */}
        <div className="h-12 sm:h-16 md:h-24" />
      </div>
    </section>
  );
};

export default BookVisit;