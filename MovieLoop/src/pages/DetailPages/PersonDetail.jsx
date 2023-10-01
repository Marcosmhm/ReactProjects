import { lazy, Suspense } from 'react'
import { useLoaderData, useParams } from 'react-router-dom'

import { getPersonDetail } from '../../../services/api'
const PersonOverview = lazy(() => import('../../../components/PersonOverview'))
import '../../assets/css/personDetail.css'
import Loading from '../../../components/Loading'

export function loader({ params }) {
  return getPersonDetail(params.id)
}

export default function PersonDetail() {
  const person = useLoaderData()
  console.log(person)

  const personName = person.name
  const personBiography = person.biography || ''
  const personBirthDay = person.birthday || ''
  const personPlaceOfBirth = person.place_of_birth || ''
  const personPosterUrl = person.profile_path || ''
  const personKnowFor = person.known_for_department || ''

  return (
    <>
      <Suspense fallback={<Loading />}>
        <PersonOverview
          name={personName}
          biography={personBiography}
          birthDay={personBirthDay}
          placeOfBirth={personPlaceOfBirth}
          knowFor={personKnowFor}
          url={`https://image.tmdb.org/t/p/h632/${personPosterUrl}`}
        />
      </Suspense>
    </>
  )
}