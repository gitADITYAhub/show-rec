
import React, { useEffect, useState, useRef } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const EventCard = ({ eventName, cityName, date, weather, distanceKm, imgUrl }) => {
  const formattedDate = new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
  const imageNumber = Math.floor(Math.random() * 8) + 1;
  const imgaUrl = `${imageNumber}.svg`;
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
      <img className="w-full h-48 object-cover" src={imgaUrl} alt={eventName} />
      <div className="p-4">
        <h3 className="font-bold text-black">{eventName}</h3>
        <p className="text-sm text-zinc-600">{formattedDate}</p>
        <p className="text-sm text-zinc-600">{cityName}</p>
        <p className="text-sm text-zinc-600">{`${weather}, ${parseFloat(distanceKm).toFixed(2)} Km`}</p>
      </div>
    </div>
  );
};
function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} custom-arrow next`}
      style={{ ...style, display: 'block' }} // Add display block to make arrow visible
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} custom-arrow prev`}
      style={{ ...style, display: 'block' }} // Add display block to make arrow visible
      onClick={onClick}
    />
  );
}
const EventsComponent = () => {
  const [events, setEvents] = useState([]);
  const sliderRef = useRef(null);
  useEffect(() => {
    const fetchEvents = async () => {
      const response = await fetch('https://gg-backend-assignment.azurewebsites.net/api/Events?code=FOX643kbHEAkyPbdd8nwNLkekHcL4z0hzWBGCd64Ur7mAzFuRCHeyQ==&type=reco');
      const data = await response.json();
      setEvents(data.events);
    };

    fetchEvents();
  }, []);
  const settings = {
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 3 } },
      { breakpoint: 600, settings: { slidesToShow: 2 } },
      { breakpoint: 480, settings: { slidesToShow: 1 } }
    ]
  };
  const handleNext = () => {
    sliderRef.current.slickNext();
  };
  return (
    <div className="font-sans antialiased text-zinc-900 dark:text-zinc-200">
      <div className="relative bg-cover bg-center bg-no-repeat py-[10rem] px-4" style={{ backgroundImage: `url(Banner.svg)` }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative max-w-6xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-white">Discover Exciting Events Happening Near You – Stay Tuned for Updates!</h1>
          <p className="mt-4 text-lg text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>
          <div className="flex justify-between items-center mt-8">
            <button onClick={handleNext} className="text-white font-semibold hover:underline">Recommended shows →</button>
            <a href="#" className="text-white font-semibold hover:underline">See all</a>
          </div>
        </div>
      </div>
      <div className="py-4 px-4 -mt-20">
        <Slider ref={sliderRef} {...settings}>
          {events.map((event, index) => (
            <div key={index}>
              <EventCard {...event} />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default EventsComponent;
