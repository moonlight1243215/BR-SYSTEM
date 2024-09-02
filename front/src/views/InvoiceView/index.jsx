import styles from "./index.module.scss";
import { FaXmark, FaArrowRight, FaFilePen, FaMoneyBillTransfer } from "react-icons/fa6";
import { infoArray } from '../../data/index';
import { useState } from "react";
import { Link } from "react-router-dom";

const MainView = (props) => {
  const [data, setData] = useState(infoArray);
  const [currentId, setCurrentId] = useState(null);
  const [formData, setFormData] = useState({
    startSurname: "", 
    endSurname: "", 
    company: "", 
    mailDate: "", 
    mailHour: "", 
    mailId: "", 
    date: "", 
    place: "", 
    position: "", 
    type: "", 
    realHour: "", 
    clientHour: "", 
    jobSurname: "", 
    kilometers: "", 
    kilometerInvoices: "", 
    route: "", 
    warning: "", 
    trainNumber: '', 
    rSeven: "", 
    mechanic: "", 
    addedCoast: "", 
    invoice: '',
    etapStatus: "done", 
    invoiceStatus: 'progres', 
    billStatus: 'progres', 
    kilometerStatus: 'progres'
  });

  // State for filters
  const [startSurnameFilter, setStartSurnameFilter] = useState("");
  const [endSurnameFilter, setEndSurnameFilter] = useState("");
  const [companyFilter, setCompanyFilter] = useState("");
  const [mailDateFilter, setMailDateFilter] = useState("");
  const [mailHourFilter, setMailHourFilter] = useState("");
  const [mailIdFilter, setMailIdFilter] = useState("");
  const [dateFilter, setDateFilter] = useState("");
  const [placeFilter, setPlaceFilter] = useState("");
  const [positionFilter, setPositionFilter] = useState("");
  const [typeFilter, setTypeFilter] = useState("");
  const [realHourFilter, setRealHourFilter] = useState("");
  const [clientHourFilter, setClientHourFilter] = useState("");
  const [jobSurnameFilter, setJobSurnameFilter] = useState("");
  const [kilometersFilter, setKilometersFilter] = useState("");
  const [kilometerInvoicesFilter, setKilometerInvoicesFilter] = useState("");
  const [routeFilter, setRouteFilter] = useState("");
  const [warningFilter, setWarningFilter] = useState("");
  const [trainNumberFilter, setTrainNumberFilter] = useState("");
  const [rSevenFilter, setRSevenFilter] = useState("");
  const [mechanicFilter, setMechanicFilter] = useState("");
  const [addedCoastFilter, setAddedCoastFilter] = useState("");
  const [invoiceFilter, setinvoiceFilter] = useState('');

  const billButton = (id) => { 
    const updatedData = data.map(item => {
      if (item.id === id) {
        return { ...item, billStatus: item.billStatus === "progres" ? "done" : item.billStatus };
      }
      return item;
    });
    setData(updatedData);
  }
  
  const kilometerButton = (id) => { 
    const updatedData = data.map(item => {
      if (item.id === id) {
        return { ...item, kilometerStatus: item.kilometerStatus === "progres" ? "done" : item.kilometerStatus };
      }
      return item;
    });
    setData(updatedData);
  }
  

  const invoiceButton = (id) => { //change value of invoice to "done" after clicking in button
    const updatedData = data.map(item => {
      if (item.id === id) {
        return { ...item, invoiceStatus: "done" };
      }
      return item;
    });

    setData(updatedData);
  }

  const editButton = (id) => {
    const itemToEdit = data.find(item => item.id === id);
    if (itemToEdit) {
      setCurrentId(id);
      setFormData(itemToEdit);
    }
  }

  const updateButton = () => {
    if (currentId !== null) { //work when the user want to edit element
      const updatedData = data.map(item => {
        if(item.id === currentId) {
          return { ...item, ...formData };
        }
        return item;
      });
      setData(updatedData);
    } else {  //work when the user want to create new element
      const newId = data.length > 0 ? Math.max(...data.map(item => item.id)) + 1 : 1; //adding new id with own number
      const newRecord = { id: newId, ...formData }; 
      setData([...data, newRecord]);
    }

    setCurrentId(null);
    setFormData({
      startSurname: "", 
      endSurname: "", 
      company: "", 
      mailDate: "", 
      mailHour: "", 
      mailId: "", 
      date: "", 
      place: "", 
      position: "", 
      type: "", 
      realHour: "", 
      clientHour: "", 
      jobSurname: "", 
      kilometers: "", 
      kilometerInvoices: "", 
      route: "", 
      warning: "", 
      trainNumber: '', 
      rSeven: "", 
      mechanic: "", 
      addedCoast: "", 
      invoice: '',
      etapStatus: "done", 
      invoiceStatus: 'progres', 
      billStatus: 'progres', 
      kilometerStatus: 'progres'
    });
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  }

  // Update filters for all properties
  const filteredData = data
    .filter(e => e.etapStatus === "done")
    .filter(e => startSurnameFilter === "" || e.startSurname.toLowerCase().includes(startSurnameFilter.toLowerCase()))
    .filter(e => endSurnameFilter === "" || e.endSurname.toLowerCase().includes(endSurnameFilter.toLowerCase()))
    .filter(e => companyFilter === "" || e.company.toLowerCase().includes(companyFilter.toLowerCase()))
    .filter(e => mailDateFilter === "" || e.mailDate.toLowerCase().includes(mailDateFilter.toLowerCase()))
    .filter(e => mailHourFilter === "" || e.mailHour.toLowerCase().includes(mailHourFilter.toLowerCase()))
    .filter(e => mailIdFilter === "" || e.mailId.toLowerCase().includes(mailIdFilter.toLowerCase()))
    .filter(e => dateFilter === "" || e.date.toLowerCase().includes(dateFilter.toLowerCase()))
    .filter(e => placeFilter === "" || e.place.toLowerCase().includes(placeFilter.toLowerCase()))
    .filter(e => positionFilter === "" || e.position.toLowerCase().includes(positionFilter.toLowerCase()))
    .filter(e => typeFilter === "" || e.type.toLowerCase().includes(typeFilter.toLowerCase()))
    .filter(e => realHourFilter === "" || e.realHour.toLowerCase().includes(realHourFilter.toLowerCase()))
    .filter(e => clientHourFilter === "" || e.clientHour.toLowerCase().includes(clientHourFilter.toLowerCase()))
    .filter(e => jobSurnameFilter === "" || e.jobSurname.toLowerCase().includes(jobSurnameFilter.toLowerCase()))
    .filter(e => kilometersFilter === "" || e.kilometers.toLowerCase().includes(kilometersFilter.toLowerCase()))
    .filter(e => kilometerInvoicesFilter === "" || e.kilometerInvoices.toLowerCase().includes(kilometerInvoicesFilter.toLowerCase()))
    .filter(e => routeFilter === "" || e.route.toLowerCase().includes(routeFilter.toLowerCase()))
    .filter(e => warningFilter === "" || e.warning.toLowerCase().includes(warningFilter.toLowerCase()))
    .filter(e => trainNumberFilter === "" || e.trainNumber.toLowerCase().includes(trainNumberFilter.toLowerCase()))
    .filter(e => rSevenFilter === "" || e.rSeven.toLowerCase().includes(rSevenFilter.toLowerCase()))
    .filter(e => mechanicFilter === "" || e.mechanic.toLowerCase().includes(mechanicFilter.toLowerCase()))
    .filter(e => addedCoastFilter === "" || e.addedCoast.toLowerCase().includes(addedCoastFilter.toLowerCase()))
    .filter(e => invoiceFilter === "" || e.invoice.toLowerCase().includes(invoiceFilter.toLowerCase()));

    const exampleMap = filteredData.map((e, key) => (
      <div
        className={`${styles.element} ${e.invoiceStatus === "done" ? styles.blueBackground : ""}`}
        key={key}
      >
        <div className={styles.data}>
          <p className={styles.id}>{e.id}</p>
          <p className={styles.startSurname}>{e.startSurname}</p>
          <p className={styles.endSurname}>{e.endSurname}</p>
          <p className={styles.company}>{e.company}</p>
          <p className={styles.mailDate}>{e.mailDate}</p>
          <p className={styles.mailHour}>{e.mailHour}</p>
          <p className={styles.mailId}>{e.mailId}</p>
          <p className={styles.realizationDate}>{e.date}</p>
          <p className={styles.place}>{e.place}</p>
          <p className={styles.position}>{e.position}</p>
          <p className={`${styles.workerHour} ${e.billStatus === "done" ? styles.blueFont : ""}`}>{e.type}</p>
          <p className={styles.workHour}>{e.realHour}</p>
          <p className={styles.clientHour}>{e.clientHour}</p>
          <p className={styles.jobSurname}>{e.jobSurname}</p>
          <p className={`${styles.workerKilometer} ${e.kilometerStatus === "done" ? styles.blueFont : ""}`}>{e.kilometers}</p>
          <p className={styles.clientKilometer}>{e.kilometerInvoices}</p>
          <p className={styles.route}>{e.route}</p>
          <p className={styles.warning}>{e.warning}</p>
          <p className={styles.trainNumber}>{e.trainNumber}</p>
          <p className={styles.rSeven}>{e.rSeven}</p>
          <p className={styles.mechanic}>{e.mechanic}</p>
          <p className={styles.addedCoast}>{e.addedCoast}</p>
          <p className={styles.invoice}>{e.invoice}</p>
        </div>
        <div className={styles.function}>
          <div className={styles.button} onClick={() => editButton(e.id)}>
            <FaFilePen />
          </div>
          <div className={styles.button} onClick={() => invoiceButton(e.id)}>
            <FaArrowRight />
          </div>
          <div className={styles.button} onClick={() => billButton(e.id)}>
            <FaMoneyBillTransfer  />            
          </div>
          <div className={styles.button} onClick={() => kilometerButton(e.id)}>
            <FaMoneyBillTransfer  />     
          </div>
        </div>
      </div>
    ));

  return (
    <div>
      <div className={styles.menuBox}>
        <div className={styles.linkBox}>
          <Link className={styles.link} to='/'>Dyspozytura</Link>
          <Link className={styles.link} to='/biuro'>Biuro</Link>
          <Link className={styles.link} to="/login">Login</Link>
        </div>
      </div>
      <div className={styles.elementFixed}>
        <div className={styles.data}>
          <input className={`${styles.id} ${styles.inputsTwo}`} />
          <input className={`${styles.startSurname} ${styles.inputsTwo}`} value={startSurnameFilter} onChange={(e) => setStartSurnameFilter(e.target.value)} placeholder="Zaczynający" />
          <input className={`${styles.endSurname} ${styles.inputsTwo}`} value={endSurnameFilter} onChange={(e) => setEndSurnameFilter(e.target.value)} placeholder="Kończący"/>
          <input className={`${styles.company} ${styles.inputsTwo}`} value={companyFilter} onChange={(e) => setCompanyFilter(e.target.value)} placeholder="Klient"  />
          <input className={`${styles.mailDate} ${styles.inputsTwo}`} value={mailDateFilter} onChange={(e) => setMailDateFilter(e.target.value)} placeholder="Data maila"  />
          <input className={`${styles.mailHour} ${styles.inputsTwo}`} value={mailHourFilter} onChange={(e) => setMailHourFilter(e.target.value)} placeholder="godzina maila" />
          <input className={`${styles.mailId} ${styles.inputsTwo}`} value={mailIdFilter} onChange={(e) => setMailIdFilter(e.target.value)} placeholder="id maila" />
          <input className={`${styles.realizationDate} ${styles.inputsTwo}`} value={dateFilter} onChange={(e) => setDateFilter(e.target.value)} placeholder="data zlecenia" />
          <input className={`${styles.place} ${styles.inputsTwo}`} value={placeFilter} onChange={(e) => setPlaceFilter(e.target.value)} placeholder="miejsce zlecenia" />
          <input className={`${styles.position} ${styles.inputsTwo}`} value={positionFilter} onChange={(e) => setPositionFilter(e.target.value)} placeholder="stanowisko" />
          <input className={`${styles.workerHour} ${styles.inputsTwo}`} value={typeFilter} onChange={(e) => setTypeFilter(e.target.value)} placeholder="H" />
          <input className={`${styles.workHour} ${styles.inputsTwo}`} value={realHourFilter} onChange={(e) => setRealHourFilter(e.target.value)} placeholder="prawdziwe godziny" />
          <input className={`${styles.clientHour} ${styles.inputsTwo}`} value={clientHourFilter} onChange={(e) => setClientHourFilter(e.target.value)} placeholder="H" />
          <input className={`${styles.inputsTwo} ${styles.jobSurname}`} value={jobSurnameFilter} onChange={(e) => setJobSurnameFilter(e.target.value)} placeholder="wykonujący" />
          <input className={`${styles.workerKilometer} ${styles.inputsTwo}`} value={kilometersFilter} onChange={(e) => setKilometersFilter(e.target.value)} placeholder="km" />
          <input className={`${styles.clientKilometer} ${styles.inputsTwo}`} value={kilometerInvoicesFilter} onChange={(e) => setKilometerInvoicesFilter(e.target.value)} placeholder="km" />
          <input className={`${styles.route} ${styles.inputsTwo}`} value={routeFilter} onChange={(e) => setRouteFilter(e.target.value)} placeholder="trasa" />
          <input className={`${styles.warning} ${styles.inputsTwo}`} value={warningFilter} onChange={(e) => setWarningFilter(e.target.value)} placeholder="uwagi" />
          <input className={`${styles.trainNumber} ${styles.inputsTwo}`} value={trainNumberFilter} onChange={(e) => setTrainNumberFilter(e.target.value)} placeholder="nr. pociągu" />
          <input className={`${styles.rSeven} ${styles.inputsTwo}`} value={rSevenFilter} onChange={(e) => setRSevenFilter(e.target.value)} placeholder="R7" />
          <input className={`${styles.mechanic} ${styles.inputsTwo}`} value={mechanicFilter} onChange={(e) => setMechanicFilter(e.target.value)} placeholder="maszynista" />
          <input className={`${styles.addedCoast} ${styles.inputsTwo}`} value={addedCoastFilter} onChange={(e) => setAddedCoastFilter(e.target.value)} placeholder="dodatkowe koszty" />
          <input className={`${styles.invoice} ${styles.inputsTwo}`} value={invoiceFilter} onChange={(e) => setinvoiceFilter(e.target.value)} placeholder="faktura" /> 
        </div>
        <div className={styles.function}></div>
      </div>
      <div className={styles.contentBox}>
      {exampleMap}
      </div>
      <div className={styles.footerBox}>
        <input 
          className={styles.inputs}
          name="startSurname" 
          value={formData.startSurname} 
          onChange={handleInputChange} 
          placeholder="Zaczynający" 
        />
        <input 
          className={styles.inputs}
          name="endSurname" 
          value={formData.endSurname} 
          onChange={handleInputChange} 
          placeholder="Kończący" 
        />
        <input 
          className={styles.inputs}
          name="company" 
          value={formData.company} 
          onChange={handleInputChange} 
          placeholder="Klient" 
        />
        <input 
          className={styles.inputs}
          name="mailDate" 
          value={formData.mailDate} 
          onChange={handleInputChange} 
          placeholder="Mail data" 
        />
        <input 
          className={styles.inputs}
          name="mailHour" 
          value={formData.mailHour} 
          onChange={handleInputChange} 
          placeholder="mail czas" 
        />
        <input 
          className={styles.inputs}
          name="mailId" 
          value={formData.mailId} 
          onChange={handleInputChange} 
          placeholder="Mail id" 
        />
        <input 
          className={styles.inputs}
          name="date" 
          value={formData.date} 
          onChange={handleInputChange} 
          placeholder="data" 
        />
        <input 
          className={styles.inputs}
          name="place" 
          value={formData.place} 
          onChange={handleInputChange} 
          placeholder="miejsce" 
        />
        <input 
          className={styles.inputs}
          name="position" 
          value={formData.position} 
          onChange={handleInputChange} 
          placeholder="stanowisko" 
        />
        <input 
          className={styles.inputs}
          name="type" 
          value={formData.type} 
          onChange={handleInputChange} 
          placeholder="rodzaj/czas" 
        />
        <input 
          className={styles.inputs}
          name="realHour" 
          value={formData.realHour} 
          onChange={handleInputChange} 
          placeholder="realny czas" 
        />
        <input 
          className={styles.inputs}
          name="clientHour" 
          value={formData.clientHour} 
          onChange={handleInputChange} 
          placeholder="obciążenie" 
        />
        <input 
          className={styles.inputs}
          name="jobSurname" 
          value={formData.jobSurname} 
          onChange={handleInputChange} 
          placeholder="pracownik" 
        />
        <input 
          className={styles.inputs}
          name="kilometers" 
          value={formData.kilometers} 
          onChange={handleInputChange} 
          placeholder="KM pracownik" 
        />
        <input 
          className={styles.inputs}
          name="kilometerInvoices" 
          value={formData.kilometerInvoices} 
          onChange={handleInputChange} 
          placeholder="KM klienta" 
        />
        <input 
          className={styles.inputs}
          name="route" 
          value={formData.route} 
          onChange={handleInputChange} 
          placeholder="trasa" 
        />
        <input 
          className={styles.inputs}
          name="warning" 
          value={formData.warning} 
          onChange={handleInputChange} 
          placeholder="uwagi" 
        />
        <input 
          className={styles.inputs}
          name="trainNumber" 
          value={formData.trainNumber} 
          onChange={handleInputChange} 
          placeholder="numer poc." 
        />
        <input 
          className={styles.inputs}
          name="rSeven" 
          value={formData.rSeven} 
          onChange={handleInputChange} 
          placeholder="R7" 
        />
        <input 
          className={styles.inputs}
          name="mechanic" 
          value={formData.mechanic} 
          onChange={handleInputChange} 
          placeholder="maszynista" 
        />
        <input 
          className={styles.inputs}
          name="addedCoast" 
          value={formData.addedCoast} 
          onChange={handleInputChange} 
          placeholder="dodatkowy koszt" 
        />
        <input 
          className={styles.inputs}
          name="invoice"
          value={formData.invoice}
          onChange={handleInputChange}
          placeholder="faktura"
          />
        <button onClick={updateButton} className={styles.confirmButton}>uaktualnij</button>
      </div>
    </div>
  )
};

export default MainView;
