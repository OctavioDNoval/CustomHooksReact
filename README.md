# CustomHooksReact
A continuacion dejo un poco de informacion sobre los Hooks personalizados que estan en la carpeta y su uso

### **- useCounter**
Este hook nos permite importar un contador con funciones de incremento, reseteo y decremento a nuestro proyecto react bajo el formato

`const{counter, increment, reset, decrement}= useCounter()`

1. Si pasas un valor numerico por parametro al `useCounter(num)` el valor inicial del contador va a ser ese
2. Las funciones incrementar y decrementar pueden recibir por parametro la cantidad de decremento o aumento que van a recibir
3. La funcion `decrement(val=1,allowNegative=true)` recibe aparte el parametro para saber si el contador permite numeros negativos, si no se le pasa nada empieza en true

### **- useForm**

//explicar useForm

### **- useFetch**

Este hook permite realizar peticiones HTTP (`fetch`) en cualquier contexto. Retorna:

- **`data`**: Los datos de la respuesta.
- **`isLoading`**: Un booleano que indica si la petición está en curso.
- **`error`**: Errores en caso de fallo.
- **`fetchData`**: Función para ejecutar la petición.

---

### Ejemplo de uso

Ver `FetchApp.jsx`:

```jsx
const { data, isLoading, error, fetchData } = useFetch();
```

## ¿Cómo funciona?

La función `fetchData` recibe:

- **`url`**: Endpoint de la API.
- **`method`**: Método HTTP (`GET`, `POST`, `PUT`, `DELETE`).
- **`bodyData`**: Datos para enviar (opcional, por defecto `null`).

---

### Flujo interno

1. **Desestructuración de parámetros** en las opciones del `fetch` (`method`, `headers`, `body` en caso de `POST`, etc.).

2. **Ejecución del fetch**:

   ```js
   const response = await fetch(url, options);

### Actualización de estados

- **`data`**: Respuesta del servidor.
- **`isLoading`**: `false` (petición finalizada).
- **`error`**: `null` (si no hay errores).

---

### Manejo de errores

Si la petición falla:

- `data` se setea a `null`
- `isLoading` a `false`
- `error` contiene el mensaje del error

  

### Autor

**Octavio Noval** – [@OctavioDNoval](https://github.com/OctavioDNoval)
