import { projects } from "../../constants/data";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import { useCallback, useRef } from "react";
import { ArrowBack, ArrowForward } from "../../assets/icons";

const BannerCarousel = () => {

  const sliderRef = useRef(null);

  const pagination = {
    clickable: true,
    renderBullet: function (index: number, className: string) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  };

  const handlePrev = useCallback(() => {
    if(!sliderRef.current) return;
    sliderRef.current.swiper.slidePrev();
  },[])

  const hanldeNext = useCallback(() => {
    if(!sliderRef.current) return;
    sliderRef.current.swiper.slideNext();
  },[])

  return (
    <div className="relative max-w-screen overflow-hidden">
      <Swiper
        pagination={pagination}
        modules={[Pagination]}
        className="bannerCarouselSwiper"
        ref={sliderRef}
        loop
      >
        {projects.map((project, index) => {
          return (
            <SwiperSlide key={`${project.id}_${index}_carousel_tile`}>
              <div className="h-screen w-screen relative">
                <div className="">
                  <img
                    src={project.hero}
                    alt={project.id}
                    className="w-screen h-screen blur-[0.65px] object-cover"
                  />
                </div>
                <div className="absolute z-20 top-0 left-0 h-screen w-screen">
                  <div className="w-full h-full flex flex-col justify-center place-items-center p-14">
                    <div className="flex justify-center place-items-center w-full text-center">
                      <div className="w-full h-px bg-lightBorder" />
                      <div className="relative">
                        <h1 className="text-[90px] px-12 min-w-fit text-white font-[500] truncate cursor-pointer">
                          {project.name}
                        </h1>
                        <p className="text-gray-50 text-[0.7rem] absolute left-5 top-8 opacity-40">
                          0{project.id.split("_")[1]}
                        </p>
                      </div>
                      <div className="w-full h-px bg-lightBorder" />
                    </div>
                    <p className="text-white text-xl font-[500]">
                      {project.type}
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
      <div className="absolute bottom-0 left-0 z-10 w-screen flex justify-between items-center py-8 px-16">
        <div className="prev-arrow flex gap-8 items-center justify-center cursor-pointer" onClick={handlePrev}>
          <ArrowBack className='text-white text-xl'/>
          <h5 className="text-[0.75rem] text-white font-[500]">Prev Slide</h5>
        </div>
        <div className="next-arrow flex flex-row-reverse gap-8 items-center justify-center cursor-pointer" onClick={hanldeNext}>
          <ArrowForward className='text-white text-xl'/>
          <h5 className="text-[0.75rem] text-white font-[500]">Next Slide</h5>
        </div>
      </div>
    </div>
  );
};

export default BannerCarousel;
