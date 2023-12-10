import { ReactNode, Children, useState } from 'react'

import {
  IoIosArrowDown as ArrDown,
  IoIosArrowUp as ArrUp
} from 'react-icons/io'

type LargeSidebarSection = {
  children: ReactNode
  title?: string
  visibleItemCount?: number
}

export default function LargeSidebarSection({
  children,
  title,
  visibleItemCount = Number.POSITIVE_INFINITY
}: LargeSidebarSection) {
  const [isExpanded, setisExpanded] = useState(false)
  const childrenArray = Children.toArray(children).flat()
  const showExpandButton = childrenArray.length > visibleItemCount
  const visibleChildren = isExpanded
    ? childrenArray
    : childrenArray.slice(0, visibleItemCount)

  const handleClick = () => {
    isExpanded ? setisExpanded(false) : setisExpanded(true)
  }

  return (
    <div className='LargeSidebarSection'>
      {title && <div className='ml-5 mb-2'>{title}</div>}
      {visibleChildren}
      {showExpandButton && (
        <button onClick={handleClick} className='large-sidebar-item w-[100%]'>
          {isExpanded ? (
            <ArrUp className='w-[20px] h-[20px]' />
          ) : (
            <ArrDown className='w-[20px] h-[20px]' />
          )}
          <p>Show more</p>
        </button>
      )}
    </div>
  )
}
