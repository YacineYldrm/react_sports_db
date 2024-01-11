import { useContext, useEffect } from "react";
import { AllLeagueContext, LoadingDataContext } from "../components/Context/Context";
import loadingAnimation from '/sportdb_loading.gif'
import Home from "./Home";

const PreLoader = () => {

    const { allLeagueData } = useContext(AllLeagueContext);
    const { setLoadingData } = useContext(LoadingDataContext);

    useEffect(() => {
        allLeagueData.length  > 0 ? setLoadingData(false) : null;
    }, [allLeagueData])
    
    return ( allLeagueData.length > 0 ? <Home/> : <div className="loading_animation_container">
    <img src={loadingAnimation} alt="" />
    </div> );
}
 
export default PreLoader;