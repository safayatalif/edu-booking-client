import React from "react";

const CollegeEvents = ({ events }) => {
    return (
        <div>
            {Object.keys(events).map((eventId) => (
                <div key={eventId}>
                    <h3 className="font-bold text-gray-700"><span className="uppercase">{eventId}</span> : {events[eventId].name}</h3>
                    <p className="pl-4 py-2">{events[eventId].description}</p>
                </div>
            ))}
        </div>
    );
};

export default CollegeEvents;
