---
date: '2019-03-31'
title: 'La importancia del atributo Key en componentes secundarios de ReactJS'
author: woostbot
tags: ['reactjs']
---

Key es una atributo especial que debes incluir al crear listas de elementos que se crean dinámicamente, un ejemplo muy claro es cuando creamos componentes a partir de un array.

> Las keys ayudan a React a identificar que ítems han cambiado, son agregados, o son eliminados. Las keys deben ser incluidas a los elementos dentro del array para darle a los elementos una identidad estable.

```javascript
import React from 'react'

const FRUITS = [
  { id: 'fruit-1', name: 'banana' },
  { id: 'fruit-2', name: 'apple' },
  { id: 'fruit-3', name: 'orange' },
]

class Ejemplo extends React.Component {
  render() {
    return (
      {FRUITS.map(item => (
        <ul>
          <li key={item.id}>{item.name}</li>
        </ul>
      ))}
    )
  }
}
```

Podemos decir que no necesariamente se trata del rendimiento, si no más sobre la identidad que esto a su vez nos lleva a un mejor _rendimiento_.

---

### Qué sucede si no pasamos el atributo **key**

Si ejecutamos el siguiente código, serás advertido que el atributo `key` debería ser proporcionada para los ítems de lista _FRUITS_.

```javascript
import React from 'react'

const FRUITS = [
  { id: 'fruit-1', name: 'banana' },
  { id: 'fruit-2', name: 'apple' },
  { id: 'fruit-3', name: 'orange' },
]

class Ejemplo extends React.Component {
  render() {
    return (
      {FRUITS.map(item => (
        <ul>
          <li>{item.name}</li>
        </ul>
      ))}
    )
  }
}
```

### Dos ejemplos del Uso Incorrecto de Key

```javascript
class Ejemplo extends React.Component {
  render() {
    return (
      <>
        {FRUITS.map((item, index) => (
          <div>
            <div key={index}>{item.name}</div>
          </div>
        ))}
      </>
    )
  }
}
```

```javascript
class Ejemplo extends React.Component {
  render() {
    return (
      <>
        {FRUITS.map((item, index) => (
          <div>
            <div key={{Math.random()}}>{item.name}</div>
          </div>
        ))}
      </>
    )
  }
}
```

> Este es un tema básico que te ayudará mucho cuando estés empezando con ReactJs. Puedes saber más sobre el uso de este atributo en el siguiente [enlace](https://es.reactjs.org/docs/lists-and-keys.html#keys).
