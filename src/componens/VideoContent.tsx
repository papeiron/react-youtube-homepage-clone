import VideoBox from './VideoBox'
import { useFetchVideosQuery } from '../store/videoApi/videoApi'
import Loading from './Loading'

export default function VideoContent() {
  const { data, isLoading, isError, error } = useFetchVideosQuery()

  return isLoading ? (
    <Loading />
  ) : (
    <div className='videoContentContainer'>
      <div className='videoContent'>
        {data?.map((video) => (
          <VideoBox key={video.title} videoData={video} />
        ))}
      </div>
    </div>
  )
}
