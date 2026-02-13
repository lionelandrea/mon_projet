import { useState } from "react";

function SignupForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  
  const [errorEmail, setErrorEmail] = useState("");
  const [errorPassword, setErrorPassword] = useState("");
  const [success, setSuccess] = useState("");

  const validate = () => {
    let ok = true;

  
    setErrorEmail("");
    setErrorPassword("");
    setSuccess("");

    
    if (!email.trim()) {
      setErrorEmail("Email obligatoire.");
      ok = false;
    } else if (!email.includes("@") || !email.includes(".")) {
      setErrorEmail("Email invalide.");
      ok = false;
    }

    
    if (!password.trim()) {
      setErrorPassword("Mot de passe obligatoire.");
      ok = false;
    } else if (password.length < 6) {
      setErrorPassword("Mot de passe trop court (min 6 caractères).");
      ok = false;
    }

    return ok;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validate()) return;

    
    console.log("Envoyé :", { email, passwordLength: password.length });

    setSuccess("Inscription envoyée ");
    setEmail("");
    setPassword("");
  };

  return (
    <div className="signup-container">
      <h2>Formulaire d'inscription</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Entrez votre email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {errorEmail && <p className="error">{errorEmail}</p>}

        <input
          type="password"
          placeholder="Entrez votre mot de passe"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {errorPassword && <p className="error">{errorPassword}</p>}

        <button type="submit">S'inscrire</button>

        {success && <p className="success">{success}</p>}
      </form>

      
      <p>Votre email est : {email}</p>
    </div>
  );
}

export default SignupForm;
