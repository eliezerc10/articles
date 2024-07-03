import './articleForm.css'
import { useState } from "react";
import { Article } from "../../../domain/entities/Article";
import { ArticleRepository } from "../../../infrastructure/repositories/ArticleRepository";
import { SaveArticle } from "../../../use-cases/SaveArticle";
import React from "react";

interface ArticleFormProps {
    onSave: (data: Article) => void;
}

const articleRepository = new ArticleRepository();
const saveArticle = new SaveArticle(articleRepository);


const ArticleForm: React.FC<ArticleFormProps> = ({ onSave }) => {

    const [formData, setFormData] = useState(new Article('', '', '', '', '', ''));
    const [errorMessage, setErrorMessage] = useState('');
    
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = event.target;
        console.log(name,)
        setFormData(prevFormData => ({
            ...prevFormData,
            [name]: value,
            isValid: formData.isValid
        } as Article));

    }


    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();

        try {
            if (formData.isValid()) {
                await saveArticle.execute(formData).then((res) =>
                    console.log(res)
                );
                
            } else {
                setErrorMessage('All fields must be filled');
            }

        } catch (error) {
            alert("Failed to save article");
        }
    };


    return (
        <>
            <h3>Insert new article</h3>
            <form onSubmit={handleSubmit}>
                <label>
                    Title:
                </label>
                    <input type="text" name="title" value={formData.title} onChange={handleInputChange} />
                
                <label>
                    Description:
                    <textarea name="description" value={formData.description} onChange={handleInputChange} />
                </label>
                
                <label>
                    Author:
                    <input type="text" name="author" value={formData.author} onChange={handleInputChange} />
                </label>
                
                <label>
                    URL:
                    <input type="text" name="url" onChange={handleInputChange} />
                </label>
                
                {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
                <div className="btn-box">
                    <button className="btn" type="submit">Submit</button>
                </div>
            </form>
        </>

    );
};

export default ArticleForm;