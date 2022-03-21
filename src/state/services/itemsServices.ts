import axios from 'axios';
import { MarketItem } from '../actions/MarketActionTypes';

export async function fetchItems(): Promise<MarketItem[]> {
    return await axios.get('https://my-json-server.typicode.com/AKhalil609/demo/items');
}
