// layout/components/FreeConsultationButton.jsx


"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { useTranslation } from 'next-i18next';

export default function FreeConsultationButton() {
  const [showPopup, setShowPopup] = useState(false);
  const popupRef = useRef(null);
  const { t } = useTranslation('common');

  const togglePopup = () => {
    setShowPopup((prev) => !prev);
  };

  // Close when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        setShowPopup(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative hidden md:flex" ref={popupRef}>
      {/* Main Button */}
      <button
        onClick={togglePopup}
        className="ml-6 px-5 py-2 rounded-full border-2 border-black text-black font-semibold hover:bg-black hover:text-white transition-all duration-300"
      >
{t('contact.freeConsultation')}
      </button>

      {/* Popup */}
      {showPopup && (
        <div className="absolute top-14 right-0 w-72 bg-white border border-gray-200 rounded-2xl shadow-2xl p-6 space-y-5 animate-fadeIn z-50">
          <h4 className="text-lg font-bold text-black mb-4">
            {t('contact.chooseMethod')}
          </h4>
          <div className="flex flex-col space-y-4">
            <a
              href="https://wa.me/213549575512"
              target="_blank"
              className="text-sm text-gray-700 font-semibold hover:text-black transition"
            >
              {t('contact.whatsapp')}
            </a>
            <a
              href="viber://chat?number=+213549575512"
              target="_blank"
              className="text-sm text-gray-700 font-semibold hover:text-black transition"
            >
              {t('contact.viber')}
            </a>
            <a
              href="tel:+213549575512"
              className="text-sm text-gray-700 font-semibold hover:text-black transition"
            >
              {t('contact.telephone')}
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
