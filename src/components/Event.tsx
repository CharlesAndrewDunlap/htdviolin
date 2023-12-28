interface EventDetails {
    date: string;
    event: string;
    location: string;
}

export default function Event({ date, event, location }: EventDetails): JSX.Element {
    const eventDate: string = date;
    const eventTitle: string = event;
    const eventLocation: string = location;

    return (
        <div className='event'>
            <h4 className='event-date'>{eventDate}</h4>
            <div className='event-info'>
                <h3>{eventTitle} /</h3>
                <p>&nbsp;{eventLocation}</p>
            </div>
        </div>
    )
}