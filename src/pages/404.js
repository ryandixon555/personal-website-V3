import 'bootstrap/dist/css/bootstrap.css';
// Put any other imports below so that CSS from your
// components takes precedence over default styles.
import React from 'react'

// Components
import MyNavBar from '../components/NavBar'

// Elements
import { Title} from '../elements/Titles'
import { Background } from '../elements/Background'

export default function PageNotFound() {
    return (
        <div>
        <MyNavBar/>
            <Background>
                <Title>This is not the page you're looking for</Title>
            </Background>
        </div>
    )
}

