import Carousel from '@/components/Carousel';
import Fader from '@/components/Fader';
import StudioBannerParallax from '@/components/StudioBannerParallax';
import Image from 'next/image';

interface Resource {
    title: string,
    url: string
}

type ResourceValue = string | Resource[]

export default function ParentResources() {
    const parentResources: { [key: string]: ResourceValue } = {
        title: 'Sheet Music',
        sheetMusic: [
            { title: 'I Can Read Music Volume 1 .jpeg', url: 'https://www.amazon.com/Can-Read-Music-Vol-Violin/dp/0874874394/ref=asc_df_0874874394/?tag=hyprod-20&linkCode=df0&hvadid=312057344057&hvpos=&hvnetw=g&hvrand=2011874238435712234&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9027600&hvtargid=pla-434637210479&psc=1&gclid=CjwKCAiA4smsBhAEEiwAO6DEjTPQ2viC4QLYRUkp9tw0XNw687xJC60ZAMPPNi4STzKMil5XP8YbpRoCuj8QAvD_BwE' },
            { title: 'I Can Read Music Volume 2 .jpeg', url: 'https://www.amazon.com/Can-Read-Music-Vol-students/dp/0874874270/ref=sr_1_1?crid=24MFQLSYCPPOA&keywords=i+can+read+music+vol+2&qid=1704142383&s=books&sprefix=i+can+read+music+vol+%2Cstripbooks%2C119&sr=1-1' },
            { title: 'Introducing The Positions For Violin Volume 1 .jpg', url: 'https://www.amazon.com/Introducing-Positions-Violin-Third-Position/dp/1423444876' },
            { title: 'Introducing The Positions For Violin Volume 2 .jpg', url: 'https://www.amazon.com/Introducing-Positions-Violin-Seventh-Educational/dp/1423444884' },
            { title: 'Melodious Double Stops .jpg', url: 'https://www.amazon.com/Trott-Melodious-Double-Stops-Violin-Complete/dp/1423427092/ref=sr_1_1?crid=1BMUGW0Q9175R&keywords=melodious+double+stops+trott&qid=1704142518&s=books&sprefix=melodius+double+stops+trot%2Cstripbooks%2C105&sr=1-1' },
            { title: 'Kreutzer 42 Studies .jpeg', url: 'https://www.amazon.com/Kreutzer-Caprices-Schirmer-Classics-Schirmers/dp/0793525942' },
            { title: 'Scales For Advanced Violinists .jpg', url: 'https://www.amazon.com/Scales-Advanced-Violinists-Barbara-Barber/dp/B000VI8Y40/ref=sr_1_1?crid=UG69ZXKT0ODO&keywords=advanced+scales+barbera+barber&qid=1704142842&s=books&sprefix=advanced+scales+barbera+barber%2Cstripbooks%2C110&sr=1-1' },
            { title: 'Mazas Etudes Speciales Opus 36 Book 1 .jpeg', url: 'https://www.amazon.com/Jacques-Fereol-Speciales-Galamain-International/dp/B0046TXT6S/ref=sr_1_4?crid=PO48YC28QPVR&keywords=mazas&qid=1704142597&s=books&sprefix=maas%2Cstripbooks%2C115&sr=1-4' },
        ]
    }

    return (
        <>
            <StudioBannerParallax page='parent' />
            <div className='supply-and-book-resources'>
            <Carousel title={parentResources.title as string} sheetMusic={parentResources.sheetMusic as Resource[]} />
                <h2 className='carousel-title'>Supplies</h2>
                <div className='resource-row-top'>
                    <div className='img-cont'>
                        <a target='_blank' href='https://www.alfred.com/suzuki-method/suzuki-audio-downloads/' className='carousel-hover-overlay text'>Suzuki Recordings</a>
                        <Image src={'/headphonegraphic.jpg'} alt='Suzuki Recordings' className='resource-grid-image' width={400} height={400}/>
                    </div>
                    <div className='img-cont'>
                        <a target='_blank' href='https://www.peakmusicstands.com/' className='carousel-hover-overlay text'>Peak Music Stands</a>
                        <Image src={'/musicstand.jpeg'} alt='Peak Music Stands' className='resource-grid-image' width={400} height={400}/>
                    </div>
                    <div className='img-cont'>
                        <a target='_blank' href='https://www.manhasset-specialty.com/shop/?c=96218/SingleStands' className='carousel-hover-overlay text'>Manhasset Music Stands</a>
                        <Image src={'/manhassetmusicstand.jpeg'} alt='Manhasset Music Stands' className='resource-grid-image' width={400} height={400}/>
                    </div>
                    <div className='img-cont'>
                        <a target='_blank' href='https://www.sharmusic.com/' className='carousel-hover-overlay text'>Supplies</a>
                        <Image src={'/sharmusiclogo.png'} alt='Shar Music Online Store For Supplies' className='resource-grid-image' width={400} height={400}/>
                    </div>
                </div>
                <h2 className='carousel-title'>Books</h2>
                <div className='resource-row-bottom'>
                    <div className='img-cont'>
                        <a target='_blank' href='https://www.amazon.com/Nurtured-Love-Translated-Original-Japanese/dp/0739090445/ref=tmm_pap_title_0?ie=UTF8&qid=1408145242&sr=8-1' className='carousel-hover-overlay text'>Purchase</a>
                        <Image src={'/nurturedbylove.jpeg'} alt='Nurtured By Love Book' className='resource-grid-image-2' width={200} height={400}/>
                    </div>
                    <div className='img-cont'>
                        <a target='_blank' href='https://www.amazon.com/Beyond-Music-Lesson-Successful-Families/dp/0999119206/ref=pd_sbs_d_sccl_2_1/130-7688252-8811324?pd_rd_w=awUjG&content-id=amzn1.sym.d95de1d6-8400-4c9d-8ae8-144769325aef&pf_rd_p=d95de1d6-8400-4c9d-8ae8-144769325aef&pf_rd_r=K0NBQDVHNDNANW16KSC6&pd_rd_wg=8TMRN&pd_rd_r=e02dae11-69bf-456b-b06a-5428d2a88369&pd_rd_i=0999119206&psc=1' className='carousel-hover-overlay text'>Purchase</a>
                        <Image src={'/beyondthemusiclesson.jpg'} alt='Beyond the Music Lesson Book' className='resource-grid-image-2' width={200} height={400}/>
                    </div>
                    <div className='img-cont'>
                        <a target='_blank' href='https://www.amazon.com/Helping-Parents-Practice-Making-Easier/dp/0976785439/ref=pd_sim_d_sccl_3_4/130-7688252-8811324?pd_rd_w=t95bi&content-id=amzn1.sym.95c9984b-e881-4eb8-9a85-bd9add50dfd7&pf_rd_p=95c9984b-e881-4eb8-9a85-bd9add50dfd7&pf_rd_r=K0NBQDVHNDNANW16KSC6&pd_rd_wg=8TMRN&pd_rd_r=e02dae11-69bf-456b-b06a-5428d2a88369&pd_rd_i=0976785439&psc=1#customerReviews' className='carousel-hover-overlay text'>Purchase</a>
                        <Image src={'/helpingparentspractice.jpg'} alt='Helping Parents Practice: Ideas for Making it Easier Book' className='resource-grid-image-2' width={200} height={400}/>
                    </div>
                </div>
            </div>
            <Fader />
        </>
    )
}