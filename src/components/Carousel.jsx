import { TECarousel, TECarouselItem } from "tw-elements-react";

export const CarouselWithIndicators = () => {
  return (
    <>
      <TECarousel showControls showIndicators ride="carousel">
        <div className="relative w-full h-[50vh] overflow-hidden">
          <TECarouselItem
            itemID={1}
            className="relative float-left -mr-[100%] hidden w-full h-[50vh] transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
          >
            <img
              src="https://tecdn.b-cdn.net/img/Photos/Slides/img%20(15).jpg"
              className="block w-full"
              alt="..."
            />
          </TECarouselItem>
          <TECarouselItem
            itemID={2}
            className="relative float-left hidden -mr-[100%] w-full h-[50vh] transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
          >
            <img
              src="https://tecdn.b-cdn.net/img/Photos/Slides/img%20(22).jpg"
              className="block w-full"
              alt="..."
            />
          </TECarouselItem>
          <TECarouselItem
            itemID={3}
            className="relative float-left -mr-[100%] hidden w-full h-[50vh] transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
          >
            <img
              src="https://tecdn.b-cdn.net/img/Photos/Slides/img%20(23).jpg"
              className="block w-full"
              alt="..."
            />
          </TECarouselItem>
        </div>
      </TECarousel>
    </>
  );
};

export default CarouselWithIndicators;
