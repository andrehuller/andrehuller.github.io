const NormalDistribution = {
  template: `
    <v-container fluid>
      <v-row>
        <v-col cols="12" lg="12">
          <v-card>
            <v-container fluid>
              <v-row>
                <v-col cols="12">
                  <canvas id="normalChart" width="900" height="450"></canvas>
                </v-col>
              <v-row>
            </v-container>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  `,
  mounted () {
    /* -----------------------------
      INPUT DATA
    ------------------------------ */
    const labels = Array.from({ length: 10 }, (_, i) => i + 1);
    const observed = [41, 71, 80, 125, 153, 219, 359, 405, 395, 297];

    /* -----------------------------
      BASIC STATISTICS
    ------------------------------ */
    const N = observed.reduce((a, b) => a + b, 0);

    // weighted mean
    const mean = labels.reduce(
      (sum, x, i) => sum + x * observed[i], 0
    ) / N;

    // weighted variance
    const variance = labels.reduce(
      (sum, x, i) => sum + observed[i] * Math.pow(x - mean, 2), 0
    ) / N;

    const sigma = Math.sqrt(variance);

    /* -----------------------------
      NORMAL DISTRIBUTION HELPERS
    ------------------------------ */
    // Error function approximation
    function erf(x) {
      const sign = x >= 0 ? 1 : -1;
      x = Math.abs(x);

      const a1 = 0.254829592;
      const a2 = -0.284496736;
      const a3 = 1.421413741;
      const a4 = -1.453152027;
      const a5 = 1.061405429;
      const p = 0.3275911;

      const t = 1 / (1 + p * x);
      const y =
        1 -
        (((((a5 * t + a4) * t + a3) * t + a2) * t + a1) * t) *
          Math.exp(-x * x);

      return sign * y;
    }

    function normalCDF(z) {
      return 0.5 * (1 + erf(z / Math.sqrt(2)));
    }

    /* -----------------------------
      EXPECTED FREQUENCIES
      (bin width = 1, edges at x ± 0.5)
    ------------------------------ */
    const expected = labels.map(x => {
      const a = (x - 0.5 - mean) / sigma;
      const b = (x + 0.5 - mean) / sigma;
      return (normalCDF(b) - normalCDF(a)) * N;
    });

    /* -----------------------------
      CHART.JS CONFIG
    ------------------------------ */
    const ctx = document.getElementById("normalChart");

    new Chart(ctx, {
      type: "bar",
      data: {
        labels,
        datasets: [
          {
            label: "Observed Frequencies",
            data: observed,
            borderWidth: 1
          },
          {
            label: "Expected (Normal Fit)",
            data: expected,
            type: "line",
            tension: 0.25,
            borderWidth: 3,
            pointRadius: 4
          }
        ]
      },
      options: {
        responsive: true,
        plugins: {
          title: {
            display: true,
            text: "Observed Frequencies vs. Expected Normal Distribution"
          },
          subtitle: {
            display: true,
            text: `Mean = ${mean.toFixed(2)}, σ = ${sigma.toFixed(2)}`
          },
          legend: {
            position: "top"
          }
        },
        scales: {
          x: {
            title: {
              display: true,
              text: "Bin (x)"
            }
          },
          y: {
            title: {
              display: true,
              text: "Count"
            },
            beginAtZero: true
          }
        }
      }
    });
  }
}
