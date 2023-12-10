import FilterElement from './FilterElement'

export default function FilterList() {
  return (
    <div className='filter-list'>
      <FilterElement title='All' />
      <FilterElement title='Music' />
      <FilterElement title='Nature' />
      <FilterElement title='Live' />
      <FilterElement title='Mixes' />
      <FilterElement title='Recently uploaded' />
      <FilterElement title='Watched' />
    </div>
  )
}
