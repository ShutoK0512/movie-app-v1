function HeaderIcon({ Icon, title}) {
    return (
        <div>
            <Icon className="text-6xl" />
            <p>{title}</p>
        </div>
    )
}

export default HeaderIcon
