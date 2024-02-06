"use client";

import React from 'react';
import YouTube, { YouTubeProps } from 'react-youtube';



interface YoutubeCardProps {
  link  : string;
}


const YoutubeCard1:React.FC<YoutubeCardProps> =({link}) => {
return (
  // <LiteYouTubeEmbed videoid="xWhGp5WauY8"/>
  <div className="image-container max-w-[300px] max-h-[300px] relative p-1">
    <iframe
      width="300"
      height="300"
      src={`https://www.youtube.com/embed/${link}`}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Embedded youtube"
      // className='left-0 top-0 h-full w-full absolute'
      className='image'
    />
  </div>
)

}

const YoutubeCard:React.FC<YoutubeCardProps> = ({link}) => {
  // console.log('link', link);
  const onPlayerReady: YouTubeProps['onReady'] = (event) => {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  }

  const opts: YouTubeProps['opts'] = {
    height: '200',
    width: '300',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
    //   https://www.youtube.com/watch?v=xWhGp5WauY8&pp=ygUOd29tZW4gZmVtaWNpZGU%3D
      autoplay: 0,
    },
  };

  return (
    <div className="image-container max-w-[300px] max-h-[200px] relative">
      <YouTube videoId={link || 'xWhGp5WauY8'} 
    opts={opts} 
    onReady={onPlayerReady} 
    className='image'
    />
    </div>
    
  )
 
  
}

export default YoutubeCard1;

