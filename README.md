# 🧮 React Counter with Custom Hook

Este proyecto es un contador básico en React utilizando TypeScript y un custom hook llamado `useCounter`. Está diseñado para ser fácilmente reutilizable y extendible.

## ✨ Características

- Incrementar y decrementar por valores personalizados.
- Reiniciar al valor inicial.
- Tipado estricto con TypeScript.
- Uso de Bootstrap para estilos rápidos y consistentes.
- Código modular con separación entre lógica (hook) y UI (componente).

---

## 📁 Estructura de archivos

```
src/
│
├── hooks/
│   └── useCounter.ts       # Hook personalizado con lógica del contador
│
├── components/
│   └── Counter.tsx         # Componente de interfaz que usa el hook
```

---

## 📦 Instalación

1. Clona el repositorio:

   ```bash
   git clone https://github.com/tuusuario/react-counter.git
   cd react-counter
   ```

2. Instala las dependencias:

   ```bash
   yarn install
   ```

3. Ejecuta la aplicación:
   ```bash
   yarn dev
   ```

---

## 🧠 Uso del hook `useCounter`

```ts
const { counter, handleIncrement, handleDecrement, handleReset } =
  useCounter(0);
```

- `handleIncrement(value: number)` → Incrementa el contador.
- `handleDecrement(value: number)` → Decrementa el contador.
- `handleReset()` → Reinicia el contador al valor inicial.

---

## 📌 Requisitos

- React 18+
- TypeScript
- Vite o Create React App
- Bootstrap (opcional, usado para los estilos)

---

## 📄 Licencia

MIT License © 2025 - [Lennin Ibarra]
