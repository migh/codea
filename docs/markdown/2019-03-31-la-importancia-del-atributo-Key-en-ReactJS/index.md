---
date: '2019-03-31'
title: 'La importancia del atributo Key en ReactJS'
author: woostbot
tags: ['reactjs']
---

Una `key` es un atributo especial string que debes incluir al crear listas de elementos, más adelante tratare de mostrar con ejemplos sobre el uso de este especial atributo.

> Las keys ayudan a React a identificar que ítems han cambiado, son agregados, o son eliminados. Las keys deben ser incluidas a los elementos dentro del array para darle a los elementos una identidad estable, [leer más](https://es.reactjs.org/docs/lists-and-keys.html#keys).

La mejor forma de elegir una key es usando un string que identifique únicamente a un elemento de la lista entre sus hermanos.

Veamos un ejemplo sobre el uso del atributo, donde vamos a recorrer una lista(Array) de paises pasando como `key` el nombre de cada pais.

En la linea _10_ hacemos uso el atributo `key` asignandole el valor del nombre del pais que se esta guardando en la variable _item_ de la linea _9_

```javascript{9,10}{numberLines: true}
import React from 'react'

const COUNTRIES = ['México', 'Canada', 'Arguentina']

class Ejemplo extends React.Component {
  render() {
    return (
      <ul>
        {COUNTRIES.map(item => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    )
  }
}
```

Podriamos decir que el ejemplo anterior es una forma correcta del buen uso del atributo.

### ¿Qué sucede si no pasamos el atributo **key**?

Ejecutemos el siguiente ejemplo, veras que a simple vista todo parece ir bien, abriendo la consola del navegador, _Presiona Ctrl + Mayús + J (Windows o Linux) o Cmd + Opt + J (Mac)_, veras un `Warning` como el siguente.

`Warning: Each child in a list should have a unique "key" prop.`

Simplemete nos dice que coloquemos el atrbuto `key` a cada `<li>` que estamos creando aprtir de la lista de paises.

<iframe height="400px" width="100%" src="https://repl.it/@wootsbot/article-keys-error?lite=true" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>

> Podemos decir que no necesariamente se trata del rendimiento, si no más sobre la identidad.

Podras leer más afondo sobre el atributo `key` en el siguiente [enlace](https://es.reactjs.org/docs/lists-and-keys.html#keys).
