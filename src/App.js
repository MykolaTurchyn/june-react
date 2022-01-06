import Product from "./components/product/Product";
import './App.css';

export default function App() {
    return (
        <div>
            <Product title={'milk'} price={"20 uah"}/>
            <Product title={'juice'} price={"100 uah"}/>
            <Product title={'coffee'} price={"50 uah"}/>
        </div>
    );
}