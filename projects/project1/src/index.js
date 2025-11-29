// import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals



class Etudiant {
  constructor(nom, prenom, filiere, age, phone, email) {
    this.nom = nom;
    this.prenom = prenom;
    this.filiere = filiere;
    this.age = age;
    this.phone = phone;
    this.email = email;
  }

}


let STR1 = new Etudiant("Rami", "Yassine", "Informatique", 22, "0600000001", "rami@gmail.com");
let STR2 =  new Etudiant("Fatihi", "Karim", "Biologie", 24, "0600000002", "fatihi@gmail.com");
let STR3 =  new Etudiant("Sara", "Mouad", "Mathématiques", 21, "0600000003", "sara@gmail.com");

let etudients = [STR1,STR2,STR3];
var ListeEtudiants = function () {
  return (
    <table border="1" >
      <thead>
        <tr>
          <th>Nom</th>
          <th>Prenom</th>
          <th>Filiere</th>
          <th>Age</th>
          <th>Telephone</th>
          <th>Email</th>
        </tr>
      </thead>

      <tbody>
        {etudients.map((etu) => {return <tr>
            <td>{etu.nom}</td>
            <td>{etu.prenom}</td>
            <td>{etu.filiere}</td>
            <td>{etu.age}</td>
            <td>{etu.phone}</td>
            <td>{etu.email}</td>
          </tr>       
          })}
      </tbody>
    </table>
  );

}
root.render(
  <ListeEtudiants />
)
reportWebVitals();
