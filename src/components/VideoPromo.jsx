const VideoPromo = () => {
  return (
    <section className="bg-primary py-10 px-4">
      <div className="max-w-[1280px] mx-auto text-center relative">
        <div className="relative pb-7">
          <h2 className="text-3xl md:text-6xl text-white font-medium text-center">
            See the wisdom in Action
          </h2>
          <span className="absolute bottom-0 w-16 h-2 bg-secondary rounded-full left-1/2 transform -translate-x-1/2"></span>
        </div>
        <p className="text-white text-base md:text-lg mx-auto max-w-[640px] text-center mt-5">
          Watch our video to get a closer look at Tiny Wisdom Card Cards and how
          they can enrich your family’s life
        </p>

        {/* Video Player */}
        <div className="mt-10 max-w-4xl mx-auto">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/-w53i6Ae-YM?si=rXByq-_BjALfU6-b"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
            className="w-full h-[528px] rounded-lg shadow-lg"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default VideoPromo;
