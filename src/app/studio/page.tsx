import ContactForm from '@/components/ContactForm';
import Fader from '@/components/Fader';

export default function Studio() {
    const suzukiQuote: string = '"The main concern for parents should be to bring up their children as noble human beings. That is sufficient. If this is not their greatest hope, in the end the child may take a road contrary to their expectations. Children can play very well. We must try to make them splendid in mind and heart also."';
    const missionStatement: string = 'Mission Statement';

    return (
        <>
            <div className='content' id='studio-banner'>
                <h3 className='studio-banner-subtitle'>Suzuki Violin Lessons</h3>
                <h2 className='studio-banner-title'>Davidson Studio</h2>
            </div>
            <div className='content' id='mission-content'>
                <div id='suzuki-div'>
                <p id='suzuki-quote'>{suzukiQuote}<br></br><br></br><p id='suzuki-signature'>-Shinichi Suzuki</p></p>
                </div>
                <p id='mission-statement'>{missionStatement}</p>
            </div>
            <div className='content'>
                <h2>Content Block 2</h2>
            </div>
            <div className='content'>
                <h2>Content Block 3</h2>
            </div>
            <Fader></Fader>
            <div className='content'>
                <ContactForm></ContactForm>
            </div>
        </>
    );
}