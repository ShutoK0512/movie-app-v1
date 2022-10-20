function HeaderIcon({ Icon, title}) {
    return (
        <div className="mx-4 flex flex-col cursor-pointer hover:text-white active:text-red-400 lg:mx-6">
            <Icon className="text-6xl" />
            <p className="my-2">{title}</p>
        </div>
    )
}

export default HeaderIcon
