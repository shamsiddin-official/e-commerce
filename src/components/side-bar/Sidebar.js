import React from "react";
import "./Sidebar.css";

function Sidebar({ show, setShow }) {
  return (
    <>
      {show && (
        <div onClick={() => setShow(false)} className="sidebar__dark"></div>
      )}

      <div className={`sidebar ${show? "active" : ""}`}>
        <h1>Uzum market</h1>
        <ul>
          <h2>Muddatli to'lov</h2>
            <h3> 💻 Elektronika</h3>
            <h3> 🔪 Maishiy tehnika </h3>
            <h3> 👕 Kiyim </h3>
            <h3> 👠 Poyafzallar  </h3>
            <h3> 📳 Aksessuarlar </h3>
            <h3> 💄 Go'zallik</h3>
            <h3> 👩‍⚕️ Salomatlik</h3>
            <h3> 🛒 Uy-ro'zg'or buyumi</h3>
            <h3> 🏡 Qurulish tamirlash </h3>
            <h3>🚗 Avto tovarlar</h3>
            <h3> 👕 Kiyim </h3>
            <h3> 📳 Aksessuarlar </h3>
            <h3> 👠 Poyafzallar  </h3>
            <h3> 🛒 Uy-ro'zg'or buyumi</h3>
            <h3> 👩‍⚕️ Salomatlik</h3>
        </ul>
      </div>
    </>
  );
}

export default Sidebar;
