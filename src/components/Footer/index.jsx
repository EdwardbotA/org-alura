import "./Footer.css";

const Footer = () => {
  return (
    <footer
      className="footer"
      style={{ backgroundImage: "url(/img/footer.png)" }}
    >
      <div className="redes">
        <a href="https://www.linkedin.com/in/edward-botello/">
          <img src="/img/facebook.png" alt="linkedIn" />
        </a>
        <a href="https://github.com/EdwardbotA">
          <img src="/img/twitter.png" alt="GitHub" />
        </a>
        <a href="https://www.instagram.com/ebotelloaroca00/">
          <img src="/img/instagram.png" alt="Instagram" />
        </a>
      </div>
      <img src="/img/Logo.png" alt="Org" />
      <strong>Desarrollado por Edward y creado por Alura </strong>
    </footer>
  );
};

export default Footer;
