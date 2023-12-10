import React from 'react'

type filterElementProps = {
  title: string
}

export default function FilterElement({ title }: filterElementProps) {
  return (
    <div>
      <button className='filter-element-btn'>{title}</button>
    </div>
  )
}
