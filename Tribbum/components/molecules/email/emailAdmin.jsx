import "@/styles/emailStyle.css";
// style={{}} for inline styles on pure css
const EmailAdmin = ({ formData }) => {
  return (
    <div className="table-container">
      <p className="table-title">Detalles del contacto</p>
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
            <td className="td1">Teléfono:</td>
            <td className="td1">{formData.phone}</td>
          </tr>

          <tr>
            <td className="td1">Sitio web:</td>
            <td className="td1">{formData.web}</td>
          </tr>

          <tr>
            <td className="td1">Mensaje:</td>
            <td className="td1">{formData.message}</td>
          </tr>

          <tr>
            <td className="td1">Prefiero Email:</td>
            <td className="td1">{formData.prefEmail ? "Sí" : "No"}</td>
          </tr>

          <tr>
            <td className="td1">Prefiero Teléfono:</td>
            <td className="td1">{formData.prefPhone ? "Sí" : "No"}</td>
          </tr>

          <tr>
            <td className="td1">Reunión con</td>
            <td className="td1">{formData.partner_short}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default EmailAdmin;
