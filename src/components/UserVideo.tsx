import React from "react";

const UserVideo = () => {
    const [uservideo, setUserVideo] = React.useState<MediaStream | null>(null)
    return(
        <div className="relative w-full aspect-[4/3] bg-userCard rounded-xl overflow-hidden m-2 group">
        {/* Video Stream */}
        <video
            autoPlay
            muted
            className="w-full h-full object-cover"
        ></video>

        {/* Hover Overlay Content */}
        <div className="absolute top-2 left-2 bg-black bg-opacity-50 text-white rounded-lg px-2 py-1 flex items-center space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <h6 className="text-sm font-bold">Name</h6>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-4 h-4 text-white"
            >
                <path d="M8.25 4.5a3.75 3.75 0 1 1 7.5 0v8.25a3.75 3.75 0 1 1-7.5 0V4.5Z" />
                <path d="M6 10.5a.75.75 0 0 1 .75.75v1.5a5.25 5.25 0 1 0 10.5 0v-1.5a.75.75 0 0 1 1.5 0v1.5a6.751 6.751 0 0 1-6 6.709v2.291h3a.75.75 0 0 1 0 1.5h-7.5a.75.75 0 0 1 0-1.5h3v-2.291a6.751 6.751 0 0 1-6-6.709v-1.5A.75.75 0 0 1 6 10.5Z" />
            </svg>
        </div>
    </div>
    )
}

export default UserVideo;