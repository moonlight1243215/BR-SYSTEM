import styles from "./index.module.scss";
import { FaXmark, FaArrowRight, FaFilePen } from "react-icons/fa6";
import { infoArray } from '../../data/index';
import { useState } from "react";
import { Link } from "react-router-dom";

const MainView = (props) => {
  const [data, setData] = useState(infoArray);
  const [currentId, setCurrentId] = useState(null);
  const [filter, setFilter] = useState("");
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
    trainNumber: "",
    rSeven: "",
    mechanic: "",
    addedCoast: "",
    etap: "progres",
    bill: 'progres',
    invoice: 'progres',
  });

  const statusButton = (id) => {
    const updateData = data.map(item => { 
      if(item.id === id) {
        return { ...item, etap: 'done' };
      }
      return item;
    });

    setData(updateData);
  }

  const deleteButton = (id) => {
    const updatedData = data.filter(item => item.id !== id);
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
    if (currentId !== null) {
      // Aktualizacja istniejącego rekordu
      const updatedData = data.map(item => {
        if(item.id === currentId) {
          return { ...item, ...formData };
        }
        return item;
      });
      setData(updatedData);
    } else {
      // Dodanie nowego rekordu
      const newId = data.length > 0 ? Math.max(...data.map(item => item.id)) + 1 : 1;
      const newRecord = { id: newId, ...formData };
      setData([...data, newRecord]);
    }

    // Zresetowanie stanu
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
      trainNumber: "",
      rSeven: "",
      mechanic: "",
      addedCoast: "",
    });
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  }

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  }

  const filteredData = data
    .filter(e => e.etap === "progres")
    .filter(e => e.jobSurname.toLowerCase().includes(filter.toLowerCase())) //sorting by text in input
    .sort((a, b) => a.jobSurname.localeCompare(b.jobSurname)); //sorting alphabetic by job surname

  const exampleMap = filteredData.map((e, key) => (
    <div className={styles.element} key={key}>
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
        <p className={styles.workerHour}>{e.type}</p>
        <p className={styles.workHour}>{e.realHour}</p>
        <p className={styles.clientHour}>{e.clientHour}</p>
        <p className={styles.jobSurname}>{e.jobSurname}</p>
        <p className={styles.workerKilometer}>{e.kilometers}</p>
        <p className={styles.clientKilometer}>{e.kilometerInvoices}</p>
        <p className={styles.route}>{e.route}</p>
        <p className={styles.warning}>{e.warning}</p>
        <p className={styles.trainNumber}>{e.trainNumber}</p>
        <p className={styles.rSeven}>{e.rSeven}</p>
        <p className={styles.mechanic}>{e.mechanic}</p>
        <p className={styles.addedCoast}>{e.addedCoast}</p>
      </div>
      <div className={styles.function}>
        <div className={styles.button}>
          <FaFilePen onClick={() => editButton(e.id)} />
        </div>
        <div className={styles.button}>
          <FaArrowRight onClick={() => statusButton(e.id)} />
        </div>
        <div className={styles.button}>
          <FaXmark onClick={() => deleteButton(e.id)} />            
        </div>
      </div>
    </div>
  ))

  return (
    <div>
      <div className={styles.menuBox}>
        <div className={styles.linkBox}>
          <Link className={styles.link} to='/'>Dyspozytura</Link>
          <Link className={styles.link} to='/biuro'>Biuro</Link>
        </div>
        <div className={styles.filterSort}>
          <input 
            className={styles.inputs}
            type="text"
            placeholder="Filtruj nazwisko"
            value={filter}
            onChange={handleFilterChange}
          />
        </div>
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
          placeholder="Start Surname" 
        />
        <input 
          className={styles.inputs}
          name="endSurname" 
          value={formData.endSurname} 
          onChange={handleInputChange} 
          placeholder="End Surname" 
        />
        <input 
          className={styles.inputs}
          name="company" 
          value={formData.company} 
          onChange={handleInputChange} 
          placeholder="Company" 
        />
        <input 
          className={styles.inputs}
          name="mailDate" 
          value={formData.mailDate} 
          onChange={handleInputChange} 
          placeholder="Mail Date" 
        />
        <input 
          className={styles.inputs}
          name="mailHour" 
          value={formData.mailHour} 
          onChange={handleInputChange} 
          placeholder="Mail Hour" 
        />
        <input 
          className={styles.inputs}
          name="mailId" 
          value={formData.mailId} 
          onChange={handleInputChange} 
          placeholder="Mail ID" 
        />
        <input 
          className={styles.inputs}
          name="date" 
          value={formData.date} 
          onChange={handleInputChange} 
          placeholder="Date" 
        />
        <input 
          className={styles.inputs}
          name="place" 
          value={formData.place} 
          onChange={handleInputChange} 
          placeholder="Place" 
        />
        <input 
          className={styles.inputs}
          name="position" 
          value={formData.position} 
          onChange={handleInputChange} 
          placeholder="Position" 
        />
        <input 
          className={styles.inputs}
          name="type" 
          value={formData.type} 
          onChange={handleInputChange} 
          placeholder="Type" 
        />
        <input 
          className={styles.inputs}
          name="realHour" 
          value={formData.realHour} 
          onChange={handleInputChange} 
          placeholder="Real Hour" 
        />
        <input 
          className={styles.inputs}
          name="clientHour" 
          value={formData.clientHour} 
          onChange={handleInputChange} 
          placeholder="Client Hour" 
        />
        <input 
          className={styles.inputs}
          name="jobSurname" 
          value={formData.jobSurname} 
          onChange={handleInputChange} 
          placeholder="Job Surname" 
        />
        <input 
          className={styles.inputs}
          name="kilometers" 
          value={formData.kilometers} 
          onChange={handleInputChange} 
          placeholder="Kilometers" 
        />
        <input 
          className={styles.inputs}
          name="kilometerInvoices" 
          value={formData.kilometerInvoices} 
          onChange={handleInputChange} 
          placeholder="Kilometer Invoices" 
        />
        <input 
          className={styles.inputs}
          name="route" 
          value={formData.route} 
          onChange={handleInputChange} 
          placeholder="Route" 
        />
        <input 
          className={styles.inputs}
          name="warning" 
          value={formData.warning} 
          onChange={handleInputChange} 
          placeholder="Warning" 
        />
        <input 
          className={styles.inputs}
          name="trainNumber" 
          value={formData.trainNumber} 
          onChange={handleInputChange} 
          placeholder="Train Number" 
        />
        <input 
          className={styles.inputs}
          name="rSeven" 
          value={formData.rSeven} 
          onChange={handleInputChange} 
          placeholder="R Seven" 
        />
        <input 
          className={styles.inputs}
          name="mechanic" 
          value={formData.mechanic} 
          onChange={handleInputChange} 
          placeholder="Mechanic" 
        />
        <input 
          className={styles.inputs}
          name="addedCoast" 
          value={formData.addedCoast} 
          onChange={handleInputChange} 
          placeholder="Added Coast" 
        />
        <button onClick={updateButton} className={styles.confirmButton}>dodaj</button>
      </div>
    </div>
  )
};

export default MainView;
