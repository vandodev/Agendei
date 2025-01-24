function Doctor(props) {
    const dt = new Date(props.booking_date + "T" + props.booking_hour);
    return (
        <tr>
            <td >{props.id_doctor}</td>
            <td >{props.doctor}</td>
            <td >{props.specialty}</td>
            <td >{props.telephone}</td>
            <td className="text-end">{props.icon}</td>
            <td className="text-end">
                <div className="d-inline me-3">
                    <button onClick={() => props.ClickEdit(props.id_appointment)} className="btn btn-sm btn-primary">
                        <i class="bi bi-pencil-square"></i>
                    </button>
                </div>
                <button className="btn btn-sm btn-danger">
                    <i class="bi bi-trash"></i>
                </button>
            </td>
        </tr>
    )
}
export default Doctor;