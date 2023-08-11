
export default function VideoMockup() {
    return (
        <>
            <video
                className="w-5/6 lg:w-4/6 h-auto"
                loading="lazy"
                poster="/images/BlueSandsStillMockup.png"
                autoPlay
                loop
                muted
                src="/videos/BlueSandsMockupFinal-1.mp4">
            </video>
        </>
    )
}