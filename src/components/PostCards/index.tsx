/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import styles from './styles.module.scss';

interface PostCardProps {
  title: string;
  postImgURL: string;
  userName: string;
  userImgURL: string;
  link: string;
}

export function PostCard(props: PostCardProps) {
  return (
    <div className={styles.cardsContainer}>
      <Link href={props.link}>
        <a>
          <img src={props.postImgURL} alt={props.title} />
          <div>
            <h3>{props.title}</h3>
            <div>
              <img src={props.userImgURL} alt={props.userName} />
              <span>{props.userName}</span>
            </div>
          </div>
        </a>
      </Link>
    </div>
  )
}