/* eslint-disable @next/next/no-img-element */
import Head from 'next/head'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import {FaSearch} from 'react-icons/fa'

import recipeBroccoli from "../../public/images/comida_1.svg";
import recipeBurgers from "../../public/images/comida_2.svg";
import recipePotato from "../../public/images/comida_3.svg";
import recipeCherry from "../../public/images/comida_4.svg";

import quickStart from "../../public/images/blog_image_1.svg"
import quickStart2 from "../../public/images/bloco_image_2.svg"
import quickStart3 from "../../public/images/bloco_image_3.svg"
import quickStart4 from "../../public/images/bloco_image_4.svg"

import { ProductCard } from '../components/OurProducts'

import styles from './home.module.scss'
import { PostCard } from '../components/PostCards';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';

export default function Home() {
    const contents = {
    desktop: {
      breakpoint: {
        max: 3000,
        min: 1024
      },
      items: 3,
      partialVisibilityGutter: 40
    },
    mobile: {
      breakpoint: {
        max: 650,
        min: 0
      },
      items: 1,
      partialVisibilityGutter: 30
    },
    tablet: {
      breakpoint: {
        max: 1024,
        min: 650
      },
      items: 2,
      partialVisibilityGutter: 30
    }
  }

  const ourPosts = [{
    title: 'Quick-start guide to nuts and seeds',
    postImg: quickStart,
    userName: 'Kevin Ibrahim',
    userImg: quickStart
  },
  {
    title: 'Nutrution: Tips for Improving Your Health',
    postImg: quickStart2,
    userName: 'Mike Jackson',
    userImg: quickStart
  },
  {
    title: 'The top 10 benefits of eating healthy',
    postImg: quickStart3,
    userName: 'Bryan McGregor',
    userImg: quickStart
  },
  {
    title: 'What Makes a Healthy Diet?',
    postImg: quickStart4,
    userName: 'Jashua',
    userImg: quickStart
  }];

  const bestRecipes = [{
    title: 'Broccoli Salad with Bacon',
    img: recipeBroccoli
  },
  {
    title: 'Classic Beef Burgers',
    img: recipeBurgers
  },
  {
    title: 'Classic Potato Salad',
    img: recipePotato
  },
  {
    title: 'Cherry Cobbler on the Grill',
    img: recipeCherry
  }];

  return (
    <>
      <Head>
        <title>Home | Healthy Food</title>
      </Head>
      <Header />
      <main className={styles.contentContainer}>
        <section className={styles.contentIntroduction}>
          <img className={styles.imageIllustration} src='/images/illustration.svg' alt="Imagem illustrativa introdução" />
          <div className={styles.content}>
            <h1>
              Ready for <br />
              Trying a new <br />
              recipe?
            </h1>
            <div>
              <input type="text" placeholder="Search healthy recives" />
              <button type="button">
                <FaSearch />
              </button>
            </div>
          </div>
        </section>

        <section className={styles.recipesContent}>
          <div className={styles.content}>
            <h2>Our Best Recipes</h2>
            <p>
              Far far away, behind the word mountains, far from the countries <br />
              Vakalia and Consonantia, there live blind texts.
            </p>
            <div>
              {bestRecipes.map(bestRecipe => (
                <ProductCard
                  key={bestRecipe.title}
                  title={bestRecipe.title}
                  imgURL={bestRecipe.img.src}
                  link="/"
                />
              ))}
            </div>
          </div>
        </section>

        <section className={styles.servicesContainer}>
          <img src="images/bloco_services.svg" alt="Imagem illustrativa de culinária" />
          <div className={styles.servicesContent}>
            <div>
              <h2>The best services ready <br />
                To serve you</h2>
              <p>
                Far far away, behind the word mountains,  far from the countries Vokalia and Consonantia, there live the blind texts.
              </p>
              <p>
                Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.
              </p>
              <p>
                A small river named Duden flows by their place and supplies it with the necessary regelialia.
              </p>
              <button>
                Know More
              </button>
            </div>
          </div>
        </section>

        <section className={styles.cardsContainer}>
          <div className={styles.content}>
            <h2>Read Our Blog</h2>
            <p>Far far away, behind the word mountains,  far from the countries <br />
              Vokalia and Consonantia, there live the blind texts.</p>
            <div className={styles.whiteShadow}></div>
            <Carousel
              additionalTransfrom={0}
              arrows
              autoPlaySpeed={3000}
              centerMode={false}
              className=""
              containerClass="container"
              dotListClass=""
              draggable
              focusOnSelect={false}
              infinite={false}
              itemClass=""
              keyBoardControl
              minimumTouchDrag={80}
              partialVisible
              renderButtonGroupOutside={false}
              renderDotsOutside={false}
              responsive={contents}
              showDots={false}
              sliderClass=""
              slidesToSlide={1}
              swipeable
            >
              {ourPosts.map(post => (
                <PostCard
                  key={post.title}
                  title={post.title}
                  postImgURL={post.postImg.src}
                  userName={post.userName}
                  userImgURL={post.userImg.src}
                  link="/"
                />
              ))}
            </Carousel>
          </div>
        </section>

        <section className={styles.clientContainer}>
          <div className={styles.content}>
            <div>
              <h2>Join our membership <br />
                to get special offer</h2>
              <div className={styles.contentbutton}>
                <input type="email" placeholder="Enter your email address" />
                <button>Join</button>
              </div>
            </div>
          </div>
          <img src="images/bloco_final_image.svg" alt="Imagem illustrativa do cliente" />
        </section>

        <Footer/>
      </main>
    </>
  )
}
