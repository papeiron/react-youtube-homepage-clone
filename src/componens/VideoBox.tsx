import { useEffect, useState, useRef } from 'react'

type VideoBoxProps = {
  videoData: {
    description: string
    sources: string[]
    subtitle: string
    thumb: string
    title: string
  }
}

export default function VideoBox({ videoData }: VideoBoxProps) {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    if (videoRef.current == null) return
    if (isVideoPlaying) {
      videoRef.current.currentTime = 0
      videoRef.current.play()
    } else {
      videoRef.current.pause()
    }
  }, [isVideoPlaying])

  return (
    <div
      className='video-box'
      onMouseEnter={() => setIsVideoPlaying(true)}
      onMouseLeave={() => setIsVideoPlaying(false)}
    >
      <a href=''>
        <div className='video-wrapper'>
          <video src={videoData.sources[0]}></video>
        </div>
        <div className='video-text-content'>
          <div className='thumb-pic'>
            <img
              src='https://yt3.googleusercontent.com/584JjRp5QMuKbyduM_2k5RlXFqHJtQ0qLIPZpwbUjMJmgzZngHcam5JMuZQxyzGMV5ljwJRl0Q=s176-c-k-c0x00ffffff-no-rj'
              alt=''
            />
          </div>
          <div className='text'>
            <p className='title'>{videoData.title}</p>
            <p className='subtitle'>{videoData.subtitle}</p>
            <p className='subtitle'>357K views · 2 years ago</p>
          </div>
        </div>
        <video
          className={`absolute inset-0 transition-opacity duration-200 ${
            isVideoPlaying ? 'opacity-100' : 'opacity-0'
          }`}
          ref={videoRef}
          muted
          playsInline
          src={videoData.sources[0]}
        />
      </a>
    </div>
  )
}
