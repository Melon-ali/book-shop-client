import Banner from "./Banner";
import Events from "./Events";
import Featured from "./Featured";
import SeleOffer from "./SeleOffer";
import Testimonial from "./Testimonial";

export default function Home() {
    return (
        <div>
            <Banner />
            <Featured />
            <SeleOffer />
            <Events />
            <Testimonial />
        </div>
    );
}