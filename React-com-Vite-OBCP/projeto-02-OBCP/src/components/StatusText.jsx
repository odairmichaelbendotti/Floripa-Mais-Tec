const status = false;

export const StatusText = () => {
    return (
        <h3 style={{
            color: status ? '#FF5' : '#CC6f88',
        }}>
            Current status {status ? "ON" : "OFF"}
        </h3>
    )
}