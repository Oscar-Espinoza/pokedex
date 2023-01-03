import './style.css';
import { postLike, getLikes, postComment, getCommets } from './involvementApi';
import pokeFetch from './modules/pokeFetch'



document.addEventListener('DOMContentLoaded', pokeFetch());