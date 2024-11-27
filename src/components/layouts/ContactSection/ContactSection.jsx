const ContactSection = () => {
  return (
    <>
      <section className="w-full grid grid-cols-1 lg:grid-cols-2 gap-[30px] boxShadow my-10 rounded-xl">
        <form className="w-full">
          <div className="text-gray-800">
            <h1 className="text-[2rem] font-[600] leading-[35px]">
              Get in <span className="text-[#2e8e9e]">touch</span>
            </h1>
            <p className="text-[0.9rem] mt-2 mb-8">
              Let's make your travel dreams a reality! Reach out and let the
              journey to unforgettable stays and experiences begin.
            </p>
          </div>

          <div className="flex sm:flex-row flex-col items-center gap-[20px]">
            <div className="flex flex-col gap-[5px] w-full sm:w-[50%]">
              <input
                type="text"
                placeholder="Your name"
                className="peer border-gray-300 border rounded-md outline-none px-4 py-3 w-full text-gray-400 transition-colors duration-300"
              />
            </div>

            <div className="flex flex-col gap-[5px] w-full sm:w-[50%]">
              <input
                type="email"
                placeholder="Email address"
                className="peer border-gray-300 border rounded-md outline-none px-4 py-3 w-full text-gray-400 transition-colors duration-300"
              />
            </div>
          </div>

          <div className="flex flex-col gap-[5px] w-full mt-[20px]">
            <textarea
              placeholder="Write message"
              className="peer min-h-[200px] border-gray-300 border rounded-md outline-none px-4 py-3 w-full text-gray-400 transition-colors duration-300 resize-none"
            ></textarea>
          </div>

          <button
            type="submit"
            className={`py-2.5 px-6 bg-[#2e8e9e] text-[#e8f3f3] rounded-md text-[1rem] mt-[10px] w-full`}
          >
            Submit
          </button>
        </form>

        <div className=" h-full">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3747017.376277435!2d87.70238365761594!3d23.48942513099839!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30adaaed80e18ba7%3A0xf2d28e0c4e1fc6b!2sBangladesh!5e0!3m2!1sen!2sbd!4v1732683541614!5m2!1sen!2sbd&output=embed"
            className="w-full h-full rounded-md"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>
    </>
  );
};

export default ContactSection;
