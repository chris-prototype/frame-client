import ParentSVG from './ParentSVG.jsx'

// clock icon
// const path = (
//   <>
//     <path d='M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z' />
//     <path d='M12.5 7H11v6l5.25 3.15.75-1.23-4.5-2.67z' />
//   </>
// )

// health icon
const path = <path d="M10.5 13H8v-3h2.5V7.5h3V10H16v3h-2.5v2.5h-3zM12 2 4 5v6.09c0 5.05 3.41 9.76 8 10.91 4.59-1.15 8-5.86 8-10.91V5zm6 9.09c0 4-2.55 7.7-6 8.83-3.45-1.13-6-4.82-6-8.83v-4.7l6-2.25 6 2.25z" />
  
export const SVGClock = (props) => <ParentSVG path={path} {...props} />
