export async function loadUsers() {
    const res = await fetch("users.json");
    return await res.json();
  }
  
  export function isValidEmailFormat(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email.trim());
  }
  
  export async function authenticateUser(email, password) {
    const users = await loadUsers();
    const trimmedEmail = email.trim().toLowerCase();
    const trimmedPassword = password.trim();
  
    if (!isValidEmailFormat(trimmedEmail) || !trimmedPassword) return false;
    return users[trimmedEmail] === trimmedPassword;
  }
  