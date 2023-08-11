import Image from "next/image";
import blueSandsMockup from "../public/images/BlueSandsStillMockup.png";

export default function HeroImage() {
    return (
        <>
            {/* <Image src={blueSandsMockup} placeholder="blur" /> */}
            <img src="/images/BlueSandsStillMockup.png" />
        </>
    )
}