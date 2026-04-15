import TeamCardModal from "./modal/TeamCardModal.tsx";

const TeamComponent = () => {
    return (
        <section className={'team'}>
            <div className="team__wrapper">
                <h2 className={'team__title'}>Тренерський склад</h2>
                <div className="team__content">
                    <TeamCardModal/>
                    <TeamCardModal/>
                    <TeamCardModal/>
                </div>
            </div>
        </section>
    );
};

export default TeamComponent;