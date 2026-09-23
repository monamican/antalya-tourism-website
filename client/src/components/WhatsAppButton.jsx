// client/src/components/WhatsAppButton.jsx
import React from 'react';

const WhatsAppButton = () => {
  // Replace this with your actual WhatsApp Business number (include country code, omit + or 00)
  // Example for a Turkish number: 905551234567
  const phoneNumber = '905551234567';

  // Optional: Pre-fill a default message
  const defaultMessage =
    "Hello! I'm interested in booking a tour in Turkey. Can you help me?";

  // Create the wa.me link
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(defaultMessage)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-green-500 rounded-full shadow-lg hover:bg-green-600 hover:scale-110 transition-all duration-300 group"
      aria-label="Chat with us on WhatsApp"
    >
      {/* WhatsApp SVG Icon */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-8 h-8 text-white"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 1.84 6.36L.3 24l5.82-1.527A11.96 11.96 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 11.944 0zM12 21.825a9.78 9.78 0 0 1-5.01-1.382l-.36-.214-3.73.977.994-3.633-.235-.373A9.76 9.76 0 0 1 2.22 12c0-5.393 4.387-9.78 9.78-9.78 5.392 0 9.78 4.387 9.78 9.78s-4.388 9.78-9.78 9.78zm5.35-7.3c-.294-.147-1.74-.86-2.01-.958-.27-.098-.467-.147-.663.147-.196.294-.76 .957-.932 1.154-.172.196-.344.22-.638.073-.294-.147-1.243-.458-2.368-1.46-.875-.78-1.466-1.743-1.638-2.037-.172-.294-.018-.453.13-.6.132-.132.294-.344.44-.516.148-.172.196-.294.294-.49.1-.197.05-.37-.024-.517-.074-.147-.663-1.595-.908-2.183-.24-.576-.484-.497-.663-.506-.172-.008-.37-.008-.566-.008-.196 0-.515.074-.784.37C2.795 7.15 2 7.91 2 9.407c0 1.496 1.055 2.943 1.202 3.14.147.196 2.14 3.267 5.185 4.58.723.313 1.288.5 1.728.64.726.23 1.386.197 1.905.12.584-.087 1.74-.71 1.985-1.396.245-.686.245-1.275.172-1.396-.074-.122-.27-.196-.564-.343z" />
      </svg>

      {/* Optional Hover Tooltip */}
      <span className="absolute right-16 px-3 py-2 text-sm text-white bg-gray-800 rounded opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
        Need help? Chat with us
      </span>
    </a>
  );
};

export default WhatsAppButton;
