import React from 'react'

const Youtube = ({link}) => {
  return (
    <iframe
      className="rounded-3xl w-full h-full aspect-video"
      allowFullScreen
      width="300"
      height="550"
      title="trailer"
      src={link}></iframe>
  );
}

export default Youtube