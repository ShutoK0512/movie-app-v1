import Image from 'next/image'
import HeaderIcon from './HeaderIcon'
import {FaHome, FaUser, FaPhone, FaInfo} from 'react-icons/fa'

function Header() {
    return (
        <div>
            <div className="">
                <HeaderIcon Icon={FaHome} title="HOME" />
                <HeaderIcon Icon={FaUser} title="ACCOUNT" />
                <HeaderIcon Icon={FaPhone} title="CONTACT" />
                <HeaderIcon Icon={FaInfo} title="ABOUT" />
            </div>
            <Image
                src="https://upload.wikimedia.org/wikipedia/commons/6/69/IMDB_Logo_2016.svg"
                width={100}
                height={100}
             />
        </div>
    )
}

export default Header
