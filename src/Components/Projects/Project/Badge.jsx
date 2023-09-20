export default function Badge({name, svg, backgroundColor}) {
    return (
        <div className="badge" style={{ backgroundColor: backgroundColor }}>
            {svg}
            <p>{name}</p>
        </div>
    )
}