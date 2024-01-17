import Carousel from '@/components/Carousel';
import Fader from '@/components/Fader';
import StudioBannerParallax from '@/components/StudioBannerParallax';

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
            <Carousel title={parentResources.title as string} sheetMusic={parentResources.sheetMusic as Resource[]} />
            <Carousel title={parentResources.title as string} sheetMusic={parentResources.sheetMusic as Resource[]} />
            <Fader />
        </>
    )
}