
import FooterStyle from "../Scss/footer.module.scss"
const Footer = () => {
  return (
    <footer className={FooterStyle.footer}>
    <p className={FooterStyle.title}>
      Copyright by &copy;Salih {new Date().getFullYear()}
    </p>
  </footer>
  )
}

export default Footer