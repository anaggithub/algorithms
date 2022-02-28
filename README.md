# algorithms practice by hadita ♥

Este es un repo donde voy guardando algoritmos que practico.
La mayoría son algoritmos aprendidos gracias al curso de Front End Masters: https://frontendmasters.com/courses/practical-algorithms/, el cual estamos estudiando en nuestro grupo JS ADV de Front End Café.

## Cómo cree el proyecto
Seguí como referencia este video de YouTube: https://www.youtube.com/watch?v=I27ZJU2_-Og
Cree un repo de github vacío, lo cloné y luego corrí el comando: "npm init".

Luego para implementar jest y poder hacer los tests seguí los siguientes pasos:

1) npm install -D jest
2) npx jest --init
3) usarlo cuando se corre test script? si, agrega la linea   "test": "jest" en el package.json.
4) usar typescript? no
5) entorno? node, ya que no son tests del DOM.
6) reportes de coverage? si v8
7) clear mocks? si

Luego para correr los tests uso el comando "npm test".

### Uso de modules
Al no usar Babel no puede entender la sintaxis de import/export y por lo tanto estoy usando "modules.export" y "require".
