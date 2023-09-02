
import Header from '../components/Header/Header'

import StartChatSection from '../components/StartChattingSection/StartChatSection'
import ImageAdvertisement from '../components/ImageAdvertisement/ImageAdvertisement'
import GetStartedSection from '../components/GetStartedSection/GetStartedSection'
import Footer from '../components/Footer/Footer'

const HomePage = () => {
    return (
        <div>
            <Header />
            <StartChatSection />
            <ImageAdvertisement />
            <GetStartedSection />
            <Footer />
        </div>
    )
}

export default HomePage