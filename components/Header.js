import Image from 'next/image'
import khaoxinLogo from "../public/assets/mock-logo.png"
import headerStyles from "../styles/Header.module.scss"
import { socialList } from "../database/icon"

function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light fixed-top bg-transparent pt-3 ">
      <div className="container-fluid">
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">About us</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Menu</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Locations</a>
            </li>
          </ul>
        </div>
        <div className={headerStyles.brandLogo}>
          <Image width={50} height={50} src={khaoxinLogo} alt="khaoxin-logo" />
        </div>
        <div className={headerStyles.socialWrapper}>
          {socialList.map((socialLogo, index) => {
            return <Image key={index} width={20} height={20} src={socialLogo.image} alt={`${socialLogo.name}-logo`} />
          })}
        </div>
      </div>
    </nav>
  )
}

export default Header