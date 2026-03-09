export default function Bebidas() {

    const bebida1 = { nome: "Suco de laranja", preco: "R$ 5,00" };
    const bebida2 = { nome: "Refrigerante", preco: "R$ 3,00" };
    const bebida3 = { nome: "Água", preco: "R$ 2,00" };


        return (
            <ul>
                <li>{bebida1.nome} - {bebida1.preco}</li>
                <li>{bebida2.nome} - {bebida2.preco}</li>
                <li>{bebida3.nome} - {bebida3.preco}</li>
            
            </ul>
        );
    }
