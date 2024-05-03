import slide1 from '../assets/images/london.png'
import slide2 from '../assets/images/losAngeles.jpg'
import slide3 from '../assets/images/moscow.jpg'
import slide4 from '../assets/images/berlin.jpg'
import slide5 from '../assets/images/dubai.jpg'
import slide6 from '../assets/images/lasVegas.jpg'

export default {
    data() {
        return {
            slides: [
                {image: slide1, title: 'London'},
                {image: slide2, title: 'Los Angeles'},
                {image: slide3, title: 'Moscow'},
                {image: slide4, title: 'Berlin'},
                {image: slide5, title: 'Dubai'},
                {image: slide6, title: 'Las Vegas'}
            ],
        }
    }
}