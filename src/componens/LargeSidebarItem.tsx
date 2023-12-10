import { ElementType } from 'react'

type LargeSidebarItemProps = {
  IconOrImgUrl: ElementType | string
  title: string
  url: string
  isActive?: boolean
}

export default function LargeSidebarItem({
  IconOrImgUrl,
  title,
  url,
  isActive = false
}: LargeSidebarItemProps) {
  return (
    <a
      href=''
      className={`large-sidebar-item ${
        isActive ? 'font-semibold bg-[#272727] hover:bg-[#3d3d3d]' : ''
      }`}
    >
      {typeof IconOrImgUrl === 'string' ? (
        <img className='w-[24px] h-[24px] rounded-full' src={IconOrImgUrl} />
      ) : (
        <IconOrImgUrl className='w-[24px] h-[24px]' />
      )}

      <p>{title}</p>
    </a>
  )
}
