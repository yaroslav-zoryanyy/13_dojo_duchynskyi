import HomeBanner from "../components/home/HomeBanner.tsx";
import HomeAddress from "../components/home/HomeAddress.tsx";
import HomeNews from "../components/home/HomeNews.tsx";
import HomeTrainer from "../components/home/HomeTrainer.tsx";
import HomeForm from "../components/home/HomeForm.tsx";

const HomePage = () => {
    return (
        <>
            <HomeBanner/>
            <HomeAddress/>
            <HomeNews/>
            <HomeTrainer/>
            <HomeForm/>
        </>
    );
};

export default HomePage;