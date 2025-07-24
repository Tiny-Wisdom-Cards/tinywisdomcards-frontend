import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-primary-light text-white py-8 px-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-[1280px] mx-auto">
        <div className="flex justify-center items-center lg:justify-start lg:items-start">
          <Image
            src="/images/logo-vertical.svg"
            alt="Logo"
            width={1200}
            height={1200}
            className="w-52"
          />
        </div>
        <div className="mt-1.5 flex flex-col justify-center items-center lg:justify-start lg:items-start">
          <h3 className="text-2xl text-white">Explore</h3>
          <ul className="flex flex-col space-y-2.5 mt-4">
            <li className="flex justify-center items-center lg:justify-start">
              <a href="#" className="text-white hover:underline ">
                The Deck
              </a>
            </li>
            <li className="flex justify-center items-center lg:justify-start">
              <a href="#" className="text-white hover:underline ">
                Bulk Order
              </a>
            </li>
            <li className="flex justify-center items-center lg:justify-start">
              <a href="#" className="text-white hover:underline ">
                Card Of the Day
              </a>
            </li>
            <li className="flex justify-center items-center lg:justify-start">
              <a href="#" className="text-white hover:underline ">
                Community
              </a>
            </li>
          </ul>
        </div>
        <div className="mt-1.5 flex flex-col  items-center lg:justify-start lg:items-start">
          <h3 className="text-2xl text-white">Follow Us</h3>
          <ul className="flex gap-2.5 items-center text-white mt-4">
            <li>
              <a href="#" className="text-white hover:underline">
                <Image
                  src="/icons/insta.svg"
                  alt="Instagram Icon"
                  width={24}
                  height={24}
                  className="inline-block"
                />
              </a>
            </li>
            <li>
              <a href="#" className="text-white hover:underline">
                <Image
                  src="/icons/facebook.svg"
                  alt="Instagram Icon"
                  width={24}
                  height={24}
                  className="inline-block"
                />
              </a>
            </li>
            <li>
              <a href="#" className="text-white hover:underline">
                <Image
                  src="/icons/tiktok.svg"
                  alt="TikTok Icon"
                  width={24}
                  height={24}
                  className="inline-block"
                />
              </a>
            </li>
          </ul>
        </div>
        <div className="mt-1.5 flex flex-col items-center lg:justify-start lg:items-start">
          <h3 className="text-2xl text-white">Find us at</h3>
          <p className="mt-4 text-white text-base font-extralight text-center lg:text-left">
            Tinkune, Subidhanagar 44600, Kathmandu, Nepal
          </p>
          <a
            href="mailto:hello@tinywisdomcards.com"
            className="text-white mt-3"
          >
            hello@tinywisdomcards.com
          </a>
          <div className="mt-8">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3533.078167896475!2d85.31506287617397!3d27.683978826520427!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb170037b019a5%3A0x432236454c83347!2sMarginTop%20Solutions%20Pvt%20Ltd!5e0!3m2!1sen!2snp!4v1753344392083!5m2!1sen!2snp"
              width="600"
              height="450"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="max-w-full h-32 rounded-lg"
            ></iframe>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
