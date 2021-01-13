import classes from './Home.module.scss'
import photo from '../../assets/raton.jpeg'; 
import LocationIcon from '../../assets/icons/LocationIcon';
import { SocialIcon } from '../../Components/SocialIcon/SocialIcon';
import { socialLinks } from '../../Utils/Constants';

function Home() {
    const renderIcons = () => {
        return socialLinks.map(cur => {
           return <SocialIcon key={cur.id} icon={cur.icon} backColor={cur.backColor} iconColor={cur.iconColor} link={cur.link} />
        })
    }
    return (
        <div className={classes.container}>
            <header className={classes.headerContainer}>
                <div className={classes.infoConatiner}>
                    <img src={photo} alt='thumb' className={classes.photo}/>
                    <p className={classes.name}>Raton Biswas</p>
                    <div style={{display:'flex', alignItems:'center', marginBottom:'20px'}}>
                        <LocationIcon height={14} width={14} fill='#EE4047' />
                        <p className={classes.locationInfo}>Shukrabad, Dhaka, Bangladesh</p>
                    </div>
                </div>
                <p className={classes.headerTxt}>Taking ideas <span className={classes.headerSpan}>Giving them life</span></p>
            </header>
            <div className={classes.infos}>
                <p style={{textAlign:'center'}}>
                Hi! I'm Raton a passionate software engineer and welcome to my personal website. I'm currently looking for new opportunity,
                Feel free to look around, or just say hi if you want to reach out.I develop web applications.
                My basic skill is based on JavaScript, Nodejs, Expressjs, mongoDb and I love to do most of the things using JavaScript.
                I love to make the web more open to the world.I'm currently learning React.
                I am currently pursuing my bachelor's degree at Daffodil International University.
                </p>
            </div>
            <footer className={classes.footerContainer}>
                <div style={{display:'flex' , justifyContent:'center' , marginBottom:'1rem'}}>
                {renderIcons()}
               </div>
               
                <p style={{fontSize:'0.7rem', textAlign:'center'}}>If you don't trust links (you should never 😉), my email is raton.biswas005@gmail.com</p>
            </footer>

        </div>
    )
}

export default Home
