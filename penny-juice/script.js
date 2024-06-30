<script>
  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', (event) => {
      event.preventDefault(); // Prevent the default link behavior
      window.scrollTo({
        top: 0,
        behavior: 'smooth' // Smooth scrolling
      });
    });
  });
</script>