import { useSelector } from 'react-redux'
import { RootState } from '../store/store'
import { subscriptions } from '../data/sidebar'
import LargeSidebarSection from './LargeSidebar'
//icons
import { CgProfile as YourChannel } from 'react-icons/cg'
import { MdHistory as History } from 'react-icons/md'
import { CiYoutube as YourVideos } from 'react-icons/ci'
import { IoTimeOutline as WatchLater } from 'react-icons/io5'
import { AiOutlineLike as LikedVideos } from 'react-icons/ai'
import { IoIosTrendingUp as Trending } from 'react-icons/io'
import { LuMusic2 as Music } from 'react-icons/lu'
import { RiRecordCircleLine as Live } from 'react-icons/ri'
import { SiYoutubegaming as Gaming } from 'react-icons/si'
import { TfiCup as Sports } from 'react-icons/tfi'
import { IoLogoYoutube as MoreYoutube } from 'react-icons/io'
import { CiSettings as Settings } from 'react-icons/ci'
import { MdOutlineFlag as Report } from 'react-icons/md'
import { IoIosHelpCircleOutline as Help } from 'react-icons/io'
import { MdOutlineFeedback as Feedback } from 'react-icons/md'
import { MdHomeFilled as Home } from 'react-icons/md'
import { SiYoutubeshorts as Shorts } from 'react-icons/si'
import { MdOutlineSubscriptions as Subscriptions } from 'react-icons/md'
import { SlSocialYoutube as You } from 'react-icons/sl'
import LargeSidebarItem from './LargeSidebarItem'
import SmallSidebarItem from './SmallSidebarItem'

export default function Sidebar() {
  const dropDownState = useSelector((store: RootState) => store.dropDownMenu)

  return (
    <div className='sidebar-container'>
      {dropDownState.value ? (
        <aside className='small-sidebar'>
          <SmallSidebarItem Icon={Home} title='Home' url='/' />
          <SmallSidebarItem Icon={Shorts} title='Shorts' url='/' />
          <SmallSidebarItem
            Icon={Subscriptions}
            title='Subscriptions'
            url='/'
          />
          <SmallSidebarItem Icon={You} title='You' url='/' />
        </aside>
      ) : (
        <aside className='large-sidebar'>
          <LargeSidebarSection>
            <LargeSidebarItem
              IconOrImgUrl={Home}
              title='Home'
              url='/'
              isActive
            />
            <LargeSidebarItem IconOrImgUrl={Shorts} title='Shorts' url='/' />
            <LargeSidebarItem
              IconOrImgUrl={You}
              title='Subscriptions'
              url='/'
            />
          </LargeSidebarSection>
          <hr />
          <LargeSidebarSection title='You' visibleItemCount={4}>
            <LargeSidebarItem
              IconOrImgUrl={YourChannel}
              title='Your channel'
              url='/'
            />
            <LargeSidebarItem IconOrImgUrl={History} title='History' url='/' />
            <LargeSidebarItem
              IconOrImgUrl={YourVideos}
              title='Your videos'
              url='/'
            />
            <LargeSidebarItem
              IconOrImgUrl={WatchLater}
              title='Watch later'
              url='/'
            />
            <LargeSidebarItem
              IconOrImgUrl={LikedVideos}
              title='Liked videos'
              url='/'
            />
          </LargeSidebarSection>
          <hr />
          <LargeSidebarSection title='Subscriptions' visibleItemCount={7}>
            {subscriptions.map((subscription) => {
              return (
                <LargeSidebarItem
                  key={subscription.id}
                  IconOrImgUrl={subscription.imgUrl}
                  title={subscription.channelName}
                  url='/'
                />
              )
            })}
          </LargeSidebarSection>
          <hr />
          <LargeSidebarSection title='Explore'>
            <LargeSidebarItem
              IconOrImgUrl={Trending}
              title='Trending'
              url='/'
            />
            <LargeSidebarItem IconOrImgUrl={Music} title='Music' url='/' />
            <LargeSidebarItem IconOrImgUrl={Live} title='Live' url='/' />
            <LargeSidebarItem IconOrImgUrl={Gaming} title='Gaming' url='/' />
            <LargeSidebarItem IconOrImgUrl={Sports} title='Sports' url='/' />
          </LargeSidebarSection>
          <hr />
          <LargeSidebarSection title='More from YouTube'>
            <LargeSidebarItem
              IconOrImgUrl={MoreYoutube}
              title='Youtube Premium'
              url='/'
            />
            <LargeSidebarItem
              IconOrImgUrl={MoreYoutube}
              title='Youtube Studio'
              url='/'
            />
            <LargeSidebarItem
              IconOrImgUrl={MoreYoutube}
              title='Youtube Music'
              url='/'
            />
            <LargeSidebarItem
              IconOrImgUrl={MoreYoutube}
              title='Youtube Kids'
              url='/'
            />
          </LargeSidebarSection>
          <hr />
          <LargeSidebarSection title='Explore'>
            <LargeSidebarItem
              IconOrImgUrl={Settings}
              title='Settings'
              url='/'
            />
            <LargeSidebarItem IconOrImgUrl={Report} title='Report' url='/' />
            <LargeSidebarItem IconOrImgUrl={Help} title='Help' url='/' />
            <LargeSidebarItem
              IconOrImgUrl={Feedback}
              title='Feedback'
              url='/'
            />
          </LargeSidebarSection>
          <hr />
          <div className='guide-links'>
            <ul>
              <GuideLinkItem title='About' />
              <GuideLinkItem title='Press' />
              <GuideLinkItem title='Copyright' />
              <GuideLinkItem title='Contact us' />
              <GuideLinkItem title='Creators' />
              <GuideLinkItem title='Advertise' />
              <GuideLinkItem title='Developers' />
            </ul>
            <ul>
              <GuideLinkItem title='Terms' />
              <GuideLinkItem title='Privacy' />
              <GuideLinkItem title='Policy & Safety' />
              <GuideLinkItem title='How YouTube works' />
              <GuideLinkItem title='Test new features' />
            </ul>
          </div>
        </aside>
      )}
    </div>
  )
}

type GuideLinkItemProp = {
  title: string
}

function GuideLinkItem({ title }: GuideLinkItemProp) {
  return (
    <li>
      <a href=''>{title}</a>
    </li>
  )
}
