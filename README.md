# BlueDnd

**BlueDnd** é uma biblioteca JavaScript para facilitar a implementação de funcionalidades de arrastar e soltar em aplicações React.

## Instalação

Para utilizar o **BlueDnd** em seu projeto, você pode instalá-lo via npm ou yarn:

```bash
npm install bluednd
ou
yarn add bluednd
```

Como Usar

## Componente Draggable

O componente `Draggable` permite que você torne elementos arrastáveis dentro da sua aplicação React. Ele pode ser usado da seguinte maneira:

```jsx
import { Draggable } from "bluednd";

function ElementoArrastavel() {
  return (
    <Draggable>
      <div>Arraste este elemento</div>
    </Draggable>
  );
}
export default App;
```

## Componente DropableArea

O componente `DropableArea` define uma área onde os elementos podem ser soltos após serem arrastados. Ele pode ser utilizado assim:

```jsx
import { DropableArea } from "bluednd";

function AreaSoltavel() {
  function handleDrop(e) {
    // Manipular a ação de soltar elemento aqui
  }

  function handleDragOver(e) {
    e.preventDefault();
    // Manipular a ação de estar arrastando sobre a área aqui
  }

  return (
    <DropableArea onDrop={handleDrop} onDragOver={handleDragOver}>
      <div>Área de Soltar</div>
    </DropableArea>
  );
}

export default App;
```

## Props

Componente `Draggable`

**onDrag:** Função de callback chamada quando o elemento arrastável é arrastado. (opcional)

**onDragEnd:** Função de callback chamada quando a operação de arrastar e soltar é concluída. (opcional)

Componente `DropableArea`

**onDrop:** Função de callback chamada quando o elemento arrastável solto sobre um elemento dropavel. (opcional)

**onDragEnter:** Função de callback chamada quando o elemento arrastável entra em outro elemento ao ser arrastado. (opcional)

**onDragOver:** Função de callback chamada quando o elemento arrastável está sendo arrastado
sobre outro elemento. (opcional)

**onDragLeave:** Função de callback quando um elemento arrastado deixa a área de destino na qual estava sendo arrastado. (opcional)
