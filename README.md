# CustomHooksReact

A continuacion dejo un poco de informacion sobre los Hooks personalizados que estan en la carpeta y su uso

### **- useCounter**
Este hook nos permite importar un contador con funciones de incremento, reseteo y decremento a nuestro proyecto react bajo el formato

`const{counter, increment, reset, decrement}= useCounter()`

1. Si pasas un valor numerico por parametro al `useCounter(num)` el valor inicial del contador va a ser ese
2. Las funciones incrementar y decrementar pueden recibir por parametro la cantidad de decremento o aumento que van a recibir
3. La funcion `decrement(val=1,allowNegative=true)` recibe aparte el parametro para saber si el contador permite numeros negativos, si no se le pasa nada empieza en true
