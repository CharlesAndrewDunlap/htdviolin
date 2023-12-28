import ContactForm from '@/components/ContactForm';
import Fader from '@/components/Fader';
import LineDecoration from '@/components/LineDecoration';
import ScrollElement from '@/components/ScrollElement';
import Image from 'next/image';

export default function Studio() {
    const suzukiQuote: string = '"The main concern for parents should be to bring up their children as noble human beings. That is sufficient. If this is not their greatest hope, in the end the child may take a road contrary to their expectations. Children can play very well. We must try to make them splendid in mind and heart also."';
    const missionStatement1: string = 'I believe in creating an engaging, positive setting which encourages students to approach music and all aspects of their lives with an inquisitive mind. While developing strong technique and a fundamental understanding of music, the lessons of violin will extend far beyond playing the instrument by rote, helping them become more \'noble human beings.\' As a teacher, I am attuned to the different strengths and needs of each student, helping them meet their own goals and encouraging them to reach further as they develop new ones.';
    const missionStatement2: string = 'A life-long learner, my dedication to violin has become an invaluable means of setting aside time to ask questions and challenge myself, skills I seek to share with my studio. I am excited to encourage my students to ask their own questions and to share their music with others.';
    const currentLocation: string = 'Centrally located near the S. Bellaire neighborhood, we offer lessons on site or in  your home.';
    const suzukiMethod1: string = '“Musical ability is not an inborn talent but an ability which can be developed. Any child who is properly trained can develop musical ability, just as all children develop the ability to speak their mother tongue. The potential of every child is unlimited.”';
    const suzukiMethod2: string = '"More than fifty years ago, Japanese violinist Shinichi Suzuki realized the implications of the fact that children the world over learn to speak their native language with ease. He began to apply the basic principles of language acquisition to the learning of music, and called his method the mother-tongue approach. The ideas of parent responsibility, loving encouragement, constant repetition, etc., are some of the special features of the Suzuki approach."';

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
            <div className='content' id='suzuki-method'>
                <div className='suzuki-method'>
                    <LineDecoration />
                    <div id='suzuki-method-text'>
                        <h3 id='suzuki-method-title'>The Suzuki Method</h3>
                        <div>{suzukiMethod1}<br></br><br></br>S. Suzuki</div>
                        <br></br><br></br>
                        <div>{suzukiMethod2}</div><br></br><div style={{fontStyle: 'italic', marginBottom: '15px'}}>Read more from the Suzuki Association</div>
                        <a href='https://suzukiassociation.org/about/suzuki-method/' id='SAA-link' target='_blank'>Learn More</a>
                    </div>
                </div>
                <div className='pricing-right'>
                    <div className='pricing-element'>
                        <h3 className='price-element-title'>Lesson Prices</h3>
                        <p className='price-text' id='current-pricing'>$40 - 30 min lessons<br></br>$58 - 45 min lessons<br></br>$70 - 1 hour lessons</p>
                        <p className='price-text'>*Lessons can be offered in-home for a $10 travel fee.</p>
                        <p className='price-text-inner'>Book 2-3 - 45 min. recommended minimum<br></br>Book 4+ - 1 hour recommended mininmum</p>
                    </div>
                    <div className='pricing-element'>
                        <h3 className='price-element-title'>{"Let's Meet"}</h3>
                        <p className='price-text'>{"I offer a free 30 min trial lesson for students of all ages and experience. For those interested in beginning violin, this time can be used to get to know each other and share information about how to get started. Set up a meeting or send me your questions in the 'contact' tab."}</p>
                        <div className='scroll-element-div'>
                        <ScrollElement className='scroll-element' />
                        <div style={{width: '50%'}}></div>
                        </div>
                    </div>
                </div>
            </div>
            <Fader />
            <div className='content'>
                <ContactForm />
            </div>
        </>
    );
}