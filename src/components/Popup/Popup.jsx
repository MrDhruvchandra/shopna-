import React from "react";
import { IoCloseOutline } from "react-icons/io5";
import PropTypes from "prop-types";

const Popup = ({ orderPopup, setOrderPopup }) => {
  React.useEffect(() => {
    if (!orderPopup) return;

    const onKeyDown = (e) => {
      if (e.key === "Escape") setOrderPopup(false);
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [orderPopup, setOrderPopup]);

  if (!orderPopup) return null;

  return (
    <div
      className="fixed inset-0 z-[999] bg-black/50 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-labelledby="order-dialog-title"
      onClick={() => setOrderPopup(false)}
    >
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-4 shadow-md bg-white dark:bg-gray-900 rounded-md duration-200 w-[320px]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* header */}
        <div className="flex items-center justify-between">
          <h2 id="order-dialog-title" className="text-xl font-semibold">
            Order Now
          </h2>
          <button
            type="button"
            className="text-2xl cursor-pointer p-2 rounded-md hover:bg-black/5 dark:hover:bg-white/5"
            onClick={() => setOrderPopup(false)}
            aria-label="Close order dialog"
          >
            <IoCloseOutline />
          </button>
        </div>

        {/* form section */}
        <form
          className="mt-4"
          onSubmit={(e) => {
            e.preventDefault();
            setOrderPopup(false);
          }}
        >
          <div className="mb-4">
            <label htmlFor="order-name" className="sr-only">
              Name
            </label>
            <input
              id="order-name"
              type="text"
              placeholder="Name"
              required
              className="w-full rounded-full border border-gray-300 dark:border-gray-500 dark:bg-gray-800 px-3 py-2 focus:outline-none"
              autoComplete="name"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="order-email" className="sr-only">
              Email
            </label>
            <input
              id="order-email"
              type="email"
              placeholder="Email"
              required
              className="w-full rounded-full border border-gray-300 dark:border-gray-500 dark:bg-gray-800 px-3 py-2 focus:outline-none"
              autoComplete="email"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="order-address" className="sr-only">
              Address
            </label>
            <input
              id="order-address"
              type="text"
              placeholder="Address"
              required
              className="w-full rounded-full border border-gray-300 dark:border-gray-500 dark:bg-gray-800 px-3 py-2 focus:outline-none"
              autoComplete="street-address"
            />
          </div>

          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-gradient-to-r from-primary to-secondary hover:scale-105 duration-200 text-white py-2 px-5 rounded-full w-full"
            >
              Order Now
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

Popup.propTypes = {
  orderPopup: PropTypes.bool.isRequired,
  setOrderPopup: PropTypes.func.isRequired,
};

export default Popup;
