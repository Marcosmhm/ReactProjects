import { lazy } from 'react'
import { useLoaderData, useParams } from 'react-router-dom'

import { getPersonDetail } from '../../../services/api'
const PersonOverview = lazy(() => import('../../../components/PersonOverview'))

export function loader({ params }) {
  return getPersonDetail(params.id)
}

export default function PersonDetail() {

  const person = useLoaderData()
  console.log('person', person)
  return (
    <>
      <PersonOverview media={person} />
    </>
  )
}