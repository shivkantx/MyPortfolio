import React from "react";
import { useForm } from "react-hook-form";
import { data } from "react-router-dom";

function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  const delay = (d) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve()
      }, d*1000)
    })
  }

  const onSubmit = async (data) => {
    await delay(2)
    console.log(data)

  }

  

  return (
    <>
      
      <div className="relative overflow-x-hidden w-full sm:px-6 md:px-10 bg-[#001f3f] backdrop-blur-2xl">
        
        <section className="mt-[100px] w-full p-6 mb-[50px] text-white bg-[#072854]">
          <div className="flex flex-col gap-4 md:flex-row justify-center items-center">
            {/* Form 1 */}
            <div className="md:w-1/3 rounded-lg w-full p-2 backdrop-blur-3xl bg-gray-500/30">
              <div className="w-full flex justify-between items-center font-extrabold text-white p-2">
                <div>
                  <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-500 to-blue-500 text-transparent bg-clip-text ">Get in Touch</h1>
                  <p className="pl-1 text-sm font-semibold">
                    Have something to discuss? Send me a message and let's talk.
                  </p>
                </div>
                <div className="p-3" >
                  <svg
                    className="text-purple-700"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    width="40"
                    height="40"
                  >
                    <circle cx="6" cy="12" r="2" />
                    <circle cx="18" cy="6" r="2" />
                    <circle cx="18" cy="18" r="2" />
                    <line x1="7.5" y1="11" x2="16.5" y2="7" />
                    <line x1="7.5" y1="13" x2="16.5" y2="17" />
                  </svg>
                </div>
              </div>

              {isSubmitting && (
        <div className="text-white text-center py-2 font-semibold">
          Sending...
        </div>
      )}
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="px-5 py-3 space-y-8 flex flex-col text-white"
              >
                {/* Name input */}
                <input
                  type="text"
                  {...register("username", {
                    required: {
                      value: true,
                      message: "This field is required",
                    },
                    minLength: { value: 3, message: "Minimum length is 3" },
                    maxLength: { value: 8, message: "Maximum length is 8" },
                  })}
                  className="backdrop-blur-3xl w-full focus:outline-3 border outline-blue-600 bg-gray-950/10 rounded-lg p-2"
                  placeholder="Your name"
                />
                {errors.username && (
                  <div className="text-red-600 text-xs">
                    {errors.username.message}
                  </div>
                )}

                {/* Email input */}
                <input
                  type="email"
                  {...register("mail", {
                    required: {
                      value: true,
                      message: "This field is required",
                    },
                  })}
                  className="backdrop-blur-3xl w-full focus:outline-3 border outline-blue-600 bg-gray-950/10 rounded-lg p-2"
                  placeholder="Enter your email"
                />
                {errors.mail && (
                  <div className="text-red-600 text-xs">
                    {errors.mail.message}
                  </div>
                )}

                {/* Message input with word limit */}
                <textarea
                  rows="4"
                  {...register("message", {
                    required: {
                      value: true,
                      message: "Message is required",
                    },
                    minLength: {
                      value: 10,
                      message: "Minimum 10 characters required",
                    },
                    validate: (value) =>
                      value.trim().split(/\s+/).length <= 50 ||
                      "Maximum 50 words allowed",
                  })}
                  className="backdrop-blur-3xl w-full focus:outline-3 border outline-blue-600 bg-gray-950/10 rounded-lg p-2"
                  placeholder="Your message"
                />
                {errors.message && (
                  <div className="text-red-600 text-xs">
                    {errors.message.message}
                  </div>
                )}

                {/* Submit button */}
                <button
                  disabled={isSubmitting}
                  type="submit"
                  className="group bg-gradient-to-r from-purple-500 to-blue-500 hover:bg-gradient-to-l hover:via-blue-500 hover:from-purple-500 hover:to-purple-500 p-3 flex items-center transition-all hover:scale-102 duration-200 justify-center space-x-2 text-sm font-semibold rounded-xl disabled:opacity-50"
                >
                  <svg
                    className="group-hover:rotate-45 transition-all duration-200"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    width="20"
                    height="20"
                  >
                    <path d="M22 2L11 13" />
                    <path d="M22 2L15 22L11 13L2 9L22 2Z" />
                  </svg>
                  <p>Send message</p>
                </button>
              </form>
            </div>

            {/* Optional Second Column */}
            <div className="w-2/3 p-2 bg-green-200 hidden md:block rounded-lg">
              {/* You can add contact info, map or anything else here */}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Contact;
