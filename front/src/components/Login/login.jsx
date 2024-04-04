import "./login.css"

export default function Login({ onLoginSuccess }) {
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());

    const LINKS = {
      Login: "http://127.0.0.1:5000/login",
    };

    let url = LINKS["Login"];

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const responseBody = await response.json();

      if (response.ok) {
        console.log(responseBody.message);
        onLoginSuccess(responseBody.JWT);
      } else {
        console.log(responseBody.message);
      }
    } catch (error) {
      console.error("Error al realizar la solicitud", error);
    }
    e.target.reset();
  };

  const Form = () => {
    return (
      <form onSubmit={handleSubmit}>
        <label htmlFor="cuenta">Titular:</label>
        <input type="text" id="titular" name="titular" required />

        <label htmlFor="monto">Contraseña:</label>
        <input type="text" id="password" name="password" required />

        <button type="submit">Ingresar</button>
      </form>
    );
  };
  return (
    <section>
      <h2>Iniciar sesión</h2>
      <menu className="parent-container">{Form()}</menu>
    </section>
  );
}
