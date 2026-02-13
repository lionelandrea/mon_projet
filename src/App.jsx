import TeamMember from "./components/TeamMember";
import "./App.css";
import SignupForm from "./components/SignupForm";
import { useState } from "react";

function App() {
  const [courses, setCourses] = useState([
    { id: 1, nom: "Lait", fait: false },
    { id: 2, nom: "Pain", fait: false },
    { id: 3, nom: "Oeufs", fait: true },
  ]);

  const ajouterCourse = () => {
    const newCourse = {
      id: courses.length + 1, 
      nom: "orange",
      fait: true,
    };

    setCourses([...courses, newCourse]);
  };

  const [compteur, setCompteur] = useState(0);
  const [coeur, setCoeur] = useState(false);

  const direBonjour = () => {
    setCompteur(compteur + 1);
    console.log({ compteur });
  };

  const mettreUnLike = () => {
    if (coeur) {
      setCoeur(false);
    } else {
      setCoeur(true);
    }
  };

  return (
    <div className="container">

      <SignupForm />

      <h1>{compteur}</h1>
      <button onClick={direBonjour}>cliquez</button>

      <h2>{coeur}</h2>
      <button onClick={mettreUnLike}>{coeur ? "❤" : "♡"}</button>

      <h1>Liste des courses</h1>
      <button onClick={ajouterCourse}>Ajouter une course</button>
      <ul>
        {courses.map((course) => (
          <li key={course.id}>
            {course.nom} - {course.fait ? "Fait" : "Pas fait"}
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
