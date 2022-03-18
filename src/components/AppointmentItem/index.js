// Write your code here
import './index.css'

import {format} from 'date-fns'

const AppointmentItem = props => {
  const {appointmentItem} = props
  const {titleInput, date, id, isClicked} = appointmentItem

  const onClickFav = () => {
    const {changeFav} = props
    changeFav(id)
  }
  const imgUrl = isClicked
    ? 'https://assets.ccbp.in/frontend/react-js/appointments-app/filled-star-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/appointments-app/star-img.png'

  return (
    <li className="list-item">
      <div className="container-1">
        <div className="container-2">
          <p>{titleInput}</p>
          <button type="button" onClick={onClickFav} testid="star">
            <img src={imgUrl} alt="star" />
          </button>
        </div>
        <p>Date: {format(new Date(date), 'dd MMMM yyyy, EEEE')}</p>
      </div>
    </li>
  )
}
export default AppointmentItem
