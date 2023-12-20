import ContactForm from '@/components/ContactForm';
import Fader from '@/components/Fader';

export default function Studio() {
    return (
        <>
            <div className='content'>
                <h2>Content Block 1</h2>
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