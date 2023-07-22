import React from "react";

const CollegeSports = ({ sports }) => {
    return (
        <div>
            {Object.keys(sports).map((sportId) => (
                <div key={sportId}>
                    <h3 className="font-bold text-gray-700"><span className="uppercase">{sportId}</span> : {sports[sportId].name}</h3>
                    <p className="pl-4 py-2">{sports[sportId].description}</p>
                </div>
            ))}
        </div>
    );
};

export default CollegeSports;
