import React from "react";
import Banner from "../../assets/website/orange-pattern.jpg";

// Styling for the background image
const BannerImg = {
  backgroundImage: `url(${Banner})`,
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  height: "100%",
  width: "100%",
};

const Subscribe = () => {
  const [email, setEmail] = React.useState("");
  const [message, setMessage] = React.useState("");

  return (
    <div id="contact"
      data-aos="zoom-in"
      className="mb-20 bg-gray-100 dark:bg-gray-800 text-black"
      style={BannerImg}
    >
      <div className="container backdrop-blur-sm py-10">
        <div className="space-y-6 max-w-xl mx-auto">
          <h1 className="text-2xl !text-center sm:text-left sm:text-4xl font-semibold">
            Get Notified About New Products
          </h1>
          <form
            data-aos="fade-up"
            onSubmit={(e) => {
              e.preventDefault();
              setMessage("Thanks! You are subscribed.");
              setEmail("");
              setTimeout(() => setMessage(""), 2500);
            }}
            className="flex flex-col sm:flex-row gap-3"
          >
            <label htmlFor="subscribe-email" className="sr-only">
              Email
            </label>
            <input
              id="subscribe-email"
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-1 rounded-full border border-gray-300 dark:border-gray-500 dark:bg-gray-800 px-4 py-3 focus:outline-none"
            />
            <button
              type="submit"
              className="bg-gradient-to-r from-primary to-secondary hover:scale-105 duration-200 text-white px-6 py-3 rounded-full font-medium"
            >
              Subscribe
            </button>
          </form>
          {message ? <p className="text-sm text-green-600">{message}</p> : null}
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
