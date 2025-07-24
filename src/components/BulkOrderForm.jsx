"use client"

import Image from "next/image"
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid"

const BulkOrderForm = () => {
    const handleSubmit = (e) => {
        e.preventDefault()
        const formData = new FormData(e.currentTarget)
        const data = Object.fromEntries(formData.entries())
        console.log("Submitted Data:", data)
        // You can now send `data` to your backend or API endpoint
        // fetch('/api/bulk-order', { method: 'POST', body: JSON.stringify(data) })
    }

    return (
        <section className="py-16 px-4">
            <div className="bg-primary-light container mx-auto rounded-lg shadow-lg">
                <div className='p-16'>
                    {/* Header */}
                    <div className="mb-8">
                        <div className="flex items-center mb-4">
                            <div className="w-1 h-16 bg-orange-500 mr-4"></div>
                            <h2 className="text-4xl lg:text-5xl font-bold text-white">Request Bulk Order</h2>
                        </div>
                        <p className="text-gray-300 text-lg">
                            Please fill out the form below and our team will get back to you within 24-48 hours
                        </p>
                    </div>

                    {/* Main content with 60/40 split */}
                    <div className="grid grid-cols-5 gap-10">
                        {/* Form section */}
                        <div className="col-span-3">
                            <div className="bg-white text-black rounded-lg p-8">
                                <form className="space-y-6" onSubmit={handleSubmit}>
                                    {/* First row */}
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <label htmlFor="name" className="block text-gray-700 font-medium">
                                                Name*
                                            </label>
                                            <input
                                                type="text"
                                                id="name"
                                                name="name"
                                                required
                                                placeholder="Full Name"
                                                className="w-full border-0 border-b-2 border-gray-300 bg-transparent px-0 py-2 focus:border-blue-500 focus:outline-none focus:ring-0"
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label htmlFor="address" className="block text-gray-700 font-medium">
                                                Delivery Address*
                                            </label>
                                            <input
                                                type="text"
                                                id="address"
                                                name="address"
                                                required
                                                placeholder="Tinkune, Kathmandu, Nepal"
                                                className="w-full border-0 border-b-2 border-gray-300 bg-transparent px-0 py-2 focus:border-blue-500 focus:outline-none focus:ring-0"
                                            />
                                        </div>
                                    </div>

                                    {/* Second row */}
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <label htmlFor="email" className="block text-gray-700 font-medium">
                                                Email*
                                            </label>
                                            <input
                                                type="email"
                                                id="email"
                                                name="email"
                                                required
                                                placeholder="example@example.com"
                                                className="w-full border-0 border-b-2 border-gray-300 bg-transparent px-0 py-2 focus:border-blue-500 focus:outline-none focus:ring-0"
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label htmlFor="whatsapp" className="block text-gray-700 font-medium">
                                                Whatsapp Number
                                            </label>
                                            <input
                                                type="text"
                                                id="whatsapp"
                                                name="whatsapp"
                                                placeholder="+000 0000000000"
                                                className="w-full border-0 border-b-2 border-gray-300 bg-transparent px-0 py-2 focus:border-blue-500 focus:outline-none focus:ring-0"
                                            />
                                        </div>
                                    </div>

                                    {/* Third row */}
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <label htmlFor="business" className="block text-gray-700 font-medium">
                                                Business / Organization Name*
                                            </label>
                                            <input
                                                type="text"
                                                id="business"
                                                name="business"
                                                placeholder="Enter a topic"
                                                required
                                                className="w-full border-0 border-b-2 border-gray-300 bg-transparent px-0 py-2 focus:border-blue-500 focus:outline-none focus:ring-0"
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label htmlFor="quantity" className="block text-gray-700 font-medium">
                                                Estimated Quantity*
                                            </label>
                                            <input
                                                type="text"
                                                id="quantity"
                                                name="quantity"
                                                required
                                                placeholder="N/A"
                                                className="w-full border-0 border-b-2 border-gray-300 bg-transparent px-0 py-2 focus:border-blue-500 focus:outline-none focus:ring-0"
                                            />
                                        </div>
                                    </div>

                                    {/* Message field */}
                                    <div className="space-y-2">
                                        <label htmlFor="message" className="block text-gray-700 font-medium">
                                            Message / Special Requests
                                        </label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            placeholder="Message / Special Requests"
                                            rows={6}
                                            className="w-full border border-gray-300 rounded-md p-3 resize-none focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                                        />
                                    </div>

                                    {/* Submit button */}
                                    <button
                                        type="submit"
                                        className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 rounded-full font-medium transition-colors"
                                    >
                                        Send Message
                                    </button>
                                </form>
                            </div>
                        </div>

                        {/* Contact info section */}
                        <div className="col-span-2 flex flex-col space-y-8">
                            {/* Contact information */}
                            <div className="space-y-6">
                                <div className="flex items-center space-x-3 text-gray-300">
                                    <PhoneIcon className="w-5 h-5" />
                                    <span>+977 9866104387</span>
                                </div>
                                <div className="flex items-center space-x-3 text-gray-300">
                                    <PhoneIcon className="w-5 h-5" />
                                    <span>+977 9866104387</span>
                                </div>
                                <div className="flex items-center space-x-3 text-gray-300">
                                    <PhoneIcon className="w-5 h-5" />
                                    <span>+977 9866104387</span>
                                </div>
                                <div className="flex items-center space-x-3 text-gray-300">
                                    <EnvelopeIcon className="w-5 h-5" />
                                    <span>hello@tinywisdomcards.com</span>
                                </div>
                                <div className="flex items-start space-x-3 text-gray-300">
                                    <MapPinIcon className="w-5 h-5 mt-1 flex-shrink-0" />
                                    <span>
                                        Tinkune, Subidhanagar 44600,
                                        <br />
                                        Kathmandu, Nepal
                                    </span>
                                </div>
                            </div>

                            {/* Promotional card */}
                            <div className="bg-[#D84824] rounded-lg overflow-hidden flex flex-col z-10">
                                {/* Image container - top part */}
                                <div className="flex-1 relative overflow-hidden">
                                    <Image
                                        src="/images/bg-primary.png"
                                        alt="Primary background"
                                        width={552}
                                        height={552}
                                        className="w-[300px] sm:w-[400px] md:w-[450px] lg:w-[490px] h-auto object-contain z-0"
                                    />
                                    {/* Orange Overlay */}
                                    <div className="absolute inset-0 bg-[#ff3300] opacity-80 z-10"></div>
                                </div>
                                {/* Text container - bottom part */}
                                <div className="bg-orange-600 p-8">
                                    <h3 className="text-2xl lg:text-3xl font-bold text-white leading-tight text-center">
                                        Bring Timeless Wisdom to Your Community
                                    </h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default BulkOrderForm
