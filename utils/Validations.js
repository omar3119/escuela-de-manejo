export const REGEX = {
    nombre:     /^[a-zA-ZÀ-ÿ\s]{3,50}$/,
    email:      /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/,
    telefono:   /^\+?[\d\s\-\(\)]{7,15}$/,
    password:   /^(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/,
    soloLetras: /^[a-zA-ZÀ-ÿ\s]+$/,
  };