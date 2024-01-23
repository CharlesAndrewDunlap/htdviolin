import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

type CarouselProps = {
    fileName: string,
    url: string
}

export default function CarouselCard(props: CarouselProps) {
    const fileName: string = props.fileName.split(' ').join('');
    return (
        <div className='carousel-element'>
            <a href={props.url} className='carousel-hover-overlay'>
                <FontAwesomeIcon icon={faMagnifyingGlass} className='carousel-svg' />
            </a>
            <Image src={`/${fileName}`} alt={props.fileName} layout='fill' objectFit='contain' />
        </div>
    )
}