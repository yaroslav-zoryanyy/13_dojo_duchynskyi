import PriceComponent from "./PriceComponent.tsx";
import ScheduleComponent from "./ScheduleComponent.tsx";


const ScheduleAndPriceComponent = () => {
    return (
        <section className={'schedule_and_price'}>
            <PriceComponent/>
            <ScheduleComponent/>
        </section>
    );
};

export default ScheduleAndPriceComponent;