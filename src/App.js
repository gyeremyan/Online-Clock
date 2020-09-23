import React from 'react'

import './bootstrap.min.css'

export default function App () {
  function formatAMPM(date) {
      let hours = date.getHours()
      let minutes = date.getMinutes()
      let ampm = hours >= 12 ? 'PM' : 'AM'

      hours = hours % 12
      hours = hours ? hours : 12
      minutes = minutes < 10 ? '0' + minutes : minutes

      let strTime = hours + ':' + minutes + ' ' + ampm

      return strTime
  }

  return (
    <>
      <dataManager>
        <items>
          <item>
            <div className='clock'>
              <h1><strong>{formatAMPM(new Date)}</strong></h1>
              <h2>{new Date().getDay() == 0 ? `Sunday` : new Date().getDay() == 1 ? `Monday` : new Date().getDay() == 2 ? `Tuesday` : new Date().getDay() == 3 ? `Wednesday` : new Date().getDay() == 4 ? `Thursday` : new Date().getDay() == 5 ? `Friday` : new Date().getDay() == 6 ? `Saturday` : null}, {new Date().getMonth() == 0 ? `January` : new Date().getMonth() == 1 ? `Februar` : new Date().getMonth() == 2 ? `March` : new Date().getMonth() == 3 ? `April` : new Date().getMonth() == 4 ? `May` : new Date().getMonth() == 5 ? `June` : new Date().getMonth() == 6 ? `July` : new Date().getMonth() == 7 ? `August` : new Date().getMonth() == 8 ? `September` : new Date().getMonth() == 9 ? `October` : new Date().getMonth() == 10 ? `November` : new Date().getMonth() == 11 ? `December` : null} {new Date().getDate()}, {new Date().getFullYear()}</h2>
            </div>
          </item>
        </items>
      </dataManager>
    </>
  )
}