import "@/styles/emailStyle.css";
// style={{}} for inline styles on pure css
const EmailAdmin = ({ formData }) => {
  return (
    <div className="table-container">
      <span className="table-title">Detalles del contacto</span>
      <table className="table1">
        <tbody>
          <tr>
            <td className="td1">Nombre:</td>
            <td className="td1">{formData.name}</td>
          </tr>

          <tr>
            <td className="td1">Email:</td>
            <td className="td1">{formData.email}</td>
          </tr>

          <tr>
            <td className="td1">Motivo:</td>
            <td className="td1">{formData.reason}</td>
          </tr>

          <tr>
            <td className="td1">Mensaje:</td>
            <td className="td1">{formData.message}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default EmailAdmin;
