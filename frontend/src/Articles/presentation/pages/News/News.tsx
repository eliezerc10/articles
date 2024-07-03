import './news.css'
import { useEffect, useState } from "react";
import { ArticleRepository } from "../../../infrastructure/repositories/ArticleRepository";
import { Article } from "../../../domain/entities/Article";
import { GetArticles } from "../../../use-cases/GetArticles";
import { ArticleComponent } from "../../components/article/Article";
import { Navbar } from '../../components/navbar/Navbar';
import Modal from '../../components/modal/Modal';
import ArticleForm from '../../components/ArticleFormComponent/ArticleFormComponent';

const articleRepository = new ArticleRepository();
const getArticles = new GetArticles(articleRepository);

export const News: React.FC = () => {
    const [articles, setArticles] = useState<Article[]>([]);

    useEffect(() => {
        getArticles.execute().then(setArticles);
    }, []);

    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleOpenModal = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    const handleSave = () => {
        setIsModalOpen(false);
    };

    return (
        <>
            <header>
                <Navbar openModal={handleOpenModal}></Navbar>
            </header>
            <main>
                <section className="news-container">
                    {articles.map((article, index) => <ArticleComponent key={index} article={article}></ArticleComponent>
                    )}
                </section>
                <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
                    <ArticleForm onSave={handleSave} />
                </Modal>
            </main>
        </>
    );
};