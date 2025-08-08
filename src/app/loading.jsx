import Image from "next/image";

// app/home/loading.js
export default function Loading() {
  return (
    <div className="fixed w-screen h-screen inset-0 flex items-center justify-center bg-black z-50">
      <div className="w-48 relative h-48">
        <Image
          fill
          src="/images/logo.svg"
          alt="Logo"
          className="object-cover animate-blink"
        />
      </div>
    </div>
  );
}
