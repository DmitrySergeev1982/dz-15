export class Storage {
  constructor() {}
  
    set(key, value) {
      let newValue = value;
  
      if (typeof newValue === 'object') {
        newValue = JSON.stringify(newValue);
        
      }
  
      localStorage.setItem(key, newValue);
    }
  
    get(key) {
      const value = localStorage.getItem(key);
        
      try {
        return JSON.parse(value);
      } catch {
        return value;
      }
  
    }
  
    clearAll() {
      const isConfirm = confirm('Вы точно хотите очистить localStorage?');
  
      if (isConfirm) {
        localStorage.clear();
      }
    }
}

const storage = new Storage()

export {storage}



