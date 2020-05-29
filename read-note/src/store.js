import {writable} from "svelte/store";
import Cookies from "js-cookie";

// 上次的卡片列表
let lastCards = JSON.parse(Cookies.get('cards') || '[]') ;

export const cards = writable(lastCards);