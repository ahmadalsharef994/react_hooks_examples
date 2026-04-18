# React Hooks — Examples & Patterns

<p align="center">
  <img src="https://img.shields.io/badge/React-18+-blue?logo=react" alt="React">
  <img src="https://img.shields.io/badge/Hooks-useState%20%7C%20useEffect%20%7C%20useContext-purple" alt="Hooks">
  <img src="https://img.shields.io/badge/Vite-5.x-yellow?logo=vite" alt="Vite">
  <img src="https://img.shields.io/badge/license-MIT-blue" alt="License">
</p>

A collection of **practical React Hooks examples** covering all built-in hooks and common custom hook patterns. Hands-on reference for state management, side effects, context, and performance optimization.

---

## 🪝 Hooks Covered

| Hook | Example |
|------|---------|
| `useState` | Counter, form inputs, toggle |
| `useEffect` | Data fetching, subscriptions, cleanup |
| `useContext` | Theme provider, auth context |
| `useReducer` | Shopping cart, complex form state |
| `useCallback` | Memoizing event handlers |
| `useMemo` | Expensive computations |
| `useRef` | DOM access, previous value tracking |
| `useLayoutEffect` | DOM measurements |
| Custom Hooks | `useFetch`, `useLocalStorage`, `useDebounce` |

---

## 🚀 Quick Start

```bash
npm install
npm run dev
```

---

## 📌 Key Examples

### `useFetch` — Custom Data Fetching Hook
```jsx
function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(data => { setData(data); setLoading(false); });
  }, [url]);

  return { data, loading };
}
```

### `useReducer` — Cart Example
```jsx
function cartReducer(state, action) {
  switch (action.type) {
    case 'ADD': return [...state, action.item];
    case 'REMOVE': return state.filter(i => i.id !== action.id);
    default: return state;
  }
}
```

### `useCallback` + `useMemo`
```jsx
const filtered = useMemo(
  () => items.filter(i => i.active),
  [items]
);
const handleClick = useCallback((id) => remove(id), [remove]);
```

---

## 📄 License

MIT
