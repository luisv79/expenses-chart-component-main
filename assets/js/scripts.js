const chart = document.getElementById("chart");

async function loadData() {
  try {
    const response = await fetch("data.json");
    const data = await response.json();

    renderChart(data);
  } catch (error) {
    console.error("Error loading data:", error);
  }
}

function renderChart(data) {
  const max = Math.max(...data.map(d => d.amount));

  data.forEach(d => {
    const container = document.createElement("div");
    container.classList.add("bar-container");

    const bar = document.createElement("div");
    bar.classList.add("bar");

    // destacar el mayor
    if (d.amount === max) {
      bar.classList.add("active");
    }

    bar.style.height = `${(d.amount / max) * 150}px`;

    const tooltip = document.createElement("div");
    tooltip.classList.add("tooltip");
    tooltip.textContent = `$${d.amount}`;

    const label = document.createElement("div");
    label.classList.add("label");
    label.textContent = d.day;

    container.appendChild(tooltip);
    container.appendChild(bar);
    container.appendChild(label);

    chart.appendChild(container);
  });
}

loadData();