function Doctor(props) {
    return (
        <tr>
            <td >{props.id_doctor}</td>
            <td >{props.doctor}</td>
            <td >{props.specialty}</td>
            <td >{props.telephone}</td>
            <td className="text-end">{props.icon}</td>
            <td className="text-end">
                <div className="d-inline me-3">
                    <button onClick={() => props.ClickEdit(props.id_doctor)} className="btn btn-sm btn-primary">
                        <i className="bi bi-pencil-square"></i>
                    </button>
                </div>
                <button  onClick={() => props.ClickDelete(props.id_doctor)} className="btn btn-sm btn-danger">
                    <i className="bi bi-trash"></i>
                </button>
            </td>
        </tr>
    )
}
export default Doctor;