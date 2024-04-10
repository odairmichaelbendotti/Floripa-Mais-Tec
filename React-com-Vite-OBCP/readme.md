**Operador ternário**
 - condição ? expressão1 : expressão2;
   Condição: Uma expressão que é avaliada como verdadeira ou falsa.
   Expressão1: O resultado ou ação que será retornada ou executada se a condição for verdadeira.
   Expressão2: O resultado ou ação que será retornada ou executada se a condição for falsa.

    let preco = 100;
    let descontoAplicado = true;
    let precoFinal = descontoAplicado ? preco * 0.9 : preco;

 - Neste caso, o operador ternário verifica se descontoAplicado é verdadeiro. Se for, aplica-se um desconto de 10% ao preco (isto é, preco * 0.9), e o resultado é atribuído a precoFinal. Se  descontoAplicado for falso, então precoFinal é simplesmente igual ao preco original.

**O que é React**
 - Consiste numa biblioteca para criação de interfaces, web e nativa(mobile);
 - Interfaces contruídas por meio de pequenos blocos chamados de componentes;
 
 **Por que usar React e não JS?**
 - React é mais simples, JS é mai limitado para trabalhar com DOM;
 - React é mais produtivo pois o que seria feito em centenas de linhas de JS é feito com poucas linhas de React;
 - React é manutenível por conta da componentenização;
 - Não precisa gastar tanto tempo para renderizar elementos, eventos e coisas repetitivas;

 **O que é virtual DOM**
 - Quando se trabalha com iteratividade, faz-se necessário atualizar a interface com frequência, clicar num botão e abrir uma janela e etc. Com o virtual DOM, o react compara o DOM real com o DOM virtual e renderiza novamente todas as partes que mudaram;

 **Conhecendo o JSX**
 - É uma extensão da linguagem JavaScript que não é entendida pelo navegador, essa extensão precisa ser compilada pelo JS;
 - JSX é o formato usado pelo React para representar os elementos do DOM;

**O que são componentes**
 - Pedaços reutilizáveis de código;
 - Os componentes podem ser escritos uma única vez e reutilizados várias vezes;
 - Um componente é uma função JS, veja o exemplo abaixo:
    
    function PrimaryButton(){
        return <button>Meu Botão</button> 
    }

    function Container(){
        return (
            <div className="">
                <h1></h1>
                <p></p>
            </div>
        )
    }

**Sobre o Vite**
 - É uma biblioteca que auxilia com a construção da aplicação Web: compilação, empacotamento e etc.
    -- Possui integrado um servidor de desenvolvimento que trabalha com ESM para fornecer Hot Module Replacement (HMR)
    -- Possui um empacotador (Rollup) pré-configurado para gerar assets otimizados para produção.
 -  Criar um novo projeto com Vite: npm create vite@latest

**Formas de importação**
 - import { Subtitle } from './Subtitle';
    import { Subtitle } from './Subtitle'; é usado para importar exportações nomeadas de um módulo. No arquivo Subtitle.js (ou Subtitle.jsx, Subtitle.ts, etc.), o componente ou variável Subtitle deve ser exportado usando a sintaxe de exportação nomeada: export const Subtitle = ...;
 
 - import Title from './Title'
    import Title from './Title' é usado para importar a exportação padrão de um módulo. No arquivo Title.js (ou Title.jsx, Title.ts, etc.), o componente ou variável Title deve ser exportado usando a sintaxe de exportação padrão, como: export default Title;

**Props**
 - Props nos permite passar argumentos para os componentes criados. É como se fosse passar um parâmetro para uma função para que quando a reutilização seja feita, seja possível alterar os valores para não tornar todos os blocos iguais.

 **State/Estado**
  - Permite que tenhamos na tela informações que serão renderizadas e atualizadas dinamicamente de acordo com a mudança de valores no js.
  - Por exemplo: botão de follow, ao clicar vira following.
  - useState: [valor, funçãoModificadora]
    
    const [followText, setFollowText] = useState('Follow')
    function following (){
        setFollowText('Following')
    }

**Hooks**
 - 