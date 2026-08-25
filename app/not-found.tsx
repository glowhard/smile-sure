import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen flex flex-col">
      {/* Dark top section for navbar visibility */}
      <div className="bg-gradient-to-b from-[#1a1008] to-[#2d1f0e] pt-32 pb-16 sm:pt-36 sm:pb-20 flex-1 flex items-center justify-center px-4">
        <div className="text-center max-w-lg mx-auto">
          {/* Tooth illustration */}
          <div className="relative w-28 h-28 sm:w-32 sm:h-32 mx-auto mb-8">
            <svg viewBox="0 0 120 140" fill="none" className="w-full h-full">
              <path
                d="M60 10C45 10 35 20 30 35C25 50 20 70 25 90C30 110 40 130 45 130C50 130 52 115 55 105C57 98 60 95 60 95C60 95 63 98 65 105C68 115 70 130 75 130C80 130 90 110 95 90C100 70 95 50 90 35C85 20 75 10 60 10Z"
                fill="#3d2a14"
                stroke="#c8a95d"
                strokeWidth="3"
                strokeLinecap="round"
              />
              <circle cx="48" cy="50" r="4" fill="#c8a95d" opacity="0.8" />
              <circle cx="72" cy="50" r="4" fill="#c8a95d" opacity="0.8" />
              <path
                d="M48 70C52 76 68 76 72 70"
                stroke="#c8a95d"
                strokeWidth="2.5"
                strokeLinecap="round"
                opacity="0.7"
              />
            </svg>

            <span className="absolute -top-2 -right-2 text-2xl sm:text-3xl rotate-12 text-[#c8a95d]">?</span>
          </div>

          <h1 className="text-6xl sm:text-7xl font-black text-[#c8a95d] mb-3">
            404
          </h1>

          <p className="text-xl sm:text-2xl font-bold text-white/90 mb-3">
            This page went missing
          </p>

          <p className="text-white/50 text-sm sm:text-base mb-10 max-w-sm mx-auto">
            Looks like this page has been extracted. Let&apos;s get you back to a healthy spot.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href="/"
              className="w-full sm:w-auto px-8 py-3.5 bg-[#c8a95d] text-[#1a1008] font-bold rounded-full hover:bg-[#d4b76a] transition-all shadow-lg hover:shadow-xl text-sm"
            >
              Back to Home
            </Link>

            <a
              href="https://wa.me/919220688266?text=Hi,%20I%20would%20like%20to%20book%20an%20appointment"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-3.5 bg-[#25D366] text-white font-bold rounded-full hover:bg-[#1fb855] transition-all shadow-lg hover:shadow-xl text-sm flex items-center justify-center gap-2"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Book on WhatsApp
            </a>
          </div>

          <p className="mt-10 text-xs text-white/30">
            Or call us at{" "}
            <a href="tel:9220688266" className="text-[#c8a95d] font-semibold hover:underline">
              +91 9220688266
            </a>
          </p>
        </div>
      </div>
    </main>
  );
}
