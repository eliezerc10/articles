import './article.css'
import { Article } from "../../../domain/entities/Article";
import { useCheckImage } from '../../../hooks/useCheckImage';
import fileNotFound from '../../../../assets/images/file-not-found.png'
import arrowRight from '../../../../assets/images/arrow-right.png'

interface ArticleComponentProps {
    article: Article;
}

export const ArticleComponent: React.FC<ArticleComponentProps> = ({ article }) => {

    const imageExists = useCheckImage(article.urlToImage);

    return (
        <>
            <article className='article'>
                {
                    imageExists ? (<img src={article.urlToImage} alt="" />) : <img src={fileNotFound} alt="" />
                }

                <div className='info'>
                    <div className='profile'>
                        <p>{article.author.substring(0, 2).toLocaleLowerCase()}</p>
                    </div>
                    <h4>{article.author}</h4>
                    <h3 className='title'>{article.title}</h3>
                    <p>{article.description}</p>
                </div>
                <div className='bottom-link'>
                    <a href={article.url} target='_blank' rel="noreferrer">See more... 
                        <i>
                            <img src={arrowRight} alt={article.title} />
                        </i>
                    </a>
                </div>
            </article>
        </>
    );
};