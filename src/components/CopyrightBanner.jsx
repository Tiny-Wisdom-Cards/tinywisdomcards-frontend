const CopyrightBanner = () => {
  return (
    <div className="bg-primary text-white text-center py-2">
      <div className="max-w-[1280px] mx-auto px-4">
        <p className="text-sm">
          © {new Date().getFullYear()} Tiny Wisdom Cards. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default CopyrightBanner;
