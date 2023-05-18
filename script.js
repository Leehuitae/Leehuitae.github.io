// 경제성장률 데이터를 받아오고 표시하는 함수
function displayEconomyGrowth(data) {
  var container = document.getElementById("economy-growth");
  container.innerHTML = "경제성장률: " + data; // 데이터를 화면에 표시하는 방식에 따라 적절히 수정
}

// 알파 밴티지 API를 통해 경제성장률 데이터를 가져오는 함수
function fetchEconomyGrowth() {
  var apiKey = "4BX4ZFL6WMZMK72U"; // 알파 밴티지 API 키
  var url = "https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=MSFT&apikey=" + apiKey;

  fetch(url)
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      // 경제성장률 데이터를 추출하여 처리
      var growthRate = data["Time Series (Daily)"]["2023-05-18"]["4. close"]; // 적절한 경제성장률 데이터 추출 방식으로 수정
      displayEconomyGrowth(growthRate);
    })
    .catch(function(error) {
      console.log("Error:", error);
    });
}

// 페이지 로드 시 경제성장률 데이터를 가져오도록 호출
fetchEconomyGrowth();
