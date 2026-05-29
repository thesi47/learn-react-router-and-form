import React, { use } from 'react'
import Notification from './notification/Notification';

function Notifications({ NotificationPromise }) {

  const notifications = use(NotificationPromise);

 
  return (
    <div>
      <h2>Here are your notifications!</h2>
      <Notification notifications={notifications} />
      <br /><br />

    </div>
  )
}

export default Notifications