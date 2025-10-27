import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { useLanguage } from "../../context/LanguageContext";

function Login() {
  const { t } = useLanguage();

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center px-4 sm:px-6 md:px-10"
      style={{
        backgroundImage:
          "url('https://i.pinimg.com/1200x/19/8b/2f/198b2f01e73b905772279616eccc7c65.jpg')",
      }}
    >
      {/* Main Container */}
      <div className="w-full max-w-5xl border border-gray-600 rounded-[30px] p-4 sm:p-6 md:p-8 text-white font-sans bg-black/90 backdrop-blur-sm">
        <div className="flex flex-col md:flex-row bg-black rounded-[24px] overflow-hidden">

          {/* Left Section */}
          <div className="w-full md:w-1/2 bg-[#1A1A1A] p-6 flex flex-col items-center justify-center">
            
            {/* Logo */}
            <div className="flex flex-col items-center">
              <img
                src="/videos/logo.png"
                alt="Logo"
                className="w-20 sm:w-28 md:w-32 mb-2 drop-shadow-lg"
              />
              <h1 className="text-2xl sm:text-3xl font-bold text-[#a3c5b1] tracking-wide">
                Lotus Cinema
              </h1>
            </div>

            {/* Button */}
            <button className="mt-4 bg-[#6e957e] text-[#a3c5b1] text-xs sm:text-sm px-6 py-2 rounded-md font-semibold hover:bg-[#7da88d] transition">
              {t("SIGN UP", "ចុះឈ្មោះ")}
            </button>

            {/* Heading */}
            <h2 className="text-center text-xl sm:text-2xl font-semibold my-4">
              {t("Welcome!", "សូមស្វាគមន៍!")}
            </h2>

            {/* Paragraph */}
            <p className="text-center text-[11px] sm:text-sm leading-relaxed text-gray-300">
              {t(
                "Welcome to Lotus Cinema. Sign up with your account or connect a Web3 wallet to get started.",
                "សូមស្វាគមន៍មកកាន់ Lotus Cinema។ ចុះឈ្មោះជាមួយគណនីរបស់អ្នក ឬភ្ជាប់កាបូបលុយ Web3 ដើម្បីចាប់ផ្តើម។"
              )}
            </p>

            {/* Form Section */}
            <form action="" className="mt-6 w-[80%] sm:w-[70%] space-y-3">
              {/* Username */}
              <div className="relative">
                <i className="fa-solid fa-user absolute left-3 top-2.5 text-gray-400 text-sm"></i>
                <input
                  type="text"
                  placeholder={t("Username", "ឈ្មោះអ្នកប្រើប្រាស់")}
                  className="w-full h-[38px] bg-transparent border border-[#3b3b3b] rounded px-9 text-sm focus:outline-none focus:border-[#6e957e] transition"
                />
              </div>

              {/* Email */}
              <div className="relative">
                <i className="fa-solid fa-envelope absolute left-3 top-2.5 text-gray-400 text-sm"></i>
                <input
                  type="email"
                  placeholder={t("Email", "អ៊ីមែល")}
                  className="w-full h-[38px] bg-transparent border border-[#3b3b3b] rounded px-9 text-sm focus:outline-none focus:border-[#6e957e] transition"
                />
              </div>

              {/* Password */}
              <div className="relative">
                <i className="fa-solid fa-lock absolute left-3 top-2.5 text-gray-400 text-sm"></i>
                <input
                  type="password"
                  placeholder={t("Password", "ពាក្យសម្ងាត់")}
                  className="w-full h-[38px] bg-transparent border border-[#3b3b3b] rounded px-9 text-sm focus:outline-none focus:border-[#6e957e] transition"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full mt-3 bg-[#6e957e] text-[#a3c5b1] text-sm py-2 rounded-md font-semibold hover:bg-[#7da88d] transition"
              >
                {t("Create Account", "បង្កើតគណនី")}
              </button>
            </form>

            {/* Social Icons */}
            <div className="flex justify-between w-[80%] sm:w-[70%] mt-5">
              {[
                { icon: "fa-brands fa-google" },
                { icon: "fa-brands fa-apple" },
                { icon: "fa-brands fa-discord" },
                { icon: "fa-brands fa-x-twitter" },
              ].map((s, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-[50px] sm:w-[55px] h-[32px] flex items-center justify-center bg-[#222121] text-white text-sm rounded hover:bg-[#333] transition"
                >
                  <i className={s.icon}></i>
                </a>
              ))}
            </div>

            {/* Divider */}
            <div className="flex items-center justify-center w-[80%] sm:w-[70%] my-4 text-gray-400 text-xs">
              <div className="flex-1 border-t border-[#333]"></div>
              <p className="mx-2">{t("OR", "ឬ")}</p>
              <div className="flex-1 border-t border-[#333]"></div>
            </div>
          </div>

          {/* Right Section */}
          <div className="w-full md:w-1/2">
            <img
              src="https://i.pinimg.com/736x/7f/19/9f/7f199fd421ac81e092e8dc5bcaec3a51.jpg"
              alt="login-banner"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;