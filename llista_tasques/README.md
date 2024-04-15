# Exercici React: Llistat de tasques

## Objectiu

- Crear una llista de tasques amb un formulari per afegir-ne.
- Cada tasca es podrà eliminar o modificar el seu estat a completada.

## Descripció components

**- Component LlistatTasques**
  - Crea el component general que contindrà el llistat de tasques. Inicialment només ha de tenir un títol.

**- Component Tasca:**
  - Crea el component Tasca. Inicialment ha de tenir un text i un botó per eliminar-les
  - Fes que el botó per eliminar sigui un React icon.
  - Fes que tingui una nova prop que sigui completada (boolean)
    - completada = true → className = tascaCompletada → css = background i text tatxat (text-decoration: line-throught)

**- Component FormulariTasques:**
  - Ha de tenir un input i un botó.