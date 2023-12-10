import { ElementType } from 'react'

type SmallSidebarItemProps = {
  Icon: ElementType
  title: string
  url: string
}

export default function SmallSidebarItem({
  Icon,
  title,
  url
}: SmallSidebarItemProps) {
  return (
    <a href={url} className='text-sm small-sidebar-item'>
      <Icon className='w-[24px] h-[24px]' />
      <p>{title}</p>
    </a>
  )
}
