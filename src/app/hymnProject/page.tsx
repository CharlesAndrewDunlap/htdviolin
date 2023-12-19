import ContactForm from "@/components/ContactForm"
import Fader from "@/components/Fader"

export default function HymnProject() {

    return (
        <>
        <div className="background">
        <video src="HymnProjectBackgroundFinal.mp4" className="hymn-project-background" controls autoPlay muted loop></video>
        </div>
        <Fader></Fader>
        <div className="content">
        <ContactForm></ContactForm>
        </div>
        </>
    )
}