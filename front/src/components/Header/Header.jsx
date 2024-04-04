import "./Header.css"

function genRandomInt(max) {
  return Math.floor(Math.random() * (max +   1));
}

export default function Header() {

  return (
    <header>
      <h1>Paqueteria distribuidos</h1>
      <p>
        La paqueteria donde nos distribuimos tus paquetes
      </p>
    </header>
  );
}
