import EventComponent from "../components/events/EventComponent.tsx";

const EventsPage = () => {
    return (
        <div className={'container'}>
            <EventComponent/>
            <EventComponent/>
            <EventComponent/>
        </div>
    );
};

export default EventsPage;