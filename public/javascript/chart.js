window.addEventListener('load', async () => {
    async function getTeclados() {
        const response = await fetch('/teclados')
        return response.json();
    }

    async function getHeadset() {
        const response = await fetch('/headsets')
        return response.json();
    }

    async function getNotebooks() {
        const response = await fetch('/notebooks')
        return response.json();
    }

    async function getTelefones() {
        const response = await fetch('/telefones')
        return response.json();
    }

    async function getVideoGames() {
        const response = await fetch('/videoGames')
        return response.json();
    }

    async function getProducts() {
        const response = await fetch('/products')
        return response.json();
    }



    const teclados = await getTeclados();
    const headsets = await getHeadset();
    const notebooks = await getNotebooks();
    const telefones = await getTelefones();
    const videoGames = await getVideoGames();
    const products = await getProducts();
    google.charts.load("current", { packages: ["corechart"] });
    google.charts.setOnLoadCallback(drawChart);

    function drawChart() {
        const data = google.visualization.arrayToDataTable([
            ["Produto", 'estoque'],
            teclados,
            headsets,
            notebooks,
            telefones,
            videoGames
        ]);

        const options = {
            title: 'Categotias x itens',
            pieHole: 0.4,
        };

        const chart = new google.visualization.PieChart(document.getElementById('donutchart'));
        chart.draw(data, options);
    }


    anychart.onDocumentReady(function () {
        // create column chart
        var chart = anychart.column();
  
        // turn on chart animation
        chart.animation(true);
  
        // set chart title text settings
        chart.title('Produtos x Estoque');
  
        // create area series with passed data
        var series = chart.column(
            products
        );
  
        // set series tooltip settings
        series.tooltip().titleFormat('{%X}');
  
        series
          .tooltip()
          .position('center-top')
          .anchor('center-bottom')
          .offsetX(0)
          .offsetY(5)
          .format('{%Value}{groupsSeparator: }');
  
        // set scale minimum
        chart.yScale().minimum(0);
  
        // set yAxis labels formatter
        chart.yAxis().labels().format('{%Value}{groupsSeparator: }');
  
        // tooltips position and interactivity settings
        chart.tooltip().positionMode('point');
        chart.interactivity().hoverMode('by-x');
  
        // axes titles
        chart.xAxis().title('Produto');
        chart.yAxis().title('Estoque');
  
        // set container id for the chart
        chart.container('chart_div');
  
        // initiate chart drawing
        chart.draw();
      });
})