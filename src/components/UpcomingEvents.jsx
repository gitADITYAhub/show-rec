import React, { useEffect, useState, useRef } from 'react';
import axios from 'axios'; // Make sure to install axios with `npm install axios` or `yarn add axios`

// Loading spinner component
const LoadingSpinner = () => (
    <div className="text-center py-4">
        <div className="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full" role="status">
            <span className="visually-hidden"></span>
        </div>
    </div>
);

const EventCard = ({ event }) => {
    const formattedDate = new Date(event.date).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    });
    const imageNumber = Math.floor(Math.random() * 8) + 1;
    const imgaUrl = `${imageNumber}.svg`;
    return (
        <div className="bg-gray-100 rounded-lg overflow-hidden shadow-lg">
            <img src={imgaUrl} alt="Event" className="w-full h-48 sm:h-64 object-cover" />
            <div className="p-5">
                <p className="text-sm text-gray-800 dark:text-grey-400">{formattedDate}</p>
                <h3 className="text-lg font-semibold text-black-900 dark:text-black mt-2">{event.eventName}</h3>
                <p className="text-gray-800 dark:text-grey-400 text-sm mt-1">{event.cityName}</p>
                <p className="text-gray-800 dark:text-grey-400 text-sm">{event.weather}</p>
            </div>
        </div>
    );
};

const UpcomingEvents = () => {
    const [events, setEvents] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);
    const loaderRef = useRef(null);

    useEffect(() => {
        // Observer for infinite scrolling
        const observer = new IntersectionObserver(handleObserver, {
            root: null,
            rootMargin: '20px',
            threshold: 1.0
        });
        if (loaderRef.current) {
            observer.observe(loaderRef.current);
        }
    }, []);

    useEffect(() => {
        // Fetch events whenever currentPage changes
        const fetchEvents = async () => {
            setLoading(true);
            const response = await axios.get(`https://gg-backend-assignment.azurewebsites.net/api/Events`, {
                params: { code: 'FOX643kbHEAkyPbdd8nwNLkekHcL4z0hzWBGCd64Ur7mAzFuRCHeyQ==', page: currentPage, type: 'upcoming' }
            });
            setEvents(prevEvents => [...prevEvents, ...response.data.events]);
            setTotalPages(response.data.totalPages);
            setLoading(false);
        };

        fetchEvents();
    }, [currentPage]);

    // Observer event handler
    const handleObserver = (entities) => {
        const target = entities[0];
        if (target.isIntersecting) {
            setCurrentPage((prev) => prev + 1);
        }
    };

    // Only fetch new pages if not on the last page
    useEffect(() => {
        if (currentPage <= totalPages && !loading) {
            setCurrentPage(currentPage + 1);
        }
    }, [loading, currentPage, totalPages]);

    return (
        <div className="container mx-auto px-4 py-8">

            <div className="flex items-center justify-between mb-6">
                <button className="text-black font-semibold hover:underline">Upcoming shows →</button>
                <a href="#" className="text-black font-semibold hover:underline">See all</a>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {events.map((event, index) => (
                    <EventCard key={index} event={event} />
                ))}
            </div>
            {loading && <LoadingSpinner />}
            {/* Loading indicator at the bottom of the list */}
            <div ref={loaderRef} />
        </div>
    );
};

export default UpcomingEvents;
