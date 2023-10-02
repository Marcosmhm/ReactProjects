import { lazy, Suspense, useState } from 'react'
import { useLoaderData, useParams } from 'react-router-dom'

import { getPersonDetail } from '../../../services/api'
const PersonOverview = lazy(() => import('../../../components/PersonOverview'))
const KnownFor = lazy(() => import('../../../components/KnownFor'))
import Loading from '../../../components/Loading'
import '../../assets/css/personDetail.css'

export function loader({ params }) {
  return getPersonDetail(params.id)
}

export default function PersonDetail() {
  const person = useLoaderData()

  const activeStyles = {
    color: "#FFF",
    opacity: 1,
    backgroundColor: "#000"
  }

  console.log(person)

  const personName = person.name
  const personBiography = person.biography || ''
  const personBirthDay = person.birthday || ''
  const personPlaceOfBirth = person.place_of_birth || ''
  const personPosterUrl = person.profile_path || ''
  const personKnownFor = person.known_for_department || ''
  const personCredits = person.combined_credits

  const [active, setActive] = useState('known-for')

  const [selectedFilter, setSelectedFilter] = useState('cast')
  const handleFilterChange = filter => setSelectedFilter(filter);

  return (
    <>
      <Suspense fallback={<Loading />}>
        <PersonOverview
          name={personName}
          biography={personBiography}
          birthDay={personBirthDay}
          placeOfBirth={personPlaceOfBirth}
          knownFor={personKnownFor}
          url={`https://image.tmdb.org/t/p/h632/${personPosterUrl}`}
        />
        <div className="button-wrapper">
          <button className={`detail-button ${active === 'overview' ? 'button-border' : ''}`}
            style={active === 'known-for' ? activeStyles : []}
            onClick={() => setActive('known-for')}
          >
            Know For
          </button>
          <button className={`detail-button ${active === 'overview' ? 'button-border' : ''}`}
            style={active === 'credits' ? activeStyles : []}
            onClick={() => setActive('credits')}
          >
            Credits
          </button>
          <button className={`detail-button ${active === 'overview' ? 'button-border' : ''}`}
            style={active === 'photos' ? activeStyles : []}
            onClick={() => setActive('photos')}
          >
            Photos
          </button>
        </div>
        {active === 'known-for' && <KnownFor
          credits={personCredits}
          selectedFilter={selectedFilter} 
          handleFilterChange={handleFilterChange}/>}
        {active === 'credits' && <KnownFor />}
        {active === 'photos' && <KnownFor />}
      </Suspense>
    </>
  )
}