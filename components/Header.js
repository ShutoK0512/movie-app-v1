import Image from 'next/image'
import HeaderIcon from './HeaderIcon'
import {FaHome, FaUser, FaPhone, FaInfo} from 'react-icons/fa'

function Header() {
    return (
        <div className="bg-gray-700 text-gray-200 flex flex-col items-center p-6 select-none sm:flex-row justify-between" >
            <div className="flex">
                <HeaderIcon Icon={FaHome} title="HOME" />
                <HeaderIcon Icon={FaUser} title="ACCOUNT" />
                <HeaderIcon Icon={FaPhone} title="CONTACT" />
                <HeaderIcon Icon={FaInfo} title="ABOUT" />
            </div>
            <Image
                src="https://upload.wikimedia.org/wikipedia/commons/6/69/IMDB_Logo_2016.svg"
                width={100}
                height={100}
                className="cursor-pointer active:brightness-110"

             />
        </div>
    )
}

export default Header
