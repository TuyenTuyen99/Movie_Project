const Logout = () => {
  localStorage.setItem('x-access-token',"");
  setTimeout(() => {
    document.location.reload();
  }, 3000);
};

export default Logout;
