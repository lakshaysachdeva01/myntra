import React, { useState } from "react";

export default function WishlistButton() {
  const [isLiked, setIsLiked] = useState(false);

  return (
    <button
      onClick={() => setIsLiked(!isLiked)}
      className="flex items-center justify-center gap-2 border border-solid border-gray-300 h-[40px] w-[180px] rounded-sm bg-white z-99"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill={isLiked ? "#ff3f6c" : "none"}
        stroke={isLiked? "#ff3f6c"  :"black"}
        strokeWidth="1"
        className="w-5 h-5"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 21l-1.45-1.318C5.4 15.368 2 12.282 2 8.5 2 5.418 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.418 22 8.5c0 3.782-3.4 6.868-8.55 11.182L12 21z"
        />
      </svg>
      Wishlist
    </button>
  );
}
