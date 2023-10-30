import './TableInfo.css';

export default function TableInfo({ data }) {
  return (
    <div className="form-container">
      <table>
        <tbody>
          <tr>
            <td>Tipo de tarjeta: {data.brand}</td>
          </tr>
          <tr>
            <td>Banco: {data.issuer.name}</td>
          </tr>
          <tr>
            <td>Tipo: {data.type}</td>
          </tr>
          <tr>
            <td>Pais: {data.country.native}</td>
          </tr>
          <tr>
            <td>Capital: {data.country.capital}</td>
          </tr>
          <tr>
            <td>Tipo de moneda: {data.country.currency} </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
