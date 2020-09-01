export const removeRequestId = (requestId) => {
    const requests = localStorage.getItem('requests')
      ? JSON.parse(localStorage.getItem('requests'))
      : null;
  
    if (!requests) {
      return false;
    }