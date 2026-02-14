import TeamMember from "./components/TeamMember";
import "./App.css";
import SignupForm from "./components/SignupForm";
import ProductTitle from "./components/ProductTitle";
import { useEffect, useState } from "react";

function App() {

  
  console.log("Rendu du composant");

  useEffect(() => {
    console.log("Démarrage unique");
  }, []);

  const [courses, setCourses] = useState([
    { id: 1, nom: "Lait", fait: false },
    { id: 2, nom: "Pain", fait: false },
    { id: 3, nom: "Oeufs", fait: true },
  ]);

  const [nouvelleCourse, setNouvelleCourse] = useState("");
  const [nouveauFait, setNouveauFait] = useState(false);

  const ajouterCourse = (e) => {
    e.preventDefault();

    if (nouvelleCourse.trim() === "") return;

    const newCourse = {
      id: Date.now(),
      nom: nouvelleCourse.trim(),
      fait: nouveauFait,
    };

    setCourses([...courses, newCourse]);

    setNouvelleCourse("");
    setNouveauFait(false);
  };

  const supprimerCourse = (id) => {
    setCourses(courses.filter((course) => course.id !== id));
  };

  const [compteur, setCompteur] = useState(0);
  const [coeur, setCoeur] = useState(false);

  const direBonjour = () => {
    setCompteur(compteur + 1);
    console.log({ compteur });
  };

  const mettreUnLike = () => {
    setCoeur(!coeur);
  };

  return (
    <div className="container">
      <SignupForm />

      <ProductTitle />


      <h1>{compteur}</h1>
      <button onClick={direBonjour}>cliquez</button>

      <h2>{coeur ? "Aimé" : "Pas aimé"}</h2>
      <button className={`like-btn ${coeur ? "liked" : ""}`} onClick={mettreUnLike}>
        {coeur ? "❤" : "♡"}
      </button>

      <h1>Liste des courses</h1>

      <form onSubmit={ajouterCourse} className="course-form">
        <input
          type="text"
          placeholder="Entrez une course (ex: Riz)"
          value={nouvelleCourse}
          onChange={(e) => setNouvelleCourse(e.target.value)}
        />

        <label className="check-row">
          <input
            type="checkbox"
            checked={nouveauFait}
            onChange={(e) => setNouveauFait(e.target.checked)}
          />
          Déjà fait
        </label>

        <button className="add-btn" type="submit">
          Ajouter
        </button>
      </form>

      <ul>
        {courses.map((course) => (
          <li key={course.id}>
            <div className="course-text">
              <strong>{course.nom}</strong>
              <span className={`badge ${course.fait ? "ok" : "no"}`}>
                {course.fait ? "Fait" : "Pas fait"}
              </span>
            </div>

            <div className="course-actions">
              <button className="delete-btn" onClick={() => supprimerCourse(course.id)}>
                Supprimer
              </button>
            </div>
          </li>
        ))}
      </ul>

      <div className="team-grid">
        <TeamMember
          nom="Sung-ji woo"
          metier="Remplacant"
          photo="https://www.senyu.fr/wp-content/uploads/2025/02/Solo-leveling-streaming.png"
        />

        <TeamMember
          nom="Monkedy luffy"
          metier="Vice capitaine"
          photo="https://preview.redd.it/0zzfol8eg1741.png?width=640&crop=smart&auto=webp&s=3c640efc8825d7f210ba7a3d8fa694b97613cab4"
        />

        <TeamMember
          nom="Goku"
          metier="Capitaine"
          photo="https://subculture.fr/wp-content/uploads/2025/11/Sangoku-franchit-un-nouveau-palier-avec-lUltra-Instinct-et-inquiete-meme-les-dieux-de-la-destruction-1200x655.jpg"
        />

        <TeamMember
          nom="Limule"
          metier="joueur"
          photo="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRd2QrCatdRVeGwzUCf35FyD8uprOl298GozQ&s"
        />
      </div>
    </div>
  );
}

export default App;
