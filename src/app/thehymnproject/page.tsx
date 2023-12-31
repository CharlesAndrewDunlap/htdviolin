import ContactForm from "@/components/ContactForm";
import Fader from "../../components/Fader";
import Event, { EventDetails } from "@/components/Event";
import SoundSampler from "@/components/SoundSampler";
import ColorChange from "@/components/ColorChange";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
    title: 'The Hymn Project | Hoi Ting Davidson, Violinist',
    description: 'Experience The Hymn Project and see tour dates.',
    keywords: ['Ting', 'Davidson', 'Hymn', 'Project', 'Mennonite', 'Hymns', 'Violin', 'Tour'],
    authors: [{ name: 'Hoi Ting Davidson' }],
    creator: 'Charles Andrew Dunlap'
}

export default function HymnProject() {
    const hymnProjectInfo: string = "The Hymn Project is centered around bringing the beauty and depth of hymns to string ensemble and exploring how these old traditions pass down and invite us to experience something greater than ourselves.";

    const backgroundPlaceholder: string = '/HymnProjectImage.jpg';

    /*

    Sample event syntax:

    {
        date: 'DATE HERE',
        location: 'LOCATION HERE',
        event: 'EVENT TITLE HERE',
    }

    */

    const upcomingEvents: EventDetails[] = [
        //Put your events in here.

    ]

    return (
        <>
            <div className='background'>
                <Image src={backgroundPlaceholder} alt='The Hymn Project Logo' className='hymn-project-background-image' width={230} height={230} objectFit='cover' />
                <video src='HymnProjectBackgroundFinal.mp4' className='hymn-project-background' poster={backgroundPlaceholder} autoPlay muted loop></video>
                <SoundSampler />
            </div>
            <div className='content' id='hymn-project-content-1'>
                <video src='HymnProjectIntermission.mp4' className='hymn-project-background' id='hymn-background-video' autoPlay muted loop></video>
                <div className='hymn-project-info'>
                    <p className='hymn-project-about'>&quot;{hymnProjectInfo}&quot;</p>
                </div>
            </div>
            <div className='content' id='upcoming-events-hymn'>
                <h2 className='upcoming-events-title' id='hymn-project-events'>Tour Dates</h2>
                <div className='upcoming-events-content' id='hymn-project-events'>
                    {
                        upcomingEvents.length ? upcomingEvents.map((e, i) => <Event date={e.date} event={e.event} location={e.location} key={i} />) :
                            <div className='no-events-display'>Check back soon!</div>
                    }
                </div>
            </div>
            <div className='content'>
                <ContactForm></ContactForm>
            </div>
            <Fader></Fader>
            <ColorChange />
        </>
    )
}