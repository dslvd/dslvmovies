const Footer = () => {
  return (
    <div className="py-2 text-center">
      <footer
        className="text-white sticky top-[100vh] pt-4 pb-4"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
      >
        <p>
          Made with ❤️ by{" "}
          <a
            className="font-bold"
            href=""
            target="_blank"
            rel="noopener noreferrer"
          >
            dslv
          </a>
        </p>
      </footer>
    </div>
  );
};

export default Footer;
