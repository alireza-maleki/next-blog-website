import classes from './hero.module.css';
import Image from 'next/image';

function Hero() {
    return (
        <section className={classes.hero}>
            <div className={classes.image}>
                <Image 
                    src="/images/site/pista.jpg" 
                    alt="An image showing writer" 
                    width={300} 
                    height={300} 
                />
            </div>
            <h1>Hi, I am Pista Academy</h1>
            <p>
                I write about web development - frontend frameworks like React
            </p>
        </section>
    )
}

export default Hero