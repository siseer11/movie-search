import React from "react";

//Logo Icon
export const LogoIcon = () => (
  <svg
    width="100%"
    height="100%"
    viewBox="0 0 18 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="icon-logo"
  >
    <path
      d="M5 0H8V10H0V5C0 3.67392 0.526784 2.40215 1.46447 1.46447C2.40215 0.526784 3.67392 0 5 0V0Z"
      fill="#F3BD13"
    />
    <path d="M10 0H18V6H10V0Z" fill="#DFDFDF" />
    <path
      d="M10 8H18V13C18 14.3261 17.4732 15.5979 16.5355 16.5355C15.5979 17.4732 14.3261 18 13 18H10V8Z"
      fill="#F3BD13"
    />
    <path d="M0 12H8V18H0V12Z" fill="#DFDFDF" />
  </svg>
);

//Heart Icon
export const HeartIcon = () => (
  <svg width="100%" height="100%" className="icon-heart" viewBox="0 0 32 32">
    <title>heart</title>
    <path d="M23.6 2c-3.363 0-6.258 2.736-7.599 5.594-1.342-2.858-4.237-5.594-7.601-5.594-4.637 0-8.4 3.764-8.4 8.401 0 9.433 9.516 11.906 16.001 21.232 6.13-9.268 15.999-12.1 15.999-21.232 0-4.637-3.763-8.401-8.4-8.401z" />
  </svg>
);

//Search Icon
export const SearchIcon = () => (
  <svg width="100%" height="100%" className="icon-search" viewBox="0 0 24 24">
    <title>search1</title>
    <path d="M21.7 20.3l-3.7-3.7c1.2-1.5 2-3.5 2-5.6 0-5-4-9-9-9s-9 4-9 9c0 5 4 9 9 9 2.1 0 4.1-0.7 5.6-2l3.7 3.7c0.2 0.2 0.5 0.3 0.7 0.3s0.5-0.1 0.7-0.3c0.4-0.4 0.4-1 0-1.4zM4 11c0-3.9 3.1-7 7-7s7 3.1 7 7c0 1.9-0.8 3.7-2 4.9 0 0 0 0 0 0s0 0 0 0c-1.3 1.3-3 2-4.9 2-4 0.1-7.1-3-7.1-6.9z" />
  </svg>
);

//Arrow Icon
export const ArrowIcon = () => (
  <svg
    width="100%"
    height="100%"
    className="icon-arrow_left"
    viewBox="0 0 24 24"
  >
    <title>arrow_left</title>
    <path d="M15.422 16.078l-1.406 1.406-6-6 6-6 1.406 1.406-4.594 4.594z" />
  </svg>
);

//Star Icon
export const StarIcon = ({
  percentage = 100,
  color = "rgb(243, 189, 19)",
  id = 0
}) => (
  <svg
    width="100%"
    height="100%"
    className="icon-star-full"
    viewBox="0 0 20 20"
  >
    <title>star-full</title>
    <defs>
      <linearGradient id={`gradient-${id}`}>
        <stop stopOpacity="1" offset={`${percentage}%`} stopColor={color} />
        <stop stopOpacity="0" offset={`${percentage}%`} />
      </linearGradient>
    </defs>
    <path
      fill={`url(#gradient-${id})`}
      d="M10 15l-5.878 3.090 1.123-6.545-4.756-4.635 6.572-0.955 2.939-5.955 2.939 5.955 6.572 0.955-4.756 4.635 1.123 6.545z"
    />
  </svg>
);
