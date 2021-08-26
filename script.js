if ('serviceWorker' in navigator) {
  window.addEventListener('load', function() {
    navigator.serviceWorker.register('./sw.js').then(function(registration) {
      // Registration was successful
      console.log('O registro do ServiceWorker foi bem-sucedido com o escopo: ', registration.scope);
    }, function(err) {
      // registration failed :(
      console.log('Falha no registro do ServiceWorker: ', err);
    });
  });
}