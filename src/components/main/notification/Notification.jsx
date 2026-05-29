import React from 'react'

function Notification({ notifications }) {

    return (
        <div>
            {notifications.map((notification) => {
                return (
                    <div key={notification.id}>
                        <h3>{notification.title}</h3>
                        <p>{notification.body}</p>
                    </div>
                );
            })}
        </div>
    )
}

export default Notification