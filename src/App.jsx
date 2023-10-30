import Map from './components/Map/Map';
import TableInfo from './components/TableInfo/TableInfo';
import useInfo from './hooks/useInfo.js';

function App() {
  const { data, handleOnChange, value, valid } = useInfo();

  const typeCC = (value) => {
    let src = '';
    if (value === '4') src = './visa.jpg';
    if (value === '5') src = './mastercard.png';
    return src;
  };

  return (
    <>
      <h1>CC Validator</h1>
      <div className="input-container">
        <div className="wrapper-input">
          {value && <img className="type-cc" src={typeCC(value)} />}
          <input
            type="text"
            className="input-validate"
            maxLength={16}
            onChange={handleOnChange}
          />
          {valid && <img className="isvalid" src={valid} />}
        </div>
      </div>
      {data && <TableInfo data={data} />}
      {data && <Map lat={data.country.latitude} lng={data.country.longitude} />}
    </>
  );
}

export default App;
