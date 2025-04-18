import MedicalAnalysisSlider from "./Analyses"
import { Faq } from "./Faq"
import { InfoMain } from "./Info"
import { Map } from "./Map"
import Reviews from "./Reviews"
import { Service } from "./Service"
import { PromoSlider } from "./Slider"
import {SLIDES} from '@/constants/slides'


export const Main = () => {
    return (
        <section className="mt-[20px]">
            <div className="flex flex-col gap-[20px]">
                <PromoSlider slides={SLIDES}/>
            </div>
            <Service />
            <MedicalAnalysisSlider />
            <InfoMain />
            <Reviews />
            <Map />
            <Faq />
        </section>
    )
}