import ContactForm from '@/components/ContactForm';
import Fader from '@/components/Fader';
import LineDecoration from '@/components/LineDecoration';
import Image from 'next/image';

export default function Studio() {
    const suzukiQuote: string = '"The main concern for parents should be to bring up their children as noble human beings. That is sufficient. If this is not their greatest hope, in the end the child may take a road contrary to their expectations. Children can play very well. We must try to make them splendid in mind and heart also."';
    const missionStatement1: string = 'I believe in creating an engaging, positive setting which encourages students to approach music and all aspects of their lives with an inquisitive mind. While developing strong technique and a fundamental understanding of music, the lessons of violin will extend far beyond playing the instrument by rote, helping them become more \'noble human beings.\' As a teacher, I am attuned to the different strengths and needs of each student, helping them meet their own goals and encouraging them to reach further as they develop new ones.';
    const missionStatement2: string = 'A life-long learner, my dedication to violin has become an invaluable means of setting aside time to ask questions and challenge myself, skills I seek to share with my studio. I am excited to encourage my students to ask their own questions and to share their music with others.';
    const currentLocation: string = 'Centrally located near the S. Bellaire neighborhood, we offer lessons on site or in  your home.';

    return (
        <>
            <div className='content' id='studio-banner'>
                <h3 className='studio-banner-subtitle'>Suzuki Violin Lessons</h3>
                <h2 className='studio-banner-title'>Davidson Studio</h2>
            </div>
            <div className='content' id='mission-content'>
                <div id='suzuki-div'>
                    <p id='suzuki-quote'>{suzukiQuote}<br></br><br></br></p><p id='suzuki-signature'>-Shinichi Suzuki</p>
                </div>
                <div id='mission-div'>
                    <p id='mission-title'>My Mission</p>
                    <p id='mission-statement'>{missionStatement1}</p>
                    <p id='mission-statement'><br></br>{missionStatement2}</p>
                </div>
            </div>
            <div className='content' id='location'>
                <div className='location-div' id='location-text'>
                    <LineDecoration />
                    <div id='location-text-content'>
                        <h3>Location</h3>
                        <br></br>
                        <p>{currentLocation}</p>
                    </div>
                </div>
                <div className='location-div'>
                <Image src='/TingTeaching.jpeg' alt='Ting Teaching' width={400} height={600} className='ting-sitting' />
                </div>
            </div>
            <div className='content'>
                <h2>Content Block 3</h2>
            </div>
            <Fader />
            <div className='content'>
                <ContactForm />
            </div>
        </>
    );
}