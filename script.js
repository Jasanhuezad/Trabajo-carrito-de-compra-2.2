$.getJSON('https://mindicador.cl/api', function(data) {
    var dailyIndicators = data;
    $("<p/>", {
        html: 'El valor actual de la UF es $' + dailyIndicators.uf.valor
    }).appendTo("#indicators");
    $("<p/>", {
        html: 'El valor actual del dólar es $' + dailyIndicators.dolar.valor
    }).appendTo("#indicators");
    $("<p/>", {
        html: 'El valor actual del euro es $' + dailyIndicators.euro.valor
    }).appendTo("#indicators");
  }).fail(function() {
    console.log('Error al consumir la API!');
  });

function showView(viewId) {
    // Oculta todas las vistas
    var views = document.querySelectorAll('.view');
    views.forEach(function(view) {
        view.style.display = 'none';
    });

    // Muestra la vista seleccionada
    var selectedView = document.getElementById(viewId);
    if (selectedView) {
        selectedView.style.display = 'block';
    }
}

