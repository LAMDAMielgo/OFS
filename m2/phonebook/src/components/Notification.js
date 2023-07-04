

const Notification = ({msg}) => {

    if (msg === null)  {
        return null

    } else if (msg.type === 'error') {
        return (
            <div className="notification-error">
                {msg.content}
            </div>
        )

    } else {        

        console.log("here", msg)
        return (
            <div className="notification">
                {msg.content}
            </div>
        )
    }

}

export {
    Notification
}