
type Language = {
  language: string;
}
type Theme = {
  theme: string;
}

export function setLanguage(payload: Language) {
    return {
        type: 'SET_LANGUAGE',
        payload 
    }
}

export function toggleTheme(payload: Theme) {
    return {
        type: 'TOGGLE_THEME',
        payload,
    }
}