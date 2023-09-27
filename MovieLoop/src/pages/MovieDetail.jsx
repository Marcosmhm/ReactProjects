import { useLoaderData, useParams } from 'react-router-dom'

import { getHeroMidia as renderHeroMidia} from '../../utils'
import Loading from '../../components/Loading'

export function loader({ params }) {

}

export default function MovieDetail() {

  return (
    <>
      <div className="section-container">
        <h1>Specific movie goes here</h1>
      </div>
    </>
  )
}