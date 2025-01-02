import React from 'react'
import { useDarkThemeContext } from '../contextApi/DarkTheme'

const AboutUs = () => {
    const {isDark}=useDarkThemeContext()
    return (
        <>
        <h1 className='absolute top-0 text-center text-2xl font-bold p-2  font-light font-sans '>About Us</h1>
        
        <div className='aboutUsMainDiv'   >
            
            <p className={isDark==="false"?"text-black aboutUsMainParagraphs":"text-white aboutUsMainParagraphs"} >Welcome to mateBatu.com, the ultimate platform for students of DR.Babasaheb Ambedkar Technological University (DR.BATU) connecting over 70+ colleges into one vibrant digital community!

                Our mission is to foster collaboration, communication, and engagement among students, creating a hub for all things student life. Whether you want to chat randomly with peers, stay updated with the latest news, or participate in exciting events, we’ve got you covered!</p>
                <footer className='aboutUsFooter'  >"Developed by <a href='https://www.linkedin.com/in/siddhesh-thorat-379224295/'  className='aboutUsFooterName'  >Siddhesh</a> , an IT student of DR.BATU"</footer>
        </div>
        </>
    )
}

export default AboutUs
