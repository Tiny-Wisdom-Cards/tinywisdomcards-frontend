"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import { COLLECTIONDATA } from "@/constants/collectionData";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useEffect, useState } from "react";
import { ImCross } from "react-icons/im";

const PrebookModal = ({ item, onClose, handleWhatsAppClick }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    quantity: "",
    message: "",
  });

  if (!item) return null;

  const handleBackgroundClick = (e) => {
    if (e.target.id === "modal-background") {
      onClose();
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleWhatsAppClick(item, formData);
  };

  return (
    <div
      id="modal-background"
      onClick={handleBackgroundClick}
      className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center"
    >
      <div className="bg-primary-dark relative rounded-lg shadow-lg w-full max-w-4xl overflow-y-auto h-[90vh] md:h-fit">
        <p className="text-white hover:cursor-pointer p-2 absolute top-4 md:top-6 right-6 md:right-8" onClick={onClose}><ImCross size={12} /></p>
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2 p-6 flex flex-col items-center justify-center">
            <Image
              src={item.imagePath}
              alt={item.title}
              width={250}
              height={320}
              className="rounded shadow-lg"
            />
            <h3 className="text-2xl font-bold mt-4 text-secondary-light">
              {item.title}
            </h3>
            <p className="text-white mt-2 text-center">{item.description}</p>

            <div className="flex items-center gap-2 mt-4">
              <span className="text-white text-2xl font-bold">{item.price}</span>
              {/* <span className="text-white line-through text-lg">
                {item.originalPrice}
              </span> */}
            </div>

            <p className="text-gray-400 text-sm mt-2">{item.deliveryNote}</p>
          </div>

          <div className="md:w-1/2 p-6">
            <h4 className="text-secondary-light text-2xl font-semibold mb-4">
              Book Now
            </h4>
            <form onSubmit={handleSubmit} className="grid gap-4">
              <input
                type="text"
                placeholder="Name"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className="border border-white/20 text-white placeholder-white/60 bg-transparent rounded px-4 py-2 w-full"
                required
              />
              <input
                type="email"
                placeholder="Email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className="border border-white/20 text-white placeholder-white/60 bg-transparent rounded px-4 py-2 w-full"
                required
              />

              <input
                type="tel"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={(e) =>
                  setFormData({ ...formData, phone: e.target.value })
                }
                className="border border-white/20 text-white placeholder-white/60 bg-transparent rounded px-4 py-2 w-full"
                required
              />
              <input
                type="text"
                placeholder="Quantity"
                value={formData.quantity}
                onChange={(e) =>
                  setFormData({ ...formData, quantity: e.target.value })
                }
                className="border border-white/20 text-white placeholder-white/60 bg-transparent rounded px-4 py-2 w-full"
                required
              />
              <textarea
                placeholder="Delivery Location"
                rows="4"
                required
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                className="border border-white/20 text-white placeholder-white/60 bg-transparent rounded px-4 py-2 w-full"
              ></textarea>

              <button
                type="submit"
                className="bg-secondary-light hover:cursor-pointer text-white py-2 mt-2 rounded hover:opacity-90 transition"
              >
                Submit Booking
              </button>
              <button
                type="button"
                onClick={onClose}
                className="text-red-500 hover:cursor-pointer font-medium text-sm"
              >
                Cancel
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function OurCollection() {
  const [userCountry, setUserCountry] = useState();
  const [selectedItem, setSelectedItem] = useState(null);

  const handleWhatsAppClick = (item, formData) => {
    const message = `Hello, I would like to book the following item:

      - Title: ${item.title}
      - Description: ${item.description}
      - Price: ${userCountry == "NP" ? item.price : item.dollor_price
      }
   

      Customer Details:
      - Name: ${formData.name}
      - Email: ${formData.email}
      - Phone: ${formData.phone}
      - Quantity: ${formData.quantity}
      - Delivery Location: ${formData.message}
      `;

    const whatsappUrl = `https://api.whatsapp.com/send?phone=9779705812368&text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappUrl, "_blank");
  };

  const fetchUserCountry = async () => {
    try {
      const response = await fetch("https://api.ipify.org?format=json");
      const data = await response.json();
      const userIP = data.ip;

      const countryResponse = await fetch(
        `https://ipapi.co/${userIP}/country/`
      );
      const country = await countryResponse.text();

      setUserCountry(country);
    } catch (error) {
      console.error("Error fetching user country:", error);
    }
  };

  useEffect(() => {
    fetchUserCountry();
  }, []);

  return (
    <section id="collection" className="bg-primary-light py-16 px-4">
      <div className="max-w-[1280px] mx-auto text-center relative">
        <div className="relative pb-7">
          <h2 className="text-3xl md:text-6xl text-white font-medium text-center">
            Our Collection
          </h2>
          <span className="absolute bottom-0 w-16 h-2 bg-secondary rounded-full left-1/2 transform -translate-x-1/2"></span>
        </div>
        <p className="text-white text-base md:text-lg mx-auto max-w-[640px] text-center mt-5">
          Bring home a piece of the legacy. Choose from our signature card deck,
          digital wallpapers, or our new DIY coloring book.
        </p>

        <div className="relative mt-10 max-w-3xl mx-auto">
          <Swiper
            modules={[Navigation, Pagination]}
            pagination={{
              clickable: true,
              el: ".custom-pagination",
            }}
            navigation={{
              nextEl: ".custom-next",
              prevEl: ".custom-prev",
            }}
            spaceBetween={30}
            slidesPerView={1}
            className="relative"
          >
            {COLLECTIONDATA.map((item) => (
              <SwiperSlide key={item.id}>
                <div className="bg-primary-dark rounded-4xl p-6 md:flex md:items-center md:gap-8">
                  <div className="flex justify-center md:w-1/2 mb-6 md:mb-0">
                    <Image
                      src={item.imagePath}
                      alt={item.title}
                      width={180}
                      height={240}
                      className="rounded shadow-lg w-80"
                    />
                  </div>
                  <div className="text-center md:text-left md:w-1/2">
                    <h3 className="text-secondary-light text-3xl md:text-5xl font-semibold mb-4">
                      {item.title}
                    </h3>
                    <p className="text-lg text-white mb-6">
                      {item.description}
                    </p>
                    <div className="flex items-center justify-center md:justify-start gap-3 mb-4">
                      <span className="text-white text-3xl md:text-4xl font-bold">
                        {userCountry == "NP" ? item.price : item.dollor_price}
                      </span>
                      {/* <span className="text-white line-through text-3xl md:text-4xl font-bold">
                        {userCountry == "NP"
                          ? item.originalPrice
                          : item.dollorOriginalPrice}
                      </span> */}
                    </div>
                    <p className="text-white line-through text-md mb-4">+ Free T-Shirt👕 (Pre Order Closed)</p>

                    <button
                      className="bg-secondary text-white px-8 py-4 rounded-xl hover:cursor-pointer hover:opacity-90 transition"
                      onClick={() => setSelectedItem(item)}
                    >
                      {item.buttonText}
                    </button>

                    <p className="text-sm font-light text-white italic mt-5">
                      {item.deliveryNote}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="custom-prev absolute -left-[108px] top-1/2 transform -translate-y-1/2 border-2 border-white w-12 h-12 rounded-full hidden lg:flex items-center justify-center cursor-pointer shadow">
            <ChevronLeftIcon className="text-white w-8 h-8" />
          </div>
          <div className="custom-next absolute -right-[108px] top-1/2 transform -translate-y-1/2 border-2 border-white w-12 h-12 rounded-full hidden lg:flex items-center justify-center cursor-pointer shadow">
            <ChevronRightIcon className="text-white w-8 h-8" />
          </div>
        </div>

        <div className="custom-pagination flex justify-center gap-2 mt-6"></div>
      </div>

      {selectedItem && (
        <PrebookModal
          item={{
            ...selectedItem,
            price:
              userCountry == "NP"
                ? selectedItem.price
                : selectedItem.dollor_price,
            originalPrice:
              userCountry == "NP"
                ? selectedItem.originalPrice
                : selectedItem.dollorOriginalPrice,
          }}
          onClose={() => setSelectedItem(null)}
          handleWhatsAppClick={handleWhatsAppClick}
        />
      )}
    </section>
  );
}
