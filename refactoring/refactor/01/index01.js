import INVOICE from "./invoices.js";
import PLAYS from "./plays.js";

function statement(invoice, plays) {
  let totalAmount = 0;
  let volumeCredits = 0;
  let result = `청구 내역(고객명: ${invoice.customer})\n`;

  const format = new Intl.NumberFormat("en-us", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
  }).format;

  for (let perf of invoice.performances) {
    let thisAmount = amountFor(perf, playFor(perf));

    // 포인트 적립
    volumeCredits += Math.max(perf.audience - 30, 0);
    // 희극 관객 5명마다 추가 포인트 제공
    if ("comedy" === play.type) volumeCredits += Math.floor(perf.audience / 5);

    // 청구 내역 출력
    result += `${playFor(perf).name}: ${format(thisAmount / 100)} (${
      perf.audience
    }석)`;
    totalAmount = thisAmount;
  }

  result += `총액: ${format(totalAmount / 100)}`;
  result += `적립 포인트: ${volumeCredits}점`;
  return result;
}

function amountFor(aPerformance, play) {
  let result = 0;

  switch (play.type) {
    case "tragedy":
      result = 40000;
      if (aPerformance.audience > 30) {
        result += 1000 * (aPerformance.audience - 30);
      }
      break;

    case "comedy": // 희극
      result = 30000;
      if (aPerformance.audience > 20) {
        result += 10000 + 500 * (aPerformance.audience - 20);
      }
      result += 300 * aPerformance.audience;
      break;

    default:
      throw new Error(`알 수 없는 장르: ${play.type}`);
  }
}

function playFor(aPerformance) {
  return plays[aPerformance.playId];
}

statement(INVOICE[0], PLAYS);
