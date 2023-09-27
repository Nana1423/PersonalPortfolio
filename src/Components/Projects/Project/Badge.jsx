export default function Badge({name, svg}) {
    return (
        <div className="badge" >
            {svg}
            <p className="badge-text">{name}</p>
        </div>
    )
}