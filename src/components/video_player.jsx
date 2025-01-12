import React from 'react';

const videos = [
    {
        id: 1,
        src: "https://drive.google.com/file/d/1VqmqMeCmVO5uTyZsmwjQ1bn-U1kBGPf6/preview",
        title: "Soothing Waterfall"
    },
    {
        id: 2,
        src: "https://drive.google.com/file/d/1i7QxUm0bQq484qbO7KR9vJF3JEszxctr/preview",
        title: "Relaxing Ocean Waves"
    }
];

const VideoPlayer = () => {
    return (
        <>
        <div className="text-4xl text-center mt-8 text-white">Watch our videos</div>
        <div className="flex flex-wrap justify-center gap-4 p-4">
            {videos.map((video) => (
                <div 
                    key={video.id} 
                    className="w-96 bg-yellow-100 rounded-lg shadow-lg bg-opacity-10 hover:bg-opacity-20"
                >
                    <div className="relative flex flex-col items-start justify-center p-4">
                        <iframe 
                            className="w-full rounded-lg shadow-lg"
                            src={video.src} 
                            width="350" 
                            height="315" 
                            allow="autoplay" 
                            allowFullScreen
                        />
                        <div className="text-2xl text-white mt-4">{video.title}</div>
                    </div>
                </div>
            ))}
        </div>
        </>
    );
};

export default VideoPlayer;